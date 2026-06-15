<script setup lang="ts">
import { createPopper } from '@popperjs/core';
import { inject, provide, ref, computed, onMounted, onUnmounted } from 'vue';

import { getConfig } from '@/qComponents/config';

import type { Nullable } from '#/helpers';

import QCascaderColumn from '../QCascaderColumn/QCascaderColumn.vue';
import type { QCascaderProvider } from '../types';

import type { MenuBar, QCascaderDropdownProvider } from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QCascaderDropdown',
});

const emit = defineEmits(['close']);

const qCascader = inject<QCascaderProvider>(
  'qCascader',
  {} as QCascaderProvider
);

const zIndex = ref<number>(getConfig('nextZIndex') ?? DEFAULT_Z_INDEX);
const dropdown = ref<Nullable<HTMLElement>>(null);

const expandedRows = ref<number[]>([]);

function expandRow(
  rowIndex: number,
  columnIndex: number,
  hasChildren: boolean
): void {
  const newExpandedRows = expandedRows.value.slice(0, columnIndex);
  if (hasChildren) newExpandedRows.push(rowIndex);
  expandedRows.value = newExpandedRows;
}

const columnList = computed<MenuBar[][]>(() => {
  const options = qCascader.options.value;
  if (!options) return [];

  const columns = [options];

  expandedRows.value.forEach((rowIndex, colIndex) => {
    const children = columns[colIndex][rowIndex].children;
    if (children) columns.push(children);
  });

  return columns;
});

function closeDropdown(e: KeyboardEvent | MouseEvent): void {
  const target = e.target as HTMLElement;

  if (
    (e.type === 'keyup' && (e as KeyboardEvent).key === 'Escape') ||
    (e.type === 'click' &&
      !qCascader.popoverReference.value?.$el?.contains(target) &&
      (!dropdown.value?.contains(target) || target === dropdown.value))
  ) {
    emit('close');
  }
}

function createPopperJs(): void {
  if (!qCascader.popoverReference.value || !dropdown.value) return;

  qCascader.popperJS.value = createPopper(
    qCascader.popoverReference.value.$el,
    dropdown.value,
    {
      placement: 'bottom-start',
      modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
    }
  );
}

onMounted(() => {
  createPopperJs();

  document.addEventListener('keyup', closeDropdown, true);
  document.addEventListener('click', closeDropdown, true);
});

onUnmounted(() => {
  document.removeEventListener('keyup', closeDropdown, true);
  document.removeEventListener('click', closeDropdown, true);
});

provide<QCascaderDropdownProvider>('qCascaderDropdown', {
  expandedRows,
  columnList
});

const uniqueId = qCascader.uniqueId;
</script>

<template>
  <div
    ref="dropdown"
    class="q-cascader-dropdown"
    :style="{ zIndex }"
  >
    <transition-group
      ref="dropdown"
      class="q-cascader-dropdown__wrapper"
      :style="{ zIndex }"
      name="q-cascader-dropdown__wrapper_animation"
      tag="div"
    >
      <q-cascader-column
        v-for="(column, columnIndex) in columnList"
        :key="`${uniqueId}-col-${columnIndex}`"
        role="listbox"
        :aria-labelledby="uniqueId"
        :column-index="columnIndex"
        :column="column"
        @expand="expandRow"
      />
    </transition-group>
  </div>
</template>
