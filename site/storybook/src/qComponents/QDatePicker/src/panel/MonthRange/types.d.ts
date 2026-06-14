import { ComputedRef, Ref } from 'vue';
import { Nullable, ClassValue } from '../../../../../../types/helpers';
import { RangePickValue, RangeState } from '../../commonTypes';
import { QDatePickerPropShortcuts } from '../../types';
import { DatePanelRangePropModelValue } from '../DateRange/types';
interface MonthRangePanelProps {
  modelValue: DatePanelRangePropModelValue;
}
interface MonthRangeState {
  minDate: Nullable<Date>;
  maxDate: Nullable<Date>;
  leftDate: Date;
  rightDate: Date;
  rangeState: RangeState;
  isRanged: boolean;
  currentView: string;
  panelInFocus: Nullable<string>;
  monthCells: Nullable<NodeListOf<HTMLElement>>;
  lastFocusedCellIndex: Nullable<number>;
}
interface MonthRangePanelInstance {
  root: Ref<Nullable<HTMLElement>>;
  leftPanel: Ref<Nullable<HTMLElement>>;
  rightPanel: Ref<Nullable<HTMLElement>>;
  shortcuts: Ref<Nullable<QDatePickerPropShortcuts>>;
  isMobileView: Ref<boolean>;
  state: MonthRangeState;
  leftPanelClasses: ComputedRef<ClassValue>;
  rightPanelClasses: ComputedRef<ClassValue>;
  rightYear: ComputedRef<number>;
  leftYear: ComputedRef<number>;
  leftMonth: ComputedRef<number>;
  rightMonth: ComputedRef<number>;
  enableYearArrow: ComputedRef<boolean>;
  handleLeftPrevYearClick: () => void;
  handleLeftNextYearClick: () => void;
  handleRightNextYearClick: () => void;
  handleRightPrevYearClick: () => void;
  handleRangeSelecting: (value: RangeState) => void;
  handleRangePick: (val: RangePickValue, close?: boolean) => void;
  handleClear: () => void;
  handleShortcutClick: (shortcut: Date) => void;
  navigateDropdown: (e: KeyboardEvent) => void;
}
export { MonthRangePanelInstance, MonthRangeState, MonthRangePanelProps };
