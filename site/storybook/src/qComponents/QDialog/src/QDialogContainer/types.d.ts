import { ComputedRef, Ref, StyleValue } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { QDialogAction } from '../constants';
import { QDialogComponent, QDialogContent, QDialogEvent } from '../types';
export type QDialogContainerPropContent = QDialogContent;
export type QDialogContainerPropBeforeClose = Nullable<
  (action: QDialogAction) => Promise<boolean>
>;
export type QDialogContainerPropTeleportTo = Nullable<string | HTMLElement>;
export interface QDialogContainerProps {
  content: QDialogContainerPropContent;
  offsetTop: Nullable<string | number>;
  distinguishCancelAndClose: Nullable<boolean>;
  preventFocusAfterClosing: Nullable<boolean>;
  customClass: Nullable<string>;
  beforeClose: Nullable<QDialogContainerPropBeforeClose>;
  teleportTo: QDialogContainerPropTeleportTo;
}
export interface QDialogContainerProvider {
  emitDoneEvent: ({ action, payload }: QDialogEvent) => Promise<void>;
  emitCloseEvent: () => void;
}
export interface QDialogContainerInstance {
  dialog: Ref<Nullable<HTMLElement>>;
  zIndex: number;
  isShown: Ref<boolean>;
  dialogStyle: ComputedRef<StyleValue>;
  preparedContent: ComputedRef<QDialogComponent>;
  afterLeave: () => void;
  emitCloseEvent: () => void;
}
