import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    title: {
      type: StringConstructor;
      default: null;
    };
    value: {
      type: (StringConstructor | NumberConstructor)[];
      default: number;
    };
    prefix: {
      type: StringConstructor;
      default: null;
    };
    suffix: {
      type: StringConstructor;
      default: null;
    };
    precision: {
      type: NumberConstructor;
      default: null;
    };
    valueStyle: {
      type: PropType<Record<string, string>>;
      default: () => Record<string, string>;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      title: {
        type: StringConstructor;
        default: null;
      };
      value: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
      };
      prefix: {
        type: StringConstructor;
        default: null;
      };
      suffix: {
        type: StringConstructor;
        default: null;
      };
      precision: {
        type: NumberConstructor;
        default: null;
      };
      valueStyle: {
        type: PropType<Record<string, string>>;
        default: () => Record<string, string>;
      };
    }>
  > &
    Readonly<{}>,
  {
    title: string;
    suffix: string;
    value: string | number;
    precision: number;
    prefix: string;
    valueStyle: Record<string, string>;
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
