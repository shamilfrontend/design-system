import { ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { ExtendedColumn } from '../QTableContainer/types';
export interface QTableTColgroupInstance {
  checkboxColWidth: number;
  isSelectable: Nullable<ComputedRef<boolean>>;
  columnList: ComputedRef<ExtendedColumn[]>;
  getColWidth: (arg0: ExtendedColumn) => Record<'width', string>;
}
