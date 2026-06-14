export interface QSegmentedOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: string;
}
export type QSegmentedPropModelValue = string | number | null;
export type QSegmentedPropOptions = QSegmentedOption[];
export type QSegmentedPropSize = 'small' | 'medium' | 'large';
export type QSegmentedPropDisabled = boolean;
export type QSegmentedPropBlock = boolean;
export interface QSegmentedProps {
  modelValue: QSegmentedPropModelValue;
  options: QSegmentedPropOptions;
  size: QSegmentedPropSize;
  disabled: QSegmentedPropDisabled;
  block: QSegmentedPropBlock;
}
