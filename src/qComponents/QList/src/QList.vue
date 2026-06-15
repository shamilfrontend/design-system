<script setup lang="ts">
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

export type QListPropSize = 'small' | 'medium' | 'large';
export type QListPropBordered = boolean;

defineOptions({
  name: 'QList',
});

defineProps({
  size: {
    type: String as PropType<QListPropSize>,
    default: 'medium',
    validator: validateArray<QListPropSize>(['small', 'medium', 'large'])
  },
  bordered: {
    type: Boolean as PropType<QListPropBordered>,
    default: false
  }
});
</script>

<template>
  <ul
    class="q-list"
    :class="[
      `q-list_size_${size}`,
      { 'q-list_bordered': bordered }
    ]"
    role="list"
  >
    <slot />
  </ul>
</template>
