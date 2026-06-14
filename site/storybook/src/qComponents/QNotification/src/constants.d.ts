import { InjectionKey } from 'vue';
export declare const DEFAULT_DURATION = 3000;
export declare enum NotifyType {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning',
  INFO = 'info',
  DEFAULT = 'default'
}
export declare const Q_NOTIFY_INJECTION_KEY: InjectionKey<string>;
