import { ComputedRef, StyleValue } from 'vue';
import { Nullable, ClassValue } from '../../../../../../types/helpers';
import { ExtendedColumn } from '../../QTableContainer/types';
import { QTableTBodyCellPropValue } from '../QTableTBodyCell/types';
export type QTableTBodyRowPropRow = Record<string, unknown>;
export interface QTableTBodyRowProps {
  rowIndex: number;
  row: QTableTBodyRowPropRow;
}
export interface QTableTBodyRowInstance {
  isSelectable: Nullable<ComputedRef<boolean>>;
  isChecked: ComputedRef<boolean>;
  rootClasses: ComputedRef<ClassValue>;
  rootStyles: ComputedRef<StyleValue>;
  randId: (prefix: string) => string;
  columnList: ComputedRef<ExtendedColumn[]>;
  getRowValue: (key: string) => QTableTBodyCellPropValue;
  handleRowClick: () => void;
  handleCheckboxChange: () => void;
}
