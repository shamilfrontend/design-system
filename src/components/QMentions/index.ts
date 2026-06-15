import { withInstall } from '@/helpers';

import Mentions from './src/QMentions.vue';
export const QMentions = withInstall(Mentions);
export type { QMentionsProps, QMentionOption } from './src/types';
