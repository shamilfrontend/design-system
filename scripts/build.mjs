import { rm } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const tsBuildInfoFile = join(
  rootDir,
  'node_modules/.cache/tsconfig.build.tsbuildinfo'
);

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: rootDir,
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

await Promise.all([
  rm(join(rootDir, 'dist'), { recursive: true, force: true }),
  rm(tsBuildInfoFile, { force: true })
]);

await Promise.all([
  run('yarn', ['vite', 'build']),
  run('node', ['scripts/compile-styles.mjs']),
  run('node', ['scripts/compile-dts.mjs'])
]);
