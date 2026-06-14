import { ValidateError, ValidateFieldsError } from 'async-validator';
import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../types/helpers';
import {
  QFormItemPropFor,
  QFormItemPropProp,
  QFormItemPropLabel,
  QFormItemPropSublabel,
  QFormItemPropError,
  QFormItemPropRules,
  QFormItemPropShowErrorMessage,
  QFormItemPropLabelSize
} from './types';
declare function validateField(trigger?: Nullable<string>): Nullable<
  Promise<{
    errors?: Nullable<ValidateError[]>;
    fields?: ValidateFieldsError;
  }>
>;
declare function resetField(): void;
declare var __VLS_1: {},
  __VLS_3: {},
  __VLS_5: {},
  __VLS_13: {
    error: Nullable<string>;
  };
type __VLS_Slots = {} & {
  label?: (props: typeof __VLS_1) => any;
} & {
  sublabel?: (props: typeof __VLS_3) => any;
} & {
  default?: (props: typeof __VLS_5) => any;
} & {
  error?: (props: typeof __VLS_13) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    for: {
      type: PropType<QFormItemPropFor>;
      default: null;
    };
    /**
     * a key of model.In the use of validate and resetFields method,
     * the attribute is required
     */
    prop: {
      type: PropType<QFormItemPropProp>;
      default: null;
    };
    /**
     * label
     */
    label: {
      type: PropType<QFormItemPropLabel>;
      default: null;
    };
    sublabel: {
      type: PropType<QFormItemPropSublabel>;
      default: null;
    };
    /**
     * field error message, set its value and the field will validate error
     * and show this message immediately
     */
    error: {
      type: PropType<QFormItemPropError>;
      default: null;
    };
    /**
     * validation rules of form.
     * https://github.com/yiminghe/async-validator#rules
     */
    rules: {
      type: PropType<QFormItemPropRules>;
      default: null;
    };
    /**
     * whether to show the error message
     */
    showErrorMessage: {
      type: PropType<QFormItemPropShowErrorMessage>;
      default: boolean;
    };
    /**
     * label size
     */
    labelSize: {
      type: PropType<QFormItemPropLabelSize>;
      default: string;
      validator: (value: QFormItemPropLabelSize) => boolean;
    };
  }>,
  {
    validateField: typeof validateField;
    resetField: typeof resetField;
  },
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
      for: {
        type: PropType<QFormItemPropFor>;
        default: null;
      };
      /**
       * a key of model.In the use of validate and resetFields method,
       * the attribute is required
       */
      prop: {
        type: PropType<QFormItemPropProp>;
        default: null;
      };
      /**
       * label
       */
      label: {
        type: PropType<QFormItemPropLabel>;
        default: null;
      };
      sublabel: {
        type: PropType<QFormItemPropSublabel>;
        default: null;
      };
      /**
       * field error message, set its value and the field will validate error
       * and show this message immediately
       */
      error: {
        type: PropType<QFormItemPropError>;
        default: null;
      };
      /**
       * validation rules of form.
       * https://github.com/yiminghe/async-validator#rules
       */
      rules: {
        type: PropType<QFormItemPropRules>;
        default: null;
      };
      /**
       * whether to show the error message
       */
      showErrorMessage: {
        type: PropType<QFormItemPropShowErrorMessage>;
        default: boolean;
      };
      /**
       * label size
       */
      labelSize: {
        type: PropType<QFormItemPropLabelSize>;
        default: string;
        validator: (value: QFormItemPropLabelSize) => boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    error: QFormItemPropError;
    label: QFormItemPropLabel;
    for: QFormItemPropFor;
    prop: QFormItemPropProp;
    sublabel: QFormItemPropSublabel;
    rules: QFormItemPropRules;
    showErrorMessage: QFormItemPropShowErrorMessage;
    labelSize: QFormItemPropLabelSize;
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
