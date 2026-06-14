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
  QButtonPropType,
  QButtonPropTheme,
  QButtonPropSize,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropCircle,
  QButtonPropFullWidth
} from '.';
export declare const QButton: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          type: {
            type: PropType<QButtonPropType>;
            default: string;
            validator: (value: QButtonPropType) => boolean;
          };
          theme: {
            type: PropType<QButtonPropTheme>;
            default: string;
            validator: (value: QButtonPropTheme) => boolean;
          };
          size: {
            type: PropType<QButtonPropSize>;
            default: string;
            validator: (value: QButtonPropSize) => boolean;
          };
          icon: {
            type: PropType<QButtonPropIcon>;
            default: null;
          };
          nativeType: {
            type: PropType<QButtonPropNativeType>;
            default: string;
            validator: (value: QButtonPropNativeType) => boolean;
          };
          loading: {
            type: PropType<QButtonPropLoading>;
            default: boolean;
          };
          disabled: {
            type: PropType<QButtonPropDisabled>;
            default: boolean;
          };
          autofocus: {
            type: PropType<QButtonPropAutofocus>;
            default: boolean;
          };
          circle: {
            type: PropType<QButtonPropCircle>;
            default: boolean;
          };
          fullWidth: {
            type: PropType<QButtonPropFullWidth>;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
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
        loading: QButtonPropLoading;
        size: QButtonPropSize;
        type: QButtonPropType;
        ariaLabel: string;
        circle: QButtonPropCircle;
        disabled: QButtonPropDisabled;
        icon: QButtonPropIcon;
        theme: QButtonPropTheme;
        nativeType: QButtonPropNativeType;
        autofocus: QButtonPropAutofocus;
        fullWidth: QButtonPropFullWidth;
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
          type: {
            type: PropType<QButtonPropType>;
            default: string;
            validator: (value: QButtonPropType) => boolean;
          };
          theme: {
            type: PropType<QButtonPropTheme>;
            default: string;
            validator: (value: QButtonPropTheme) => boolean;
          };
          size: {
            type: PropType<QButtonPropSize>;
            default: string;
            validator: (value: QButtonPropSize) => boolean;
          };
          icon: {
            type: PropType<QButtonPropIcon>;
            default: null;
          };
          nativeType: {
            type: PropType<QButtonPropNativeType>;
            default: string;
            validator: (value: QButtonPropNativeType) => boolean;
          };
          loading: {
            type: PropType<QButtonPropLoading>;
            default: boolean;
          };
          disabled: {
            type: PropType<QButtonPropDisabled>;
            default: boolean;
          };
          autofocus: {
            type: PropType<QButtonPropAutofocus>;
            default: boolean;
          };
          circle: {
            type: PropType<QButtonPropCircle>;
            default: boolean;
          };
          fullWidth: {
            type: PropType<QButtonPropFullWidth>;
            default: boolean;
          };
          ariaLabel: {
            type: StringConstructor;
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
        loading: QButtonPropLoading;
        size: QButtonPropSize;
        type: QButtonPropType;
        ariaLabel: string;
        circle: QButtonPropCircle;
        disabled: QButtonPropDisabled;
        icon: QButtonPropIcon;
        theme: QButtonPropTheme;
        nativeType: QButtonPropNativeType;
        autofocus: QButtonPropAutofocus;
        fullWidth: QButtonPropFullWidth;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        type: {
          type: PropType<QButtonPropType>;
          default: string;
          validator: (value: QButtonPropType) => boolean;
        };
        theme: {
          type: PropType<QButtonPropTheme>;
          default: string;
          validator: (value: QButtonPropTheme) => boolean;
        };
        size: {
          type: PropType<QButtonPropSize>;
          default: string;
          validator: (value: QButtonPropSize) => boolean;
        };
        icon: {
          type: PropType<QButtonPropIcon>;
          default: null;
        };
        nativeType: {
          type: PropType<QButtonPropNativeType>;
          default: string;
          validator: (value: QButtonPropNativeType) => boolean;
        };
        loading: {
          type: PropType<QButtonPropLoading>;
          default: boolean;
        };
        disabled: {
          type: PropType<QButtonPropDisabled>;
          default: boolean;
        };
        autofocus: {
          type: PropType<QButtonPropAutofocus>;
          default: boolean;
        };
        circle: {
          type: PropType<QButtonPropCircle>;
          default: boolean;
        };
        fullWidth: {
          type: PropType<QButtonPropFullWidth>;
          default: boolean;
        };
        ariaLabel: {
          type: StringConstructor;
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
      loading: QButtonPropLoading;
      size: QButtonPropSize;
      type: QButtonPropType;
      ariaLabel: string;
      circle: QButtonPropCircle;
      disabled: QButtonPropDisabled;
      icon: QButtonPropIcon;
      theme: QButtonPropTheme;
      nativeType: QButtonPropNativeType;
      autofocus: QButtonPropAutofocus;
      fullWidth: QButtonPropFullWidth;
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
  QButtonProps,
  QButtonPropType,
  QButtonPropTheme,
  QButtonPropSize,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropCircle,
  QButtonPropFullWidth
} from './src/types';
