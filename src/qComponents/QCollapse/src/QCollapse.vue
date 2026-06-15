<script setup lang="ts">
import { uniqueId } from 'lodash-es';
import { PropType, provide, watch, ref } from 'vue';
import type { Component } from 'vue';

import type { QCollapsePropModelValue, QCollapseProvider } from './types';

defineOptions({
  name: 'QCollapse',
});

const props = defineProps({
  modelValue: {
    type: [Array, String, Number] as PropType<QCollapsePropModelValue>,
    default: (): QCollapsePropModelValue => []
  },
  /**
   * shrink all panels, except the last selected
   */
  accordion: {
    type: Boolean,
    default: false
  },
  /**
   *  control your own close icon
   */
  closeIcon: {
    type: [Object, String] as PropType<Component | string>,
    default: null
  },
  /**
   * control your own open icon
   */
  openIcon: {
    type: [Object, String] as PropType<Component | string>,
    default: null
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: (string | number)[]];
  change: [value: (string | number)[]];
}>();

const activeNames = ref<(string | number)[]>([]);

function updateValue(name: string | number): void {
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === name ? [] : [name];
  } else {
    const index = activeNames.value.indexOf(name);

    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(name);
    }
  }

  emit('update:modelValue', activeNames.value);
  emit('change', activeNames.value);
}

watch(
  () => props.modelValue,
  value => {
    const newValue: (string | number)[] = [];
    activeNames.value = value === null ? newValue : newValue.concat(value);
  },
  { immediate: true }
);

provide<QCollapseProvider>('qCollapse', {
  uniqueId,
  activeNames,
  updateValue,
  openIcon: props.openIcon,
  closeIcon: props.closeIcon
});
</script>

<template>
  <div class="q-collapse">
    <slot />
  </div>
</template>
