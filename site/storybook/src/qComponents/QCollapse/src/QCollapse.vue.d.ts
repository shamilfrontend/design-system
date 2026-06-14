import {
  PropType,
  Component,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QCollapsePropModelValue } from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QCollapsePropModelValue>;
      default: () => QCollapsePropModelValue;
    };
    /**
     * shrink all panels, except the last selected
     */
    accordion: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     *  control your own close icon
     */
    closeIcon: {
      type: PropType<Component | string>;
      default: null;
    };
    /**
     * control your own open icon
     */
    openIcon: {
      type: PropType<Component | string>;
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
    'update:modelValue': (value: (string | number)[]) => any;
    change: (value: (string | number)[]) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QCollapsePropModelValue>;
        default: () => QCollapsePropModelValue;
      };
      /**
       * shrink all panels, except the last selected
       */
      accordion: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       *  control your own close icon
       */
      closeIcon: {
        type: PropType<Component | string>;
        default: null;
      };
      /**
       * control your own open icon
       */
      openIcon: {
        type: PropType<Component | string>;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: (string | number)[]) => any) | undefined;
      onChange?: ((value: (string | number)[]) => any) | undefined;
    }>,
  {
    modelValue: QCollapsePropModelValue;
    accordion: boolean;
    closeIcon: string | Component;
    openIcon: string | Component;
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
