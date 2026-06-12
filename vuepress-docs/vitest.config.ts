import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['docs/.vuepress/**/*.test.ts']
  }
});
