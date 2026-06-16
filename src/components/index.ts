import { merge } from 'lodash-es';
import type { App, Plugin } from 'vue';

import 'focus-visible';

import localeEn from '@/constants/locales/en';
import localeRu from '@/constants/locales/ru';
import { setMessages, setI18n } from '@/locale';

import { setConfig } from './config';
import { QAlert } from './QAlert';
import { QAvatar } from './QAvatar';
import { QBadge } from './QBadge';
import { QBreadcrumbs } from './QBreadcrumbs';
import { QButton } from './QButton';
import { QCalendar } from './QCalendar';
import { QCard } from './QCard';
import { QCarousel, QCarouselItem } from './QCarousel';
import { QCascader } from './QCascader';
import { QCheckbox } from './QCheckbox';
import { QCheckboxGroup } from './QCheckboxGroup';
import { QCol } from './QCol';
import { QCollapse } from './QCollapse';
import { QCollapseItem } from './QCollapseItem';
import { QColorPicker } from './QColorPicker';
import { QContextMenu } from './QContextMenu';
import { QDatePicker } from './QDatePicker';
import { QDialogModal } from './QDialog';
import { QDrawerModal } from './QDrawer';
import { QDropdown } from './QDropdown';
import { QForm } from './QForm';
import { QFormItem } from './QFormItem';
import { QIcon } from './QIcon';
import { QInput } from './QInput';
import { QInputNumber } from './QInputNumber';
import { QContainer, QFooter, QHeader, QLayout, QSidebar } from './QLayout';
import { QLink } from './QLink';
import { QList, QListItem } from './QList';
import { QLoadingPlugin } from './QLoading';
import { QMentions } from './QMentions';
import { QMenu, QMenuItem } from './QMenu';
import { QNotification } from './QNotification';
import { QOption } from './QOption';
import { QPageHeader } from './QPageHeader';
import { QPagination } from './QPagination';
import { QPopover } from './QPopover';
import { QProgress } from './QProgress';
import { QProgressIndicatior } from './QProgressIndicatior';
import { QRadio } from './QRadio';
import { QRadioGroup } from './QRadioGroup';
import { QRate } from './QRate';
import { QRow } from './QRow';
import { QScrollbar } from './QScrollbar';
import { QSelect } from './QSelect';
import { QSkeleton } from './QSkeleton';
import { QSlider } from './QSlider';
import { QSwitch } from './QSwitch';
import { QTable } from './QTable';
import { QTabPane } from './QTabPane';
import { QTabs } from './QTabs';
import { QTag } from './QTag';
import { QTextarea } from './QTextarea';
import { QTimeline } from './QTimeline';
import { QTimePicker } from './QTimePicker';
import { QTooltip } from './QTooltip';
import { QTransfer } from './QTransfer';
import { QText, QParagraph } from './QTypography';
import { QUpload } from './QUpload';
import type { ConfigOptions } from './types';

const installableComponents = [
  QBreadcrumbs,
  QAlert,
  QAvatar,
  QBadge,
  QButton,
  QCard,
  QCarousel,
  QCarouselItem,
  QCascader,
  QCheckbox,
  QCheckboxGroup,
  QCol,
  QContainer,
  QCollapse,
  QCollapseItem,
  QColorPicker,
  QContextMenu,
  QDatePicker,
  QDialogModal,
  QDrawerModal,
  QDropdown,
  QForm,
  QFormItem,
  QFooter,
  QHeader,
  QIcon,
  QInput,
  QInputNumber,
  QLink,
  QList,
  QListItem,
  QLayout,
  QLoadingPlugin,
  QMenu,
  QMenuItem,
  QNotification,
  QOption,
  QPageHeader,
  QPagination,
  QPopover,
  QProgress,
  QProgressIndicatior,
  QRate,
  QRadio,
  QRadioGroup,
  QRow,
  QScrollbar,
  QSelect,
  QSidebar,
  QSlider,
  QSkeleton,
  QSwitch,
  QTable,
  QTabPane,
  QTabs,
  QTag,
  QTextarea,
  QTimeline,
  QTimePicker,
  QTooltip,
  QTransfer,
  QUpload,
  QText,
  QParagraph,
  QMentions,
  QCalendar
] as const;

const setupQui = ({
  localization: { locale, messages, i18n } = {},
  zIndexCounter
}: ConfigOptions = {}): void => {
  setConfig({
    locale,
    zIndex: zIndexCounter
  });

  if (messages) setMessages(messages);
  if (i18n) setI18n(i18n);
};

const createDesignSystem = (config?: ConfigOptions): Plugin => ({
  install: (): void => {
    setupQui({
      ...config,
      localization: {
        ...config?.localization
      }
    });
  }
});

// install
const install = (app: App, config?: ConfigOptions): void => {
  const messages = merge(
    { en: localeEn, ru: localeRu },
    config?.localization?.messages
  );
  setupQui({
    ...(config ?? {}),
    localization: {
      ...(config?.localization ?? {}),
      messages
    }
  });

  installableComponents.forEach(component => {
    app.use(component);
  });
};

export default { install };
export { createDesignSystem, setMessages, setI18n, localeEn, localeRu };

export * from './QBreadcrumbs';
export * from './QButton';
export * from './QCascader';
export * from './QAlert';
export * from './QAvatar';
export * from './QBadge';
export * from './QCard';
export * from './QCarousel';
export * from './QCheckbox';
export * from './QCheckboxGroup';
export * from './QCol';
export * from './QLayout';
export * from './QCollapse';
export * from './QCollapseItem';
export * from './QColorPicker';
export * from './QContextMenu';
export * from './QDatePicker';
export * from './QDialog';
export * from './QDrawer';
export * from './QDropdown';
export * from './QForm';
export * from './QFormItem';
export * from './QIcon';
export * from './QInput';
export * from './QInputNumber';
export * from './QLink';
export * from './QList';
export * from './QLoading';
export * from './QMenu';
export * from './QMessageBox';
export * from './QNotification';
export * from './QOption';
export * from './QPageHeader';
export * from './QPagination';
export * from './QPopover';
export * from './QProgress';
export * from './QProgressIndicatior';
export * from './QRate';
export * from './QRadio';
export * from './QRadioGroup';
export * from './QRow';
export * from './QScrollbar';
export * from './QSelect';
export * from './QSlider';
export * from './QSkeleton';
export * from './QSwitch';
export * from './QTable';
export * from './QTabPane';
export * from './QTabs';
export * from './QTag';
export * from './QTextarea';
export * from './QTimeline';
export * from './QTimePicker';
export * from './QTooltip';
export * from './QTransfer';
export * from './QUpload';
export * from './QTypography';
export * from './QMentions';
export * from './QCalendar';
