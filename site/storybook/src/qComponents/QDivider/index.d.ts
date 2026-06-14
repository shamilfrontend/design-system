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
  QDividerPropDirection,
  QDividerPropContentPosition,
  QDividerPropBorderStyle
} from '.';
export declare const QDivider: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          direction: {
            type: PropType<QDividerPropDirection>;
            default: string;
            validator: (value: QDividerPropDirection) => boolean;
          };
          contentPosition: {
            type: PropType<QDividerPropContentPosition>;
            default: string;
            validator: (value: QDividerPropContentPosition) => boolean;
          };
          borderStyle: {
            type: PropType<QDividerPropBorderStyle>;
            default: string;
            validator: (value: QDividerPropBorderStyle) => boolean;
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
        direction: QDividerPropDirection;
        borderStyle: QDividerPropBorderStyle;
        contentPosition: QDividerPropContentPosition;
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
          direction: {
            type: PropType<QDividerPropDirection>;
            default: string;
            validator: (value: QDividerPropDirection) => boolean;
          };
          contentPosition: {
            type: PropType<QDividerPropContentPosition>;
            default: string;
            validator: (value: QDividerPropContentPosition) => boolean;
          };
          borderStyle: {
            type: PropType<QDividerPropBorderStyle>;
            default: string;
            validator: (value: QDividerPropBorderStyle) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        direction: QDividerPropDirection;
        borderStyle: QDividerPropBorderStyle;
        contentPosition: QDividerPropContentPosition;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        direction: {
          type: PropType<QDividerPropDirection>;
          default: string;
          validator: (value: QDividerPropDirection) => boolean;
        };
        contentPosition: {
          type: PropType<QDividerPropContentPosition>;
          default: string;
          validator: (value: QDividerPropContentPosition) => boolean;
        };
        borderStyle: {
          type: PropType<QDividerPropBorderStyle>;
          default: string;
          validator: (value: QDividerPropBorderStyle) => boolean;
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
      direction: QDividerPropDirection;
      borderStyle: QDividerPropBorderStyle;
      contentPosition: QDividerPropContentPosition;
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
  QDividerProps,
  QDividerPropDirection,
  QDividerPropContentPosition,
  QDividerPropBorderStyle
} from './src/types';
