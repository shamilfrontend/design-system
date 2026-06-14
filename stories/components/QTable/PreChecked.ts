import { groupsOfColumns, loadingRowCount, rows, sortBy, total } from './args';
import Template from './Default';

const PreChecked = Template.bind({});

PreChecked.args = {
  total,
  rows,
  sortBy,
  groupsOfColumns,
  loadingRowCount,
  checkedRows: [0, 2],
  selectionColumn: {
    enabled: true,
    selectAllShown: true,
    selectTotalShown: true
  }
};

export default PreChecked;
