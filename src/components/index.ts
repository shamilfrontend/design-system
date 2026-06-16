import { merge } from 'lodash-es';
import type { App, Plugin } from 'vue';

import 'focus-visible';

import localeEn from '@/constants/locales/en';
import localeRu from '@/constants/locales/ru';
import { setMessages, setI18n } from '@/locale';

import { setConfig } from './config';
import { QAlert } from './QAlert';
import { QAvatar } from './QAvatar';
import { QBackTop } from './QBackTop';
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
import { QDescriptions, QDescriptionsItem } from './QDescriptions';
import { QDialogModal } from './QDialog';
import { QDivider } from './QDivider';
import { QDrawerModal } from './QDrawer';
import { QDropdown } from './QDropdown';
import { QEmpty } from './QEmpty';
import { QForm } from './QForm';
import { QFormItem } from './QFormItem';
import { QIcon } from './QIcon';
import { QImage } from './QImage';
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
import { QResult } from './QResult';
import { QRow } from './QRow';
import { QScrollbar } from './QScrollbar';
import { QSegmented } from './QSegmented';
import { QSelect } from './QSelect';
import { QSkeleton } from './QSkeleton';
import { QSlider } from './QSlider';
import { QSpace } from './QSpace';
import { QStatistic } from './QStatistic';
import { QSteps } from './QSteps';
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
import { QTree } from './QTree';
import { QTreeSelect } from './QTreeSelect';
import { QTitle, QText, QParagraph } from './QTypography';
import { QUpload } from './QUpload';
import type { ConfigOptions } from './types';

const installableComponents = [
  QBreadcrumbs,
  QBackTop,
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
  QDescriptions,
  QDescriptionsItem,
  QDialogModal,
  QDrawerModal,
  QDivider,
  QDropdown,
  QEmpty,
  QForm,
  QFormItem,
  QFooter,
  QHeader,
  QIcon,
  QImage,
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
  QResult,
  QRow,
  QScrollbar,
  QSegmented,
  QSelect,
  QSidebar,
  QSlider,
  QSkeleton,
  QSpace,
  QStatistic,
  QSteps,
  QSwitch,
  QTable,
  QTabPane,
  QTabs,
  QTag,
  QTextarea,
  QTimeline,
  QTimePicker,
  QTooltip,
  QTree,
  QTreeSelect,
  QTransfer,
  QUpload,
  QTitle,
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

  installableComponents.forEach((component) => {
    app.use(component);
  });
};

export default { install };
export { createDesignSystem, setMessages, setI18n, localeEn, localeRu };

export * from './QBreadcrumbs';
export * from './QBackTop';
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
export * from './QDescriptions';
export * from './QDialog';
export * from './QDivider';
export * from './QDrawer';
export * from './QDropdown';
export * from './QEmpty';
export * from './QForm';
export * from './QFormItem';
export * from './QIcon';
export * from './QImage';
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
export * from './QResult';
export * from './QRow';
export * from './QScrollbar';
export * from './QSegmented';
export * from './QSelect';
export * from './QSlider';
export * from './QSkeleton';
export * from './QSpace';
export * from './QStatistic';
export * from './QSteps';
export * from './QSwitch';
export * from './QTable';
export * from './QTabPane';
export * from './QTabs';
export * from './QTag';
export * from './QTextarea';
export * from './QTimeline';
export * from './QTimePicker';
export * from './QTooltip';
export * from './QTree';
export * from './QTreeSelect';
export * from './QTransfer';
export * from './QUpload';
export * from './QTypography';
export * from './QMentions';
export * from './QCalendar';
