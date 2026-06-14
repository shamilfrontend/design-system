import { SFCWithInstall, Nullable } from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  GlobalComponents,
  GlobalDirectives,
  ComponentProvideOptions,
  ComponentOptionsBase,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps
} from 'vue';
import { QFormPropModel, QFormPropRules } from '.';
import { ValidateFnResult } from './src/types';
export declare const QForm: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          model: {
            type: PropType<QFormPropModel>;
            default: () => QFormPropModel;
          };
          rules: {
            type: PropType<QFormPropRules>;
            default: () => QFormPropRules;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          hideRequiredAsterisk: {
            type: BooleanConstructor;
            default: boolean;
          };
          showErrorMessage: {
            type: BooleanConstructor;
            default: boolean;
          };
          validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{}>,
      {
        validate: (
          passedProps?: string[] | string
        ) => Promise<Nullable<ValidateFnResult>>;
        resetFields: (passedProps?: string[] | string) => void;
        clearValidate: (passedProps?: string[] | string) => void;
      },
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {
        rules: QFormPropRules;
        showErrorMessage: boolean;
        model: QFormPropModel;
        disabled: boolean;
        hideRequiredAsterisk: boolean;
        validateOnRuleChange: boolean;
      },
      true,
      {},
      {},
      GlobalComponents,
      GlobalDirectives,
      string,
      {},
      any,
      ComponentProvideOptions,
      {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
      },
      Readonly<
        ExtractPropTypes<{
          model: {
            type: PropType<QFormPropModel>;
            default: () => QFormPropModel;
          };
          rules: {
            type: PropType<QFormPropRules>;
            default: () => QFormPropRules;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          hideRequiredAsterisk: {
            type: BooleanConstructor;
            default: boolean;
          };
          showErrorMessage: {
            type: BooleanConstructor;
            default: boolean;
          };
          validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{}>,
      {
        validate: (
          passedProps?: string[] | string
        ) => Promise<Nullable<ValidateFnResult>>;
        resetFields: (passedProps?: string[] | string) => void;
        clearValidate: (passedProps?: string[] | string) => void;
      },
      {},
      {},
      {},
      {
        rules: QFormPropRules;
        showErrorMessage: boolean;
        model: QFormPropModel;
        disabled: boolean;
        hideRequiredAsterisk: boolean;
        validateOnRuleChange: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        model: {
          type: PropType<QFormPropModel>;
          default: () => QFormPropModel;
        };
        rules: {
          type: PropType<QFormPropRules>;
          default: () => QFormPropRules;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        hideRequiredAsterisk: {
          type: BooleanConstructor;
          default: boolean;
        };
        showErrorMessage: {
          type: BooleanConstructor;
          default: boolean;
        };
        validateOnRuleChange: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{}>,
    {
      validate: (
        passedProps?: string[] | string
      ) => Promise<Nullable<ValidateFnResult>>;
      resetFields: (passedProps?: string[] | string) => void;
      clearValidate: (passedProps?: string[] | string) => void;
    },
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {
      rules: QFormPropRules;
      showErrorMessage: boolean;
      model: QFormPropModel;
      disabled: boolean;
      hideRequiredAsterisk: boolean;
      validateOnRuleChange: boolean;
    },
    {},
    string,
    {},
    GlobalComponents,
    GlobalDirectives,
    string,
    ComponentProvideOptions
  > &
    VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps &
    (new () => {
      $slots: {
        default?: (props: {}) => any;
      };
    })
>;
export type {
  QFormProps,
  QFormPropModel,
  QFormPropRules,
  QFormProvider,
  QFormInstance
} from './src/types';
