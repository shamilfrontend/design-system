import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as sass from 'sass-embedded';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(rootDir, 'src');
const distDir = join(rootDir, 'dist');

const sassOptions = {
  loadPaths: [srcDir],
  style: 'expanded'
};

async function parseComponentEntries() {
  const componentsScss = await readFile(join(srcDir, 'components.scss'), 'utf8');

  return [...componentsScss.matchAll(/@use\s+'\.\/(.+)';/g)].map(([, importPath]) => ({
    input: join(srcDir, `${importPath}.scss`),
    output: join(distDir, 'css', `${basename(importPath)}.css`)
  }));
}

async function compileEntry(compiler, input, output) {
  const result = await compiler.compileAsync(input, sassOptions);

  await mkdir(dirname(output), { recursive: true });
  await writeFile(output, result.css);
}

async function compileStyles() {
  const compiler = await sass.initAsyncCompiler();

  try {
    const entries = [
      {
        input: join(srcDir, 'main.scss'),
        output: join(distDir, 'css', 'main.css')
      },
      {
        input: join(srcDir, 'fonts/fonts.scss'),
        output: join(distDir, 'fonts/fonts.css')
      },
      {
        input: join(srcDir, 'icons/icons.scss'),
        output: join(distDir, 'icons/icons.css')
      },
      ...(await parseComponentEntries())
    ];

    await Promise.all(
      entries.map(entry => compileEntry(compiler, entry.input, entry.output))
    );

    const bundle = await compiler.compileAsync(join(srcDir, 'styles.scss'), sassOptions);
    await writeFile(join(distDir, 'design-system.css'), bundle.css);
  } finally {
    await compiler.dispose();
  }
}

compileStyles().catch(error => {
  console.error(error);
  process.exit(1);
});
