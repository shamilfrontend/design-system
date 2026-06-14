import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_1: {}, __VLS_14: {};
type __VLS_Slots = {} & {
  title?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    title: {
      type: StringConstructor;
      default: null;
    };
    name: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
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
      name: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    name: string | number;
    title: string;
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
