import {
  PropType,
  DefineComponent,
  ExtractPropTypes,
  ComponentOptionsMixin,
  PublicProps,
  ComponentProvideOptions
} from 'vue';
import { ExtendedColumn } from '../../QTableContainer/types';
import { QTableTHeadCellPropSortBy } from './types';
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
    sortBy: {
      type: PropType<QTableTHeadCellPropSortBy>;
      default: null;
    };
    draggedColumn: {
      type: PropType<ExtendedColumn>;
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
    drag: (column: ExtendedColumn) => any;
    drop: (
      position?: 'right' | 'left' | undefined,
      targetColumnKey?: string | undefined
    ) => any;
  },
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
      sortBy: {
        type: PropType<QTableTHeadCellPropSortBy>;
        default: null;
      };
      draggedColumn: {
        type: PropType<ExtendedColumn>;
        default: null;
      };
    }>
  > &
    Readonly<{
      onDrag?: ((column: ExtendedColumn) => any) | undefined;
      onDrop?:
        | ((
            position?: 'right' | 'left' | undefined,
            targetColumnKey?: string | undefined
          ) => any)
        | undefined;
    }>,
  {
    sortBy: QTableTHeadCellPropSortBy;
    draggedColumn: ExtendedColumn;
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
