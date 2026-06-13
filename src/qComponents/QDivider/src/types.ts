import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

export type QDividerPropDirection = 'horizontal' | 'vertical';
export type QDividerPropContentPosition = 'left' | 'center' | 'right';
export type QDividerPropBorderStyle = 'solid' | 'dashed' | 'dotted';

export interface QDividerProps {
  direction: QDividerPropDirection;
  contentPosition: QDividerPropContentPosition;
  borderStyle: QDividerPropBorderStyle;
}
