import { Nullable } from '../../../../types/helpers';
export type QBadgePropValue = Nullable<string | number>;
export type QBadgePropMax = Nullable<number>;
export type QBadgePropType = Nullable<
  'primary' | 'success' | 'warning' | 'danger' | 'info'
>;
export type QBadgePropIsDot = Nullable<boolean>;
export type QBadgePropHidden = Nullable<boolean>;
export interface QBadgeProps {
  value: QBadgePropValue;
  max: QBadgePropMax;
  type: QBadgePropType;
  isDot: QBadgePropIsDot;
  hidden: QBadgePropHidden;
}
