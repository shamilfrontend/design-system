import { DebouncedFunc } from 'lodash-es';
import { ComputedRef } from 'vue';
import { Nullable, ClassValue } from '../../../../../../types/helpers';
import { DateCellModel } from '../../commonTypes';
interface DateTableState {
  lastRow: Nullable<number>;
  lastColumn: Nullable<number>;
  tableRows: DateCellModel[][];
}
interface DateTableInterface {
  state: DateTableState;
  offsetDay: ComputedRef<number>;
  days: ComputedRef<string[]>;
  rows: ComputedRef<DateCellModel[][]>;
  startMonthDate: ComputedRef<Date>;
  endMonthDate: ComputedRef<Date>;
  getCellClasses: (cell: DateCellModel) => ClassValue;
  handleMouseMove: DebouncedFunc<(cell: DateCellModel) => void>;
  handleClick: (cell: DateCellModel) => void;
}
export { DateTableInterface, DateTableState };
