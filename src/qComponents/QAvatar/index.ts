import { withInstall } from '../helpers';

import Avatar from './src/QAvatar.vue';

export const QAvatar = withInstall(Avatar);

export type {
  QAvatarProps,
  QAvatarPropSize,
  QAvatarPropShape,
  QAvatarPropSrc,
  QAvatarPropAlt
} from './src/types';
