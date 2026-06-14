import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTourStep } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: BooleanConstructor;
      default: boolean;
    };
    steps: {
      type: PropType<QTourStep[]>;
      default: () => never[];
    };
    current: {
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
    'update:modelValue': (value: boolean) => any;
    finish: () => any;
    'update:current': (value: number) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: BooleanConstructor;
        default: boolean;
      };
      steps: {
        type: PropType<QTourStep[]>;
        default: () => never[];
      };
      current: {
        type: NumberConstructor;
        default: number;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?: ((value: boolean) => any) | undefined;
      onFinish?: (() => any) | undefined;
      'onUpdate:current'?: ((value: number) => any) | undefined;
    }>,
  {
    modelValue: boolean;
    steps: QTourStep[];
    current: number;
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
