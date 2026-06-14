import path from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/vue3-vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const storybookBase = process.env.STORYBOOK_BASE ?? '/';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta'
    }
  },
  async viteFinal(viteConfig) {
    viteConfig.plugins = viteConfig.plugins?.filter(
      plugin =>
        plugin &&
        typeof plugin === 'object' &&
        'name' in plugin &&
        plugin.name !== 'vite-plugin-dts'
    );

    viteConfig.resolve = viteConfig.resolve ?? {};
    viteConfig.resolve.alias = [
      { find: '@', replacement: path.resolve(dirname, '../src') },
      { find: '#', replacement: path.resolve(dirname, '../types') }
    ];

    viteConfig.build = {
      ...viteConfig.build,
      lib: undefined,
      rollupOptions: undefined
    };

    viteConfig.base = storybookBase.endsWith('/')
      ? storybookBase
      : `${storybookBase}/`;

    return viteConfig;
  }
};

export default config;
