import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { ExtendedColumn } from '../../QTableContainer/types';
import { QTableTBodyCellPropRow, QTableTBodyCellPropValue } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    row: {
      type: PropType<QTableTBodyCellPropRow>;
      required: true;
    };
    rowIndex: {
      type: NumberConstructor;
      required: true;
    };
    column: {
      type: PropType<ExtendedColumn>;
      required: true;
    };
    columnIndex: {
      type: NumberConstructor;
      required: true;
    };
    value: {
      type: PropType<QTableTBodyCellPropValue>;
      default: null;
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
      row: {
        type: PropType<QTableTBodyCellPropRow>;
        required: true;
      };
      rowIndex: {
        type: NumberConstructor;
        required: true;
      };
      column: {
        type: PropType<ExtendedColumn>;
        required: true;
      };
      columnIndex: {
        type: NumberConstructor;
        required: true;
      };
      value: {
        type: PropType<QTableTBodyCellPropValue>;
        default: null;
      };
    }>
  > &
    Readonly<{}>,
  {
    value: QTableTBodyCellPropValue;
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
