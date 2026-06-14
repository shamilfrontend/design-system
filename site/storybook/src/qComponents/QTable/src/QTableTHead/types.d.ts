import { Ref, ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { ExtendedColumn } from '../QTableContainer/types';
import { QTablePropSortBy } from '../types';
export interface QTableTHeadInstance {
  isSelectable: Nullable<ComputedRef<boolean>>;
  isCheckable: ComputedRef<boolean>;
  isChecked: ComputedRef<boolean>;
  isIndeterminate: ComputedRef<boolean>;
  columnList: ComputedRef<ExtendedColumn[]>;
  sortBy: ComputedRef<Nullable<QTablePropSortBy>>;
  draggedColumn: Ref<Nullable<ExtendedColumn>>;
  handleCheckboxChange: () => void;
  handleColumnDrag: (column: ExtendedColumn) => void;
  handleColumnDrop: (
    position: 'left' | 'right',
    targetColumnKey: string
  ) => void;
}
