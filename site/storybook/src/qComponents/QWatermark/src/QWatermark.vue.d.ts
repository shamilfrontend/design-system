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
    content: {
      type: StringConstructor;
      default: string;
    };
    gapX: {
      type: NumberConstructor;
      default: number;
    };
    gapY: {
      type: NumberConstructor;
      default: number;
    };
    rotate: {
      type: NumberConstructor;
      default: number;
    };
    zIndex: {
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
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      content: {
        type: StringConstructor;
        default: string;
      };
      gapX: {
        type: NumberConstructor;
        default: number;
      };
      gapY: {
        type: NumberConstructor;
        default: number;
      };
      rotate: {
        type: NumberConstructor;
        default: number;
      };
      zIndex: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    Readonly<{}>,
  {
    zIndex: number;
    content: string;
    rotate: number;
    gapX: number;
    gapY: number;
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
