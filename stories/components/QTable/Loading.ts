import { groupsOfColumns, loadingRowCount, rows, sortBy } from './args';
import Template from './Default';

const Loading = Template.bind({});

Loading.args = {
  rows,
  sortBy,
  groupsOfColumns,
  loadingRowCount,
  isLoading: true,
  fixedLayout: false
};

export default Loading;
