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
import { QCardPropShadow, QCardPropTitle, QCardPropBodyPadding } from '.';
export declare const QCard: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          shadow: {
            type: PropType<QCardPropShadow>;
            default: string;
            validator: (value: 'always' | 'hover' | 'never') => boolean;
          };
          title: {
            type: PropType<QCardPropTitle>;
            default: null;
          };
          bodyPadding: {
            type: PropType<QCardPropBodyPadding>;
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
        title: QCardPropTitle;
        shadow: QCardPropShadow;
        bodyPadding: QCardPropBodyPadding;
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
          shadow: {
            type: PropType<QCardPropShadow>;
            default: string;
            validator: (value: 'always' | 'hover' | 'never') => boolean;
          };
          title: {
            type: PropType<QCardPropTitle>;
            default: null;
          };
          bodyPadding: {
            type: PropType<QCardPropBodyPadding>;
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
        title: QCardPropTitle;
        shadow: QCardPropShadow;
        bodyPadding: QCardPropBodyPadding;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        shadow: {
          type: PropType<QCardPropShadow>;
          default: string;
          validator: (value: 'always' | 'hover' | 'never') => boolean;
        };
        title: {
          type: PropType<QCardPropTitle>;
          default: null;
        };
        bodyPadding: {
          type: PropType<QCardPropBodyPadding>;
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
      title: QCardPropTitle;
      shadow: QCardPropShadow;
      bodyPadding: QCardPropBodyPadding;
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
        header?: (props: {}) => any;
      } & {
        default?: (props: {}) => any;
      } & {
        footer?: (props: {}) => any;
      };
    })
>;
export type {
  QCardProps,
  QCardPropShadow,
  QCardPropTitle,
  QCardPropBodyPadding
} from './src/types';
