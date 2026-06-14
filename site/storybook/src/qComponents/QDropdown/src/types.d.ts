import { Options, Placement } from '@popperjs/core';
import { Nullable } from '../../../../types/helpers';
export type QDropdownPropTrigger = 'click' | 'hover' | 'contextmenu';
export type QDropdownPropPlacement = Placement;
export type QDropdownPropPopperOptions = Partial<Options>;
export type QDropdownPropTeleportTo = Nullable<string | HTMLElement>;
export type QDropdownPropDisabled = boolean;
export type QDropdownPropHideOnClick = boolean;
export interface QDropdownProps {
  trigger: QDropdownPropTrigger;
  placement: QDropdownPropPlacement;
  popperOptions: QDropdownPropPopperOptions;
  teleportTo: QDropdownPropTeleportTo;
  disabled: QDropdownPropDisabled;
  hideOnClick: QDropdownPropHideOnClick;
}
