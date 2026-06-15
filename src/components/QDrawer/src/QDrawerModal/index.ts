import { withInstall } from '@/helpers';

import DrawerModal from './QDrawerModal.vue';

export const QDrawerModal = withInstall(DrawerModal);

export type {
  QDrawerModalProps,
  QDrawerModalPropModelValue,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth,
  QDrawerModalPropPosition,
  QDrawerModalPropTeleportTo,
  QDrawerModalPropBeforeClose
} from './types';
