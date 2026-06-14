import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: NumberConstructor;
      default: number;
    };
    max: {
      type: NumberConstructor;
      default: number;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    allowHalf: {
      type: BooleanConstructor;
      default: boolean;
    };
    showText: {
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
    'update:modelValue': (value: number) => any;
    change: (value: number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: NumberConstructor;
        default: number;
      };
      max: {
        type: NumberConstructor;
        default: number;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      allowHalf: {
        type: BooleanConstructor;
        default: boolean;
      };
      showText: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: number) => any) | undefined;
      onChange?: ((value: number) => any) | undefined;
    }>,
  {
    max: number;
    disabled: boolean;
    modelValue: number;
    showText: boolean;
    allowHalf: boolean;
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
declare const _default: typeof __VLS_export;
export default _default;
