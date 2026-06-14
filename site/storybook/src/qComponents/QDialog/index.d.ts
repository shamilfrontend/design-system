import { QDialog, QDialogHookOptions } from './src/types';
declare const useDialog: (options?: QDialogHookOptions) => QDialog;
export { useDialog };
export { QDialogModal } from './src/QDialogModal';
export type {
  QDialogModalProps,
  QDialogModalPropModelValue,
  QDialogModalPropTitle,
  QDialogModalPropWidth,
  QDialogModalPropTeleportTo,
  QDialogModalPropBeforeClose
} from './src/QDialogModal';
export type { QDialogContainerProvider } from './src/QDialogContainer';
export { QDialogContent } from './src/QDialogContent';
export type {
  QDialogContentProps,
  QDialogContentInstance
} from './src/QDialogContent';
export { QDialogAction } from './src/constants';
export type {
  QDialog,
  QDialogOptionsBeforeClose,
  QDialogOptionsTeleportTo,
  QDialogOptions
} from './src/types';
