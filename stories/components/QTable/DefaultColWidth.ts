import type { QTablePropGroupsOfColumns } from '@/qComponents/QTable';

import { loadingRowCount, rows, sortBy } from './args';
import Template from './Default';

const groupsWithoutWidth: QTablePropGroupsOfColumns = [
  {
    key: 'one',
    columns: [
      { key: 'col1', value: 'Column 1' },
      { key: 'col2', value: 'Column 2' },
      { key: 'col3', value: 'Column 3', sortable: true },
      { key: 'col4', value: 'Column 4' }
    ]
  }
];

const DefaultColWidth = Template.bind({});

DefaultColWidth.args = {
  rows,
  sortBy,
  groupsOfColumns: groupsWithoutWidth,
  loadingRowCount,
  fixedLayout: true,
  defaultColWidth: '180px'
};

export default DefaultColWidth;
