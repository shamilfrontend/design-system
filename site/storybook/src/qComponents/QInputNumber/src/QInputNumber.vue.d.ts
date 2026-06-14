import { Nullable } from '../../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  postfix?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /** Input value */
    modelValue: {
      type: NumberConstructor;
      default: null;
    };
    /** Number of digits after decimal separator */
    precision: {
      type: NumberConstructor;
      default: null;
      validator: (val: number) => boolean;
    };
    /** Disabled status */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /** Minimum allowed value. Must be less than maximum value */
    min: {
      type: NumberConstructor;
      default: number;
      validator: (val: number) => boolean;
    };
    /** Maximum allowed value. Must be higher than minimum value */
    max: {
      type: NumberConstructor;
      default: number;
      validator: (val: number) => boolean;
    };
    /** Text before main value in blurred state of the input */
    prefix: {
      type: StringConstructor;
      default: null;
    };
    /** Text after main value in blurred state of the input */
    suffix: {
      type: StringConstructor;
      default: null;
    };
    /** validate parent form if present */
    validateEvent: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    input: (value: Nullable<number>) => any;
    'update:modelValue': (value: Nullable<number>) => any;
    change: (value: Nullable<number>) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /** Input value */
      modelValue: {
        type: NumberConstructor;
        default: null;
      };
      /** Number of digits after decimal separator */
      precision: {
        type: NumberConstructor;
        default: null;
        validator: (val: number) => boolean;
      };
      /** Disabled status */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /** Minimum allowed value. Must be less than maximum value */
      min: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
      };
      /** Maximum allowed value. Must be higher than minimum value */
      max: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
      };
      /** Text before main value in blurred state of the input */
      prefix: {
        type: StringConstructor;
        default: null;
      };
      /** Text after main value in blurred state of the input */
      suffix: {
        type: StringConstructor;
        default: null;
      };
      /** validate parent form if present */
      validateEvent: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onInput?: ((value: Nullable<number>) => any) | undefined;
      'onUpdate:modelValue'?: ((value: Nullable<number>) => any) | undefined;
      onChange?: ((value: Nullable<number>) => any) | undefined;
      onFocus?: ((event: FocusEvent) => any) | undefined;
      onBlur?: ((event: FocusEvent) => any) | undefined;
    }>,
  {
    min: number;
    max: number;
    disabled: boolean;
    modelValue: number;
    validateEvent: boolean;
    suffix: string;
    precision: number;
    prefix: string;
  },
  {},
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
