<script setup lang="ts">
import { computed } from 'vue';

import type { Nullable } from '#/helpers';

defineOptions({
  name: 'QCol',
  componentName: 'QCol'
});

const props = defineProps({
  /**
   * custom element tag
   */
  tag: {
    type: String,
    default: 'div'
  },
  /**
   * number of column the grid cols.
   * `auto || [1-12]`
   */
  cols: {
    type: [String, Number],
    default: null,
    validator: (value: Nullable<string | number>): boolean => {
      if (value === null || value === 'auto') return true;

      const num = Number(value);

      return !Number.isNaN(num) && num > 0 && num <= 12;
    }
  },
  /**
   * number of spacing on the left side of the grid.
   * `[0-11]`
   */
  offset: {
    type: [String, Number],
    default: null,
    validator: (value: Nullable<string | number>): boolean => {
      if (value === null) return true;

      const num = Number(value);

      return !Number.isNaN(num) && num >= 0 && num <= 11;
    }
  }
});

const classes = computed<Record<string, boolean>>(() => ({
  [`q-col_size_${props.cols}`]: props.cols !== null,
  [`q-col_offset_${props.offset}`]: props.offset !== null
}));
</script>

<template>
  <component
    :is="tag"
    class="q-col"
    :class="classes"
  >
    <slot />
  </component>
</template>
