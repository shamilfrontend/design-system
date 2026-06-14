export interface QAnchorItem {
  key: string;
  href: string;
  title: string;
  children?: QAnchorItem[];
}
export type QAnchorPropItems = QAnchorItem[];
export type QAnchorPropOffset = number;
export interface QAnchorProps {
  items: QAnchorPropItems;
  offset: QAnchorPropOffset;
  container: string | HTMLElement | null;
}
