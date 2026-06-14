import { QSwitchEmitValueType } from './types';
import {
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    /**
     * default to v-model
     */
    modelValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: boolean;
    };
    /**
     * value for active QSwitch state
     */
    activeValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: boolean;
    };
    /**
     * value for inactive QSwitch state
     */
    inactiveValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: boolean;
    };
    /**
     * whether QSwitch is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to show loader inside the QSwitch
     */
    loading: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * validate parent form if present
     */
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
    'update:modelValue': (value: QSwitchEmitValueType) => any;
    change: (value: QSwitchEmitValueType) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * default to v-model
       */
      modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      /**
       * value for active QSwitch state
       */
      activeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      /**
       * value for inactive QSwitch state
       */
      inactiveValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
      };
      /**
       * whether QSwitch is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to show loader inside the QSwitch
       */
      loading: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * validate parent form if present
       */
      validateEvent: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: QSwitchEmitValueType) => any)
        | undefined;
      onChange?: ((value: QSwitchEmitValueType) => any) | undefined;
    }>,
  {
    loading: boolean;
    disabled: boolean;
    modelValue: string | number | boolean;
    validateEvent: boolean;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
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
