import type { QTablePropGroupsOfColumns } from '@/qComponents/QTable';

import { loadingRowCount, rows, sortBy } from './args';
import Template from './Default';

const groupsWithMinWidth: QTablePropGroupsOfColumns = [
  {
    key: 'one',
    columns: [
      {
        key: 'col1',
        value: 'Column 1 (min 120px)',
        minWidth: '120px'
      },
      {
        key: 'col2',
        value: 'Column 2 (min 200px)',
        minWidth: '200px'
      },
      {
        key: 'col3',
        value: 'Column 3 (min 280px)',
        minWidth: '280px',
        sortable: true
      },
      {
        key: 'col4',
        value: 'Column 4 (min 160px)',
        minWidth: '160px'
      }
    ]
  }
];

const MinWidth = Template.bind({});

MinWidth.args = {
  rows,
  sortBy,
  groupsOfColumns: groupsWithMinWidth,
  loadingRowCount,
  fixedLayout: false
};

export default MinWidth;
