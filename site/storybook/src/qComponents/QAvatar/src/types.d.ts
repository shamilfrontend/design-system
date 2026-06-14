import { ComponentPublicInstance } from 'vue';
export type QAvatarPropSize = 'small' | 'medium' | 'large';
export type QAvatarPropShape = 'circle' | 'square';
export type QAvatarPropSrc = string | null;
export type QAvatarPropAlt = string | null;
export interface QAvatarProps {
  size: QAvatarPropSize;
  shape: QAvatarPropShape;
  src: QAvatarPropSrc;
  alt: QAvatarPropAlt;
}
export type QAvatarInstance = ComponentPublicInstance<QAvatarProps>;
