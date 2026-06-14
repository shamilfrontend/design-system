import { SFCWithInstall } from '../../../types/helpers';
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
import { QCheckboxGroupPropDirection } from './src/types';
export declare const QCheckboxGroup: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<string[]>;
            default: () => [];
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          min: {
            type: NumberConstructor;
            default: number;
          };
          max: {
            type: NumberConstructor;
            default: number;
          };
          tag: {
            type: StringConstructor;
            default: string;
          };
          direction: {
            type: PropType<QCheckboxGroupPropDirection>;
            default: string;
            validator: (value: QCheckboxGroupPropDirection) => boolean;
          };
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
      PublicProps,
      {
        ariaLabel: string;
        min: number;
        max: number;
        disabled: boolean;
        modelValue: string[];
        direction: QCheckboxGroupPropDirection;
        tag: string;
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
            type: PropType<string[]>;
            default: () => [];
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          min: {
            type: NumberConstructor;
            default: number;
          };
          max: {
            type: NumberConstructor;
            default: number;
          };
          tag: {
            type: StringConstructor;
            default: string;
          };
          direction: {
            type: PropType<QCheckboxGroupPropDirection>;
            default: string;
            validator: (value: QCheckboxGroupPropDirection) => boolean;
          };
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
      {},
      {},
      {},
      {},
      {
        ariaLabel: string;
        min: number;
        max: number;
        disabled: boolean;
        modelValue: string[];
        direction: QCheckboxGroupPropDirection;
        tag: string;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<string[]>;
          default: () => [];
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        min: {
          type: NumberConstructor;
          default: number;
        };
        max: {
          type: NumberConstructor;
          default: number;
        };
        tag: {
          type: StringConstructor;
          default: string;
        };
        direction: {
          type: PropType<QCheckboxGroupPropDirection>;
          default: string;
          validator: (value: QCheckboxGroupPropDirection) => boolean;
        };
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
  QCheckboxGroupProps,
  QCheckboxGroupProvider,
  QCheckboxGroupInstance
} from './src/types';
