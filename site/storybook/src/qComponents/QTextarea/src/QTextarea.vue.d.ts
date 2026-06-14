import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTextareaPropResize, QTextareaPropAutosize } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * default to v-model
     */
    modelValue: {
      type: StringConstructor;
      default: null;
    };
    /**
     * control the resizability
     */
    resize: {
      type: PropType<QTextareaPropResize>;
      default: string;
      validator: (value: QTextareaPropResize) => boolean;
    };
    /**
     * whether textarea is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * shows the counter
     */
    showSymbolLimit: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether textarea has an adaptive height. Can accept an object, e.g. { minRows: 2, maxRows: 6 }
     */
    autosize: {
      type: PropType<QTextareaPropAutosize>;
      default: boolean;
    };
    /** validate parent form if present */
    validateEvent: {
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
        type: StringConstructor;
        default: null;
      };
      /**
       * control the resizability
       */
      resize: {
        type: PropType<QTextareaPropResize>;
        default: string;
        validator: (value: QTextareaPropResize) => boolean;
      };
      /**
       * whether textarea is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * shows the counter
       */
      showSymbolLimit: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether textarea has an adaptive height. Can accept an object, e.g. { minRows: 2, maxRows: 6 }
       */
      autosize: {
        type: PropType<QTextareaPropAutosize>;
        default: boolean;
      };
      /** validate parent form if present */
      validateEvent: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onInput?: ((event: Event) => any) | undefined;
      'onUpdate:modelValue'?: ((value: string) => any) | undefined;
      onChange?: ((event: Event) => any) | undefined;
      onFocus?: ((event: FocusEvent) => any) | undefined;
      onBlur?: ((event: FocusEvent) => any) | undefined;
    }>,
  {
    disabled: boolean;
    modelValue: string;
    showSymbolLimit: boolean;
    validateEvent: boolean;
    resize: QTextareaPropResize;
    autosize: QTextareaPropAutosize;
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
