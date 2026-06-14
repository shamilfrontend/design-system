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
import {
  QFormItemPropFor,
  QFormItemPropProp,
  QFormItemPropLabel,
  QFormItemPropSublabel,
  QFormItemPropError,
  QFormItemPropRules,
  QFormItemPropShowErrorMessage,
  QFormItemPropLabelSize
} from '.';
import { ValidateError, ValidateFieldsError } from 'async-validator';
export declare const QFormItem: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          for: {
            type: PropType<QFormItemPropFor>;
            default: null;
          };
          prop: {
            type: PropType<QFormItemPropProp>;
            default: null;
          };
          label: {
            type: PropType<QFormItemPropLabel>;
            default: null;
          };
          sublabel: {
            type: PropType<QFormItemPropSublabel>;
            default: null;
          };
          error: {
            type: PropType<QFormItemPropError>;
            default: null;
          };
          rules: {
            type: PropType<QFormItemPropRules>;
            default: null;
          };
          showErrorMessage: {
            type: PropType<QFormItemPropShowErrorMessage>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QFormItemPropLabelSize>;
            default: string;
            validator: (value: QFormItemPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {
        validateField: (trigger?: Nullable<string>) => Nullable<
          Promise<{
            errors?: Nullable<ValidateError[]>;
            fields?: ValidateFieldsError;
          }>
        >;
        resetField: () => void;
      },
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
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
          for: {
            type: PropType<QFormItemPropFor>;
            default: null;
          };
          prop: {
            type: PropType<QFormItemPropProp>;
            default: null;
          };
          label: {
            type: PropType<QFormItemPropLabel>;
            default: null;
          };
          sublabel: {
            type: PropType<QFormItemPropSublabel>;
            default: null;
          };
          error: {
            type: PropType<QFormItemPropError>;
            default: null;
          };
          rules: {
            type: PropType<QFormItemPropRules>;
            default: null;
          };
          showErrorMessage: {
            type: PropType<QFormItemPropShowErrorMessage>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QFormItemPropLabelSize>;
            default: string;
            validator: (value: QFormItemPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {
        validateField: (trigger?: Nullable<string>) => Nullable<
          Promise<{
            errors?: Nullable<ValidateError[]>;
            fields?: ValidateFieldsError;
          }>
        >;
        resetField: () => void;
      },
      {},
      {},
      {},
      {
        error: QFormItemPropError;
        label: QFormItemPropLabel;
        for: QFormItemPropFor;
        prop: QFormItemPropProp;
        sublabel: QFormItemPropSublabel;
        rules: QFormItemPropRules;
        showErrorMessage: QFormItemPropShowErrorMessage;
        labelSize: QFormItemPropLabelSize;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        for: {
          type: PropType<QFormItemPropFor>;
          default: null;
        };
        prop: {
          type: PropType<QFormItemPropProp>;
          default: null;
        };
        label: {
          type: PropType<QFormItemPropLabel>;
          default: null;
        };
        sublabel: {
          type: PropType<QFormItemPropSublabel>;
          default: null;
        };
        error: {
          type: PropType<QFormItemPropError>;
          default: null;
        };
        rules: {
          type: PropType<QFormItemPropRules>;
          default: null;
        };
        showErrorMessage: {
          type: PropType<QFormItemPropShowErrorMessage>;
          default: boolean;
        };
        labelSize: {
          type: PropType<QFormItemPropLabelSize>;
          default: string;
          validator: (value: QFormItemPropLabelSize) => boolean;
        };
      }>
    > &
      Readonly<{}>,
    {
      validateField: (trigger?: Nullable<string>) => Nullable<
        Promise<{
          errors?: Nullable<ValidateError[]>;
          fields?: ValidateFieldsError;
        }>
      >;
      resetField: () => void;
    },
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
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
        label?: (props: {}) => any;
      } & {
        sublabel?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      } & {
        error?: (props: { error: Nullable<string> }) => any;
      };
    })
>;
export type {
  QFormItemProps,
  QFormItemPropFor,
  QFormItemPropProp,
  QFormItemPropLabel,
  QFormItemPropSublabel,
  QFormItemPropError,
  QFormItemPropRules,
  QFormItemPropShowErrorMessage,
  QFormItemPropLabelSize,
  QFormItemContext,
  QFormItemProvider,
  QFormItemInstance
} from './src/types';
