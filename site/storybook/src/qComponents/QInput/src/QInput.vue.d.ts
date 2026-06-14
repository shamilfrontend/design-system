import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QInputPropModelValue,
  QInputPropDisabled,
  QInputPropShowSymbolLimit,
  QInputPropValidateEvent,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropPasswordSwitch,
  QInputPropRootClass
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  suffix?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * default to v-model
     */
    modelValue: {
      type: PropType<QInputPropModelValue>;
      default: null;
    };
    /**
     * whether input is disabled
     */
    disabled: {
      type: PropType<QInputPropDisabled>;
      default: boolean;
    };
    /**
     * shows the counter
     */
    showSymbolLimit: {
      type: PropType<QInputPropShowSymbolLimit>;
      default: boolean;
    };
    /**
     * validate parent form if present
     */
    validateEvent: {
      type: PropType<QInputPropValidateEvent>;
      default: boolean;
    };
    /**
     * suffix icon class
     */
    suffixIcon: {
      type: PropType<QInputPropSuffixIcon>;
      default: null;
    };
    /**
     * whether to show clear button
     */
    clearable: {
      type: PropType<QInputPropClearable>;
      default: boolean;
    };
    /**
     * whether to show password
     */
    passwordSwitch: {
      type: PropType<QInputPropPasswordSwitch>;
      default: boolean;
    };
    /**
     * as native attrs bind to native input, via rootClass you can set class for q-input root
     */
    rootClass: {
      type: PropType<QInputPropRootClass>;
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
    clear: (event: MouseEvent) => any;
    input: (event: Event) => any;
    'update:modelValue': (value: string) => any;
    change: (event: Event) => any;
    focus: (event: FocusEvent) => any;
    blur: (event: FocusEvent) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * default to v-model
       */
      modelValue: {
        type: PropType<QInputPropModelValue>;
        default: null;
      };
      /**
       * whether input is disabled
       */
      disabled: {
        type: PropType<QInputPropDisabled>;
        default: boolean;
      };
      /**
       * shows the counter
       */
      showSymbolLimit: {
        type: PropType<QInputPropShowSymbolLimit>;
        default: boolean;
      };
      /**
       * validate parent form if present
       */
      validateEvent: {
        type: PropType<QInputPropValidateEvent>;
        default: boolean;
      };
      /**
       * suffix icon class
       */
      suffixIcon: {
        type: PropType<QInputPropSuffixIcon>;
        default: null;
      };
      /**
       * whether to show clear button
       */
      clearable: {
        type: PropType<QInputPropClearable>;
        default: boolean;
      };
      /**
       * whether to show password
       */
      passwordSwitch: {
        type: PropType<QInputPropPasswordSwitch>;
        default: boolean;
      };
      /**
       * as native attrs bind to native input, via rootClass you can set class for q-input root
       */
      rootClass: {
        type: PropType<QInputPropRootClass>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onClear?: ((event: MouseEvent) => any) | undefined;
      onInput?: ((event: Event) => any) | undefined;
      'onUpdate:modelValue'?: ((value: string) => any) | undefined;
      onChange?: ((event: Event) => any) | undefined;
      onFocus?: ((event: FocusEvent) => any) | undefined;
      onBlur?: ((event: FocusEvent) => any) | undefined;
    }>,
  {
    disabled: QInputPropDisabled;
    modelValue: QInputPropModelValue;
    showSymbolLimit: QInputPropShowSymbolLimit;
    validateEvent: QInputPropValidateEvent;
    suffixIcon: QInputPropSuffixIcon;
    clearable: QInputPropClearable;
    passwordSwitch: QInputPropPasswordSwitch;
    rootClass: QInputPropRootClass;
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
