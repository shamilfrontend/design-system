<script setup lang="ts">
import { get } from 'lodash-es';
import { computed, inject } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { randId } from '@/qComponents/helpers';

import type { ClassValue } from '#/helpers';

import QTableCellCheckbox from '../../QTableCellCheckbox/QTableCellCheckbox.vue';
import type {
  ExtendedColumn,
  QTableContainerProvider
} from '../../QTableContainer/types';
import type { QTableProvider } from '../../types';
import QTableTBodyCell from '../QTableTBodyCell/QTableTBodyCell.vue';
import type { QTableTBodyCellPropValue } from '../QTableTBodyCell/types';

import type { QTableTBodyRowPropRow } from './types';

defineOptions({
  name: 'QTableTBodyRow',
  componentName: ' QTableTBodyRow'
});

const props = defineProps({
  row: {
    type: Object as PropType<QTableTBodyRowPropRow>,
    required: true
  },
  rowIndex: {
    type: Number,
    required: true
  }
});

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);
const qTableContainer = inject<QTableContainerProvider>(
  'qTableContainer',
  {} as QTableContainerProvider
);

const isChecked = computed<boolean>(
  () => qTable.checkedRows.value.includes(props.rowIndex) ?? false
);

const rootClasses = computed<ClassValue>(() => {
  const classes: ClassValue = ['q-table-t-body-row'];

  if (qTable.isRowClickable.value) classes.push('q-table-t-body-row_clickable');

  const getCustomClasses = qTable.customRowClass.value;

  if (getCustomClasses) {
    const customClasses = getCustomClasses({
      row: props.row,
      rowIndex: props.rowIndex
    });

    if (customClasses) return classes.concat(customClasses);
  }

  return classes;
});

const rootStyles = computed<StyleValue>(() => {
  const styles: StyleValue = [];

  const getCustomStyles = qTable.customRowStyle.value;

  if (getCustomStyles) {
    const customStyles = getCustomStyles({
      row: props.row,
      rowIndex: props.rowIndex
    });

    if (customStyles) return styles.concat(customStyles);
  }

  return styles;
});

const columnList = computed<ExtendedColumn[]>(
  () => qTableContainer?.columnList.value ?? []
);

function getRowValue(key: string): QTableTBodyCellPropValue {
  const value = get(props.row, key, null);

  if (value === null) return null;
  if (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  ) {
    return value;
  }
  if (Array.isArray(value)) return value;
  if (typeof value === 'object') return value as Record<string, unknown>;

  return null;
}

const handleCheckboxChange = (): void => {
  if (!qTable) return;

  const checkedRowsSet = new Set(qTable.checkedRows.value);

  if (isChecked.value) {
    checkedRowsSet.delete(props.rowIndex);
  } else {
    checkedRowsSet.add(props.rowIndex);
  }

  qTable.updateCheckedRows(Array.from(checkedRowsSet));
};

const handleRowClick = (): void => {
  qTable.emitRowClick(props.row, props.rowIndex);
};
</script>

<template>
  <tr
    :class="rootClasses"
    :style="rootStyles"
    @click="handleRowClick"
  >
    <q-table-cell-checkbox
      v-if="qTableContainer?.isSelectable"
      base-tag="td"
      base-class="q-table-t-body-cell"
      :checked="isChecked"
      @change="handleCheckboxChange"
    />

    <q-table-t-body-cell
      v-for="(column, colIndex) in columnList"
      :key="randId(`body-row-${rowIndex}-cell-${colIndex}-`)"
      :row="row"
      :row-index="rowIndex"
      :column="column"
      :column-index="colIndex"
      :value="getRowValue(column.key)"
    />
  </tr>
</template>
