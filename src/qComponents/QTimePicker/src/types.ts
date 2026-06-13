import type { ComputedRef, Ref } from 'vue';

import type { QInputInstance } from '@/qComponents/QInput';

import type { Nullable } from '#/helpers';

export type QTimePickerPropModelValue = Nullable<string>;
export type QTimePickerPropFormat = string;
export type QTimePickerPropPlaceholder = Nullable<string>;
export type QTimePickerPropDisabled = boolean;
export type QTimePickerPropClearable = boolean;
export type QTimePickerPropStep = number;

export interface QTimePickerProps {
  modelValue: QTimePickerPropModelValue;
  format: QTimePickerPropFormat;
  placeholder: QTimePickerPropPlaceholder;
  disabled: QTimePickerPropDisabled;
  clearable: QTimePickerPropClearable;
  step: QTimePickerPropStep;
}

export interface QTimePickerState {
  pickerVisible: boolean;
  hours: number;
  minutes: number;
}

export interface QTimePickerExpose {
  inputRef: Ref<Nullable<QInputInstance>>;
  formattedValue: ComputedRef<string>;
}
