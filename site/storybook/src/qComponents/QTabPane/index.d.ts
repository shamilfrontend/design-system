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
export declare const QTabPane: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          name: {
            type: StringConstructor;
            required: true;
          };
          title: {
            type: StringConstructor;
            required: true;
          };
          width: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
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
        disabled: boolean;
        width: string | number;
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
          name: {
            type: StringConstructor;
            required: true;
          };
          title: {
            type: StringConstructor;
            required: true;
          };
          width: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
          };
          disabled: {
            type: BooleanConstructor;
            default: boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        disabled: boolean;
        width: string | number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        name: {
          type: StringConstructor;
          required: true;
        };
        title: {
          type: StringConstructor;
          required: true;
        };
        width: {
          type: (StringConstructor | NumberConstructor)[];
          default: null;
        };
        disabled: {
          type: BooleanConstructor;
          default: boolean;
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
      disabled: boolean;
      width: string | number;
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
        content?: (props: {}) => any;
      };
    })
>;
export type { QTabPaneProps, QTabPaneInstance } from './src/types';
