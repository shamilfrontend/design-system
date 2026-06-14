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
  QAvatarPropSize,
  QAvatarPropShape,
  QAvatarPropSrc,
  QAvatarPropAlt
} from '.';
export declare const QAvatar: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          size: {
            type: PropType<QAvatarPropSize>;
            default: string;
            validator: (value: QAvatarPropSize) => boolean;
          };
          shape: {
            type: PropType<QAvatarPropShape>;
            default: string;
            validator: (value: QAvatarPropShape) => boolean;
          };
          src: {
            type: PropType<QAvatarPropSrc>;
            default: null;
          };
          alt: {
            type: PropType<QAvatarPropAlt>;
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
        size: QAvatarPropSize;
        shape: QAvatarPropShape;
        src: QAvatarPropSrc;
        alt: QAvatarPropAlt;
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
            type: PropType<QAvatarPropSize>;
            default: string;
            validator: (value: QAvatarPropSize) => boolean;
          };
          shape: {
            type: PropType<QAvatarPropShape>;
            default: string;
            validator: (value: QAvatarPropShape) => boolean;
          };
          src: {
            type: PropType<QAvatarPropSrc>;
            default: null;
          };
          alt: {
            type: PropType<QAvatarPropAlt>;
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
        size: QAvatarPropSize;
        shape: QAvatarPropShape;
        src: QAvatarPropSrc;
        alt: QAvatarPropAlt;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        size: {
          type: PropType<QAvatarPropSize>;
          default: string;
          validator: (value: QAvatarPropSize) => boolean;
        };
        shape: {
          type: PropType<QAvatarPropShape>;
          default: string;
          validator: (value: QAvatarPropShape) => boolean;
        };
        src: {
          type: PropType<QAvatarPropSrc>;
          default: null;
        };
        alt: {
          type: PropType<QAvatarPropAlt>;
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
      size: QAvatarPropSize;
      shape: QAvatarPropShape;
      src: QAvatarPropSrc;
      alt: QAvatarPropAlt;
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
  QAvatarProps,
  QAvatarPropSize,
  QAvatarPropShape,
  QAvatarPropSrc,
  QAvatarPropAlt
} from './src/types';
