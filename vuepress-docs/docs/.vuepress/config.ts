import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { path } from '@vuepress/utils';
import { visualizer } from 'rollup-plugin-visualizer';

const configDir = path.resolve(process.cwd(), 'docs/.vuepress');
const isAnalyze = process.env.ANALYZE === 'true';

export default defineUserConfig({
  base: '/',
  lang: 'ru-RU',
  title: 'Design System',
  description:
    'Vue 3 дизайн-система с TypeScript, Composition API и 30+ компонентов',
  head: [['link', { rel: 'icon', href: '/qui-logo.svg' }]],

  bundler: viteBundler({
    viteOptions: {
      build: {
        cssMinify: 'esbuild',
        rollupOptions: {
          plugins: isAnalyze
            ? [
                visualizer({
                  filename: path.resolve(
                    configDir,
                    'dist/stats.html'
                  ),
                  gzipSize: true,
                  open: false
                })
              ]
            : []
        }
      }
    }
  }),

  alias: {
    '@theme/Home.vue': path.resolve(configDir, 'components/CustomHome.vue')
  },

  theme: defaultTheme({
    logo: './qui-logo.svg',
    navbar: [
      {
        text: 'Гайд',
        link: '/guide/getting-started.html'
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          '/components/Layout.md',
          '/components/QButton.md',
          '/components/QBreadcrumbs.md',
          '/components/QCascader.md',
          '/components/QCheckbox.md',
          '/components/QCheckboxGroup.md',
          '/components/QCollapse.md',
          '/components/QColorpicker.md',
          '/components/QContextMenu.md',
          '/components/QDatepicker.md',
          '/components/QInputNumber.md',
          '/components/QForm.md',
          '/components/QInput.md',
          '/components/QPagination.md',
          '/components/QPopover.md',
          '/components/QRadio.md',
          '/components/QScrollbar.md',
          '/components/QSelect.md',
          '/components/QSlider.md',
          '/components/QSwitch.md',
          '/components/QTabs.md',
          '/components/QTag.md',
          '/components/QTextarea.md',
          '/components/QUpload.md'
        ]
      },
      {
        text: 'Storybook',
        link: 'https://github.com/shamilfrontend/design-system'
      },
      {
        text: 'Github',
        link: 'https://github.com/shamilfrontend/design-system'
      }
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          children: [
            '/components/Layout.md',
            '/components/QButton.md',
            '/components/QBreadcrumbs.md',
            '/components/QCascader.md',
            '/components/QCheckbox.md',
            '/components/QCheckboxGroup.md',
            '/components/QCollapse.md',
            '/components/QColorpicker.md',
            '/components/QContextMenu.md',
            '/components/QDatepicker.md',
            '/components/QInputNumber.md',
            '/components/QForm.md',
            '/components/QInput.md',
            '/components/QPagination.md',
            '/components/QPopover.md',
            '/components/QRadio.md',
            '/components/QScrollbar.md',
            '/components/QSelect.md',
            '/components/QSlider.md',
            '/components/QSwitch.md',
            '/components/QTabs.md',
            '/components/QTag.md',
            '/components/QTextarea.md',
            '/components/QUpload.md'
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          children: ['/guide/README.md', '/guide/getting-started.md']
        }
      ]
    }
  })
});
