import { withInstall } from '@/helpers';

import Descriptions from './src/QDescriptions.vue';
import DescriptionsItem from './src/QDescriptionsItem.vue';

export const QDescriptions = withInstall(Descriptions);
export const QDescriptionsItem = withInstall(DescriptionsItem);

export type {
  QDescriptionsPropTitle,
  QDescriptionsPropColumn,
  QDescriptionsPropBordered,
  QDescriptionsPropSize
} from './src/QDescriptions.vue';
export type {
  QDescriptionsItemPropLabel,
  QDescriptionsItemPropSpan
} from './src/QDescriptionsItem.vue';
