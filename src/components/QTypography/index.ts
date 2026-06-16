import { withInstall } from '@/helpers';

import Paragraph from './src/QParagraph.vue';
import Text from './src/QText.vue';
export const QText = withInstall(Text);
export const QParagraph = withInstall(Paragraph);
export type { QTextProps, QTextPropType } from './src/types';
export type { QParagraphProps } from './src/types';
