import { withInstall } from '../helpers';

import Link from './src/QLink.vue';

export const QLink = withInstall(Link);

export type {
  QLinkProps,
  QLinkPropType,
  QLinkPropUnderline,
  QLinkPropDisabled,
  QLinkPropHref,
  QLinkPropTarget
} from './src/types';
