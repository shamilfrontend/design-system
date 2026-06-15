export type QResultPropStatus =
  | 'success'
  | 'error'
  | 'warning'
  | 'info'
  | '404'
  | '403'
  | '500';

export type QResultPropTitle = string | null;
export type QResultPropSubtitle = string | null;

export interface QResultProps {
  status: QResultPropStatus;
  title: QResultPropTitle;
  subtitle: QResultPropSubtitle;
}
