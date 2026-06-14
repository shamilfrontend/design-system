import { App, Ref } from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QMessageBoxHookOptions, QMessageBox } from './types';
export declare const createMessageBox: (config?: QMessageBoxHookOptions) => {
  messageBox: QMessageBox;
  app: Ref<Nullable<App<Element>>>;
};
