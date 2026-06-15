<script setup lang="ts">
import { ref, computed, inject, defineComponent } from 'vue';
import type { PropType, StyleValue, VNode } from 'vue';

import type { Nullable, Optional, ClassValue } from '#/helpers';

import { DEFAULT_SORTING_ORDER } from '../../config';
import { useSticky } from '../../hooks/sticky';
import type { StickyConfig } from '../../hooks/sticky';
import type { ExtendedColumn } from '../../QTableContainer/types';
import type { QTableTProvider } from '../../QTableT/types';
import type { QTableProvider, SortDirection } from '../../types';

import type { QTableTHeadCellPropSortBy } from './types';

defineOptions({
  name: 'QTableTHeadCell'
});

const props = defineProps({
  column: {
    type: Object as PropType<ExtendedColumn>,
    required: true
  },
  columnIndex: {
    type: Number,
    required: true
  },
  sortBy: {
    type: Object as PropType<QTableTHeadCellPropSortBy>,
    default: null
  },
  draggedColumn: {
    type: Object as PropType<ExtendedColumn>,
    default: null
  }
});

const emit = defineEmits<{
  drag: [column: ExtendedColumn];
  drop: [position?: 'left' | 'right', targetColumnKey?: string];
}>();

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);
const qTableT = inject<QTableTProvider>('qTableT', {} as QTableTProvider);
const root = ref<Nullable<HTMLElement>>(null);

const stickyConfig = computed<StickyConfig>(() =>
  useSticky(
    props.column.sticky?.position,
    props.columnIndex,
    qTableT.stickyGlobalConfig.value
  )
);

const isSortable = computed<boolean>(() => Boolean(props.column.sortable));
const isCurrentSorting = computed<boolean>(
  () => props.sortBy?.key === props.column.key
);

const cellClasses = computed<ClassValue>(() => ({
  'q-table-t-head-cell': true,
  [`q-table-t-head-cell_align_${props.column.align ?? ''}`]: Boolean(
    props.column.align
  ),
  'q-table-t-head-cell_dragging': props.draggedColumn !== null,
  'q-table-t-head-cell_sticked': stickyConfig.value.isSticked,
  'q-table-t-head-cell_sticked_first': stickyConfig.value.isFirstSticked,
  'q-table-t-head-cell_sticked_last': stickyConfig.value.isLastSticked,
  [`q-table-t-head-cell_sticked_${stickyConfig.value.position}`]:
    stickyConfig.value.isSticked,
  'q-table-t-head-cell_sortable': isSortable.value,
  'q-table-t-head-cell_sorted':
    isCurrentSorting.value && Boolean(props.sortBy?.direction)
}));

const cellStyles = computed<StyleValue>(() => ({
  '--group-color': props.column.group.color ?? undefined,
  zIndex: stickyConfig.value.isSticked ? stickyConfig.value.zIndex : undefined,
  [stickyConfig.value.position]: stickyConfig.value.isSticked
    ? `${stickyConfig.value.offset}px`
    : undefined,
  minWidth: !qTable.fixedLayout.value
    ? (props.column.minWidth ?? undefined)
    : undefined
}));

const currentSlot = computed<
  Optional<NonNullable<QTableProvider['slots']>[string]>
>(() => {
  const slotName = props.column.slots?.header ?? 'header';
  return qTable.slots[slotName];
});

const contentClasses = computed<ClassValue>(() => ({
  'q-table-t-head-cell__content': true,
  'q-table-t-head-cell__content_ellipsis': !currentSlot.value,
  'q-table-t-head-cell__content_sortable': isSortable.value
}));

const slotContent = computed(() => {
  const slot = currentSlot.value;
  if (!slot) return null;

  return defineComponent({
    name: 'QTableTHeadCellSlot',
    setup(): () => VNode | VNode[] | string | number | null | undefined {
      return () =>
        slot({
          data: props.column,
          columnKey: props.column.key,
          index: props.columnIndex,
          value: props.column.value
        });
    }
  });
});

const sortArrowElClasses = computed<ClassValue>(() => {
  const isDirectionAsc = props.sortBy?.direction === 'ascending';
  const isArrowUpShown = isCurrentSorting.value && isDirectionAsc;

  return {
    'q-table-t-head-cell__sort-arrow': true,
    'q-icon-arrow-up': isArrowUpShown,
    'q-icon-arrow-down': !isArrowUpShown
  };
});

let sortCounter = 0;

const handleSortArrowClick = (): void => {
  let newDirection: SortDirection = null;
  const sortOrder = props.column.sortOrder ?? DEFAULT_SORTING_ORDER;

  if (Array.isArray(sortOrder)) {
    newDirection = sortOrder[sortCounter];
    sortCounter = sortOrder.length - 1 === sortCounter ? 0 : (sortCounter += 1);
  }

  qTable.updateSortBy({
    key: props.column.key,
    direction: newDirection
  });
};

const startCursorPosition = ref<number>(0);
const dummyOffset = ref<number>(0);

const dropZoneStyle = computed(() => ({
  height: `${qTableT.tableHeight.value}px`
}));

const dummyStyle = computed(() => ({
  height: `${qTableT.tableHeight.value}px`,
  transform: `translateX(${dummyOffset.value}px)`
}));

const isDraggable = computed<boolean>(
  () =>
    Boolean(props.column.group.draggable) && props.column.draggable !== false
);

const isColumnBeingDragged = computed<boolean>(
  () => props.draggedColumn?.key === props.column.key
);

const isDropZoneRestricted = computed<boolean>(
  () =>
    !props.column.group.draggable ||
    props.column.draggable === false ||
    props.draggedColumn?.group.key !== props.column.group.key
);

const handleMouseMove = (e: MouseEvent): void => {
  dummyOffset.value = e.clientX - startCursorPosition.value;
};

const endDragging = (): void => {
  emit('drop');
  document.removeEventListener('mouseup', endDragging);
  document.removeEventListener('mousemove', handleMouseMove);
};

const handleDragTriggerMouseDown = (e: MouseEvent): void => {
  e.preventDefault();
  startCursorPosition.value = e.clientX;
  dummyOffset.value = 0;

  emit('drag', props.column);
  document.addEventListener('mouseup', endDragging);
  document.addEventListener('mousemove', handleMouseMove);
};

const handleDropZoneElementMouseUp = (position: 'left' | 'right'): void => {
  emit('drop', position, props.column.key);
};
</script>

<template>
  <th
    ref="root"
    :class="cellClasses"
    :style="cellStyles"
  >
    <div
      v-if="isColumnBeingDragged"
      class="q-table-t-head-cell__dummy"
      :style="dummyStyle"
    />

    <template v-if="draggedColumn !== null">
      <div
        v-if="isDropZoneRestricted"
        class="q-table-t-head-cell__drop-zone q-table-t-head-cell__drop-zone_full"
        :style="dropZoneStyle"
      />
      <template v-else>
        <div
          class="q-table-t-head-cell__drop-zone q-table-t-head-cell__drop-zone_left"
          :style="dropZoneStyle"
          @mouseup="handleDropZoneElementMouseUp('left')"
        />
        <div
          class="q-table-t-head-cell__drop-zone q-table-t-head-cell__drop-zone_right"
          :style="dropZoneStyle"
          @mouseup="handleDropZoneElementMouseUp('right')"
        />
      </template>
    </template>

    <div class="q-table-t-head-cell__container">
      <div
        :class="contentClasses"
        @click="isSortable ? handleSortArrowClick : undefined"
      >
        <component
          :is="slotContent"
          v-if="slotContent"
        />
        <template v-else>{{ column.value }}</template>
      </div>

      <button
        v-if="isSortable"
        type="button"
        :class="sortArrowElClasses"
        @click="handleSortArrowClick"
      />

      <div
        v-if="isDraggable"
        class="q-table-t-head-cell__drag-element q-icon-drag-linear"
        @mousedown="handleDragTriggerMouseDown"
      />
    </div>
  </th>
</template>
