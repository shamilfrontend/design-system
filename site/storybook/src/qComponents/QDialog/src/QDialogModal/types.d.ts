import { QDialogAction } from '../constants';
export type QDialogModalPropModelValue = boolean;
export type QDialogModalPropTitle = string | null;
export type QDialogModalPropWidth = string | number;
export type QDialogModalPropTeleportTo = string | HTMLElement | null;
export type QDialogModalPropBeforeClose = (
  action: QDialogAction
) => boolean | Promise<boolean>;
export interface QDialogModalProps {
  modelValue: QDialogModalPropModelValue;
  title: QDialogModalPropTitle;
  width: QDialogModalPropWidth;
  beforeClose: QDialogModalPropBeforeClose | null;
  teleportTo: QDialogModalPropTeleportTo;
}
