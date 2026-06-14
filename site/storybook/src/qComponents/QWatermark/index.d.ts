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
export declare const QWatermark: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          content: {
            type: StringConstructor;
            default: string;
          };
          gapX: {
            type: NumberConstructor;
            default: number;
          };
          gapY: {
            type: NumberConstructor;
            default: number;
          };
          rotate: {
            type: NumberConstructor;
            default: number;
          };
          zIndex: {
            type: NumberConstructor;
            default: number;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {
        zIndex: number;
        content: string;
        rotate: number;
        gapX: number;
        gapY: number;
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
          content: {
            type: StringConstructor;
            default: string;
          };
          gapX: {
            type: NumberConstructor;
            default: number;
          };
          gapY: {
            type: NumberConstructor;
            default: number;
          };
          rotate: {
            type: NumberConstructor;
            default: number;
          };
          zIndex: {
            type: NumberConstructor;
            default: number;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        zIndex: number;
        content: string;
        rotate: number;
        gapX: number;
        gapY: number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        content: {
          type: StringConstructor;
          default: string;
        };
        gapX: {
          type: NumberConstructor;
          default: number;
        };
        gapY: {
          type: NumberConstructor;
          default: number;
        };
        rotate: {
          type: NumberConstructor;
          default: number;
        };
        zIndex: {
          type: NumberConstructor;
          default: number;
        };
      }>
    > &
      Readonly<{}>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {
      zIndex: number;
      content: string;
      rotate: number;
      gapX: number;
      gapY: number;
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
export type { QWatermarkProps } from './src/types';
