import { ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { ExtendedColumn } from '../QTableContainer/types';
export interface QTableTTotalInstance {
  isSelectable: Nullable<ComputedRef<boolean>>;
  isCheckable: ComputedRef<boolean>;
  isChecked: ComputedRef<boolean>;
  columnList: ComputedRef<ExtendedColumn[]>;
  handleCheckboxChange: () => void;
}
