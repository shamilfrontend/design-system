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
export declare const QCol: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          tag: {
            type: StringConstructor;
            default: string;
          };
          cols: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
            validator: (value: Nullable<string | number>) => boolean;
          };
          offset: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
            validator: (value: Nullable<string | number>) => boolean;
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
        offset: string | number;
        tag: string;
        cols: string | number;
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
          tag: {
            type: StringConstructor;
            default: string;
          };
          cols: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
            validator: (value: Nullable<string | number>) => boolean;
          };
          offset: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
            validator: (value: Nullable<string | number>) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        offset: string | number;
        tag: string;
        cols: string | number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        tag: {
          type: StringConstructor;
          default: string;
        };
        cols: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
          validator: (value: Nullable<string | number>) => boolean;
        };
        offset: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
          validator: (value: Nullable<string | number>) => boolean;
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
      offset: string | number;
      tag: string;
      cols: string | number;
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
export type { QColProps, QColInstance } from './src/types';
