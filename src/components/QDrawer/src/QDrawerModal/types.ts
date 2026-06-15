import type { QDrawerAction } from '../types';

export type QDrawerModalPropModelValue = boolean;
export type QDrawerModalPropTitle = string | null;
export type QDrawerModalPropWidth = string | number;
export type QDrawerModalPropPosition = 'left' | 'right';
export type QDrawerModalPropTeleportTo = string | HTMLElement;
export type QDrawerModalPropBeforeClose = (
  action: QDrawerAction
) => boolean | Promise<boolean>;

export interface QDrawerModalProps {
  modelValue: QDrawerModalPropModelValue;
  title: QDrawerModalPropTitle;
  width: QDrawerModalPropWidth;
  position: QDrawerModalPropPosition;
  beforeClose: QDrawerModalPropBeforeClose | null;
  teleportTo: QDrawerModalPropTeleportTo;
  closeOnClickModal: boolean;
  showClose: boolean;
}
