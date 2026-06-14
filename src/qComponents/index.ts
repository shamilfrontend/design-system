import { merge } from 'lodash-es';
import type { App, Plugin } from 'vue';

import 'focus-visible';

import { setConfig } from './config';
import {
  en as localeEn,
  ru as localeRu,
  zh as localeZh
} from './constants/locales';
import { setMessages, setI18n } from './locale';
import { QAlert } from './QAlert';
import { QAutoComplete } from './QAutoComplete';
import { QAvatar } from './QAvatar';
import { QBackTop } from './QBackTop';
import { QBadge } from './QBadge';
import { QBreadcrumbs } from './QBreadcrumbs';
import { QButton } from './QButton';
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
import { QDropdown } from './QDropdown';
import { QEmpty } from './QEmpty';
import { QForm } from './QForm';
import { QFormItem } from './QFormItem';
import { QIcon } from './QIcon';
import { QImage } from './QImage';
import { QInput } from './QInput';
import { QInputNumber } from './QInputNumber';
import {
  QContainer,
  QFooter,
  QHeader,
  QLayout,
  QSidebar
} from './QLayout';
import { QLink } from './QLink';
import { QList, QListItem } from './QList';
import { QLoading, QLoadingPlugin } from './QLoading';
import { QMenu, QMenuItem } from './QMenu';
import { QNotification } from './QNotification';
import { QOption } from './QOption';
import { QPageHeader } from './QPageHeader';
import { QPagination } from './QPagination';
import { QPopover } from './QPopover';
import { QProgress } from './QProgress';
import { QProgressIndicatior } from './QProgressIndicatior';
import { QRate } from './QRate';
import { QRadio } from './QRadio';
import { QRadioGroup } from './QRadioGroup';
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
import { QUpload } from './QUpload';
import { QAnchor } from './QAnchor';
import { QAffix } from './QAffix';
import { QTitle, QText, QParagraph } from './QTypography';
import { QMentions } from './QMentions';
import { QCalendar } from './QCalendar';
import { QWatermark } from './QWatermark';
import { QTour } from './QTour';
import { QDrawerModal } from './QDrawer';
import type { ConfigOptions } from './types';

import '../fonts/fonts.scss';
import '../icons/icons.scss';
import '../main.scss';

import './QBreadcrumbs/src/q-breadcrumbs.scss';
import './QButton/src/q-button.scss';
import './QCascader/src/q-cascader.scss';
import './QAlert/src/q-alert.scss';
import './QAutoComplete/src/q-autocomplete.scss';
import './QAvatar/src/q-avatar.scss';
import './QBackTop/src/q-back-top.scss';
import './QBadge/src/q-badge.scss';
import './QCard/src/q-card.scss';
import './QCarousel/src/q-carousel.scss';
import './QCheckbox/src/q-checkbox.scss';
import './QCheckboxGroup/src/q-checkbox-group.scss';
import './QCol/src/q-col.scss';
import './QCollapseItem/src/q-collapse-item.scss';
import './QColorPicker/src/q-color-picker.scss';
import './QContextMenu/src/q-context-menu.scss';
import './QDatePicker/src/q-date-picker.scss';
import './QDescriptions/src/q-descriptions.scss';
import './QDialog/src/q-dialog.scss';
import './QDivider/src/q-divider.scss';
import './QDrawer/src/q-drawer.scss';
import './QDropdown/src/q-dropdown.scss';
import './QEmpty/src/q-empty.scss';
import './QFormItem/src/q-form-item.scss';
import './QIcon/src/q-icon.scss';
import './QInput/src/q-input.scss';
import './QInputNumber/src/q-input-number.scss';
import './QImage/src/q-image.scss';
import './QLayout/src/q-layout.scss';
import './QLink/src/q-link.scss';
import './QList/src/q-list.scss';
import './QLoading/src/q-loading.scss';
import './QMenu/src/q-menu.scss';
import './QMessageBox/src/q-message-box.scss';
import './QNotification/src/q-notification.scss';
import './QOption/src/q-option.scss';
import './QPageHeader/src/q-page-header.scss';
import './QPagination/src/q-pagination.scss';
import './QPopover/src/q-popover.scss';
import './QProgress/src/q-progress.scss';
import './QProgressIndicatior/src/q-progress-indicatior.scss';
import './QRate/src/q-rate.scss';
import './QRadio/src/q-radio.scss';
import './QRadioGroup/src/q-radio-group.scss';
import './QResult/src/q-result.scss';
import './QRow/src/q-row.scss';
import './QScrollbar/src/q-scrollbar.scss';
import './QSegmented/src/q-segmented.scss';
import './QSelect/src/q-select.scss';
import './QSlider/src/q-slider.scss';
import './QSkeleton/src/q-skeleton.scss';
import './QSpace/src/q-space.scss';
import './QStatistic/src/q-statistic.scss';
import './QSteps/src/q-steps.scss';
import './QSwitch/src/q-switch.scss';
import './QTable/src/q-table.scss';
import './QTabPane/src/q-tab-pane.scss';
import './QTabs/src/q-tabs.scss';
import './QTag/src/q-tag.scss';
import './QTextarea/src/q-textarea.scss';
import './QTimeline/src/q-timeline.scss';
import './QTimePicker/src/q-time-picker.scss';
import './QTooltip/src/q-tooltip.scss';
import './QTransfer/src/q-transfer.scss';
import './QTree/src/q-tree.scss';
import './QTreeSelect/src/q-tree-select.scss';
import './QUpload/src/q-upload.scss';
import './QAnchor/src/q-anchor.scss';
import './QAffix/src/q-affix.scss';
import './QTypography/src/q-typography.scss';
import './QMentions/src/q-mentions.scss';
import './QCalendar/src/q-calendar.scss';
import './QWatermark/src/q-watermark.scss';
import './QTour/src/q-tour.scss';

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
  const messages = merge({ en: localeEn }, config?.localization?.messages);
  setupQui({
    ...(config ?? {}),
    localization: {
      ...(config?.localization ?? {}),
      messages
    }
  });

  app.use(QBreadcrumbs);
  app.use(QBackTop);
  app.use(QAlert);
  app.use(QAutoComplete);
  app.use(QAvatar);
  app.use(QBadge);
  app.use(QButton);
  app.use(QCard);
  app.use(QCarousel);
  app.use(QCarouselItem);
  app.use(QCascader);
  app.use(QCheckbox);
  app.use(QCheckboxGroup);
  app.use(QCol);
  app.use(QContainer);
  app.use(QCollapse);
  app.use(QCollapseItem);
  app.use(QColorPicker);
  app.use(QContextMenu);
  app.use(QDatePicker);
  app.use(QDescriptions);
  app.use(QDescriptionsItem);
  app.use(QDialogModal);
  app.use(QDrawerModal);
  app.use(QDivider);
  app.use(QDropdown);
  app.use(QEmpty);
  app.use(QForm);
  app.use(QFormItem);
  app.use(QFooter);
  app.use(QHeader);
  app.use(QIcon);
  app.use(QImage);
  app.use(QInput);
  app.use(QInputNumber);
  app.use(QLink);
  app.use(QList);
  app.use(QListItem);
  app.use(QLayout);
  app.use(QLoadingPlugin);
  app.use(QMenu);
  app.use(QMenuItem);
  app.use(QNotification);
  app.use(QOption);
  app.use(QPageHeader);
  app.use(QPagination);
  app.use(QPopover);
  app.use(QProgress);
  app.use(QProgressIndicatior);
  app.use(QRate);
  app.use(QRadio);
  app.use(QRadioGroup);
  app.use(QResult);
  app.use(QRow);
  app.use(QScrollbar);
  app.use(QSegmented);
  app.use(QSelect);
  app.use(QSidebar);
  app.use(QSlider);
  app.use(QSkeleton);
  app.use(QSpace);
  app.use(QStatistic);
  app.use(QSteps);
  app.use(QSwitch);
  app.use(QTable);
  app.use(QTabPane);
  app.use(QTabs);
  app.use(QTag);
  app.use(QTextarea);
  app.use(QTimeline);
  app.use(QTimePicker);
  app.use(QTooltip);
  app.use(QTree);
  app.use(QTreeSelect);
  app.use(QTransfer);
  app.use(QUpload);
  app.use(QAnchor);
  app.use(QAffix);
  app.use(QTitle);
  app.use(QText);
  app.use(QParagraph);
  app.use(QMentions);
  app.use(QCalendar);
  app.use(QWatermark);
  app.use(QTour);
};

export default { install };
export { createDesignSystem, setMessages, setI18n, localeEn, localeRu, localeZh };

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
