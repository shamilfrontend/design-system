import { withInstall } from '../../../helpers';

import DialogModal from './QDialogModal.vue';

export const QDialogModal = withInstall(DialogModal);

export type {
  QDialogModalProps,
  QDialogModalPropModelValue,
  QDialogModalPropTitle,
  QDialogModalPropWidth,
  QDialogModalPropTeleportTo,
  QDialogModalPropBeforeClose
} from './types';
