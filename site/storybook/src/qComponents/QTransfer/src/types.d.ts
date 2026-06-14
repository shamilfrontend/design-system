export interface QTransferItem {
  key: string | number;
  label: string;
  disabled?: boolean;
}
export type QTransferPropModelValue = (string | number)[];
export type QTransferPropData = QTransferItem[];
export type QTransferPropTitles = [string, string];
export interface QTransferProps {
  modelValue: QTransferPropModelValue;
  data: QTransferPropData;
  titles: QTransferPropTitles;
}
