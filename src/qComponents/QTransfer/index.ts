import { withInstall } from '../helpers';

import Transfer from './src/QTransfer.vue';

export const QTransfer = withInstall(Transfer);

export type {
  QTransferProps,
  QTransferItem,
  QTransferPropModelValue,
  QTransferPropData,
  QTransferPropTitles
} from './src/types';
