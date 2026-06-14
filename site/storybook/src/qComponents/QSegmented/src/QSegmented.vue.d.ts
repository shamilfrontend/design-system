import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QSegmentedPropBlock,
  QSegmentedPropDisabled,
  QSegmentedPropModelValue,
  QSegmentedPropOptions,
  QSegmentedPropSize
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QSegmentedPropModelValue>;
      default: null;
    };
    options: {
      type: PropType<QSegmentedPropOptions>;
      default: () => QSegmentedPropOptions;
    };
    size: {
      type: PropType<QSegmentedPropSize>;
      default: string;
      validator: (value: QSegmentedPropSize) => boolean;
    };
    disabled: {
      type: PropType<QSegmentedPropDisabled>;
      default: boolean;
    };
    block: {
      type: PropType<QSegmentedPropBlock>;
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
    'update:modelValue': (value: QSegmentedPropModelValue) => any;
    change: (value: QSegmentedPropModelValue) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QSegmentedPropModelValue>;
        default: null;
      };
      options: {
        type: PropType<QSegmentedPropOptions>;
        default: () => QSegmentedPropOptions;
      };
      size: {
        type: PropType<QSegmentedPropSize>;
        default: string;
        validator: (value: QSegmentedPropSize) => boolean;
      };
      disabled: {
        type: PropType<QSegmentedPropDisabled>;
        default: boolean;
      };
      block: {
        type: PropType<QSegmentedPropBlock>;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: QSegmentedPropModelValue) => any)
        | undefined;
      onChange?: ((value: QSegmentedPropModelValue) => any) | undefined;
    }>,
  {
    options: QSegmentedPropOptions;
    size: QSegmentedPropSize;
    disabled: boolean;
    modelValue: QSegmentedPropModelValue;
    block: boolean;
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
