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
  QSpacePropDirection,
  QSpacePropSize,
  QSpacePropWrap,
  QSpacePropFill,
  QSpacePropAlign
} from '.';
export declare const QSpace: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          direction: {
            type: PropType<QSpacePropDirection>;
            default: string;
            validator: (value: QSpacePropDirection) => boolean;
          };
          size: {
            type: PropType<QSpacePropSize>;
            default: string;
          };
          wrap: {
            type: PropType<QSpacePropWrap>;
            default: boolean;
          };
          fill: {
            type: PropType<QSpacePropFill>;
            default: boolean;
          };
          align: {
            type: PropType<QSpacePropAlign>;
            default: string;
            validator: (value: QSpacePropAlign) => boolean;
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
        size: QSpacePropSize;
        fill: boolean;
        direction: QSpacePropDirection;
        wrap: boolean;
        align: QSpacePropAlign;
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
            type: PropType<QSpacePropDirection>;
            default: string;
            validator: (value: QSpacePropDirection) => boolean;
          };
          size: {
            type: PropType<QSpacePropSize>;
            default: string;
          };
          wrap: {
            type: PropType<QSpacePropWrap>;
            default: boolean;
          };
          fill: {
            type: PropType<QSpacePropFill>;
            default: boolean;
          };
          align: {
            type: PropType<QSpacePropAlign>;
            default: string;
            validator: (value: QSpacePropAlign) => boolean;
          };
        }>
      > &
        Readonly<{}>,
      {},
      {},
      {},
      {},
      {
        size: QSpacePropSize;
        fill: boolean;
        direction: QSpacePropDirection;
        wrap: boolean;
        align: QSpacePropAlign;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        direction: {
          type: PropType<QSpacePropDirection>;
          default: string;
          validator: (value: QSpacePropDirection) => boolean;
        };
        size: {
          type: PropType<QSpacePropSize>;
          default: string;
        };
        wrap: {
          type: PropType<QSpacePropWrap>;
          default: boolean;
        };
        fill: {
          type: PropType<QSpacePropFill>;
          default: boolean;
        };
        align: {
          type: PropType<QSpacePropAlign>;
          default: string;
          validator: (value: QSpacePropAlign) => boolean;
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
      size: QSpacePropSize;
      fill: boolean;
      direction: QSpacePropDirection;
      wrap: boolean;
      align: QSpacePropAlign;
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
  QSpaceProps,
  QSpacePropDirection,
  QSpacePropSize,
  QSpacePropWrap,
  QSpacePropFill,
  QSpacePropAlign
} from './src/types';
