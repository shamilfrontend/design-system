import { withInstall } from '@/helpers';

import Result from './src/QResult.vue';

export const QResult = withInstall(Result);

export type {
  QResultProps,
  QResultPropStatus,
  QResultPropTitle,
  QResultPropSubtitle
} from './src/types';
