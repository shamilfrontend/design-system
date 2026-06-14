import { ComputedRef } from 'vue';
import {
  QDatePickerPropModelValue,
  QDatePickerTransformedToDate,
  QDatePickerPanelComponent
} from '../types';
export interface MobilePanelInstance {
  handleCloseBtnClick: () => void;
  panelComponent: ComputedRef<QDatePickerPanelComponent>;
  transformedToDate: ComputedRef<QDatePickerTransformedToDate>;
  handlePick: (val: QDatePickerPropModelValue) => void;
}
