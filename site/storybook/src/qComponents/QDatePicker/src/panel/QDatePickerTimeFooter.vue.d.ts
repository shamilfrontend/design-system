import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    hours: {
      type: NumberConstructor;
      default: number;
    };
    minutes: {
      type: NumberConstructor;
      default: number;
    };
    label: {
      type: StringConstructor;
      default: null;
    };
    step: {
      type: NumberConstructor;
      default: number;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    confirm: () => any;
    'update:hours': (value: number) => any;
    'update:minutes': (value: number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      hours: {
        type: NumberConstructor;
        default: number;
      };
      minutes: {
        type: NumberConstructor;
        default: number;
      };
      label: {
        type: StringConstructor;
        default: null;
      };
      step: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    Readonly<{
      onConfirm?: (() => any) | undefined;
      'onUpdate:hours'?: ((value: number) => any) | undefined;
      'onUpdate:minutes'?: ((value: number) => any) | undefined;
    }>,
  {
    label: string;
    step: number;
    hours: number;
    minutes: number;
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
