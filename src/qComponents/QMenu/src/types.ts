import type { ComponentPublicInstance } from 'vue';

export type QMenuItemPropDisabled = boolean;
export type QMenuItemPropDivided = boolean;
export type QMenuItemPropIcon = string | null;
export type QMenuItemPropCommand = string | null;

export interface QMenuItemProps {
  disabled: QMenuItemPropDisabled;
  divided: QMenuItemPropDivided;
  icon: QMenuItemPropIcon;
  command: QMenuItemPropCommand;
}

export type QMenuItemInstance = ComponentPublicInstance<QMenuItemProps>;
