<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';

import type { Nullable } from '#/helpers';

import type { QRowPropAlignV, QRowPropAlignH } from './types';

defineOptions({
  name: 'QRow'
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
   * vertical alignment of flex layout.
   * `['start', 'end', 'center', 'baseline', 'stretch']`
   */
  alignV: {
    type: String as PropType<QRowPropAlignV>,
    default: null,
    validator: validateArray<Nullable<QRowPropAlignV>>([
      null,
      'start',
      'end',
      'center',
      'baseline',
      'stretch'
    ])
  },
  /**
   * horizontal alignment of flex layout.
   * `['start', 'end', 'center', 'between', 'around']`
   */
  alignH: {
    type: String as PropType<QRowPropAlignH>,
    default: null,
    validator: validateArray<Nullable<QRowPropAlignH>>([
      null,
      'start',
      'end',
      'center',
      'between',
      'around'
    ])
  }
});

const classes = computed<Record<string, boolean>>(() => ({
  [`q-row_align-h_${props.alignH}`]: Boolean(props.alignH),
  [`q-row_align-v_${props.alignV}`]: Boolean(props.alignV)
}));
</script>

<template>
  <component
    :is="tag || 'div'"
    class="q-row"
    :class="classes"
  >
    <slot />
  </component>
</template>
