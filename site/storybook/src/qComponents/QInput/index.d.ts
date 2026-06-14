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
  QInputPropModelValue,
  QInputPropDisabled,
  QInputPropShowSymbolLimit,
  QInputPropValidateEvent,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropPasswordSwitch,
  QInputPropRootClass
} from '.';
export declare const QInput: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<QInputPropModelValue>;
            default: null;
          };
          disabled: {
            type: PropType<QInputPropDisabled>;
            default: boolean;
          };
          showSymbolLimit: {
            type: PropType<QInputPropShowSymbolLimit>;
            default: boolean;
          };
          validateEvent: {
            type: PropType<QInputPropValidateEvent>;
            default: boolean;
          };
          suffixIcon: {
            type: PropType<QInputPropSuffixIcon>;
            default: null;
          };
          clearable: {
            type: PropType<QInputPropClearable>;
            default: boolean;
          };
          passwordSwitch: {
            type: PropType<QInputPropPasswordSwitch>;
            default: boolean;
          };
          rootClass: {
            type: PropType<QInputPropRootClass>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClear?: ((event: MouseEvent) => any) | undefined;
          onInput?: ((event: Event) => any) | undefined;
          'onUpdate:modelValue'?: ((value: string) => any) | undefined;
          onChange?: ((event: Event) => any) | undefined;
          onFocus?: ((event: FocusEvent) => any) | undefined;
          onBlur?: ((event: FocusEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        clear: (event: MouseEvent) => any;
        input: (event: Event) => any;
        'update:modelValue': (value: string) => any;
        change: (event: Event) => any;
        focus: (event: FocusEvent) => any;
        blur: (event: FocusEvent) => any;
      },
      PublicProps,
      {
        disabled: QInputPropDisabled;
        modelValue: QInputPropModelValue;
        showSymbolLimit: QInputPropShowSymbolLimit;
        validateEvent: QInputPropValidateEvent;
        suffixIcon: QInputPropSuffixIcon;
        clearable: QInputPropClearable;
        passwordSwitch: QInputPropPasswordSwitch;
        rootClass: QInputPropRootClass;
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
            type: PropType<QInputPropModelValue>;
            default: null;
          };
          disabled: {
            type: PropType<QInputPropDisabled>;
            default: boolean;
          };
          showSymbolLimit: {
            type: PropType<QInputPropShowSymbolLimit>;
            default: boolean;
          };
          validateEvent: {
            type: PropType<QInputPropValidateEvent>;
            default: boolean;
          };
          suffixIcon: {
            type: PropType<QInputPropSuffixIcon>;
            default: null;
          };
          clearable: {
            type: PropType<QInputPropClearable>;
            default: boolean;
          };
          passwordSwitch: {
            type: PropType<QInputPropPasswordSwitch>;
            default: boolean;
          };
          rootClass: {
            type: PropType<QInputPropRootClass>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onClear?: ((event: MouseEvent) => any) | undefined;
          onInput?: ((event: Event) => any) | undefined;
          'onUpdate:modelValue'?: ((value: string) => any) | undefined;
          onChange?: ((event: Event) => any) | undefined;
          onFocus?: ((event: FocusEvent) => any) | undefined;
          onBlur?: ((event: FocusEvent) => any) | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        disabled: QInputPropDisabled;
        modelValue: QInputPropModelValue;
        showSymbolLimit: QInputPropShowSymbolLimit;
        validateEvent: QInputPropValidateEvent;
        suffixIcon: QInputPropSuffixIcon;
        clearable: QInputPropClearable;
        passwordSwitch: QInputPropPasswordSwitch;
        rootClass: QInputPropRootClass;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QInputPropModelValue>;
          default: null;
        };
        disabled: {
          type: PropType<QInputPropDisabled>;
          default: boolean;
        };
        showSymbolLimit: {
          type: PropType<QInputPropShowSymbolLimit>;
          default: boolean;
        };
        validateEvent: {
          type: PropType<QInputPropValidateEvent>;
          default: boolean;
        };
        suffixIcon: {
          type: PropType<QInputPropSuffixIcon>;
          default: null;
        };
        clearable: {
          type: PropType<QInputPropClearable>;
          default: boolean;
        };
        passwordSwitch: {
          type: PropType<QInputPropPasswordSwitch>;
          default: boolean;
        };
        rootClass: {
          type: PropType<QInputPropRootClass>;
          default: null;
        };
      }>
    > &
      Readonly<{
        onClear?: ((event: MouseEvent) => any) | undefined;
        onInput?: ((event: Event) => any) | undefined;
        'onUpdate:modelValue'?: ((value: string) => any) | undefined;
        onChange?: ((event: Event) => any) | undefined;
        onFocus?: ((event: FocusEvent) => any) | undefined;
        onBlur?: ((event: FocusEvent) => any) | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      clear: (event: MouseEvent) => any;
      input: (event: Event) => any;
      'update:modelValue': (value: string) => any;
      change: (event: Event) => any;
      focus: (event: FocusEvent) => any;
      blur: (event: FocusEvent) => any;
    },
    string,
    {
      disabled: QInputPropDisabled;
      modelValue: QInputPropModelValue;
      showSymbolLimit: QInputPropShowSymbolLimit;
      validateEvent: QInputPropValidateEvent;
      suffixIcon: QInputPropSuffixIcon;
      clearable: QInputPropClearable;
      passwordSwitch: QInputPropPasswordSwitch;
      rootClass: QInputPropRootClass;
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
        suffix?: (props: {}) => any;
      };
    })
>;
export type {
  QInputProps,
  QInputInstance,
  QInputPropModelValue,
  QInputPropDisabled,
  QInputPropShowSymbolLimit,
  QInputPropValidateEvent,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropPasswordSwitch,
  QInputPropRootClass
} from './src/types';
