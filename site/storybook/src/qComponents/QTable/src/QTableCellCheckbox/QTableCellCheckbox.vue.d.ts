import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import {
  QTableCellCheckboxIndeterminate,
  QTableCellCheckboxIsCheckable
} from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    baseTag: {
      type: StringConstructor;
      required: true;
    };
    baseClass: {
      type: StringConstructor;
      required: true;
    };
    checked: {
      type: BooleanConstructor;
      required: true;
    };
    indeterminate: {
      type: PropType<QTableCellCheckboxIndeterminate>;
      default: null;
    };
    isCheckable: {
      type: PropType<QTableCellCheckboxIsCheckable>;
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
    change: (value: boolean) => any;
  },
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      baseTag: {
        type: StringConstructor;
        required: true;
      };
      baseClass: {
        type: StringConstructor;
        required: true;
      };
      checked: {
        type: BooleanConstructor;
        required: true;
      };
      indeterminate: {
        type: PropType<QTableCellCheckboxIndeterminate>;
        default: null;
      };
      isCheckable: {
        type: PropType<QTableCellCheckboxIsCheckable>;
        default: boolean;
      };
    }>
  > &
    Readonly<{
      onChange?: ((value: boolean) => any) | undefined;
    }>,
  {
    indeterminate: QTableCellCheckboxIndeterminate;
    isCheckable: QTableCellCheckboxIsCheckable;
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
