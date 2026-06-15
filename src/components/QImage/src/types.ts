export type QImagePropSrc = string;
export type QImagePropAlt = string;
export type QImagePropFit =
  | 'fill'
  | 'contain'
  | 'cover'
  | 'none'
  | 'scale-down';
export type QImagePropLazy = boolean;
export type QImagePropPreview = boolean;
export type QImagePropWidth = string | number | null;
export type QImagePropHeight = string | number | null;

export interface QImageProps {
  src: QImagePropSrc;
  alt: QImagePropAlt;
  fit: QImagePropFit;
  lazy: QImagePropLazy;
  preview: QImagePropPreview;
  width: QImagePropWidth;
  height: QImagePropHeight;
}
