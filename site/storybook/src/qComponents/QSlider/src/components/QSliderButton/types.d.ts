import { ComputedRef, CSSProperties } from 'vue';
import { Nullable, ClassValue } from '../../../../../../types/helpers';
import { QSliderPropModelValue, QSliderPropTooltipMode } from '../../types';
type CssPropertyLeft = CSSProperties['left'];
export type QSliderButtonPropPosition = Nullable<CssPropertyLeft>;
export type QSliderButtonPropPathLeft = Nullable<number>;
export type QSliderButtonPropPathWidth = Nullable<number>;
export interface QSliderButtonProps {
  position: QSliderButtonPropPosition;
  pathLeft: QSliderButtonPropPathLeft;
  pathWidth: QSliderButtonPropPathWidth;
  disabled: boolean;
  tooltipMode: Nullable<QSliderPropTooltipMode>;
  currentValue: QSliderPropModelValue;
}
export type BtnClasses = ClassValue;
export interface BtnStyles {
  left: CssPropertyLeft;
}
export interface TooltipStyles {
  left: CssPropertyLeft;
}
export interface QSliderButtonInstance {
  btnClasses: ComputedRef<BtnClasses>;
  btnStyles: ComputedRef<CSSProperties>;
  isTooltipHidden: ComputedRef<boolean>;
  tooltipClasses: ComputedRef<ClassValue>;
  tooltipStyles: ComputedRef<CSSProperties>;
  handleBtnDown: (event: MouseEvent) => void;
}
export {};
