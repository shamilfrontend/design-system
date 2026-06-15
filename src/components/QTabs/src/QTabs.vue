<script setup lang="ts">
import { ref, provide, watch, toRef } from 'vue';

import type { QTabPropModelValue, QTabsProvider } from './types';

defineOptions({
  name: 'QTabs'
});

const props = defineProps({
  modelValue: {
    type: String,
    default: null
  },
  /**
   * width of QTabPanes
   */
  tabWidth: {
    type: [String, Number],
    default: null
  },
  /**
   * whether QTabs is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  'update:modelValue': [name: string];
  change: [name: string];
}>();

const currentName = ref<QTabPropModelValue>(props.modelValue);

function updateValue(name: string): void {
  emit('update:modelValue', name);
  emit('change', name);
  currentName.value = name;
}

watch(
  () => props.modelValue,
  name => {
    if (name) updateValue(name);
  },
  { immediate: true }
);

provide<QTabsProvider>('qTabs', {
  currentName,
  tabWidth: toRef(props, 'tabWidth'),
  disabled: toRef(props, 'disabled'),
  updateValue
});
</script>

<template>
  <div
    class="q-tabs"
    role="tablist"
    aria-orientation="horizontal"
  >
    <slot />
  </div>
</template>
