import { withInstall } from '@/helpers';

import Calendar from './src/QCalendar.vue';
export const QCalendar = withInstall(Calendar);
export type { QCalendarProps, QCalendarEvent } from './src/types';
