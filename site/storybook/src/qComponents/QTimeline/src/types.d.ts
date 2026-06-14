export interface QTimelineItem {
  timestamp?: string;
  title: string;
  content?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger';
}
export type QTimelinePropItems = QTimelineItem[];
export type QTimelinePropMode = 'left' | 'alternate' | 'right';
export interface QTimelineProps {
  items: QTimelinePropItems;
  mode: QTimelinePropMode;
}
