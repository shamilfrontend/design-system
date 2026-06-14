import { VNode } from 'vue';
import { ExtendedColumn } from '../../QTableContainer/types';
export interface QTableTTotalCellProps {
  column: ExtendedColumn;
  columnIndex: number;
}
export type QTableTTotalCellInstance = () => VNode;
