import { withInstall } from '../helpers';

import PageHeader from './src/QPageHeader.vue';

export const QPageHeader = withInstall(PageHeader);

export type {
  QPageHeaderProps,
  QPageHeaderPropTitle,
  QPageHeaderPropSubtitle,
  QPageHeaderPropBack,
  QPageHeaderBreadcrumbItem
} from './src/types';
