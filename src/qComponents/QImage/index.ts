import { withInstall } from '../helpers';

import Image from './src/QImage.vue';

export const QImage = withInstall(Image);

export type {
  QImageProps,
  QImagePropSrc,
  QImagePropAlt,
  QImagePropFit,
  QImagePropLazy,
  QImagePropPreview,
  QImagePropWidth,
  QImagePropHeight
} from './src/types';
