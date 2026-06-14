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
    modelValue: {
      type: StringConstructor;
      default: null;
    };
    /**
     * width of QTabPanes
     */
    tabWidth: {
      type: (StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * whether QTabs is disabled
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
  {
    'update:modelValue': (name: string) => any;
    change: (name: string) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: StringConstructor;
        default: null;
      };
      /**
       * width of QTabPanes
       */
      tabWidth: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * whether QTabs is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((name: string) => any) | undefined;
      onChange?: ((name: string) => any) | undefined;
    }>,
  {
    disabled: boolean;
    modelValue: string;
    tabWidth: string | number;
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
