import { QMessageBox, QMessageBoxHookOptions } from './src/types';
declare const useMessageBox: (options?: QMessageBoxHookOptions) => QMessageBox;
export { useMessageBox };
export type { QMessageBoxContainerProvider } from './src/QMessageBoxContainer';
export { QMessageBoxContent } from './src/QMessageBoxContent';
export type {
  QMessageBoxContentPropBeforeClose,
  QMessageBoxContentProps,
  QMessageBoxContentInstance
} from './src/QMessageBoxContent';
export { QMessageBoxAction } from './src/constants';
export type {
  QMessageBox,
  QMessageBoxOptionWrapClass,
  QMessageBoxOptionWrapStyle,
  QMessageBoxOptions
} from './src/types';
