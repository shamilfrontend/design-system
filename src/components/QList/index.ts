import { withInstall } from '@/helpers';

import List from './src/QList.vue';
import ListItem from './src/QListItem.vue';

export const QList = withInstall(List);
export const QListItem = withInstall(ListItem);

export type { QListPropSize, QListPropBordered } from './src/QList.vue';
