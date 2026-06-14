import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QFormPropModel, QFormPropRules, ValidateFnResult } from './types';
/**
 *  @public
 */
declare function clearValidate(passedProps?: string[] | string): void;
/**
 *  @public
 */
declare function resetFields(passedProps?: string[] | string): void;
/**
 *  @public
 */
declare function validate(
  passedProps?: string[] | string
): Promise<Nullable<ValidateFnResult>>;
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * data of form component
     */
    model: {
      type: PropType<QFormPropModel>;
      default: () => QFormPropModel;
    };
    /**
     * validation rules of form.
     * https://github.com/yiminghe/async-validator#rules
     */
    rules: {
      type: PropType<QFormPropRules>;
      default: () => QFormPropRules;
    };
    /**
     * whether to disabled all components in this form. If set to true,
     * it cannot be overridden by its inner components `disabled` prop
     */
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether required fields should have a red asterisk (star) beside their labels
     */
    hideRequiredAsterisk: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to show the error message
     */
    showErrorMessage: {
      type: BooleanConstructor;
      default: boolean;
    };
    /**
     * whether to trigger validation when the `rules` prop is changed
     */
    validateOnRuleChange: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>,
  {
    validate: typeof validate;
    resetFields: typeof resetFields;
    clearValidate: typeof clearValidate;
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
      /**
       * data of form component
       */
      model: {
        type: PropType<QFormPropModel>;
        default: () => QFormPropModel;
      };
      /**
       * validation rules of form.
       * https://github.com/yiminghe/async-validator#rules
       */
      rules: {
        type: PropType<QFormPropRules>;
        default: () => QFormPropRules;
      };
      /**
       * whether to disabled all components in this form. If set to true,
       * it cannot be overridden by its inner components `disabled` prop
       */
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether required fields should have a red asterisk (star) beside their labels
       */
      hideRequiredAsterisk: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to show the error message
       */
      showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
      };
      /**
       * whether to trigger validation when the `rules` prop is changed
       */
      validateOnRuleChange: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{}>,
  {
    rules: QFormPropRules;
    showErrorMessage: boolean;
    model: QFormPropModel;
    disabled: boolean;
    hideRequiredAsterisk: boolean;
    validateOnRuleChange: boolean;
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
