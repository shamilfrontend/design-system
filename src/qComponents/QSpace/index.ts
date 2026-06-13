import { withInstall } from '../helpers';

import Space from './src/QSpace.vue';

export const QSpace = withInstall(Space);

export type {
  QSpaceProps,
  QSpacePropDirection,
  QSpacePropSize,
  QSpacePropWrap,
  QSpacePropFill,
  QSpacePropAlign
} from './src/types';
