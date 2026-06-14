import { withInstall } from '../helpers';

import AutoComplete from './src/QAutoComplete.vue';

export const QAutoComplete = withInstall(AutoComplete);

export type {
  QAutoCompleteProps,
  QAutoCompleteOption,
  QAutoCompletePropModelValue,
  QAutoCompletePropOptions,
  QAutoCompletePropPlaceholder,
  QAutoCompletePropDisabled,
  QAutoCompletePropClearable
} from './src/types';
