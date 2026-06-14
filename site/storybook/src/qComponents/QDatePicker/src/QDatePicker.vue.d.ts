import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../types/helpers';
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
} from './types';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
  'range-separator'?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: DefineComponent<
  ExtractPropTypes<{
    /**
     * type Date, type String (ISO), array for ranges
     */
    modelValue: {
      type: PropType<QDatePickerPropModelValue>;
      default: null;
      validator: (val: QDatePickerPropModelValue) => boolean;
    };
    /**
     * one of suggested types
     */
    type: {
      type: PropType<QDatePickerPropType>;
      default: string;
      validator: (value: QDatePickerPropType) => boolean;
    };
    /**
     * any format from date-fns https://date-fns.org/v2.16.1/docs/format
     */
    format: {
      type: PropType<QDatePickerPropFormat>;
      default: string;
      validator: (value: unknown) => boolean;
    };
    /**
     * two options of returned value: 'date' - type Date format, 'iso' - ISO string format
     */
    outputFormat: {
      type: PropType<QDatePickerPropOutputFormat>;
      default: string;
      validator: (value: QDatePickerPropOutputFormat) => boolean;
    };
    placeholder: {
      type: PropType<QDatePickerPropPlaceholder>;
      default: null;
    };
    /**
     * only for ranged types
     */
    startPlaceholder: {
      type: PropType<QDatePickerPropStartPlaceholder>;
      default: null;
    };
    /**
     * only for ranged types
     */
    endPlaceholder: {
      type: PropType<QDatePickerPropEndPlaceholder>;
      default: null;
    };
    /**
     * start with monday by default
     */
    firstDayOfWeek: {
      type: PropType<QDatePickerPropFirstDayOfWeek>;
      default: null;
      validator: (val: Nullable<number>) => boolean;
    };
    /**
     * as native name for input
     */
    name: {
      type: PropType<QDatePickerPropName>;
      default: string;
    };
    /**
     * whether QDatePicker is disabled
     */
    disabled: {
      type: PropType<QDatePickerPropDisabled>;
      default: boolean;
    };
    /**
     * whether DatePicker is clearable
     */
    clearable: {
      type: PropType<QDatePickerPropClearable>;
      default: boolean;
    };
    /**
     * whether DatePicker is editable, for type is `date` only
     */
    editable: {
      type: PropType<QDatePickerPropEditable>;
      default: boolean;
    };
    /**
     * separator in the middle of the range
     */
    rangeSeparator: {
      type: PropType<QDatePickerPropRangeSeparator>;
      default: string;
    };
    /**
     * array of { text: 'string', value: 'Date' }
     */
    shortcuts: {
      type: PropType<QDatePickerPropShortcuts>;
      default: null;
    };
    /**
     * any field is optional:
     * `to` - disable all before this date,
     * `from` - disable after this date,
     * `ranges` - array of dateranges, each daterange is object and must has `start` and `end` field
     */
    disabledValues: {
      type: PropType<QDatePickerPropDisabledValues>;
      default: null;
    };
    /**
     * whether to trigger form validation
     */
    validateEvent: {
      type: PropType<QDatePickerPropValidateEvent>;
      default: boolean;
    };
    /**
     * Specifies a target element where QDatePicker will be moved.
     * (has to be a valid query selector, or an HTMLElement)
     */
    teleportTo: {
      type: PropType<QDatePickerPropTeleportTo>;
      default: null;
    };
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
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      /**
       * type Date, type String (ISO), array for ranges
       */
      modelValue: {
        type: PropType<QDatePickerPropModelValue>;
        default: null;
        validator: (val: QDatePickerPropModelValue) => boolean;
      };
      /**
       * one of suggested types
       */
      type: {
        type: PropType<QDatePickerPropType>;
        default: string;
        validator: (value: QDatePickerPropType) => boolean;
      };
      /**
       * any format from date-fns https://date-fns.org/v2.16.1/docs/format
       */
      format: {
        type: PropType<QDatePickerPropFormat>;
        default: string;
        validator: (value: unknown) => boolean;
      };
      /**
       * two options of returned value: 'date' - type Date format, 'iso' - ISO string format
       */
      outputFormat: {
        type: PropType<QDatePickerPropOutputFormat>;
        default: string;
        validator: (value: QDatePickerPropOutputFormat) => boolean;
      };
      placeholder: {
        type: PropType<QDatePickerPropPlaceholder>;
        default: null;
      };
      /**
       * only for ranged types
       */
      startPlaceholder: {
        type: PropType<QDatePickerPropStartPlaceholder>;
        default: null;
      };
      /**
       * only for ranged types
       */
      endPlaceholder: {
        type: PropType<QDatePickerPropEndPlaceholder>;
        default: null;
      };
      /**
       * start with monday by default
       */
      firstDayOfWeek: {
        type: PropType<QDatePickerPropFirstDayOfWeek>;
        default: null;
        validator: (val: Nullable<number>) => boolean;
      };
      /**
       * as native name for input
       */
      name: {
        type: PropType<QDatePickerPropName>;
        default: string;
      };
      /**
       * whether QDatePicker is disabled
       */
      disabled: {
        type: PropType<QDatePickerPropDisabled>;
        default: boolean;
      };
      /**
       * whether DatePicker is clearable
       */
      clearable: {
        type: PropType<QDatePickerPropClearable>;
        default: boolean;
      };
      /**
       * whether DatePicker is editable, for type is `date` only
       */
      editable: {
        type: PropType<QDatePickerPropEditable>;
        default: boolean;
      };
      /**
       * separator in the middle of the range
       */
      rangeSeparator: {
        type: PropType<QDatePickerPropRangeSeparator>;
        default: string;
      };
      /**
       * array of { text: 'string', value: 'Date' }
       */
      shortcuts: {
        type: PropType<QDatePickerPropShortcuts>;
        default: null;
      };
      /**
       * any field is optional:
       * `to` - disable all before this date,
       * `from` - disable after this date,
       * `ranges` - array of dateranges, each daterange is object and must has `start` and `end` field
       */
      disabledValues: {
        type: PropType<QDatePickerPropDisabledValues>;
        default: null;
      };
      /**
       * whether to trigger form validation
       */
      validateEvent: {
        type: PropType<QDatePickerPropValidateEvent>;
        default: boolean;
      };
      /**
       * Specifies a target element where QDatePicker will be moved.
       * (has to be a valid query selector, or an HTMLElement)
       */
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
  {},
  {},
  string,
  ComponentProvideOptions,
  true,
  {},
  any
>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
  new (): {
    $slots: S;
  };
};
