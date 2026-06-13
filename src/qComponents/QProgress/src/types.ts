import type { ComponentPublicInstance } from 'vue';

export type QProgressPropType = 'line' | 'circle';
export type QProgressPropPercentage = number;
export type QProgressPropStatus = 'success' | 'warning' | 'error' | null;
export type QProgressPropStrokeWidth = number;
export type QProgressPropShowText = boolean;
export type QProgressPropIndeterminate = boolean;

export interface QProgressProps {
  type: QProgressPropType;
  percentage: QProgressPropPercentage;
  status: QProgressPropStatus;
  strokeWidth: QProgressPropStrokeWidth;
  showText: QProgressPropShowText;
  indeterminate: QProgressPropIndeterminate;
}

export type QProgressInstance = ComponentPublicInstance<QProgressProps>;
