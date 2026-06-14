import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QTreeSelectPropCheckStrictly,
  QTreeSelectPropClearable,
  QTreeSelectPropData,
  QTreeSelectPropDisabled,
  QTreeSelectPropModelValue,
  QTreeSelectPropMultiple,
  QTreeSelectPropPlaceholder
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    modelValue: {
      type: PropType<QTreeSelectPropModelValue>;
      default: null;
    };
    data: {
      type: PropType<QTreeSelectPropData>;
      default: () => QTreeSelectPropData;
    };
    multiple: {
      type: PropType<QTreeSelectPropMultiple>;
      default: boolean;
    };
    placeholder: {
      type: PropType<QTreeSelectPropPlaceholder>;
      default: null;
    };
    disabled: {
      type: PropType<QTreeSelectPropDisabled>;
      default: boolean;
    };
    clearable: {
      type: PropType<QTreeSelectPropClearable>;
      default: boolean;
    };
    checkStrictly: {
      type: PropType<QTreeSelectPropCheckStrictly>;
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
    'update:modelValue': (value: QTreeSelectPropModelValue) => any;
    change: (value: QTreeSelectPropModelValue) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      modelValue: {
        type: PropType<QTreeSelectPropModelValue>;
        default: null;
      };
      data: {
        type: PropType<QTreeSelectPropData>;
        default: () => QTreeSelectPropData;
      };
      multiple: {
        type: PropType<QTreeSelectPropMultiple>;
        default: boolean;
      };
      placeholder: {
        type: PropType<QTreeSelectPropPlaceholder>;
        default: null;
      };
      disabled: {
        type: PropType<QTreeSelectPropDisabled>;
        default: boolean;
      };
      clearable: {
        type: PropType<QTreeSelectPropClearable>;
        default: boolean;
      };
      checkStrictly: {
        type: PropType<QTreeSelectPropCheckStrictly>;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      'onUpdate:modelValue'?:
        | ((value: QTreeSelectPropModelValue) => any)
        | undefined;
      onChange?: ((value: QTreeSelectPropModelValue) => any) | undefined;
    }>,
  {
    data: QTreeSelectPropData;
    disabled: boolean;
    modelValue: QTreeSelectPropModelValue;
    clearable: boolean;
    placeholder: QTreeSelectPropPlaceholder;
    multiple: boolean;
    checkStrictly: boolean;
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
