<script setup lang="ts">
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

export type QContainerPropSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

defineOptions({
  name: 'QContainer',
  componentName: 'QContainer'
});

defineProps({
  size: {
    type: String as PropType<QContainerPropSize>,
    default: 'lg',
    validator: validateArray<QContainerPropSize>([
      'sm',
      'md',
      'lg',
      'xl',
      'full'
    ])
  },
  fluid: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div
    class="q-container"
    :class="[
      fluid ? 'q-container_fluid' : `q-container_size_${size}`
    ]"
  >
    <slot />
  </div>
</template>
