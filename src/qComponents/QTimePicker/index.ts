import { withInstall } from '../helpers';

import TimePicker from './src/QTimePicker.vue';

export const QTimePicker = withInstall(TimePicker);

export type {
  QTimePickerProps,
  QTimePickerPropModelValue,
  QTimePickerPropFormat,
  QTimePickerPropPlaceholder,
  QTimePickerPropDisabled,
  QTimePickerPropClearable,
  QTimePickerPropStep
} from './src/types';
