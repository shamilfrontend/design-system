import { App, Plugin } from 'vue';
import {
  en as localeEn,
  ru as localeRu,
  zh as localeZh
} from './constants/locales';
import { setMessages, setI18n } from './locale';
import { ConfigOptions } from './types';
declare const createDesignSystem: (config?: ConfigOptions) => Plugin;
declare const _default: {
  install: (app: App, config?: ConfigOptions) => void;
};
export default _default;
export {
  createDesignSystem,
  setMessages,
  setI18n,
  localeEn,
  localeRu,
  localeZh
};
export * from './QBreadcrumbs';
export * from './QBackTop';
export * from './QButton';
export * from './QCascader';
export * from './QAlert';
export * from './QAutoComplete';
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
export * from './QAnchor';
export * from './QAffix';
export * from './QTypography';
export * from './QMentions';
export * from './QCalendar';
export * from './QWatermark';
export * from './QTour';
