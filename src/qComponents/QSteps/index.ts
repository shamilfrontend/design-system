import { withInstall } from '../helpers';

import Steps from './src/QSteps.vue';

export const QSteps = withInstall(Steps);

export type {
  QStepsProps,
  QStepsItem,
  QStepsPropActive,
  QStepsPropDirection,
  QStepsPropFinishStatus
} from './src/types';
