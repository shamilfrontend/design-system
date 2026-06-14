import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QAutoCompleteOption,
  QAutoCompletePropModelValue,
  QAutoCompletePropOptions
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QAutoCompletePropModelValue>;
      default: string;
    };
    options: {
      type: PropType<QAutoCompletePropOptions>;
      default: () => QAutoCompletePropOptions;
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
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    select: (option: QAutoCompleteOption) => any;
    'update:modelValue': (value: string) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QAutoCompletePropModelValue>;
        default: string;
      };
      options: {
        type: PropType<QAutoCompletePropOptions>;
        default: () => QAutoCompletePropOptions;
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
    }>
  > &
    Readonly<{
      onSelect?: ((option: QAutoCompleteOption) => any) | undefined;
      'onUpdate:modelValue'?: ((value: string) => any) | undefined;
    }>,
  {
    options: QAutoCompletePropOptions;
    disabled: boolean;
    modelValue: string;
    clearable: boolean;
    placeholder: string;
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
