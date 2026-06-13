import { groupsOfColumns, loadingRowCount, rows, sortBy } from './args';
import Template from './Default';

const FixedLayout = Template.bind({});

FixedLayout.args = {
  loadingRowCount,
  rows,
  sortBy,
  groupsOfColumns,
  fixedLayout: true
};

export default FixedLayout;
