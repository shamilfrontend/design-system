import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QSliderPropModelValue, QSliderPropData } from '../../types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QSliderPropModelValue>;
      default: null;
    };
    data: {
      type: PropType<QSliderPropData>;
      required: true;
    };
    disabled: {
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
    'update:modelValue': (value: string | number | boolean | null) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QSliderPropModelValue>;
        default: null;
      };
      data: {
        type: PropType<QSliderPropData>;
        required: true;
      };
      disabled: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: string | number | boolean | null) => any)
        | undefined;
    }>,
  {
    disabled: boolean;
    modelValue: string | number | boolean | null;
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
