import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCheckboxGroupPropDirection } from './types';
declare var __VLS_8: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<string[]>;
      default: () => [];
    };
    /**
     * disable all inner QCheckbox'es
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * minimum checked values
     */
    min: {
      type: NumberConstructor;
      default: number;
    };
    /**
     * maximum checked values
     */
    max: {
      type: NumberConstructor;
      default: number;
    };
    /**
     * root tag
     */
    tag: {
      type: StringConstructor;
      default: string;
    };
    /**
     * vertical renders to column, horizontal to row
     */
    direction: {
      type: PropType<QCheckboxGroupPropDirection>;
      default: string;
      validator: (value: QCheckboxGroupPropDirection) => boolean;
    };
    /**
     * accessible label for checkbox group
     */
    ariaLabel: {
      type: StringConstructor;
      default: string;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:modelValue': (value: string[]) => any;
    change: (value: string[]) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<string[]>;
        default: () => [];
      };
      /**
       * disable all inner QCheckbox'es
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * minimum checked values
       */
      min: {
        type: NumberConstructor;
        default: number;
      };
      /**
       * maximum checked values
       */
      max: {
        type: NumberConstructor;
        default: number;
      };
      /**
       * root tag
       */
      tag: {
        type: StringConstructor;
        default: string;
      };
      /**
       * vertical renders to column, horizontal to row
       */
      direction: {
        type: PropType<QCheckboxGroupPropDirection>;
        default: string;
        validator: (value: QCheckboxGroupPropDirection) => boolean;
      };
      /**
       * accessible label for checkbox group
       */
      ariaLabel: {
        type: StringConstructor;
        default: string;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: string[]) => any) | undefined;
      onChange?: ((value: string[]) => any) | undefined;
    }>,
  {
    ariaLabel: string;
    min: number;
    max: number;
    disabled: boolean;
    modelValue: string[];
    direction: QCheckboxGroupPropDirection;
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
