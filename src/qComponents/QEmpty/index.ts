import { withInstall } from '../helpers';

import Empty from './src/QEmpty.vue';

export const QEmpty = withInstall(Empty);

export type {
  QEmptyProps,
  QEmptyPropDescription,
  QEmptyPropImageSize
} from './src/types';
