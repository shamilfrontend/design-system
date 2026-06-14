export type QSpacePropDirection = 'horizontal' | 'vertical';
export type QSpacePropSize = 'small' | 'medium' | 'large' | number;
export type QSpacePropWrap = boolean;
export type QSpacePropFill = boolean;
export type QSpacePropAlign = 'start' | 'center' | 'end' | 'baseline';
export interface QSpaceProps {
  direction: QSpacePropDirection;
  size: QSpacePropSize;
  wrap: QSpacePropWrap;
  fill: QSpacePropFill;
  align: QSpacePropAlign;
}
