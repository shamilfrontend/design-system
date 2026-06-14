export interface QAutoCompleteOption {
  value: string;
  label?: string;
}
export type QAutoCompletePropModelValue = string;
export type QAutoCompletePropOptions = QAutoCompleteOption[] | string[];
export type QAutoCompletePropPlaceholder = string | null;
export type QAutoCompletePropDisabled = boolean;
export type QAutoCompletePropClearable = boolean;
export interface QAutoCompleteProps {
  modelValue: QAutoCompletePropModelValue;
  options: QAutoCompletePropOptions;
  placeholder: QAutoCompletePropPlaceholder;
  disabled: QAutoCompletePropDisabled;
  clearable: QAutoCompletePropClearable;
}
