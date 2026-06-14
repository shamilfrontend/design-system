import { ComputedRef } from 'vue';
import { Nullable } from '../../../../../types/helpers';
export type QTableEmptyPropEmptyText = Nullable<string>;
export interface QTableEmptyProps {
  emptyText: QTableEmptyPropEmptyText;
}
export interface QTableEmptyInstance {
  t: (key: string) => string;
  image: string;
  noDataText: ComputedRef<string>;
}
