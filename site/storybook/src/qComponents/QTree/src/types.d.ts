export interface QTreeNode {
  id: string | number;
  label: string;
  children?: QTreeNode[];
  disabled?: boolean;
}
export type QTreePropData = QTreeNode[];
export type QTreePropDefaultExpandAll = boolean;
export type QTreePropExpandOnClickNode = boolean;
export interface QTreeProps {
  data: QTreePropData;
  defaultExpandAll: QTreePropDefaultExpandAll;
  expandOnClickNode: QTreePropExpandOnClickNode;
}
