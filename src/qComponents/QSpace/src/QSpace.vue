<script setup lang="ts">
import { computed } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type {
  QSpacePropAlign,
  QSpacePropDirection,
  QSpacePropFill,
  QSpacePropSize,
  QSpacePropWrap
} from './types';

defineOptions({
  name: 'QSpace',
});

const props = defineProps({
  direction: {
    type: String as PropType<QSpacePropDirection>,
    default: 'horizontal',
    validator: validateArray<QSpacePropDirection>(['horizontal', 'vertical'])
  },
  size: {
    type: [String, Number] as PropType<QSpacePropSize>,
    default: 'medium'
  },
  wrap: {
    type: Boolean as PropType<QSpacePropWrap>,
    default: false
  },
  fill: {
    type: Boolean as PropType<QSpacePropFill>,
    default: false
  },
  align: {
    type: String as PropType<QSpacePropAlign>,
    default: 'center',
    validator: validateArray<QSpacePropAlign>([
      'start',
      'center',
      'end',
      'baseline'
    ])
  }
});

const gapValue = computed<string>(() => {
  if (typeof props.size === 'number') return `${props.size}px`;

  const map: Record<string, string> = {
    small: '8px',
    medium: '16px',
    large: '24px'
  };

  return map[props.size] ?? '16px';
});

const spaceStyle = computed<StyleValue>(() => ({
  gap: gapValue.value
}));

const classList = computed<Record<string, boolean>>(() => ({
  [`q-space_direction_${props.direction}`]: true,
  [`q-space_align_${props.align}`]: true,
  'q-space_wrap': props.wrap,
  'q-space_fill': props.fill
}));
</script>

<template>
  <div
    class="q-space"
    :class="classList"
    :style="spaceStyle"
  >
    <slot />
  </div>
</template>
