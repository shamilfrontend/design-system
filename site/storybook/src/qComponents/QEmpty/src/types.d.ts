import { ComponentPublicInstance } from 'vue';
export type QEmptyPropDescription = string | null;
export type QEmptyPropImageSize = number;
export interface QEmptyProps {
  description: QEmptyPropDescription;
  imageSize: QEmptyPropImageSize;
}
export type QEmptyInstance = ComponentPublicInstance<QEmptyProps>;
