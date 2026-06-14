import { VNode, StyleValue } from 'vue';
import { QSliderPropModelValue, QSliderPropData } from '../../types';
export interface QSliderCaptionsProps {
  modelValue: QSliderPropModelValue;
  data: QSliderPropData;
  disabled: boolean;
}
export interface PreparedData {
  value: QSliderPropModelValue;
  label?: string;
  style?: StyleValue;
  slot?: VNode[];
}
export type QSliderCaptionsInstance = () => VNode;
