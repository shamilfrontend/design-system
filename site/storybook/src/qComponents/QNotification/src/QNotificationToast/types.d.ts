import { ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { NotifyType } from '../constants';
import { QNotifyContent, QNotifyId } from '../types';
export type QNotificationToastPropType = NotifyType;
export type QNotificationToastPropOnClose = Nullable<(id: QNotifyId) => void>;
export type QNotificationToastPropContent = QNotifyContent;
export interface QNotificationToastProps {
  uniqId: QNotifyId;
  content: QNotificationToastPropContent;
  type: QNotificationToastPropType;
  icon: Nullable<string>;
  duration: Nullable<number>;
  onClose: QNotificationToastPropOnClose;
}
export interface QNotificationToastInstance {
  notificationClasses: ComputedRef<Record<string, boolean>>;
  iconClass: ComputedRef<string>;
  clearTimer: () => void;
  startTimer: () => void;
  close: () => void;
}
