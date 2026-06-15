import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { defineComponent } from 'vue';

import DesignSystem from '../src/qComponents';
import { localeEn, localeRu } from '../src/qComponents';
import messages from './locales';

import '../src/styles.scss';

setup(app => {
  app.use(DesignSystem, {
    localization: {
      locale: 'en',
      messages: {
        en: { ...localeEn, ...messages.en },
        ru: { ...localeRu, ...messages.ru }
      }
    }
  });

  app.component(
    'RouterLink',
    defineComponent({
      props: {
        to: { type: [String, Object], default: null }
      },
      template: '<a href="#" @click.prevent.stop><slot /></a>'
    })
  );
});

const withTheme = (
  story: () => unknown,
  context: { globals: { theme?: string } }
) => {
  const theme = context.globals.theme === 'dark' ? 'dark' : 'light';

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.style.backgroundColor =
      theme === 'dark' ? '#161d31' : '#f8f7fa';
  }

  return story();
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Intro',
          'Basic',
          [
            'QButton',
            'QContainer',
            'QIcon',
            'Layout',
            'QLayout',
            'QRow',
            'QCol',
            'QLink',
            'QTitle',
            'QScrollbar',
            'QSpace'
          ],
          'Form',
          [
            'QAutoComplete',
            'QCascader',
            'QCheckbox',
            'QCheckboxGroup',
            'QColorPicker',
            'QDatePicker',
            'QForm',
            'QInput',
            'QInputNumber',
            'QMentions',
            'QRadio',
            'QRadioGroup',
            'QRate',
            'QSelect',
            'QSlider',
            'QSwitch',
            'QTimePicker',
            'QTransfer',
            'QTreeSelect',
            'QUpload',
            'QTextarea'
          ],
          'Data',
          [
            'QAvatar',
            'QBadge',
            'QCalendar',
            'QCard',
            'QCarousel',
            'QCollapse',
            'QDescriptions',
            'QEmpty',
            'QImage',
            'QPagination',
            'QProgress',
            'QResult',
            'QSkeleton',
            'QTable',
            'QTag',
            'QTimeline',
            'QTour',
            'QTree',
            'QStatistic',
            'QSegmented',
            'QList',
            'QProgressIndicatior'
          ],
          'Navigation',
          [
            'QAffix',
            'QAnchor',
            'QBackTop',
            'QBreadcrumbs',
            'QDropdown',
            'QMenu',
            'QPageHeader',
            'QSteps',
            'QTabs',
            'QContextMenu'
          ],
          'Feedback',
          [
            'QAlert',
            'QDialog',
            'QDialogModal',
            'QDrawer',
            'QDrawerModal',
            'QLoading',
            'QMessageBox',
            'QNotification',
            'QPopover',
            'QTooltip'
          ],
          'Others',
          ['QDivider', 'QWatermark'],
          'Core',
          ['Colors', 'Icons']
        ],
        method: 'alphabetical'
      }
    },
    layout: 'centered',
    controls: { expanded: true },
    backgrounds: {
      default: 'Vuexy Light',
      values: [
        { name: 'Vuexy Light', value: '#f8f7fa' },
        { name: 'Vuexy Dark', value: '#161d31' }
      ]
    },
    docs: {
      inlineStories: true
    },
    actions: { argTypesRegex: '^on[A-Z].*' }
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / Dark theme',
      toolbar: {
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' }
        ],
        showName: true,
        dynamicTitle: true
      }
    }
  },
  decorators: [withTheme]
};

export default preview;
