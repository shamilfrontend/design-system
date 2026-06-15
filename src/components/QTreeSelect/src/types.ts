import type { QTreeNode } from '@/components/QTree';

export type QTreeSelectPropModelValue =
  | string
  | number
  | (string | number)[]
  | null;

export type QTreeSelectPropData = QTreeNode[];
export type QTreeSelectPropMultiple = boolean;
export type QTreeSelectPropPlaceholder = string | null;
export type QTreeSelectPropDisabled = boolean;
export type QTreeSelectPropClearable = boolean;
export type QTreeSelectPropCheckStrictly = boolean;

export interface QTreeSelectProps {
  modelValue: QTreeSelectPropModelValue;
  data: QTreeSelectPropData;
  multiple: QTreeSelectPropMultiple;
  placeholder: QTreeSelectPropPlaceholder;
  disabled: QTreeSelectPropDisabled;
  clearable: QTreeSelectPropClearable;
  checkStrictly: QTreeSelectPropCheckStrictly;
}
