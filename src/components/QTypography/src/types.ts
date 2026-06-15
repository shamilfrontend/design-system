export type QTitlePropLevel = 1 | 2 | 3 | 4 | 5 | 6;
export interface QTitleProps {
  level: QTitlePropLevel;
}
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
