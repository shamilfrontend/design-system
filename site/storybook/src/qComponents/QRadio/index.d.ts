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
  QRadioPropLabel,
  QRadioPropValue,
  QRadioPropChecked,
  QRadioPropDisabled,
  QRadioPropLabelSize
} from '.';
export declare const QRadio: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          label: {
            type: PropType<QRadioPropLabel>;
            default: null;
          };
          value: {
            type: PropType<QRadioPropValue>;
            default: null;
          };
          checked: {
            type: PropType<QRadioPropChecked>;
            default: boolean;
          };
          disabled: {
            type: PropType<QRadioPropDisabled>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QRadioPropLabelSize>;
            default: string;
            validator: (value: QRadioPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{
          onChange?: ((value: QRadioPropValue) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        change: (value: QRadioPropValue) => any;
      },
      PublicProps,
      {
        label: QRadioPropLabel;
        labelSize: QRadioPropLabelSize;
        disabled: QRadioPropDisabled;
        value: QRadioPropValue;
        checked: QRadioPropChecked;
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
          label: {
            type: PropType<QRadioPropLabel>;
            default: null;
          };
          value: {
            type: PropType<QRadioPropValue>;
            default: null;
          };
          checked: {
            type: PropType<QRadioPropChecked>;
            default: boolean;
          };
          disabled: {
            type: PropType<QRadioPropDisabled>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QRadioPropLabelSize>;
            default: string;
            validator: (value: QRadioPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{
          onChange?: ((value: QRadioPropValue) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        label: QRadioPropLabel;
        labelSize: QRadioPropLabelSize;
        disabled: QRadioPropDisabled;
        value: QRadioPropValue;
        checked: QRadioPropChecked;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        label: {
          type: PropType<QRadioPropLabel>;
          default: null;
        };
        value: {
          type: PropType<QRadioPropValue>;
          default: null;
        };
        checked: {
          type: PropType<QRadioPropChecked>;
          default: boolean;
        };
        disabled: {
          type: PropType<QRadioPropDisabled>;
          default: boolean;
        };
        labelSize: {
          type: PropType<QRadioPropLabelSize>;
          default: string;
          validator: (value: QRadioPropLabelSize) => boolean;
        };
      }>
    > &
      Readonly<{
        onChange?: ((value: QRadioPropValue) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      change: (value: QRadioPropValue) => any;
    },
    string,
    {
      label: QRadioPropLabel;
      labelSize: QRadioPropLabelSize;
      disabled: QRadioPropDisabled;
      value: QRadioPropValue;
      checked: QRadioPropChecked;
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
  QRadioProps,
  QRadioInstance,
  QRadioPropLabel,
  QRadioPropValue,
  QRadioPropChecked,
  QRadioPropDisabled,
  QRadioPropLabelSize
} from './src/types';
