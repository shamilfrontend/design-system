import type { StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import type { QTablePropGroupsOfColumns, QTablePropSortBy, QTableProps } from '@/qComponents/QTable';

import { groupsOfColumns, loadingRowCount, rows, sortBy as sortByParams } from './args';

const RowClick: StoryFn<QTableProps> = args =>
  defineComponent({
    setup() {
      const sortBy = ref<QTablePropSortBy>(args.sortBy ?? null);
      const groupsOfCols = ref<QTablePropGroupsOfColumns>(
        args.groupsOfColumns ?? null
      );
      const lastClicked = ref<string>('Click a row to select it');

      const handleRowClick = (row: Record<string, unknown>, rowIndex: number): void => {
        lastClicked.value = `Row ${rowIndex + 1}: ${String(row.col1 ?? '')}`;
      };

      return { args, groupsOfCols, sortBy, lastClicked, handleRowClick };
    },
    template: `
      <div>
        <p style="margin: 0 0 12px; padding: 8px 12px; background: var(--color-primary-lighter); border-radius: 6px">
          {{ lastClicked }}
        </p>
        <q-table
          v-model:sort-by="sortBy"
          v-model:groups-of-columns="groupsOfCols"
          :rows="args.rows"
          :fixed-layout="args.fixedLayout"
          :loading-row-count="args.loadingRowCount"
          @row-click="handleRowClick"
        />
      </div>
    `
  });

RowClick.args = {
  rows,
  sortBy: sortByParams,
  groupsOfColumns,
  loadingRowCount,
  fixedLayout: false
};

export default RowClick;
