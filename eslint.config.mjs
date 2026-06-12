import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vueParser from 'vue-eslint-parser';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'storybook-static/**',
      'node_modules/**',
      'coverage/**',
      'vuepress-docs/**',
      '.storybook/**'
    ]
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        process: 'readonly'
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      import: importPlugin
    },
    rules: {
      'func-names': 'off',
      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: false,
          allowTaggedTemplates: false
        }
      ],
      'prefer-destructuring': ['error', { array: false }],
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object'
          ],
          pathGroups: [
            { pattern: '@/**', group: 'internal', position: 'before' },
            { pattern: '#/**', group: 'internal', position: 'before' }
          ],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      'vue/block-order': [
        'error',
        { order: ['script', 'template', 'style'] }
      ],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/max-attributes-per-line': 'warn',
      'vue/html-closing-bracket-newline': 'warn',
      'vue/html-indent': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: ['.vue']
      }
    }
  },
  {
    files: ['stories/**/*'],
    rules: {
      'no-console': 'off'
    }
  },
  eslintConfigPrettier
);
