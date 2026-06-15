<script setup lang="ts">
import { computed, inject } from 'vue';

import { CHECKBOX_COL_WIDTH } from '../config';
import type {
  ExtendedColumn,
  QTableContainerProvider
} from '../QTableContainer/types';
import type { QTableProvider } from '../types';

defineOptions({
  name: 'QTableTColgroup'
});

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);
const qTableContainer = inject<QTableContainerProvider>(
  'qTableContainer',
  {} as QTableContainerProvider
);

const columnList = computed<ExtendedColumn[]>(
  () => qTableContainer.columnList.value ?? []
);

const checkboxColWidth = CHECKBOX_COL_WIDTH;
const isSelectable = qTableContainer.isSelectable;

function getColWidth({ width }: ExtendedColumn): Record<'width', string> {
  return {
    width: width ?? qTable.defaultColWidth.value ?? '200px'
  };
}
</script>

<template>
  <colgroup>
    <col
      v-if="isSelectable"
      :style="{ width: `${checkboxColWidth}px` }"
    />
    <col
      v-for="(column, index) in columnList"
      :key="index"
      :style="getColWidth(column)"
    />
  </colgroup>
</template>
