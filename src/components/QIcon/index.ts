import { withInstall } from '@/helpers';

import Icon from './src/QIcon.vue';

export const QIcon = withInstall(Icon);

export { Q_ICON_NAMES } from './src/constants';
export type { QIconName } from './src/constants';
export { resolveIconClass } from './src/utils';
export type {
  QIconProps,
  QIconInstance,
  QIconPropName,
  QIconPropSize,
  QIconPropColor,
  QIconPropSpin,
  QIconPropAriaLabel
} from './src/types';
