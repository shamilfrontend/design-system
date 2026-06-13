import type { StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QButton } from '@/qComponents/QButton';
import type {
  QTablePropGroupsOfColumns,
  QTablePropSortBy,
  QTableProps
} from '@/qComponents/QTable';

import { groupsOfColumns, loadingRowCount } from './args';

const Empty: StoryFn<QTableProps> = args =>
  defineComponent({
    components: { QButton },
    setup() {
      const sortBy = ref<QTablePropSortBy>(args.sortBy ?? null);
      const groupsOfCols = ref<QTablePropGroupsOfColumns>(
        args.groupsOfColumns ?? null
      );

      return { args, groupsOfCols, sortBy };
    },
    template: `
      <q-table
        v-model:sort-by="sortBy"
        v-model:groups-of-columns="groupsOfCols"
        :rows="args.rows"
        :empty-text="args.emptyText"
        :fixed-layout="args.fixedLayout"
        :loading-row-count="args.loadingRowCount"
      >
        <template #empty>
          <div style="padding: 24px; text-align: center">
            <p style="margin: 0 0 12px; color: var(--color-text-muted)">
              {{ args.emptyText || 'No records yet' }}
            </p>
            <q-button size="small">Add record</q-button>
          </div>
        </template>
      </q-table>
    `
  });

Empty.args = {
  rows: [],
  groupsOfColumns,
  loadingRowCount,
  emptyText: 'No records yet',
  fixedLayout: false
};

export default Empty;
