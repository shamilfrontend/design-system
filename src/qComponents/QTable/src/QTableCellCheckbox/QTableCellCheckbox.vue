<script setup lang="ts">
import { computed, inject } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { CHANGE_EVENT } from '@/qComponents/constants/events';
import { QCheckbox } from '@/qComponents/QCheckbox';

import type { ClassValue } from '#/helpers';

import { useSticky } from '../hooks/sticky';
import type { StickyConfig } from '../hooks/sticky';
import type { QTableTProvider } from '../QTableT/types';
import type { QTableProvider } from '../types';

import type {
  QTableCellCheckboxIndeterminate,
  QTableCellCheckboxIsCheckable
} from './types';

defineOptions({
  name: 'QTableCellCheckbox',
});

const props = defineProps({
  baseTag: {
    type: String,
    required: true
  },

  baseClass: {
    type: String,
    required: true
  },

  checked: {
    type: Boolean,
    required: true
  },

  indeterminate: {
    type: Boolean as PropType<QTableCellCheckboxIndeterminate>,
    default: null
  },

  isCheckable: {
    type: Boolean as PropType<QTableCellCheckboxIsCheckable>,
    default: true
  }
});

const emit = defineEmits<{
  change: [value: boolean];
}>();

const qTable = inject<QTableProvider>('qTable', {} as QTableProvider);
const qTableT = inject<QTableTProvider>('qTableT', {} as QTableTProvider);

const stickyConfig = computed<StickyConfig>(() =>
  useSticky('left', -1, qTableT.stickyGlobalConfig.value)
);

const rootClasses = computed<ClassValue>(() => ({
  [props.baseClass]: true,
  [`${props.baseClass}_sticked`]: stickyConfig.value.isSticked,
  [`${props.baseClass}_sticked_first`]: stickyConfig.value.isSticked,
  [`${props.baseClass}_sticked_last`]: stickyConfig.value.isLastSticked,
  [`${props.baseClass}_sticked_left`]: stickyConfig.value.isSticked
}));

const rootStyles = computed<StyleValue>(() => ({
  left: stickyConfig.value.isSticked ? '0' : undefined,
  zIndex: stickyConfig.value.isSticked ? stickyConfig.value.zIndex : undefined
}));

const handleCheckboxChange = (value: boolean): void => {
  emit(CHANGE_EVENT, value);
};

const isLoading = computed<boolean>(() => Boolean(qTable.isLoading?.value));
</script>

<template>
  <component
    :is="baseTag"
    :class="rootClasses"
    :style="rootStyles"
  >
    <div :class="`${baseClass}__container`">
      <div :class="`${baseClass}__content ${baseClass}__content_checkbox`">
        <div
          v-if="isLoading && isCheckable"
          class="q-table-t__skeleton"
        />
        <q-checkbox
          v-else-if="isCheckable"
          :model-value="checked"
          :indeterminate="indeterminate"
          :validate-event="false"
          @change="handleCheckboxChange"
          @click.stop
        />
      </div>
    </div>
  </component>
</template>
