import { Placement, Options } from '@popperjs/core';
import { Ref, ComputedRef } from 'vue';
import { Nullable } from '../../../../types/helpers';
export type QTooltipPropContent = Nullable<string>;
export type QTooltipPropPlacement = Placement;
export type QTooltipPropEffect = 'dark' | 'light';
export type QTooltipPropDisabled = Nullable<boolean>;
export type QTooltipPropOpenDelay = Nullable<number>;
export type QTooltipPropCloseDelay = Nullable<number>;
export type QTooltipPropTeleportTo = Nullable<string | HTMLElement>;
export type QTooltipPropPopperOptions = Nullable<Partial<Options>>;
export interface QTooltipProps {
  content: QTooltipPropContent;
  placement: QTooltipPropPlacement;
  effect: QTooltipPropEffect;
  disabled: QTooltipPropDisabled;
  openDelay: QTooltipPropOpenDelay;
  closeDelay: QTooltipPropCloseDelay;
  teleportTo: QTooltipPropTeleportTo;
  popperOptions: QTooltipPropPopperOptions;
}
export interface QTooltipInstance {
  isVisible: Ref<boolean>;
  tooltipClasses: ComputedRef<Record<string, boolean>>;
}
