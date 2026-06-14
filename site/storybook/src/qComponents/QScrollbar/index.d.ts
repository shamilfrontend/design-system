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
  QScrollbarPropScrollTo,
  QScrollbarPropVisible,
  QScrollbarPropTheme,
  QScrollbarPropWrapClass,
  QScrollbarPropViewTag,
  QScrollbarPropViewClass,
  QScrollbarPropViewStyle,
  QScrollbarPropNoResize
} from './src/types';
export declare const QScrollbar: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          scrollTo: {
            type: PropType<QScrollbarPropScrollTo>;
            default: null;
          };
          visible: {
            type: PropType<QScrollbarPropVisible>;
            default: boolean;
          };
          theme: {
            type: PropType<QScrollbarPropTheme>;
            default: string;
            validator: (value: QScrollbarPropTheme) => boolean;
          };
          wrapClass: {
            type: PropType<QScrollbarPropWrapClass>;
            default: null;
          };
          viewTag: {
            type: PropType<QScrollbarPropViewTag>;
            default: string;
          };
          viewClass: {
            type: PropType<QScrollbarPropViewClass>;
            default: null;
          };
          viewStyle: {
            type: PropType<QScrollbarPropViewStyle>;
            default: null;
          };
          noresize: {
            type: PropType<QScrollbarPropNoResize>;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{}>,
      {
        handleScroll: () => void;
        update: () => void;
      },
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {},
      PublicProps,
      {
        ariaLabel: string;
        visible: QScrollbarPropVisible;
        theme: QScrollbarPropTheme;
        scrollTo: QScrollbarPropScrollTo;
        wrapClass: QScrollbarPropWrapClass;
        viewTag: QScrollbarPropViewTag;
        viewClass: QScrollbarPropViewClass;
        viewStyle: QScrollbarPropViewStyle;
        noresize: QScrollbarPropNoResize;
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
          scrollTo: {
            type: PropType<QScrollbarPropScrollTo>;
            default: null;
          };
          visible: {
            type: PropType<QScrollbarPropVisible>;
            default: boolean;
          };
          theme: {
            type: PropType<QScrollbarPropTheme>;
            default: string;
            validator: (value: QScrollbarPropTheme) => boolean;
          };
          wrapClass: {
            type: PropType<QScrollbarPropWrapClass>;
            default: null;
          };
          viewTag: {
            type: PropType<QScrollbarPropViewTag>;
            default: string;
          };
          viewClass: {
            type: PropType<QScrollbarPropViewClass>;
            default: null;
          };
          viewStyle: {
            type: PropType<QScrollbarPropViewStyle>;
            default: null;
          };
          noresize: {
            type: PropType<QScrollbarPropNoResize>;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
            default: null;
          };
        }>
      > &
        Readonly<{}>,
      {
        handleScroll: () => void;
        update: () => void;
      },
      {},
      {},
      {},
      {
        ariaLabel: string;
        visible: QScrollbarPropVisible;
        theme: QScrollbarPropTheme;
        scrollTo: QScrollbarPropScrollTo;
        wrapClass: QScrollbarPropWrapClass;
        viewTag: QScrollbarPropViewTag;
        viewClass: QScrollbarPropViewClass;
        viewStyle: QScrollbarPropViewStyle;
        noresize: QScrollbarPropNoResize;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        scrollTo: {
          type: PropType<QScrollbarPropScrollTo>;
          default: null;
        };
        visible: {
          type: PropType<QScrollbarPropVisible>;
          default: boolean;
        };
        theme: {
          type: PropType<QScrollbarPropTheme>;
          default: string;
          validator: (value: QScrollbarPropTheme) => boolean;
        };
        wrapClass: {
          type: PropType<QScrollbarPropWrapClass>;
          default: null;
        };
        viewTag: {
          type: PropType<QScrollbarPropViewTag>;
          default: string;
        };
        viewClass: {
          type: PropType<QScrollbarPropViewClass>;
          default: null;
        };
        viewStyle: {
          type: PropType<QScrollbarPropViewStyle>;
          default: null;
        };
        noresize: {
          type: PropType<QScrollbarPropNoResize>;
          default: boolean;
        };
        ariaLabel: {
          type: StringConstructor;
          default: null;
        };
      }>
    > &
      Readonly<{}>,
    {
      handleScroll: () => void;
      update: () => void;
    },
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {},
    string,
    {
      ariaLabel: string;
      visible: QScrollbarPropVisible;
      theme: QScrollbarPropTheme;
      scrollTo: QScrollbarPropScrollTo;
      wrapClass: QScrollbarPropWrapClass;
      viewTag: QScrollbarPropViewTag;
      viewClass: QScrollbarPropViewClass;
      viewStyle: QScrollbarPropViewStyle;
      noresize: QScrollbarPropNoResize;
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
  QScrollbarProps,
  QScrollbarInstance,
  QScrollbarProvider
} from './src/types';
