import { withInstall } from '../helpers';

import Progress from './src/QProgress.vue';

export const QProgress = withInstall(Progress);

export type {
  QProgressProps,
  QProgressPropType,
  QProgressPropPercentage,
  QProgressPropStatus,
  QProgressPropStrokeWidth,
  QProgressPropShowText,
  QProgressPropIndeterminate
} from './src/types';
