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
    /**
     * whether is close button shown
     */
    closable: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * accessible label for close button
     */
    ariaLabel: {
      type: StringConstructor;
      default: null;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    close: (...args: any[]) => void;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * whether is close button shown
       */
      closable: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * accessible label for close button
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClose?: ((...args: any[]) => any) | undefined;
    }>,
  {
    closable: boolean;
    ariaLabel: string;
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
