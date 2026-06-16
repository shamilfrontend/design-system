export type QTextPropType =
  | 'default'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';
export interface QTextProps {
  type: QTextPropType;
}
export interface QParagraphProps {
  ellipsis: boolean;
}
