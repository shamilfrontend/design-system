import { withInstall } from '../helpers';

import Alert from './src/QAlert.vue';

export const QAlert = withInstall(Alert);

export type {
  QAlertProps,
  QAlertInstance,
  QAlertPropType,
  QAlertPropTitle,
  QAlertPropClosable,
  QAlertPropShowIcon,
  QAlertPropAriaLabel
} from './src/types';
