import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    value: {
      type: ObjectConstructor;
      required: true;
    };
    isLoading: {
      type: BooleanConstructor;
      default: boolean;
    };
    isDisabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    isClearable: {
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
    clear: () => any;
    abort: () => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      value: {
        type: ObjectConstructor;
        required: true;
      };
      isLoading: {
        type: BooleanConstructor;
        default: boolean;
      };
      isDisabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      isClearable: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onClear?: (() => any) | undefined;
      onAbort?: (() => any) | undefined;
    }>,
  {
    isDisabled: boolean;
    isLoading: boolean;
    isClearable: boolean;
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
