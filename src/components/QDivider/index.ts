import { withInstall } from '@/helpers';

import Divider from './src/QDivider.vue';

export const QDivider = withInstall(Divider);

export type {
  QDividerProps,
  QDividerPropDirection,
  QDividerPropContentPosition,
  QDividerPropBorderStyle
} from './src/types';
