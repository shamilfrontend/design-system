import { Nullable } from '../../../../../types/helpers';
import { RangePickValue, RangeState, RangeType } from '../commonTypes';
declare const leftYearComposable: (leftDate: Date) => number;
declare const getActualMonth: (rightDate: Date, correction?: number) => number;
declare const getLabelFromDate: (date: Date, type: Nullable<string>) => string;
declare const useLeftPrevYearClick: (leftDate: Date) => Date;
declare const useRightNextYearClick: (rightDate: Date) => Date;
declare const useLeftNextYearClick: (leftDate: Date) => Date;
declare const useRightPrevYearClick: (rightDate: Date) => Date;
declare const isValidValue: (value: Nullable<Date>[]) => boolean;
declare const getPeriodNextNodeIndex: (
  keyName: string,
  cells: NodeListOf<HTMLElement>,
  panelInFocus: string
) => Nullable<number>;
declare const getRangeChangedState: (
  newValue: RangePickValue,
  currentRangeState: RangeState,
  type: RangeType
) => {
  maxDate: Nullable<Date>;
  minDate: Nullable<Date>;
  rangeState: RangeState;
};
export {
  leftYearComposable,
  getActualMonth,
  getLabelFromDate,
  useLeftPrevYearClick,
  useRightNextYearClick,
  useLeftNextYearClick,
  useRightPrevYearClick,
  getRangeChangedState,
  getPeriodNextNodeIndex,
  isValidValue
};
