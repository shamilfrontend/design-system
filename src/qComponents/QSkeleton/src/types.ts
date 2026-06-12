import type { StyleValue } from 'vue';

import type { Nullable } from '#/helpers';

export type QSkeletonPropVariant = Nullable<
  'text' | 'circle' | 'rect' | 'button'
>;
export type QSkeletonPropAnimated = Nullable<boolean>;
export type QSkeletonPropRows = Nullable<number>;
export type QSkeletonPropWidth = Nullable<string | number>;
export type QSkeletonPropHeight = Nullable<string | number>;
export type QSkeletonPropRadius = Nullable<string | number>;

export interface QSkeletonProps {
  variant: QSkeletonPropVariant;
  animated: QSkeletonPropAnimated;
  rows: QSkeletonPropRows;
  width: QSkeletonPropWidth;
  height: QSkeletonPropHeight;
  radius: QSkeletonPropRadius;
}

export interface QSkeletonInstance {
  skeletonStyle: StyleValue;
}
