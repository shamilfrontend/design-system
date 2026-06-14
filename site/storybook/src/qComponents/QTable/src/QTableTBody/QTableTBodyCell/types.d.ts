import { VNode } from 'vue';
import { ExtendedColumn } from '../../QTableContainer/types';
export type QTableTBodyCellPropRow = Record<string, unknown>;
export type QTableTBodyCellPropValue =
  | string
  | number
  | boolean
  | Record<string, unknown>
  | unknown[]
  | null;
export interface QTableTBodyCellProps {
  row: QTableTBodyCellPropRow;
  rowIndex: number;
  column: ExtendedColumn;
  columnIndex: number;
  value: QTableTBodyCellPropValue;
}
export type QTableTBodyCellInstance = () => VNode;
