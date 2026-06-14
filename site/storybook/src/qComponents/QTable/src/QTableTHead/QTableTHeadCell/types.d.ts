import { VNode } from 'vue';
import { ClassValue, Nullable } from '../../../../../../types/helpers';
import { ExtendedColumn } from '../../QTableContainer/types';
import { SortDirection } from '../../types';
export interface QTableTHeadCellPropSortBy {
  key: Nullable<string>;
  direction: SortDirection;
}
export interface QTableTHeadCellProps {
  column: ExtendedColumn;
  columnIndex: number;
  sortBy: Nullable<QTableTHeadCellPropSortBy>;
  draggedColumn: Nullable<ExtendedColumn>;
}
export type QTableTHeadCellInstance = () => VNode;
export interface QTableTHeadCellContainerAttrs {
  class: ClassValue;
  onClick?: () => void;
}
