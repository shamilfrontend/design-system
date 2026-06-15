import { withInstall } from '@/helpers';

import Segmented from './src/QSegmented.vue';

export const QSegmented = withInstall(Segmented);

export type {
  QSegmentedProps,
  QSegmentedOption,
  QSegmentedPropModelValue,
  QSegmentedPropOptions,
  QSegmentedPropSize,
  QSegmentedPropDisabled,
  QSegmentedPropBlock
} from './src/types';
