import {
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
    autoplay: {
      type: BooleanConstructor;
      default: boolean;
    };
    interval: {
      type: NumberConstructor;
      default: number;
    };
    loop: {
      type: BooleanConstructor;
      default: boolean;
    };
    height: {
      type: (StringConstructor | NumberConstructor)[];
      default: number;
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
      autoplay: {
        type: BooleanConstructor;
        default: boolean;
      };
      interval: {
        type: NumberConstructor;
        default: number;
      };
      loop: {
        type: BooleanConstructor;
        default: boolean;
      };
      height: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
      };
    }>
  > &
    Readonly<{}>,
  {
    autoplay: boolean;
    interval: number;
    loop: boolean;
    height: string | number;
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
