import { App, Ref } from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QDialogHookOptions, QDialog } from './types';
export declare const createDialog: (config?: QDialogHookOptions) => {
  dialog: QDialog;
  app: Ref<Nullable<App<Element>>>;
};
