import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  content?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * key of QTabPane
     */
    name: {
      type: StringConstructor;
      required: true;
    };
    /**
     * title of QTabPane
     */
    title: {
      type: StringConstructor;
      required: true;
    };
    /**
     * width of QTabPane
     */
    width: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * whether QTabPane is disabled
     */
    disabled: {
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
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * key of QTabPane
       */
      name: {
        type: StringConstructor;
        required: true;
      };
      /**
       * title of QTabPane
       */
      title: {
        type: StringConstructor;
        required: true;
      };
      /**
       * width of QTabPane
       */
      width: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * whether QTabPane is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    disabled: boolean;
    width: string | number;
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
