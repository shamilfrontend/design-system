import { Plugin } from 'vue';
import { NotifyType, Q_NOTIFY_INJECTION_KEY } from './src/constants';
import { QNotify, QNotificationOptions } from './src/types';
declare const QNotification: Plugin;
declare const provideNotify: (options?: QNotificationOptions) => void;
declare const useNotify: (options?: QNotificationOptions) => QNotify;
export type { QNotify, QNotifyId } from './src/types';
export {
  Q_NOTIFY_INJECTION_KEY,
  NotifyType,
  QNotification,
  provideNotify,
  useNotify
};
