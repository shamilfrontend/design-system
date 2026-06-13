import type { Meta } from '@storybook/vue3';

import { QTable } from '@/qComponents/QTable';

import CustomRows from './CustomRows';
import Default from './Default';
import DefaultColWidth from './DefaultColWidth';
import Draggable from './Draggable';
import Empty from './Empty';
import FixedLayout from './FixedLayout';
import Groups from './Groups';
import HiddenColumns from './HiddenColumns';
import Loading from './Loading';
import MinWidth from './MinWidth';
import PreChecked from './PreChecked';
import RowClick from './RowClick';
import Selectable from './Selectable';
import StickyColumn from './StickyColumn';
import Total from './Total';

const storyMetadata: Meta = {
  title: 'Components/QTable',
  component: QTable,
  argTypes: {
    isLoading: { control: 'boolean' },
    grid: { control: 'boolean' },
    fixedLayout: { control: 'boolean' },
    loadingRowCount: { control: { type: 'number', min: 1, max: 30 } },
    defaultColWidth: { control: 'text' },
    emptyText: { control: 'text' },
    'v-model:checkedRows': { control: false },
    'v-model:sortBy': { control: false },
    'v-model:groupsOfColumns': { control: false },
    rows: { control: false },
    groupsOfColumns: { control: false },
    total: { control: false },
    selectionColumn: { control: false },
    customRowClass: { control: false },
    customRowStyle: { control: false }
  },
  decorators: [
    (): Record<'template', string> => ({
      template:
        '<div style="width: 100vw;margin-left:-1rem;margin-right:-1rem;"><story /></div>'
    })
  ]
};

export {
  Default,
  Loading,
  Empty,
  RowClick,
  HiddenColumns,
  FixedLayout,
  MinWidth,
  DefaultColWidth,
  PreChecked,
  Selectable,
  Total,
  StickyColumn,
  CustomRows,
  Groups,
  Draggable
};
export default storyMetadata;
