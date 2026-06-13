import { withInstall } from '../helpers';

import Timeline from './src/QTimeline.vue';

export const QTimeline = withInstall(Timeline);

export type {
  QTimelineProps,
  QTimelineItem,
  QTimelinePropItems,
  QTimelinePropMode
} from './src/types';
