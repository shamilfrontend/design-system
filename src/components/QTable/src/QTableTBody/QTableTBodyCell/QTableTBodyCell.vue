<script setup lang="ts">
import { computed, defineComponent, inject } from 'vue';
import type { PropType, StyleValue, VNode } from 'vue';

import type { ClassValue } from '#/helpers';

import { useSticky } from '../../hooks/sticky';
import type { StickyConfig } from '../../hooks/sticky';
import type { ExtendedColumn } from '../../QTableContainer/types';
import type { QTableTProvider } from '../../QTableT/types';
import type { QTableProvider } from '../../types';

import type { QTableTBodyCellPropRow, QTableTBodyCellPropValue } from './types';

defineOptions({
  name: 'QTableTBodyCell'
});

const props = defineProps({
  row: {
    type: Object as PropType<QTableTBodyCellPropRow>,
    required: true
  },
  rowIndex: {
    type: Number,
    required: true
  },
  column: {
    type: Object as PropType<ExtendedColumn>,
    required: true
  },
  columnIndex: {
    type: Number,
    required: true
  },
  value: {
    type: [
      String,
      Number,
      Boolean,
      Array,
      Object
    ] as PropType<QTableTBodyCellPropValue>,
    default: null
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
  'q-table-t-body-cell': true,
  [`q-table-t-body-cell_align_${props.column.align ?? ''}`]: Boolean(
    props.column.align
  ),
  'q-table-t-body-cell_sticked': stickyConfig.value.isSticked,
  'q-table-t-body-cell_sticked_first': stickyConfig.value.isFirstSticked,
  'q-table-t-body-cell_sticked_last': stickyConfig.value.isLastSticked,
  [`q-table-t-body-cell_sticked_${stickyConfig.value.position}`]:
    stickyConfig.value.isSticked,
  [props.column.customCellClass ?? '']: Boolean(props.column.customCellClass)
}));

const rootStyles = computed<StyleValue>(() => ({
  zIndex: stickyConfig.value.isSticked ? stickyConfig.value.zIndex : undefined,
  [stickyConfig.value.position]: stickyConfig.value.isSticked
    ? `${stickyConfig.value.offset}px`
    : undefined
}));

const formattedValue = computed(() => {
  if (props.column.formatter) {
    return props.column.formatter(props.value, props.row, props.column);
  }

  return props.value;
});

const isLoading = computed<boolean>(() => Boolean(qTable.isLoading?.value));

const slotContent = computed(() => {
  const slotName = props.column.slots?.row ?? 'row';
  const currentSlot = qTable?.slots[slotName];

  if (!currentSlot) return null;

  return defineComponent({
    name: 'QTableTBodyCellSlot',
    setup(): () => VNode | VNode[] | string | number | null | undefined {
      return () =>
        currentSlot({
          row: props.row,
          rowIndex: props.rowIndex,
          column: props.column,
          columnKey: props.column.key,
          columnIndex: props.columnIndex,
          value: formattedValue.value
        });
    }
  });
});
</script>

<template>
  <td
    :class="rootClasses"
    :style="rootStyles"
  >
    <div class="q-table-t-body-cell__container">
      <div class="q-table-t-body-cell__content">
        <div
          v-if="isLoading"
          class="q-table-t__skeleton"
        />
        <component
          :is="slotContent"
          v-else-if="slotContent"
        />
        <template v-else>{{ String(formattedValue ?? '') }}</template>
      </div>
    </div>
  </td>
</template>
