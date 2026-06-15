import { withInstall } from '@/helpers';

import Skeleton from './src/QSkeleton.vue';

export const QSkeleton = withInstall(Skeleton);

export type {
  QSkeletonProps,
  QSkeletonInstance,
  QSkeletonPropVariant,
  QSkeletonPropAnimated,
  QSkeletonPropRows,
  QSkeletonPropWidth,
  QSkeletonPropHeight,
  QSkeletonPropRadius
} from './src/types';
