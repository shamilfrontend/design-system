import { SFCWithInstall, Nullable } from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
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
export declare const QInputNumber: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: NumberConstructor;
            default: null;
          };
          precision: {
            type: NumberConstructor;
            default: null;
            validator: (val: number) => boolean;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          min: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
          };
          max: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
          };
          prefix: {
            type: StringConstructor;
            default: null;
          };
          suffix: {
            type: StringConstructor;
            default: null;
          };
          validateEvent: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onInput?: ((value: Nullable<number>) => any) | undefined;
          'onUpdate:modelValue'?:
            | ((value: Nullable<number>) => any)
            | undefined;
          onChange?: ((value: Nullable<number>) => any) | undefined;
          onFocus?: ((event: FocusEvent) => any) | undefined;
          onBlur?: ((event: FocusEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        input: (value: Nullable<number>) => any;
        'update:modelValue': (value: Nullable<number>) => any;
        change: (value: Nullable<number>) => any;
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
      },
      PublicProps,
      {
        min: number;
        max: number;
        disabled: boolean;
        modelValue: number;
        validateEvent: boolean;
        suffix: string;
        precision: number;
        prefix: string;
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
          modelValue: {
            type: NumberConstructor;
            default: null;
          };
          precision: {
            type: NumberConstructor;
            default: null;
            validator: (val: number) => boolean;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          min: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
          };
          max: {
            type: NumberConstructor;
            default: number;
            validator: (val: number) => boolean;
          };
          prefix: {
            type: StringConstructor;
            default: null;
          };
          suffix: {
            type: StringConstructor;
            default: null;
          };
          validateEvent: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onInput?: ((value: Nullable<number>) => any) | undefined;
          'onUpdate:modelValue'?:
            | ((value: Nullable<number>) => any)
            | undefined;
          onChange?: ((value: Nullable<number>) => any) | undefined;
          onFocus?: ((event: FocusEvent) => any) | undefined;
          onBlur?: ((event: FocusEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        min: number;
        max: number;
        disabled: boolean;
        modelValue: number;
        validateEvent: boolean;
        suffix: string;
        precision: number;
        prefix: string;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: NumberConstructor;
          default: null;
        };
        precision: {
          type: NumberConstructor;
          default: null;
          validator: (val: number) => boolean;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        min: {
          type: NumberConstructor;
          default: number;
          validator: (val: number) => boolean;
        };
        max: {
          type: NumberConstructor;
          default: number;
          validator: (val: number) => boolean;
        };
        prefix: {
          type: StringConstructor;
          default: null;
        };
        suffix: {
          type: StringConstructor;
          default: null;
        };
        validateEvent: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        onInput?: ((value: Nullable<number>) => any) | undefined;
        'onUpdate:modelValue'?: ((value: Nullable<number>) => any) | undefined;
        onChange?: ((value: Nullable<number>) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      input: (value: Nullable<number>) => any;
      'update:modelValue': (value: Nullable<number>) => any;
      change: (value: Nullable<number>) => any;
      focus: (event: FocusEvent) => any;
      blur: (event: FocusEvent) => any;
    },
    string,
    {
      min: number;
      max: number;
      disabled: boolean;
      modelValue: number;
      validateEvent: boolean;
      suffix: string;
      precision: number;
      prefix: string;
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
        postfix?: (props: {}) => any;
      };
    })
>;
export type { QInputNumberProps, QInputNumberInstance } from './src/types';
