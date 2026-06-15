import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/design-system/',
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
  plugins: [vue()],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/components/index.ts'),
      name: 'DesignSystem'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      treeshake: true,
      output: [
        {
          format: 'umd',
          name: 'DesignSystem',
          // Provide global variables to use in the UMD build
          // for externalized deps
          exports: 'named',
          globals: { vue: 'Vue' }
        },
        {
          format: 'es',
          entryFileNames: '[name].js',
          preserveModules: true
        }
      ],
      plugins: [
        copy({
          targets: [
            {
              src: [
                'src/fonts/Urbanist-Bold.woff2',
                'src/fonts/Urbanist-ExtraBold.woff2',
                'src/fonts/Urbanist-Medium.woff2',
                'src/fonts/Urbanist-Regular.woff2'
              ],
              dest: 'dist/fonts'
            },
            {
              src: 'src/icons/qicon.woff',
              dest: 'dist/icons'
            },
            {
              src: 'src/assets',
              dest: 'dist'
            }
          ],
          verbose: true,
          hook: 'closeBundle'
        })
      ]
    }
  }
});
