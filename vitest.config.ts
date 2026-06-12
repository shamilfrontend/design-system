import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [vue()],
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, 'src')}/$1`
      },
      // #/xxxx => types/xxxx
      {
        find: /^#\/(.+)/,
        replacement: `${resolve(__dirname, 'types')}/$1`
      }
    ]
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reportsDirectory: `${resolve(__dirname, 'tests/unit/coverage')}`
    }
  }
}));
