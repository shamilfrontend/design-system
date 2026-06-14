import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QRadioGroupPropModelValue, QRadioGroupPropDirection } from './types';
declare var __VLS_11: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * the binding value
     */
    modelValue: {
      type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
      default: null;
    };
    /**
     * whether Radio is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * custom element tag
     */
    tag: {
      type: StringConstructor;
      default: string;
    };
    /**
     * defines the direction, whether radio buttons are in the row or column.
     */
    direction: {
      type: PropType<QRadioGroupPropDirection>;
      default: string;
      validator: (value: QRadioGroupPropDirection) => boolean;
    };
    /**
     * accessible label for radio group
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
    'update:modelValue': (value: QRadioGroupPropModelValue) => any;
    change: (value: QRadioGroupPropModelValue) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * the binding value
       */
      modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: null;
      };
      /**
       * whether Radio is disabled
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * custom element tag
       */
      tag: {
        type: StringConstructor;
        default: string;
      };
      /**
       * defines the direction, whether radio buttons are in the row or column.
       */
      direction: {
        type: PropType<QRadioGroupPropDirection>;
        default: string;
        validator: (value: QRadioGroupPropDirection) => boolean;
      };
      /**
       * accessible label for radio group
       */
      ariaLabel: {
        type: StringConstructor;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: QRadioGroupPropModelValue) => any)
        | undefined;
      onChange?: ((value: QRadioGroupPropModelValue) => any) | undefined;
    }>,
  {
    ariaLabel: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    direction: QRadioGroupPropDirection;
    tag: string;
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
