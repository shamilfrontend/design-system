import { ComputedRef } from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QIconName } from './constants';
export type QIconPropName = QIconName | (string & {});
export type QIconPropSize = Nullable<'small' | 'regular' | 'large' | number>;
export type QIconPropColor = Nullable<string>;
export type QIconPropSpin = Nullable<boolean>;
export type QIconPropAriaLabel = Nullable<string>;
export interface QIconProps {
  name: QIconPropName;
  size: QIconPropSize;
  color: QIconPropColor;
  spin: QIconPropSpin;
  ariaLabel: QIconPropAriaLabel;
}
export interface QIconInstance {
  iconClass: ComputedRef<string>;
}
