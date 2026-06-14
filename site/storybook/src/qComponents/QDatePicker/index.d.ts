import { SFCWithInstall, Nullable } from '../../../types/helpers';
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
  QDatePickerPropModelValue,
  QDatePickerPropType,
  QDatePickerPropFormat,
  QDatePickerPropOutputFormat,
  QDatePickerPropPlaceholder,
  QDatePickerPropStartPlaceholder,
  QDatePickerPropEndPlaceholder,
  QDatePickerPropFirstDayOfWeek,
  QDatePickerPropName,
  QDatePickerPropDisabled,
  QDatePickerPropClearable,
  QDatePickerPropEditable,
  QDatePickerPropRangeSeparator,
  QDatePickerPropShortcuts,
  QDatePickerPropDisabledValues,
  QDatePickerPropValidateEvent,
  QDatePickerPropTeleportTo
} from '.';
export declare const QDatePicker: SFCWithInstall<
  {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<
      Readonly<
        ExtractPropTypes<{
          modelValue: {
            type: PropType<QDatePickerPropModelValue>;
            default: null;
            validator: (val: QDatePickerPropModelValue) => boolean;
          };
          type: {
            type: PropType<QDatePickerPropType>;
            default: string;
            validator: (value: QDatePickerPropType) => boolean;
          };
          format: {
            type: PropType<QDatePickerPropFormat>;
            default: string;
            validator: (value: unknown) => boolean;
          };
          outputFormat: {
            type: PropType<QDatePickerPropOutputFormat>;
            default: string;
            validator: (value: QDatePickerPropOutputFormat) => boolean;
          };
          placeholder: {
            type: PropType<QDatePickerPropPlaceholder>;
            default: null;
          };
          startPlaceholder: {
            type: PropType<QDatePickerPropStartPlaceholder>;
            default: null;
          };
          endPlaceholder: {
            type: PropType<QDatePickerPropEndPlaceholder>;
            default: null;
          };
          firstDayOfWeek: {
            type: PropType<QDatePickerPropFirstDayOfWeek>;
            default: null;
            validator: (val: Nullable<number>) => boolean;
          };
          name: {
            type: PropType<QDatePickerPropName>;
            default: string;
          };
          disabled: {
            type: PropType<QDatePickerPropDisabled>;
            default: boolean;
          };
          clearable: {
            type: PropType<QDatePickerPropClearable>;
            default: boolean;
          };
          editable: {
            type: PropType<QDatePickerPropEditable>;
            default: boolean;
          };
          rangeSeparator: {
            type: PropType<QDatePickerPropRangeSeparator>;
            default: string;
          };
          shortcuts: {
            type: PropType<QDatePickerPropShortcuts>;
            default: null;
          };
          disabledValues: {
            type: PropType<QDatePickerPropDisabledValues>;
            default: null;
          };
          validateEvent: {
            type: PropType<QDatePickerPropValidateEvent>;
            default: boolean;
          };
          teleportTo: {
            type: PropType<QDatePickerPropTeleportTo>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onInput?: ((value: string) => any) | undefined;
          'onUpdate:modelValue'?:
            | ((value: QDatePickerPropModelValue) => any)
            | undefined;
          onChange?: ((value: QDatePickerPropModelValue) => any) | undefined;
          onFocus?: (() => any) | undefined;
          onIntermediateChange?:
            | ((value: QDatePickerPropModelValue) => any)
            | undefined;
        }>,
      {},
      {},
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      {
        input: (value: string) => any;
        'update:modelValue': (value: QDatePickerPropModelValue) => any;
        change: (value: QDatePickerPropModelValue) => any;
        focus: () => any;
        intermediateChange: (value: QDatePickerPropModelValue) => any;
      },
      PublicProps,
      {
        name: QDatePickerPropName;
        type: QDatePickerPropType;
        disabled: QDatePickerPropDisabled;
        modelValue: QDatePickerPropModelValue;
        validateEvent: QDatePickerPropValidateEvent;
        clearable: QDatePickerPropClearable;
        placeholder: QDatePickerPropPlaceholder;
        teleportTo: QDatePickerPropTeleportTo;
        shortcuts: QDatePickerPropShortcuts;
        format: string;
        outputFormat: QDatePickerPropOutputFormat;
        startPlaceholder: QDatePickerPropStartPlaceholder;
        endPlaceholder: QDatePickerPropEndPlaceholder;
        firstDayOfWeek: QDatePickerPropFirstDayOfWeek;
        editable: QDatePickerPropEditable;
        rangeSeparator: QDatePickerPropRangeSeparator;
        disabledValues: QDatePickerPropDisabledValues;
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
            type: PropType<QDatePickerPropModelValue>;
            default: null;
            validator: (val: QDatePickerPropModelValue) => boolean;
          };
          type: {
            type: PropType<QDatePickerPropType>;
            default: string;
            validator: (value: QDatePickerPropType) => boolean;
          };
          format: {
            type: PropType<QDatePickerPropFormat>;
            default: string;
            validator: (value: unknown) => boolean;
          };
          outputFormat: {
            type: PropType<QDatePickerPropOutputFormat>;
            default: string;
            validator: (value: QDatePickerPropOutputFormat) => boolean;
          };
          placeholder: {
            type: PropType<QDatePickerPropPlaceholder>;
            default: null;
          };
          startPlaceholder: {
            type: PropType<QDatePickerPropStartPlaceholder>;
            default: null;
          };
          endPlaceholder: {
            type: PropType<QDatePickerPropEndPlaceholder>;
            default: null;
          };
          firstDayOfWeek: {
            type: PropType<QDatePickerPropFirstDayOfWeek>;
            default: null;
            validator: (val: Nullable<number>) => boolean;
          };
          name: {
            type: PropType<QDatePickerPropName>;
            default: string;
          };
          disabled: {
            type: PropType<QDatePickerPropDisabled>;
            default: boolean;
          };
          clearable: {
            type: PropType<QDatePickerPropClearable>;
            default: boolean;
          };
          editable: {
            type: PropType<QDatePickerPropEditable>;
            default: boolean;
          };
          rangeSeparator: {
            type: PropType<QDatePickerPropRangeSeparator>;
            default: string;
          };
          shortcuts: {
            type: PropType<QDatePickerPropShortcuts>;
            default: null;
          };
          disabledValues: {
            type: PropType<QDatePickerPropDisabledValues>;
            default: null;
          };
          validateEvent: {
            type: PropType<QDatePickerPropValidateEvent>;
            default: boolean;
          };
          teleportTo: {
            type: PropType<QDatePickerPropTeleportTo>;
            default: null;
          };
        }>
      > &
        Readonly<{
          onInput?: ((value: string) => any) | undefined;
          'onUpdate:modelValue'?:
            | ((value: QDatePickerPropModelValue) => any)
            | undefined;
          onChange?: ((value: QDatePickerPropModelValue) => any) | undefined;
          onFocus?: (() => any) | undefined;
          onIntermediateChange?:
            | ((value: QDatePickerPropModelValue) => any)
            | undefined;
        }>,
      {},
      {},
      {},
      {},
      {
        name: QDatePickerPropName;
        type: QDatePickerPropType;
        disabled: QDatePickerPropDisabled;
        modelValue: QDatePickerPropModelValue;
        validateEvent: QDatePickerPropValidateEvent;
        clearable: QDatePickerPropClearable;
        placeholder: QDatePickerPropPlaceholder;
        teleportTo: QDatePickerPropTeleportTo;
        shortcuts: QDatePickerPropShortcuts;
        format: string;
        outputFormat: QDatePickerPropOutputFormat;
        startPlaceholder: QDatePickerPropStartPlaceholder;
        endPlaceholder: QDatePickerPropEndPlaceholder;
        firstDayOfWeek: QDatePickerPropFirstDayOfWeek;
        editable: QDatePickerPropEditable;
        rangeSeparator: QDatePickerPropRangeSeparator;
        disabledValues: QDatePickerPropDisabledValues;
      }
    >;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
  } & ComponentOptionsBase<
    Readonly<
      ExtractPropTypes<{
        modelValue: {
          type: PropType<QDatePickerPropModelValue>;
          default: null;
          validator: (val: QDatePickerPropModelValue) => boolean;
        };
        type: {
          type: PropType<QDatePickerPropType>;
          default: string;
          validator: (value: QDatePickerPropType) => boolean;
        };
        format: {
          type: PropType<QDatePickerPropFormat>;
          default: string;
          validator: (value: unknown) => boolean;
        };
        outputFormat: {
          type: PropType<QDatePickerPropOutputFormat>;
          default: string;
          validator: (value: QDatePickerPropOutputFormat) => boolean;
        };
        placeholder: {
          type: PropType<QDatePickerPropPlaceholder>;
          default: null;
        };
        startPlaceholder: {
          type: PropType<QDatePickerPropStartPlaceholder>;
          default: null;
        };
        endPlaceholder: {
          type: PropType<QDatePickerPropEndPlaceholder>;
          default: null;
        };
        firstDayOfWeek: {
          type: PropType<QDatePickerPropFirstDayOfWeek>;
          default: null;
          validator: (val: Nullable<number>) => boolean;
        };
        name: {
          type: PropType<QDatePickerPropName>;
          default: string;
        };
        disabled: {
          type: PropType<QDatePickerPropDisabled>;
          default: boolean;
        };
        clearable: {
          type: PropType<QDatePickerPropClearable>;
          default: boolean;
        };
        editable: {
          type: PropType<QDatePickerPropEditable>;
          default: boolean;
        };
        rangeSeparator: {
          type: PropType<QDatePickerPropRangeSeparator>;
          default: string;
        };
        shortcuts: {
          type: PropType<QDatePickerPropShortcuts>;
          default: null;
        };
        disabledValues: {
          type: PropType<QDatePickerPropDisabledValues>;
          default: null;
        };
        validateEvent: {
          type: PropType<QDatePickerPropValidateEvent>;
          default: boolean;
        };
        teleportTo: {
          type: PropType<QDatePickerPropTeleportTo>;
          default: null;
        };
      }>
    > &
      Readonly<{
        onInput?: ((value: string) => any) | undefined;
        'onUpdate:modelValue'?:
          | ((value: QDatePickerPropModelValue) => any)
          | undefined;
        onChange?: ((value: QDatePickerPropModelValue) => any) | undefined;
        onFocus?: (() => any) | undefined;
        onIntermediateChange?:
          | ((value: QDatePickerPropModelValue) => any)
          | undefined;
      }>,
    {},
    {},
    {},
    {},
    ComponentOptionsMixin,
    ComponentOptionsMixin,
    {
      input: (value: string) => any;
      'update:modelValue': (value: QDatePickerPropModelValue) => any;
      change: (value: QDatePickerPropModelValue) => any;
      focus: () => any;
      intermediateChange: (value: QDatePickerPropModelValue) => any;
    },
    string,
    {
      name: QDatePickerPropName;
      type: QDatePickerPropType;
      disabled: QDatePickerPropDisabled;
      modelValue: QDatePickerPropModelValue;
      validateEvent: QDatePickerPropValidateEvent;
      clearable: QDatePickerPropClearable;
      placeholder: QDatePickerPropPlaceholder;
      teleportTo: QDatePickerPropTeleportTo;
      shortcuts: QDatePickerPropShortcuts;
      format: string;
      outputFormat: QDatePickerPropOutputFormat;
      startPlaceholder: QDatePickerPropStartPlaceholder;
      endPlaceholder: QDatePickerPropEndPlaceholder;
      firstDayOfWeek: QDatePickerPropFirstDayOfWeek;
      editable: QDatePickerPropEditable;
      rangeSeparator: QDatePickerPropRangeSeparator;
      disabledValues: QDatePickerPropDisabledValues;
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
        'range-separator'?: (props: {}) => any;
      };
    })
>;
export type {
  QDatePickerProps,
  QDatePickerPropModelValue,
  QDatePickerPropType,
  QDatePickerPropFormat,
  QDatePickerPropOutputFormat,
  QDatePickerPropPlaceholder,
  QDatePickerPropStartPlaceholder,
  QDatePickerPropEndPlaceholder,
  QDatePickerPropFirstDayOfWeek,
  QDatePickerPropName,
  QDatePickerPropDisabled,
  QDatePickerPropClearable,
  QDatePickerPropEditable,
  QDatePickerPropRangeSeparator,
  QDatePickerPropShortcuts,
  QDatePickerPropDisabledValues,
  QDatePickerPropValidateEvent,
  QDatePickerPropTeleportTo
} from './src/types';
