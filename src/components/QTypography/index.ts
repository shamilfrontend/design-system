import { withInstall } from '@/helpers';

import Paragraph from './src/QParagraph.vue';
import Text from './src/QText.vue';
import Title from './src/QTitle.vue';
export const QTitle = withInstall(Title);
export const QText = withInstall(Text);
export const QParagraph = withInstall(Paragraph);
export type { QTitleProps, QTitlePropLevel } from './src/types';
export type { QTextProps, QTextPropType } from './src/types';
export type { QParagraphProps } from './src/types';
