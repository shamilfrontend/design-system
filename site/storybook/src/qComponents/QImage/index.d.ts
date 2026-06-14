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
  QImagePropSrc,
  QImagePropAlt,
  QImagePropFit,
  QImagePropLazy,
  QImagePropPreview,
  QImagePropWidth,
  QImagePropHeight
} from '.';
export declare const QImage: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          src: {
            type: PropType<QImagePropSrc>;
            required: true;
          };
          alt: {
            type: PropType<QImagePropAlt>;
            default: string;
          };
          fit: {
            type: PropType<QImagePropFit>;
            default: string;
            validator: (value: QImagePropFit) => boolean;
          };
          lazy: {
            type: PropType<QImagePropLazy>;
            default: boolean;
          };
          preview: {
            type: PropType<QImagePropPreview>;
            default: boolean;
          };
          width: {
            type: PropType<QImagePropWidth>;
            default: null;
          };
          height: {
            type: PropType<QImagePropHeight>;
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
        alt: string;
        height: QImagePropHeight;
        width: QImagePropWidth;
        fit: QImagePropFit;
        lazy: boolean;
        preview: boolean;
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
          src: {
            type: PropType<QImagePropSrc>;
            required: true;
          };
          alt: {
            type: PropType<QImagePropAlt>;
            default: string;
          };
          fit: {
            type: PropType<QImagePropFit>;
            default: string;
            validator: (value: QImagePropFit) => boolean;
          };
          lazy: {
            type: PropType<QImagePropLazy>;
            default: boolean;
          };
          preview: {
            type: PropType<QImagePropPreview>;
            default: boolean;
          };
          width: {
            type: PropType<QImagePropWidth>;
            default: null;
          };
          height: {
            type: PropType<QImagePropHeight>;
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
        alt: string;
        height: QImagePropHeight;
        width: QImagePropWidth;
        fit: QImagePropFit;
        lazy: boolean;
        preview: boolean;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        src: {
          type: PropType<QImagePropSrc>;
          required: true;
        };
        alt: {
          type: PropType<QImagePropAlt>;
          default: string;
        };
        fit: {
          type: PropType<QImagePropFit>;
          default: string;
          validator: (value: QImagePropFit) => boolean;
        };
        lazy: {
          type: PropType<QImagePropLazy>;
          default: boolean;
        };
        preview: {
          type: PropType<QImagePropPreview>;
          default: boolean;
        };
        width: {
          type: PropType<QImagePropWidth>;
          default: null;
        };
        height: {
          type: PropType<QImagePropHeight>;
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
      alt: string;
      height: QImagePropHeight;
      width: QImagePropWidth;
      fit: QImagePropFit;
      lazy: boolean;
      preview: boolean;
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
        error?: (props: {}) => any;
      };
    })
>;
export type {
  QImageProps,
  QImagePropSrc,
  QImagePropAlt,
  QImagePropFit,
  QImagePropLazy,
  QImagePropPreview,
  QImagePropWidth,
  QImagePropHeight
} from './src/types';
