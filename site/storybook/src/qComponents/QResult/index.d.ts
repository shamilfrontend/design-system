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
import { QResultPropStatus, QResultPropTitle, QResultPropSubtitle } from '.';
export declare const QResult: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          status: {
            type: PropType<QResultPropStatus>;
            default: string;
            validator: (value: QResultPropStatus) => boolean;
          };
          title: {
            type: PropType<QResultPropTitle>;
            default: null;
          };
          subtitle: {
            type: PropType<QResultPropSubtitle>;
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
        title: QResultPropTitle;
        status: QResultPropStatus;
        subtitle: QResultPropSubtitle;
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
          status: {
            type: PropType<QResultPropStatus>;
            default: string;
            validator: (value: QResultPropStatus) => boolean;
          };
          title: {
            type: PropType<QResultPropTitle>;
            default: null;
          };
          subtitle: {
            type: PropType<QResultPropSubtitle>;
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
        title: QResultPropTitle;
        status: QResultPropStatus;
        subtitle: QResultPropSubtitle;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        status: {
          type: PropType<QResultPropStatus>;
          default: string;
          validator: (value: QResultPropStatus) => boolean;
        };
        title: {
          type: PropType<QResultPropTitle>;
          default: null;
        };
        subtitle: {
          type: PropType<QResultPropSubtitle>;
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
      title: QResultPropTitle;
      status: QResultPropStatus;
      subtitle: QResultPropSubtitle;
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
        icon?: (props: {}) => any;
      } & {
        subtitle?: (props: {}) => any;
      } & {
        extra?: (props: {}) => any;
      };
    })
>;
export type {
  QResultProps,
  QResultPropStatus,
  QResultPropTitle,
  QResultPropSubtitle
} from './src/types';
