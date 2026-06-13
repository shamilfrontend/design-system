import { groupsOfColumns, loadingRowCount, rows, sortBy } from './args';
import Template from './Default';

const hiddenGroups = groupsOfColumns.map(group => ({
  ...group,
  columns: group.columns.map(column =>
    column.key === 'col3' ? { ...column, isHidden: true } : column
  )
}));

const HiddenColumns = Template.bind({});

HiddenColumns.args = {
  rows,
  sortBy,
  groupsOfColumns: hiddenGroups,
  loadingRowCount,
  fixedLayout: false
};

export default HiddenColumns;
