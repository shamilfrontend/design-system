import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { Nullable } from '../../../../types/helpers';
import { QTimePickerPropModelValue } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QTimePickerPropModelValue>;
      default: null;
    };
    format: {
      type: StringConstructor;
      default: string;
    };
    placeholder: {
      type: StringConstructor;
      default: null;
    };
    disabled: {
      type: BooleanConstructor;
      default: boolean;
    };
    clearable: {
      type: BooleanConstructor;
      default: boolean;
    };
    step: {
      type: NumberConstructor;
      default: number;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    'update:modelValue': (value: Nullable<string>) => any;
    change: (value: Nullable<string>) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QTimePickerPropModelValue>;
        default: null;
      };
      format: {
        type: StringConstructor;
        default: string;
      };
      placeholder: {
        type: StringConstructor;
        default: null;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
      clearable: {
        type: BooleanConstructor;
        default: boolean;
      };
      step: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: Nullable<string>) => any) | undefined;
      onChange?: ((value: Nullable<string>) => any) | undefined;
    }>,
  {
    disabled: boolean;
    modelValue: QTimePickerPropModelValue;
    clearable: boolean;
    placeholder: string;
    step: number;
    format: string;
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
declare const _default: typeof __VLS_export;
export default _default;
