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
export declare const QTag: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          closable: {
            type: BooleanConstructor;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClose?: ((...args: any[]) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        close: (...args: any[]) => void;
      },
      PublicProps,
      {
        closable: boolean;
        ariaLabel: string;
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
          closable: {
            type: BooleanConstructor;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClose?: ((...args: any[]) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        closable: boolean;
        ariaLabel: string;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        closable: {
          type: BooleanConstructor;
          default: boolean;
        };
        ariaLabel: {
          type: StringConstructor;
          default: null;
        };
      }>
    > &
      Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      close: (...args: any[]) => void;
    },
    string,
    {
      closable: boolean;
      ariaLabel: string;
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
export type { QTagProps, QTagInstance } from './src/types';
