import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QCheckboxPropLabelSize,
  QCheckboxPropModelValue,
  QCheckboxPropLabel,
  QCheckboxPropIndeterminate,
  QCheckboxPropDisabled,
  QCheckboxPropRootTag,
  QCheckboxPropValidateEvent
} from './types';
/**
 * @public
 */
declare function nativeClick(): void;
declare var __VLS_10: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * Array for group, Boolean for single
     */
    modelValue: {
      type: PropType<QCheckboxPropModelValue>;
      default: null;
    };
    /**
     * Checkbox label
     */
    label: {
      type: PropType<QCheckboxPropLabel>;
      default: null;
    };
    /**
     * wheteher Checkbox is indeterminate
     */
    indeterminate: {
      type: PropType<QCheckboxPropIndeterminate>;
      default: boolean;
    };
    /**
     * wheteher Checkbox is disabled
     */
    disabled: {
      type: PropType<QCheckboxPropDisabled>;
      default: boolean;
    };
    rootTag: {
      type: PropType<QCheckboxPropRootTag>;
      default: string;
    };
    /**
     * wheteher is validate parent q-form if present
     */
    validateEvent: {
      type: PropType<QCheckboxPropValidateEvent>;
      default: boolean;
    };
    /**
     * label size
     */
    labelSize: {
      type: PropType<QCheckboxPropLabelSize>;
      default: string;
      validator: (value: QCheckboxPropLabelSize) => boolean;
    };
  }>,
  {
    nativeClick: typeof nativeClick;
  },
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:modelValue': (value: boolean) => any;
    change: (value: boolean) => any;
    click: (event: Event) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * Array for group, Boolean for single
       */
      modelValue: {
        type: PropType<QCheckboxPropModelValue>;
        default: null;
      };
      /**
       * Checkbox label
       */
      label: {
        type: PropType<QCheckboxPropLabel>;
        default: null;
      };
      /**
       * wheteher Checkbox is indeterminate
       */
      indeterminate: {
        type: PropType<QCheckboxPropIndeterminate>;
        default: boolean;
      };
      /**
       * wheteher Checkbox is disabled
       */
      disabled: {
        type: PropType<QCheckboxPropDisabled>;
        default: boolean;
      };
      rootTag: {
        type: PropType<QCheckboxPropRootTag>;
        default: string;
      };
      /**
       * wheteher is validate parent q-form if present
       */
      validateEvent: {
        type: PropType<QCheckboxPropValidateEvent>;
        default: boolean;
      };
      /**
       * label size
       */
      labelSize: {
        type: PropType<QCheckboxPropLabelSize>;
        default: string;
        validator: (value: QCheckboxPropLabelSize) => boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
      onChange?: ((value: boolean) => any) | undefined;
      onClick?: ((event: Event) => any) | undefined;
    }>,
  {
    label: QCheckboxPropLabel;
    labelSize: QCheckboxPropLabelSize;
    disabled: QCheckboxPropDisabled;
    modelValue: QCheckboxPropModelValue;
    validateEvent: QCheckboxPropValidateEvent;
    indeterminate: QCheckboxPropIndeterminate;
    rootTag: QCheckboxPropRootTag;
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
