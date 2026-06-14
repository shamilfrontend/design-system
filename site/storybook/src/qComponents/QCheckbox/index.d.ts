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
  QCheckboxPropModelValue,
  QCheckboxPropLabel,
  QCheckboxPropIndeterminate,
  QCheckboxPropDisabled,
  QCheckboxPropRootTag,
  QCheckboxPropValidateEvent,
  QCheckboxPropLabelSize
} from '.';
export declare const QCheckbox: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<QCheckboxPropModelValue>;
            default: null;
          };
          label: {
            type: PropType<QCheckboxPropLabel>;
            default: null;
          };
          indeterminate: {
            type: PropType<QCheckboxPropIndeterminate>;
            default: boolean;
          };
          disabled: {
            type: PropType<QCheckboxPropDisabled>;
            default: boolean;
          };
          rootTag: {
            type: PropType<QCheckboxPropRootTag>;
            default: string;
          };
          validateEvent: {
            type: PropType<QCheckboxPropValidateEvent>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QCheckboxPropLabelSize>;
            default: string;
            validator: (value: QCheckboxPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
          onChange?: ((value: boolean) => any) | undefined;
          onClick?: ((event: Event) => any) | undefined;
        }>,
      {
        nativeClick: () => void;
      },
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        'update:modelValue': (value: boolean) => any;
        change: (value: boolean) => any;
        click: (event: Event) => any;
      },
      PublicProps,
      {
        label: QCheckboxPropLabel;
        labelSize: QCheckboxPropLabelSize;
        disabled: QCheckboxPropDisabled;
        modelValue: QCheckboxPropModelValue;
        validateEvent: QCheckboxPropValidateEvent;
        indeterminate: QCheckboxPropIndeterminate;
        rootTag: QCheckboxPropRootTag;
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
          modelValue: {
            type: PropType<QCheckboxPropModelValue>;
            default: null;
          };
          label: {
            type: PropType<QCheckboxPropLabel>;
            default: null;
          };
          indeterminate: {
            type: PropType<QCheckboxPropIndeterminate>;
            default: boolean;
          };
          disabled: {
            type: PropType<QCheckboxPropDisabled>;
            default: boolean;
          };
          rootTag: {
            type: PropType<QCheckboxPropRootTag>;
            default: string;
          };
          validateEvent: {
            type: PropType<QCheckboxPropValidateEvent>;
            default: boolean;
          };
          labelSize: {
            type: PropType<QCheckboxPropLabelSize>;
            default: string;
            validator: (value: QCheckboxPropLabelSize) => boolean;
          };
        }>
      > &
        Readonly<{
          'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
          onChange?: ((value: boolean) => any) | undefined;
          onClick?: ((event: Event) => any) | undefined;
        }>,
      {
        nativeClick: () => void;
      },
      {},
      {},
      {},
      {
        label: QCheckboxPropLabel;
        labelSize: QCheckboxPropLabelSize;
        disabled: QCheckboxPropDisabled;
        modelValue: QCheckboxPropModelValue;
        validateEvent: QCheckboxPropValidateEvent;
        indeterminate: QCheckboxPropIndeterminate;
        rootTag: QCheckboxPropRootTag;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QCheckboxPropModelValue>;
          default: null;
        };
        label: {
          type: PropType<QCheckboxPropLabel>;
          default: null;
        };
        indeterminate: {
          type: PropType<QCheckboxPropIndeterminate>;
          default: boolean;
        };
        disabled: {
          type: PropType<QCheckboxPropDisabled>;
          default: boolean;
        };
        rootTag: {
          type: PropType<QCheckboxPropRootTag>;
          default: string;
        };
        validateEvent: {
          type: PropType<QCheckboxPropValidateEvent>;
          default: boolean;
        };
        labelSize: {
          type: PropType<QCheckboxPropLabelSize>;
          default: string;
          validator: (value: QCheckboxPropLabelSize) => boolean;
        };
      }>
    > &
      Readonly<{
        'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
        onChange?: ((value: boolean) => any) | undefined;
        onClick?: ((event: Event) => any) | undefined;
      }>,
    {
      nativeClick: () => void;
    },
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      'update:modelValue': (value: boolean) => any;
      change: (value: boolean) => any;
      click: (event: Event) => any;
    },
    string,
    {
      label: QCheckboxPropLabel;
      labelSize: QCheckboxPropLabelSize;
      disabled: QCheckboxPropDisabled;
      modelValue: QCheckboxPropModelValue;
      validateEvent: QCheckboxPropValidateEvent;
      indeterminate: QCheckboxPropIndeterminate;
      rootTag: QCheckboxPropRootTag;
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
  QCheckboxProps,
  QCheckboxInstance,
  QCheckboxPropModelValue,
  QCheckboxPropLabel,
  QCheckboxPropIndeterminate,
  QCheckboxPropDisabled,
  QCheckboxPropRootTag,
  QCheckboxPropValidateEvent,
  QCheckboxPropLabelSize
} from './src/types';
