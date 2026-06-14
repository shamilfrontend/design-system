import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QRadioPropLabelSize,
  QRadioPropLabel,
  QRadioPropValue,
  QRadioPropChecked,
  QRadioPropDisabled
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * the value of Radio label
     */
    label: {
      type: PropType<QRadioPropLabel>;
      default: null;
    };
    /**
     * binding value
     */
    value: {
      type: PropType<QRadioPropValue>;
      default: null;
    };
    /**
     * whether Radio is checked
     */
    checked: {
      type: PropType<QRadioPropChecked>;
      default: boolean;
    };
    /**
     * whether Radio is disabled
     */
    disabled: {
      type: PropType<QRadioPropDisabled>;
      default: boolean;
    };
    /**
     * label size
     */
    labelSize: {
      type: PropType<QRadioPropLabelSize>;
      default: string;
      validator: (value: QRadioPropLabelSize) => boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    change: (value: QRadioPropValue) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * the value of Radio label
       */
      label: {
        type: PropType<QRadioPropLabel>;
        default: null;
      };
      /**
       * binding value
       */
      value: {
        type: PropType<QRadioPropValue>;
        default: null;
      };
      /**
       * whether Radio is checked
       */
      checked: {
        type: PropType<QRadioPropChecked>;
        default: boolean;
      };
      /**
       * whether Radio is disabled
       */
      disabled: {
        type: PropType<QRadioPropDisabled>;
        default: boolean;
      };
      /**
       * label size
       */
      labelSize: {
        type: PropType<QRadioPropLabelSize>;
        default: string;
        validator: (value: QRadioPropLabelSize) => boolean;
      };
    }>
  > &
    Readonly<{
      onChange?: ((value: QRadioPropValue) => any) | undefined;
    }>,
  {
    label: QRadioPropLabel;
    labelSize: QRadioPropLabelSize;
    disabled: QRadioPropDisabled;
    value: QRadioPropValue;
    checked: QRadioPropChecked;
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
