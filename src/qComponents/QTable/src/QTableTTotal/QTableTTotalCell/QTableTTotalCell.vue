<script setup lang="ts">
import { computed, inject } from 'vue';
import type { PropType, StyleValue, VNode } from 'vue';

import type { ClassValue } from '#/helpers';

import { useSticky } from '../../hooks/sticky';
import type { StickyConfig } from '../../hooks/sticky';
import type { ExtendedColumn } from '../../QTableContainer/types';
import type { QTableTProvider } from '../../QTableT/types';
import type { QTableProvider } from '../../types';

defineOptions({
  name: 'QTableTTotalCell',
});

const props = defineProps({
  column: {
    type: Object as PropType<ExtendedColumn>,
    required: true
  },
  columnIndex: {
    type: Number,
    required: true
  }
});

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);
const qTableT = inject<QTableTProvider>('qTableT', {} as QTableTProvider);

const stickyConfig = computed<StickyConfig>(() =>
  useSticky(
    props.column.sticky?.position,
    props.columnIndex,
    qTableT.stickyGlobalConfig.value
  )
);

const rootClasses = computed<ClassValue>(() => ({
  'q-table-t-total-cell': true,
  [`q-table-t-total-cell_align_${props.column.align ?? ''}`]: Boolean(
    props.column.align
  ),
  'q-table-t-total-cell_sticked': stickyConfig.value.isSticked,
  'q-table-t-total-cell_sticked_first': stickyConfig.value.isFirstSticked,
  'q-table-t-total-cell_sticked_last': stickyConfig.value.isLastSticked,
  [`q-table-t-total-cell_sticked_${stickyConfig.value.position}`]:
    stickyConfig.value.isSticked
}));

const rootStyles = computed<StyleValue>(() => ({
  zIndex: stickyConfig.value.isSticked ? stickyConfig.value.zIndex : undefined,
  [stickyConfig.value.position]: stickyConfig.value.isSticked
    ? `${stickyConfig.value.offset}px`
    : undefined
}));

const isLoading = computed<boolean>(() => Boolean(qTable.isLoading.value));

const textContent = computed<string>(() => {
  const value = qTable.total.value?.[props.column.key] ?? null;

  return String(value ?? '');
});

const slotName = computed<string>(() => props.column.slots?.total ?? 'total');

const slotContent = computed<(() => VNode | VNode[]) | null>(() => {
  const currentSlot = qTable.slots[slotName.value];

  if (!currentSlot) return null;

  const value = qTable.total.value?.[props.column.key] ?? null;

  const renderSlot = (): VNode | VNode[] =>
    currentSlot({
      data: props.column,
      columnKey: props.column.key,
      index: props.columnIndex,
      value
    });

  return renderSlot;
});
</script>

<template>
  <th
    :class="rootClasses"
    :style="rootStyles"
  >
    <div class="q-table-t-total-cell__container">
      <div class="q-table-t-total-cell__content">
        <div
          v-if="isLoading"
          class="q-table-t__skeleton"
        />
        <component
          :is="slotContent"
          v-else-if="slotContent"
        />
        <template v-else>{{ textContent }}</template>
      </div>
    </div>
  </th>
</template>
