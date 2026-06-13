import { withInstall } from '../helpers';

import TreeSelect from './src/QTreeSelect.vue';

export const QTreeSelect = withInstall(TreeSelect);

export type {
  QTreeSelectProps,
  QTreeSelectPropModelValue,
  QTreeSelectPropData,
  QTreeSelectPropMultiple,
  QTreeSelectPropPlaceholder,
  QTreeSelectPropDisabled,
  QTreeSelectPropClearable,
  QTreeSelectPropCheckStrictly
} from './src/types';
