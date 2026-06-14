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
  QBadgePropValue,
  QBadgePropMax,
  QBadgePropType,
  QBadgePropIsDot,
  QBadgePropHidden
} from '.';
export declare const QBadge: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          value: {
            type: PropType<QBadgePropValue>;
            default: null;
          };
          max: {
            type: PropType<QBadgePropMax>;
            default: number;
          };
          type: {
            type: PropType<QBadgePropType>;
            default: string;
            validator: (
              value: 'success' | 'warning' | 'info' | 'primary' | 'danger'
            ) => boolean;
          };
          isDot: {
            type: PropType<QBadgePropIsDot>;
            default: boolean;
          };
          hidden: {
            type: PropType<QBadgePropHidden>;
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
        type: QBadgePropType;
        max: QBadgePropMax;
        hidden: QBadgePropHidden;
        value: QBadgePropValue;
        isDot: QBadgePropIsDot;
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
          value: {
            type: PropType<QBadgePropValue>;
            default: null;
          };
          max: {
            type: PropType<QBadgePropMax>;
            default: number;
          };
          type: {
            type: PropType<QBadgePropType>;
            default: string;
            validator: (
              value: 'success' | 'warning' | 'info' | 'primary' | 'danger'
            ) => boolean;
          };
          isDot: {
            type: PropType<QBadgePropIsDot>;
            default: boolean;
          };
          hidden: {
            type: PropType<QBadgePropHidden>;
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
        type: QBadgePropType;
        max: QBadgePropMax;
        hidden: QBadgePropHidden;
        value: QBadgePropValue;
        isDot: QBadgePropIsDot;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        value: {
          type: PropType<QBadgePropValue>;
          default: null;
        };
        max: {
          type: PropType<QBadgePropMax>;
          default: number;
        };
        type: {
          type: PropType<QBadgePropType>;
          default: string;
          validator: (
            value: 'success' | 'warning' | 'info' | 'primary' | 'danger'
          ) => boolean;
        };
        isDot: {
          type: PropType<QBadgePropIsDot>;
          default: boolean;
        };
        hidden: {
          type: PropType<QBadgePropHidden>;
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
      type: QBadgePropType;
      max: QBadgePropMax;
      hidden: QBadgePropHidden;
      value: QBadgePropValue;
      isDot: QBadgePropIsDot;
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
  QBadgeProps,
  QBadgePropValue,
  QBadgePropMax,
  QBadgePropType,
  QBadgePropIsDot,
  QBadgePropHidden
} from './src/types';
