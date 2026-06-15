import { withInstall } from '@/helpers';

import Tree from './src/QTree.vue';

export const QTree = withInstall(Tree);

export type {
  QTreeProps,
  QTreeNode,
  QTreePropData,
  QTreePropDefaultExpandAll,
  QTreePropExpandOnClickNode
} from './src/types';
