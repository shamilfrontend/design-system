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
  QPageHeaderPropTitle,
  QPageHeaderPropSubtitle,
  QPageHeaderPropBack
} from '.';
export declare const QPageHeader: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          title: {
            type: PropType<QPageHeaderPropTitle>;
            default: null;
          };
          subtitle: {
            type: PropType<QPageHeaderPropSubtitle>;
            default: null;
          };
          back: {
            type: PropType<QPageHeaderPropBack>;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onBack?: (() => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        back: () => any;
      },
      PublicProps,
      {
        title: QPageHeaderPropTitle;
        subtitle: QPageHeaderPropSubtitle;
        back: boolean;
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
            type: PropType<QPageHeaderPropTitle>;
            default: null;
          };
          subtitle: {
            type: PropType<QPageHeaderPropSubtitle>;
            default: null;
          };
          back: {
            type: PropType<QPageHeaderPropBack>;
            default: boolean;
          };
        }>
      > &
        Readonly<{
          onBack?: (() => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        title: QPageHeaderPropTitle;
        subtitle: QPageHeaderPropSubtitle;
        back: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        title: {
          type: PropType<QPageHeaderPropTitle>;
          default: null;
        };
        subtitle: {
          type: PropType<QPageHeaderPropSubtitle>;
          default: null;
        };
        back: {
          type: PropType<QPageHeaderPropBack>;
          default: boolean;
        };
      }>
    > &
      Readonly<{
        onBack?: (() => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      back: () => any;
    },
    string,
    {
      title: QPageHeaderPropTitle;
      subtitle: QPageHeaderPropSubtitle;
      back: boolean;
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
        breadcrumb?: (props: {}) => any;
      } & {
        title?: (props: {}) => any;
      } & {
        subtitle?: (props: {}) => any;
      } & {
        extra?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      };
    })
>;
export type {
  QPageHeaderProps,
  QPageHeaderPropTitle,
  QPageHeaderPropSubtitle,
  QPageHeaderPropBack,
  QPageHeaderBreadcrumbItem
} from './src/types';
