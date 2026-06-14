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
export declare const QCollapseItem: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          title: {
            type: StringConstructor;
            default: null;
          };
          name: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
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
        name: string | number;
        title: string;
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
          title: {
            type: StringConstructor;
            default: null;
          };
          name: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        name: string | number;
        title: string;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        title: {
          type: StringConstructor;
          default: null;
        };
        name: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
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
      name: string | number;
      title: string;
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
        title?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      };
    })
>;
export type { QCollapseItemProps, QCollapseItemInstance } from './src/types';
