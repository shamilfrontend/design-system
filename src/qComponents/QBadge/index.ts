import { withInstall } from '../helpers';

import Badge from './src/QBadge.vue';

export const QBadge = withInstall(Badge);

export type {
  QBadgeProps,
  QBadgePropValue,
  QBadgePropMax,
  QBadgePropType,
  QBadgePropIsDot,
  QBadgePropHidden
} from './src/types';
