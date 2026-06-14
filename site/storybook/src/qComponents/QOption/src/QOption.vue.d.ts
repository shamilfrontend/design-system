import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QOptionPropValue,
  QOptionPropLabel,
  QOptionPropCreated,
  QOptionPropDisabled
} from './types';
declare var __VLS_6: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    value: {
      type: PropType<QOptionPropValue>;
      required: true;
    };
    label: {
      type: PropType<QOptionPropLabel>;
      default: null;
    };
    created: {
      type: PropType<QOptionPropCreated>;
      default: boolean;
    };
    disabled: {
      type: PropType<QOptionPropDisabled>;
      default: boolean;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      value: {
        type: PropType<QOptionPropValue>;
        required: true;
      };
      label: {
        type: PropType<QOptionPropLabel>;
        default: null;
      };
      created: {
        type: PropType<QOptionPropCreated>;
        default: boolean;
      };
      disabled: {
        type: PropType<QOptionPropDisabled>;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    created: QOptionPropCreated;
    label: QOptionPropLabel;
    disabled: QOptionPropDisabled;
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
