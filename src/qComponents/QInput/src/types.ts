import type { Ref, ComputedRef } from 'vue';

import type { Nullable, ClassValue } from '#/helpers';

export type QInputPropModelValue = Nullable<string>;
export type QInputPropType = Nullable<string>;
export type QInputPropSize = Nullable<'large' | 'default' | 'small'>;
export type QInputPropDisabled = Nullable<boolean>;
export type QInputPropShowWordLimit = Nullable<boolean>;
export type QInputPropValidateEvent = Nullable<boolean>;
export type QInputPropPrefixIcon = Nullable<string>;
export type QInputPropSuffixIcon = Nullable<string>;
export type QInputPropClearable = Nullable<boolean>;
export type QInputPropShowPassword = Nullable<boolean>;
export type QInputPropFormatter = Nullable<(value: string) => string>;
export type QInputPropParser = Nullable<(value: string) => string>;

export interface QInputProps {
  modelValue: QInputPropModelValue;
  type: QInputPropType;
  size: QInputPropSize;
  disabled: QInputPropDisabled;
  showWordLimit: QInputPropShowWordLimit;
  validateEvent: QInputPropValidateEvent;
  prefixIcon: QInputPropPrefixIcon;
  suffixIcon: QInputPropSuffixIcon;
  clearable: QInputPropClearable;
  showPassword: QInputPropShowPassword;
  formatter: QInputPropFormatter;
  parser: QInputPropParser;
}

export interface QInputState {
  hovering: boolean;
  focused: boolean;
  isPasswordVisible: boolean;
}

export interface QInputInstance {
  state: QInputState;
  classes: ComputedRef<ClassValue>;
  isDisabled: ComputedRef<boolean>;
  isPasswordSwitchShown: Ref<boolean>;
  isSuffixVisible: Ref<boolean>;
  isClearButtonShown: Ref<boolean>;
  isSymbolLimitShown: Ref<boolean>;
  textLength: Ref<number>;
  inputType: Ref<string>;
  // refs
  input: Ref<Nullable<HTMLInputElement>>;
  root: Ref<Nullable<HTMLElement>>;
  // methods
  focus: () => void;
  blur: () => void;
  select: () => void;
  clear: () => void;
  handleBlur: (event: FocusEvent) => void;
  handleFocus: (event: FocusEvent) => void;
  handlePasswordVisible: () => void;
  handleClearClick: (event: MouseEvent) => void;
  handleInput: (event: Event) => void;
  handleChange: (event: Event) => void;
  updateModel: (event: Event) => void;
  t: (key: string) => string;
}
