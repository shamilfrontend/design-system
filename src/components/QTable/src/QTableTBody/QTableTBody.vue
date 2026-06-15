<script setup lang="ts">
import getHash from 'object-hash';
import { computed, inject } from 'vue';

import type { QTableProvider } from '../types';

import QTableTBodyRow from './QTableTBodyRow/QTableTBodyRow.vue';

defineOptions({
  name: 'QTableTBody'
});

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);

const mockedRows = computed<Record<string, unknown>[]>(() =>
  Array.from({ length: qTable.loadingRowCount.value ?? 30 }, () => ({}))
);

const rowsList = computed<Record<string, unknown>[]>(() =>
  qTable.isLoading.value ? mockedRows.value : qTable.rows.value
);
</script>

<template>
  <tbody class="q-table-t-body">
    <q-table-t-body-row
      v-for="(row, index) in rowsList"
      :key="`body-row-${getHash(row)}-${index}`"
      :row="row"
      :row-index="index"
    />
  </tbody>
</template>
