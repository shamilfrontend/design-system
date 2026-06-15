import { withInstall } from '@/helpers';

import Dropdown from './src/QDropdown.vue';

export const QDropdown = withInstall(Dropdown);

export { Q_DROPDOWN_INJECTION_KEY } from './src/constants';
export type { QDropdownContext } from './src/constants';
export type {
  QDropdownProps,
  QDropdownPropTrigger,
  QDropdownPropPlacement,
  QDropdownPropPopperOptions,
  QDropdownPropTeleportTo,
  QDropdownPropDisabled,
  QDropdownPropHideOnClick
} from './src/types';
