<script setup lang="ts">
import { inject, ref, computed, onMounted, watch } from 'vue';
import type { PropType } from 'vue';

import { QScrollbar } from '@/components/QScrollbar';

import type { Nullable } from '#/helpers';

import findAllLeaves from '../helpers/findAllLeaves';
import type { QCascaderDropdownProvider } from '../QCascaderDropdown/types';
import QCascaderRow from '../QCascaderRow/QCascaderRow.vue';
import type { Option, QCascaderProvider } from '../types';

import { getSibling } from './helpers';
import type { QCascaderColumnPropColumn } from './types';

defineOptions({
  name: 'QCascaderColumn'
});

const props = defineProps({
  columnIndex: {
    type: Number,
    required: true
  },
  column: {
    type: Array as PropType<QCascaderColumnPropColumn>,
    required: true
  }
});

const emit = defineEmits(['expand']);

const qCascader = inject<QCascaderProvider>(
  'qCascader',
  {} as QCascaderProvider
);
const qCascaderDropdown = inject<QCascaderDropdownProvider>(
  'qCascaderDropdown',
  {} as QCascaderDropdownProvider
);
const root = ref<Nullable<HTMLElement>>(null);

const rootClasses = computed<Record<string, boolean>>(() => {
  const columnList = qCascaderDropdown.columnList.value;

  const prevRowsCount = columnList[props.columnIndex - 1]?.length ?? 0;
  const currentRowsCount = props.column.length;
  const nextRowsCount = columnList[props.columnIndex + 1]?.length ?? 0;

  return {
    'q-cascader-column': true,
    'q-cascader-column_left-bottom-border': currentRowsCount > prevRowsCount,
    'q-cascader-column_right-bottom-border': currentRowsCount > nextRowsCount
  };
});

function checkExpanded(rowIndex: number): boolean {
  return qCascaderDropdown.expandedRows.value[props.columnIndex] === rowIndex;
}

const expandedRowIndex = ref<number>(0);

function handleRowExpand(rowIndex: number, hasChildren: boolean): void {
  expandedRowIndex.value = rowIndex;
  emit('expand', rowIndex, props.columnIndex, hasChildren);
}

function handleRowCheck(row: Option, isExist: boolean): void {
  if (!qCascader.multiple.value || qCascader.checkStrictly.value) {
    qCascader.updateValue(row.value, isExist);
    return;
  }

  const leaves = findAllLeaves(row);
  qCascader.updateValue(leaves, isExist);
}

const scrollTo = ref<Nullable<HTMLElement>>(null);

function handleScrollbarKeydown(event: KeyboardEvent): void {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
  }
}

function handleArrowUpDownKeyUp(e: KeyboardEvent): void {
  const distance = e.key === 'ArrowUp' ? -1 : 1;
  const target = e.target as HTMLElement;
  const sibling = getSibling(target, distance);

  if (!sibling) return;
  sibling.focus();
  scrollTo.value = sibling;
}

function focusRow(index: Nullable<number> = null): void {
  const rowList = root.value?.querySelectorAll<HTMLElement>(
    '.q-cascader-row[tabindex="-1"]'
  );

  rowList?.[index ?? 0]?.focus();
}

function handleArrowLeftKeyUp(): void {
  const rowIndex = qCascaderDropdown.expandedRows.value[props.columnIndex - 1];

  emit('expand', rowIndex, props.columnIndex - 1, false);
}

const isLastColumn = computed<boolean>(
  () => !qCascaderDropdown.columnList.value[props.columnIndex + 1]?.length
);

watch(isLastColumn, value => {
  if (value) focusRow(expandedRowIndex.value);
});

onMounted(() => {
  focusRow();
});

const uniqueId = qCascader.uniqueId;
</script>

<template>
  <div
    ref="root"
    :class="rootClasses"
  >
    <q-scrollbar
      wrap-class="q-cascader-column__scrollbar"
      :scroll-to="scrollTo"
      @keydown="handleScrollbarKeydown"
      @keyup.arrow-left="handleArrowLeftKeyUp"
    >
      <q-cascader-row
        v-for="(row, rowIndex) in column"
        :key="`${uniqueId}-${columnIndex}-${rowIndex}`"
        :unique-id="`${uniqueId}-col-${columnIndex}-row-${rowIndex}`"
        :row="row"
        :row-index="rowIndex"
        :expanded="checkExpanded(rowIndex)"
        @expand="handleRowExpand"
        @check="handleRowCheck"
        @keyup="handleArrowUpDownKeyUp"
      />
    </q-scrollbar>
  </div>
</template>
