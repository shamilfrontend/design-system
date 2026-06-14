import { SFCWithInstall } from '../../../types/helpers';
import {
  CreateComponentPublicInstanceWithMixins,
  ExtractPropTypes,
  PropType,
  Component,
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
import { QCollapsePropModelValue } from './src/types';
export declare const QCollapse: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<QCollapsePropModelValue>;
            default: () => QCollapsePropModelValue;
          };
          accordion: {
            type: BooleanConstructor;
            default: boolean;
          };
          closeIcon: {
            type: PropType<Component | string>;
            default: null;
          };
          openIcon: {
            type: PropType<Component | string>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: (string | number)[]) => any)
            | undefined;
          onChange?: ((value: (string | number)[]) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:modelValue': (value: (string | number)[]) => any;
        change: (value: (string | number)[]) => any;
      },
      PublicProps,
      {
        modelValue: QCollapsePropModelValue;
        accordion: boolean;
        closeIcon: string | Component;
        openIcon: string | Component;
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
            type: PropType<QCollapsePropModelValue>;
            default: () => QCollapsePropModelValue;
          };
          accordion: {
            type: BooleanConstructor;
            default: boolean;
          };
          closeIcon: {
            type: PropType<Component | string>;
            default: null;
          };
          openIcon: {
            type: PropType<Component | string>;
            default: null;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?:
            | ((value: (string | number)[]) => any)
            | undefined;
          onChange?: ((value: (string | number)[]) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        modelValue: QCollapsePropModelValue;
        accordion: boolean;
        closeIcon: string | Component;
        openIcon: string | Component;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QCollapsePropModelValue>;
          default: () => QCollapsePropModelValue;
        };
        accordion: {
          type: BooleanConstructor;
          default: boolean;
        };
        closeIcon: {
          type: PropType<Component | string>;
          default: null;
        };
        openIcon: {
          type: PropType<Component | string>;
          default: null;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?:
          | ((value: (string | number)[]) => any)
          | undefined;
        onChange?: ((value: (string | number)[]) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: (string | number)[]) => any;
      change: (value: (string | number)[]) => any;
    },
    string,
    {
      modelValue: QCollapsePropModelValue;
      accordion: boolean;
      closeIcon: string | Component;
      openIcon: string | Component;
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
  QCollapseProps,
  QCollapseProvider,
  QCollapseInstance
} from './src/types';
