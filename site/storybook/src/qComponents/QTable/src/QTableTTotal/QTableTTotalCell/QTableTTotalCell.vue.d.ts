import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { ExtendedColumn } from '../../QTableContainer/types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    column: {
      type: PropType<ExtendedColumn>;
      required: true;
    };
    columnIndex: {
      type: NumberConstructor;
      required: true;
    };
  }>,
  {},
  {},
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {},
  string,
  PublicProps,
  Readonly<
    ExtractPropTypes<{
      column: {
        type: PropType<ExtendedColumn>;
        required: true;
      };
      columnIndex: {
        type: NumberConstructor;
        required: true;
      };
    }>
  > &
    Readonly<{}>,
  {},
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
