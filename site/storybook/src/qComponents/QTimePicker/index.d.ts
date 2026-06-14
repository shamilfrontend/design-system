import { SFCWithInstall, Nullable } from '../../../types/helpers';
import {
  DefineComponent,
  ExtractPropTypes,
  PropType,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTimePickerPropModelValue } from '.';
export declare const QTimePicker: SFCWithInstall<
  DefineComponent<
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
  >
>;
export type {
  QTimePickerProps,
  QTimePickerPropModelValue,
  QTimePickerPropFormat,
  QTimePickerPropPlaceholder,
  QTimePickerPropDisabled,
  QTimePickerPropClearable,
  QTimePickerPropStep
} from './src/types';
