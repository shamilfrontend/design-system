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
export declare const QStatistic: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          title: {
            type: StringConstructor;
            default: null;
          };
          value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
          };
          prefix: {
            type: StringConstructor;
            default: null;
          };
          suffix: {
            type: StringConstructor;
            default: null;
          };
          precision: {
            type: NumberConstructor;
            default: null;
          };
          valueStyle: {
            type: PropType<Record<string, string>>;
            default: () => Record<string, string>;
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
        title: string;
        suffix: string;
        value: string | number;
        precision: number;
        prefix: string;
        valueStyle: Record<string, string>;
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
          value: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
          };
          prefix: {
            type: StringConstructor;
            default: null;
          };
          suffix: {
            type: StringConstructor;
            default: null;
          };
          precision: {
            type: NumberConstructor;
            default: null;
          };
          valueStyle: {
            type: PropType<Record<string, string>>;
            default: () => Record<string, string>;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        title: string;
        suffix: string;
        value: string | number;
        precision: number;
        prefix: string;
        valueStyle: Record<string, string>;
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
        value: {
          type: (StringConstructor | NumberConstructor)[];
          default: number;
        };
        prefix: {
          type: StringConstructor;
          default: null;
        };
        suffix: {
          type: StringConstructor;
          default: null;
        };
        precision: {
          type: NumberConstructor;
          default: null;
        };
        valueStyle: {
          type: PropType<Record<string, string>>;
          default: () => Record<string, string>;
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
      title: string;
      suffix: string;
      value: string | number;
      precision: number;
      prefix: string;
      valueStyle: Record<string, string>;
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
