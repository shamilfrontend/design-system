export interface QCalendarEvent {
  date: string;
  title: string;
  type?: 'primary' | 'success' | 'warning' | 'danger';
}
export interface QCalendarProps {
  modelValue: Date;
  events: QCalendarEvent[];
}
