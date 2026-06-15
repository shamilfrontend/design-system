import { access, cp, rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(rootDir, 'dist');
const targetDir = join(
  rootDir,
  'vuepress-docs/docs/.vuepress/public/design-system'
);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

function run(command, args, cwd = rootDir) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: 'inherit',
      shell: process.platform === 'win32'
    });

    child.on('error', reject);
    child.on('close', code => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`${command} ${args.join(' ')} exited with code ${code}`));
    });
  });
}

async function ensureDistBuilt() {
  if (await exists(join(distDir, 'design-system.umd.js'))) {
    return;
  }

  console.log('[prepare-docs-demos] dist not found, running yarn build...');
  await run('yarn', ['build']);
}

async function copyDistToPublic() {
  await rm(targetDir, { recursive: true, force: true });
  await cp(distDir, targetDir, { recursive: true });
  console.log(`[prepare-docs-demos] copied dist → ${targetDir}`);
}

await ensureDistBuilt();
await copyDistToPublic();
