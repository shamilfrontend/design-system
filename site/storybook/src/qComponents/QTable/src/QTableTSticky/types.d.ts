import { Ref, ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
import { ExtendedColumn } from '../QTableContainer/types';
export interface StickyGlobalConfig {
  columnsLeftNew: Record<string, Nullable<number>>;
  columnsRightNew: Record<string, Nullable<number>>;
}
export interface QTableTStickyInstance {
  root: Ref<Nullable<HTMLElement>>;
  isSelectable: Nullable<ComputedRef<boolean>>;
  stickyConfig: {
    columnsLeftNew: Record<string, Nullable<number>>;
    columnsRightNew: Record<string, Nullable<number>>;
  };
  columnList: ComputedRef<ExtendedColumn[]>;
  setColRef: (el: unknown, key: number | string) => void;
}
