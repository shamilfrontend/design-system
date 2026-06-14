import { ComputedRef, Ref } from 'vue';
import { Nullable, ClassValue } from '../../../../../../types/helpers';
import { RangeState, RangePickValue } from '../../commonTypes';
import { QDatePickerPropShortcuts } from '../../types';
type DatePanelRangePropModelValue = Nullable<Date[]>;
interface DateRangePanelProps {
  modelValue: DatePanelRangePropModelValue;
}
interface DateRangePanelState {
  minDate: Nullable<Date>;
  maxDate: Nullable<Date>;
  leftDate: Date;
  rightDate: Date;
  rangeState: RangeState;
  panelInFocus: Nullable<string>;
  dateCells: Nullable<NodeListOf<HTMLElement>>;
  monthCells: Nullable<NodeListOf<HTMLElement>>;
  yearCells: Nullable<NodeListOf<HTMLElement>>;
  lastFocusedCellIndex: Nullable<number>;
}
interface DateRangePanelInstance {
  state: DateRangePanelState;
  root: Ref<Nullable<HTMLElement>>;
  leftPanel: Ref<Nullable<HTMLElement>>;
  rightPanel: Ref<Nullable<HTMLElement>>;
  enableMonthArrow: ComputedRef<boolean>;
  enableYearArrow: ComputedRef<boolean>;
  rightPanelClasses: ComputedRef<ClassValue>;
  leftPanelClasses: ComputedRef<ClassValue>;
  rightYear: ComputedRef<number>;
  leftYear: ComputedRef<number>;
  leftLabel: ComputedRef<string>;
  rightLabel: ComputedRef<string>;
  leftMonth: ComputedRef<number>;
  rightMonth: ComputedRef<number>;
  shortcuts: Ref<Nullable<QDatePickerPropShortcuts>>;
  isMobileView: Ref<boolean>;
  handleRangePick: (val: RangePickValue, close?: boolean) => void;
  handleShortcutClick: (shortcut: Date) => void;
  handleClear: () => void;
  handleLeftPrevYearClick: () => void;
  handleLeftNextYearClick: () => void;
  handleLeftPrevMonthClick: () => void;
  handleRightNextYearClick: () => void;
  handleRightPrevYearClick: () => void;
  handleRightNextMonthClick: () => void;
  handleLeftNextMonthClick: () => void;
  handleRightPrevMonthClick: () => void;
  handleRangeSelecting: (value: RangeState) => void;
  navigateDropdown: (e: KeyboardEvent) => void;
}
export {
  DatePanelRangePropModelValue,
  DateRangePanelState,
  DateRangePanelInstance,
  DateRangePanelProps
};
