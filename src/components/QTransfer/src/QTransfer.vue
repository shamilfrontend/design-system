<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

import { t } from '@/locale';

import type {
  QTransferItem,
  QTransferPropData,
  QTransferPropModelValue,
  QTransferPropTitles
} from './types';

defineOptions({
  name: 'QTransfer'
});

const props = defineProps({
  modelValue: {
    type: Array as PropType<QTransferPropModelValue>,
    default: (): QTransferPropModelValue => []
  },
  data: {
    type: Array as PropType<QTransferPropData>,
    default: (): QTransferPropData => []
  },
  titles: {
    type: Array as unknown as PropType<QTransferPropTitles>,
    default: null
  }
});

const panelTitles = computed<QTransferPropTitles>(
  () => props.titles ?? [t('QTransfer.sourceTitle'), t('QTransfer.targetTitle')]
);

const emit = defineEmits<{
  'update:modelValue': [value: QTransferPropModelValue];
  change: [value: QTransferPropModelValue];
}>();

const leftSelection = ref<(string | number)[]>([]);
const rightSelection = ref<(string | number)[]>([]);

const leftItems = computed<QTransferItem[]>(() =>
  props.data.filter(item => !props.modelValue.includes(item.key))
);

const rightItems = computed<QTransferItem[]>(() =>
  props.data.filter(item => props.modelValue.includes(item.key))
);

function toggleLeft(key: string | number): void {
  const index = leftSelection.value.indexOf(key);

  if (index >= 0) leftSelection.value.splice(index, 1);
  else leftSelection.value.push(key);
}

function toggleRight(key: string | number): void {
  const index = rightSelection.value.indexOf(key);

  if (index >= 0) rightSelection.value.splice(index, 1);
  else rightSelection.value.push(key);
}

function moveToRight(): void {
  const next = [...props.modelValue, ...leftSelection.value];
  leftSelection.value = [];
  emit('update:modelValue', next);
  emit('change', next);
}

function moveToLeft(): void {
  const next = props.modelValue.filter(k => !rightSelection.value.includes(k));
  rightSelection.value = [];
  emit('update:modelValue', next);
  emit('change', next);
}

function isLeftSelected(key: string | number): boolean {
  return leftSelection.value.includes(key);
}

function isRightSelected(key: string | number): boolean {
  return rightSelection.value.includes(key);
}
</script>

<template>
  <div class="q-transfer">
    <div class="q-transfer__panel">
      <div class="q-transfer__header">{{ panelTitles[0] }}</div>
      <ul class="q-transfer__list">
        <li
          v-for="item in leftItems"
          :key="item.key"
          class="q-transfer__item"
          :class="{ 'q-transfer__item_selected': isLeftSelected(item.key) }"
          @click="toggleLeft(item.key)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="q-transfer__actions">
      <button
        type="button"
        class="q-transfer__btn"
        :disabled="!leftSelection.length"
        @click="moveToRight"
      >
        &gt;
      </button>
      <button
        type="button"
        class="q-transfer__btn"
        :disabled="!rightSelection.length"
        @click="moveToLeft"
      >
        &lt;
      </button>
    </div>
    <div class="q-transfer__panel">
      <div class="q-transfer__header">{{ panelTitles[1] }}</div>
      <ul class="q-transfer__list">
        <li
          v-for="item in rightItems"
          :key="item.key"
          class="q-transfer__item"
          :class="{ 'q-transfer__item_selected': isRightSelected(item.key) }"
          @click="toggleRight(item.key)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>
