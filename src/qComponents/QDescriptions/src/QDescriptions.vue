<script setup lang="ts">
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

export type QDescriptionsPropTitle = string | null;
export type QDescriptionsPropColumn = number;
export type QDescriptionsPropBordered = boolean;
export type QDescriptionsPropSize = 'small' | 'medium' | 'large';

defineOptions({
  name: 'QDescriptions',
  componentName: 'QDescriptions'
});

defineProps({
  title: {
    type: String as PropType<QDescriptionsPropTitle>,
    default: null
  },
  column: {
    type: Number as PropType<QDescriptionsPropColumn>,
    default: 3
  },
  bordered: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as PropType<QDescriptionsPropSize>,
    default: 'medium',
    validator: validateArray<QDescriptionsPropSize>(['small', 'medium', 'large'])
  }
});
</script>

<template>
  <div
    class="q-descriptions"
    :class="[
      `q-descriptions_size_${size}`,
      { 'q-descriptions_bordered': bordered }
    ]"
  >
    <div
      v-if="title"
      class="q-descriptions__title"
    >
      {{ title }}
    </div>
    <dl
      class="q-descriptions__body"
      :style="{ gridTemplateColumns: `repeat(${column}, 1fr)` }"
    >
      <slot />
    </dl>
  </div>
</template>
