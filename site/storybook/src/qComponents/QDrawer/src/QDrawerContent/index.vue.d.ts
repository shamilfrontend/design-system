import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare var __VLS_1: {}, __VLS_9: {};
type __VLS_Slots = {} & {
  title?: (props: typeof __VLS_1) => any;
} & {
  default?: (props: typeof __VLS_9) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * title of the QDrawer
     */
    title: {
      type: StringConstructor;
      default: null;
    };
    /**
     * whether to hide close button
     */
    hideCloseButton: {
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
       * title of the QDrawer
       */
      title: {
        type: StringConstructor;
        default: null;
      };
      /**
       * whether to hide close button
       */
      hideCloseButton: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    title: string;
    hideCloseButton: boolean;
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
