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
import { QListPropSize, QListPropBordered } from '.';
export declare const QList: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          size: {
            type: PropType<QListPropSize>;
            default: string;
            validator: (value: QListPropSize) => boolean;
          };
          bordered: {
            type: PropType<QListPropBordered>;
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
        size: QListPropSize;
        bordered: boolean;
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
          size: {
            type: PropType<QListPropSize>;
            default: string;
            validator: (value: QListPropSize) => boolean;
          };
          bordered: {
            type: PropType<QListPropBordered>;
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
        size: QListPropSize;
        bordered: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        size: {
          type: PropType<QListPropSize>;
          default: string;
          validator: (value: QListPropSize) => boolean;
        };
        bordered: {
          type: PropType<QListPropBordered>;
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
      size: QListPropSize;
      bordered: boolean;
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
export declare const QListItem: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<{}> & Readonly<{}>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {},
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
      Readonly<{}> & Readonly<{}>,
      {},
      {},
      {},
      {},
      {}
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<{}> & Readonly<{}>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {},
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
        prefix?: (props: {}) => any;
      } & {
        title?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      } & {
        suffix?: (props: {}) => any;
      };
    })
>;
export type { QListPropSize, QListPropBordered } from './src/QList.vue';
