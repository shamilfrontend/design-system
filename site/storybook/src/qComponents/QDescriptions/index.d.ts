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
  QDescriptionsPropTitle,
  QDescriptionsPropColumn,
  QDescriptionsPropSize,
  QDescriptionsItemPropLabel,
  QDescriptionsItemPropSpan
} from '.';
export declare const QDescriptions: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          title: {
            type: PropType<QDescriptionsPropTitle>;
            default: null;
          };
          column: {
            type: PropType<QDescriptionsPropColumn>;
            default: number;
          };
          bordered: {
            type: BooleanConstructor;
            default: boolean;
          };
          size: {
            type: PropType<QDescriptionsPropSize>;
            default: string;
            validator: (value: QDescriptionsPropSize) => boolean;
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
        size: QDescriptionsPropSize;
        title: QDescriptionsPropTitle;
        column: number;
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
          title: {
            type: PropType<QDescriptionsPropTitle>;
            default: null;
          };
          column: {
            type: PropType<QDescriptionsPropColumn>;
            default: number;
          };
          bordered: {
            type: BooleanConstructor;
            default: boolean;
          };
          size: {
            type: PropType<QDescriptionsPropSize>;
            default: string;
            validator: (value: QDescriptionsPropSize) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        size: QDescriptionsPropSize;
        title: QDescriptionsPropTitle;
        column: number;
        bordered: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        title: {
          type: PropType<QDescriptionsPropTitle>;
          default: null;
        };
        column: {
          type: PropType<QDescriptionsPropColumn>;
          default: number;
        };
        bordered: {
          type: BooleanConstructor;
          default: boolean;
        };
        size: {
          type: PropType<QDescriptionsPropSize>;
          default: string;
          validator: (value: QDescriptionsPropSize) => boolean;
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
      size: QDescriptionsPropSize;
      title: QDescriptionsPropTitle;
      column: number;
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
export declare const QDescriptionsItem: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          label: {
            type: PropType<QDescriptionsItemPropLabel>;
            default: string;
          };
          span: {
            type: PropType<QDescriptionsItemPropSpan>;
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
        label: string;
        span: number;
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
          label: {
            type: PropType<QDescriptionsItemPropLabel>;
            default: string;
          };
          span: {
            type: PropType<QDescriptionsItemPropSpan>;
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
        label: string;
        span: number;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        label: {
          type: PropType<QDescriptionsItemPropLabel>;
          default: string;
        };
        span: {
          type: PropType<QDescriptionsItemPropSpan>;
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
      label: string;
      span: number;
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
  QDescriptionsPropTitle,
  QDescriptionsPropColumn,
  QDescriptionsPropBordered,
  QDescriptionsPropSize
} from './src/QDescriptions.vue';
export type {
  QDescriptionsItemPropLabel,
  QDescriptionsItemPropSpan
} from './src/QDescriptionsItem.vue';
