import { withInstall } from '@/helpers';

import Tooltip from './src/QTooltip.vue';

export const QTooltip = withInstall(Tooltip);

export type {
  QTooltipProps,
  QTooltipInstance,
  QTooltipPropContent,
  QTooltipPropPlacement,
  QTooltipPropEffect,
  QTooltipPropDisabled,
  QTooltipPropOpenDelay,
  QTooltipPropCloseDelay,
  QTooltipPropTeleportTo,
  QTooltipPropPopperOptions
} from './src/types';
