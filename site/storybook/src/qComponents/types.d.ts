import { Messages } from './locale';
export interface Localization {
  locale?: string;
  messages?: Messages;
  i18n?: (...args: unknown[]) => string;
}
export interface ConfigOptions {
  localization?: Localization;
  zIndexCounter?: number;
  useAllComponents?: boolean;
}
