import { SFCWithInstall } from '../../../types/helpers';
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
export declare const QTabs: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: StringConstructor;
            default: null;
          };
          tabWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?: ((name: string) => any) | undefined;
          onChange?: ((name: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:modelValue': (name: string) => any;
        change: (name: string) => any;
      },
      PublicProps,
      {
        disabled: boolean;
        modelValue: string;
        tabWidth: string | number;
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
            type: StringConstructor;
            default: null;
          };
          tabWidth: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?: ((name: string) => any) | undefined;
          onChange?: ((name: string) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        disabled: boolean;
        modelValue: string;
        tabWidth: string | number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: StringConstructor;
          default: null;
        };
        tabWidth: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?: ((name: string) => any) | undefined;
        onChange?: ((name: string) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (name: string) => any;
      change: (name: string) => any;
    },
    string,
    {
      disabled: boolean;
      modelValue: string;
      tabWidth: string | number;
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
export type { QTabsProps, QTabsProvider, QTabsInstance } from './src/types';
