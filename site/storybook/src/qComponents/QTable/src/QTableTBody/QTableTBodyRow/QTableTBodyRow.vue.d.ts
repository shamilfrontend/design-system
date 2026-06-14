import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { QTableTBodyRowPropRow } from './types';
declare const __VLS_export: DefineComponent<
  ExtractPropTypes<{
    row: {
      type: PropType<QTableTBodyRowPropRow>;
      required: true;
    };
    rowIndex: {
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
      row: {
        type: PropType<QTableTBodyRowPropRow>;
        required: true;
      };
      rowIndex: {
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
