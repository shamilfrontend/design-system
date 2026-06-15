<script setup lang="ts">
import type { PropType } from 'vue';

export type QDescriptionsItemPropLabel = string;
export type QDescriptionsItemPropSpan = number;

defineOptions({
  name: 'QDescriptionsItem',
});

defineProps({
  label: {
    type: String as PropType<QDescriptionsItemPropLabel>,
    default: ''
  },
  span: {
    type: Number as PropType<QDescriptionsItemPropSpan>,
    default: 1
  }
});
</script>

<template>
  <div
    class="q-descriptions__item"
    :style="{ gridColumn: `span ${span}` }"
  >
    <dt class="q-descriptions__label">{{ label }}</dt>
    <dd class="q-descriptions__value">
      <slot />
    </dd>
  </div>
</template>
