<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import { t } from '@/qComponents/locale';

import type {
  QSegmentedOption,
  QSegmentedPropBlock,
  QSegmentedPropDisabled,
  QSegmentedPropModelValue,
  QSegmentedPropOptions,
  QSegmentedPropSize
} from './types';

defineOptions({
  name: 'QSegmented',
});

const props = defineProps({
  modelValue: {
    type: [String, Number] as PropType<QSegmentedPropModelValue>,
    default: null
  },
  options: {
    type: Array as PropType<QSegmentedPropOptions>,
    default: (): QSegmentedPropOptions => []
  },
  size: {
    type: String as PropType<QSegmentedPropSize>,
    default: 'medium',
    validator: validateArray<QSegmentedPropSize>(['small', 'medium', 'large'])
  },
  disabled: {
    type: Boolean as PropType<QSegmentedPropDisabled>,
    default: false
  },
  block: {
    type: Boolean as PropType<QSegmentedPropBlock>,
    default: false
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: QSegmentedPropModelValue];
  change: [value: QSegmentedPropModelValue];
}>();

const classList = computed<Record<string, boolean>>(() => ({
  [`q-segmented_size_${props.size}`]: true,
  'q-segmented_disabled': props.disabled,
  'q-segmented_block': props.block
}));

function isActive(option: QSegmentedOption): boolean {
  return option.value === props.modelValue;
}

function isOptionDisabled(option: QSegmentedOption): boolean {
  return props.disabled || Boolean(option.disabled);
}

function selectOption(option: QSegmentedOption): void {
  if (isOptionDisabled(option)) return;

  emit('update:modelValue', option.value);
  emit('change', option.value);
}
</script>

<template>
  <div
    class="q-segmented"
    :class="classList"
    role="radiogroup"
    :aria-label="t('QSegmented.ariaLabel')"
  >
    <button
      v-for="option in options"
      :key="String(option.value)"
      type="button"
      role="radio"
      class="q-segmented__item"
      :class="{ 'q-segmented__item_active': isActive(option) }"
      :aria-checked="isActive(option)"
      :disabled="isOptionDisabled(option)"
      @click="selectOption(option)"
    >
      <span
        v-if="option.icon"
        :class="option.icon"
        aria-hidden="true"
      />
      {{ option.label }}
    </button>
  </div>
</template>
