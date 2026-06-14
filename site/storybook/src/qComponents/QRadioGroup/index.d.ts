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
import {
  QRadioGroupPropDirection,
  QRadioGroupPropModelValue
} from './src/types';
export declare const QRadioGroup: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: (
              | BooleanConstructor
              | StringConstructor
              | NumberConstructor
            )[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          tag: {
            type: StringConstructor;
            default: string;
          };
          direction: {
            type: PropType<QRadioGroupPropDirection>;
            default: string;
            validator: (value: QRadioGroupPropDirection) => boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: QRadioGroupPropModelValue) => any)
            | undefined;
          onChange?: ((value: QRadioGroupPropModelValue) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:modelValue': (value: QRadioGroupPropModelValue) => any;
        change: (value: QRadioGroupPropModelValue) => any;
      },
      PublicProps,
      {
        ariaLabel: string;
        disabled: boolean;
        modelValue: string | number | boolean;
        direction: QRadioGroupPropDirection;
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
            type: (
              | BooleanConstructor
              | StringConstructor
              | NumberConstructor
            )[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
          tag: {
            type: StringConstructor;
            default: string;
          };
          direction: {
            type: PropType<QRadioGroupPropDirection>;
            default: string;
            validator: (value: QRadioGroupPropDirection) => boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: QRadioGroupPropModelValue) => any)
            | undefined;
          onChange?: ((value: QRadioGroupPropModelValue) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        ariaLabel: string;
        disabled: boolean;
        modelValue: string | number | boolean;
        direction: QRadioGroupPropDirection;
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
          type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
          default: null;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
        tag: {
          type: StringConstructor;
          default: string;
        };
        direction: {
          type: PropType<QRadioGroupPropDirection>;
          default: string;
          validator: (value: QRadioGroupPropDirection) => boolean;
        };
        ariaLabel: {
          type: StringConstructor;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: QRadioGroupPropModelValue) => any)
          | undefined;
        onChange?: ((value: QRadioGroupPropModelValue) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: QRadioGroupPropModelValue) => any;
      change: (value: QRadioGroupPropModelValue) => any;
    },
    string,
    {
      ariaLabel: string;
      disabled: boolean;
      modelValue: string | number | boolean;
      direction: QRadioGroupPropDirection;
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
  QRadioGroupProps,
  QRadioGroupProvider,
  QRadioGroupInstance
} from './src/types';
