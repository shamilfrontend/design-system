import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';
import { path } from '@vuepress/utils';
import { visualizer } from 'rollup-plugin-visualizer';

const configDir = path.resolve(process.cwd(), 'docs/.vuepress');
const isAnalyze = process.env.ANALYZE === 'true';
const pagesBase = process.env.VUEPRESS_BASE ?? '/';

const componentPages = [
  '/components/Layout.md',
  '/components/QAlert.md',
  '/components/QAutoComplete.md',
  '/components/QAvatar.md',
  '/components/QBadge.md',
  '/components/QBreadcrumbs.md',
  '/components/QButton.md',
  '/components/QCard.md',
  '/components/QCascader.md',
  '/components/QCheckbox.md',
  '/components/QCheckboxGroup.md',
  '/components/QCollapse.md',
  '/components/QColorpicker.md',
  '/components/QContextMenu.md',
  '/components/QDatepicker.md',
  '/components/QDescriptions.md',
  '/components/QDialog.md',
  '/components/QDivider.md',
  '/components/QDrawer.md',
  '/components/QDropdown.md',
  '/components/QEmpty.md',
  '/components/QForm.md',
  '/components/QIcon.md',
  '/components/QImage.md',
  '/components/QInput.md',
  '/components/QInputNumber.md',
  '/components/QLayout.md',
  '/components/QLink.md',
  '/components/QList.md',
  '/components/QLoading.md',
  '/components/QMenu.md',
  '/components/QMessageBox.md',
  '/components/QNotification.md',
  '/components/QPageHeader.md',
  '/components/QPagination.md',
  '/components/QPopover.md',
  '/components/QProgress.md',
  '/components/QProgressIndicatior.md',
  '/components/QRadio.md',
  '/components/QResult.md',
  '/components/QRadioGroup.md',
  '/components/QScrollbar.md',
  '/components/QSegmented.md',
  '/components/QSelect.md',
  '/components/QSpace.md',
  '/components/QSkeleton.md',
  '/components/QSlider.md',
  '/components/QStatistic.md',
  '/components/QSteps.md',
  '/components/QSwitch.md',
  '/components/QTable.md',
  '/components/QTabs.md',
  '/components/QTag.md',
  '/components/QTextarea.md',
  '/components/QTimeline.md',
  '/components/QTimePicker.md',
  '/components/QTooltip.md',
  '/components/QTransfer.md',
  '/components/QTree.md',
  '/components/QTreeSelect.md',
  '/components/QBackTop.md',
  '/components/QCarousel.md',
  '/components/QRate.md',
  '/components/QUpload.md',
  '/components/QAnchor.md',
  '/components/QAffix.md',
  '/components/QTitle.md',
  '/components/QText.md',
  '/components/QParagraph.md',
  '/components/QMentions.md',
  '/components/QCalendar.md',
  '/components/QWatermark.md',
  '/components/QTour.md'
];

export default defineUserConfig({
  base: pagesBase,
  lang: 'ru-RU',
  title: 'Design System',
  description:
    'Vue 3 дизайн-система с TypeScript, Composition API и 60+ компонентов',

  bundler: viteBundler({
    viteOptions: {
      build: {
        cssMinify: 'esbuild',
        rollupOptions: {
          plugins: isAnalyze
            ? [
                visualizer({
                  filename: path.resolve(configDir, 'dist/stats.html'),
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
    navbar: [
      {
        text: 'Гайд',
        link: '/guide/getting-started.html'
      },
      {
        text: 'Components',
        link: '/components/',
        children: componentPages
      },
      {
        text: 'Storybook',
        link:
          pagesBase === '/' ? 'http://localhost:6006' : `${pagesBase}storybook/`
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
          children: componentPages
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/getting-started.md',
            '/guide/colors.md',
            '/guide/shadows.md',
            '/guide/tokens.md',
            '/guide/theming.md'
          ]
        }
      ]
    }
  })
});
