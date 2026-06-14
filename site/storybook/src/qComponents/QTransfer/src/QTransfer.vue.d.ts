import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QTransferPropData,
  QTransferPropModelValue,
  QTransferPropTitles
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QTransferPropModelValue>;
      default: () => QTransferPropModelValue;
    };
    data: {
      type: PropType<QTransferPropData>;
      default: () => QTransferPropData;
    };
    titles: {
      type: PropType<QTransferPropTitles>;
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
    'update:modelValue': (value: QTransferPropModelValue) => any;
    change: (value: QTransferPropModelValue) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QTransferPropModelValue>;
        default: () => QTransferPropModelValue;
      };
      data: {
        type: PropType<QTransferPropData>;
        default: () => QTransferPropData;
      };
      titles: {
        type: PropType<QTransferPropTitles>;
        default: null;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: QTransferPropModelValue) => any)
        | undefined;
      onChange?: ((value: QTransferPropModelValue) => any) | undefined;
    }>,
  {
    data: QTransferPropData;
    modelValue: QTransferPropModelValue;
    titles: QTransferPropTitles;
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
