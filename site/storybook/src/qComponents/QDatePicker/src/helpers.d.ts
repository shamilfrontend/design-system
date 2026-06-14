import { Nullable } from '../../../../types/helpers';
import { RangeState } from './commonTypes';
import {
  QDatePickerPropDisabledValues,
  QDatePickerPropModelValue
} from './types';
declare const checkDisabled: (
  date: Date,
  disabledValues: QDatePickerPropDisabledValues,
  isSameFn: (dateLeft: number | Date, dateRight: number | Date) => boolean
) => boolean;
declare const formatToLocalReadableString: (
  value: Date,
  dateFnsFormat: Nullable<string>,
  dateFnsLocale?: string
) => string;
declare const calcInputData: (data: string, inputType: string) => string;
declare const validator: (val: Nullable<string | string[]>) => boolean;
declare const convertISOToDate: (value: string | Date) => Date;
declare const checkArrayValueIsValid: (value: unknown[]) => boolean;
declare const modelValueValidator: (val: QDatePickerPropModelValue) => boolean;
declare const isDateInRangeInterval: (
  date: Date,
  rangeState: RangeState
) => boolean;
export {
  formatToLocalReadableString,
  calcInputData,
  validator,
  modelValueValidator,
  checkArrayValueIsValid,
  convertISOToDate,
  isDateInRangeInterval,
  checkDisabled
};
