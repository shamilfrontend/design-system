import { withInstall } from '@/helpers';

import Menu from './src/QMenu.vue';
import MenuItem from './src/QMenuItem.vue';

export const QMenu = withInstall(Menu);
export const QMenuItem = withInstall(MenuItem);

export type {
  QMenuItemProps,
  QMenuItemPropCommand,
  QMenuItemPropDisabled,
  QMenuItemPropDivided,
  QMenuItemPropIcon
} from './src/types';
