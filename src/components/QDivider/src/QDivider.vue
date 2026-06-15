<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';

import type {
  QDividerPropBorderStyle,
  QDividerPropContentPosition,
  QDividerPropDirection
} from './types';

defineOptions({
  name: 'QDivider'
});

const props = defineProps({
  direction: {
    type: String as PropType<QDividerPropDirection>,
    default: 'horizontal',
    validator: validateArray<QDividerPropDirection>(['horizontal', 'vertical'])
  },
  contentPosition: {
    type: String as PropType<QDividerPropContentPosition>,
    default: 'center',
    validator: validateArray<QDividerPropContentPosition>([
      'left',
      'center',
      'right'
    ])
  },
  borderStyle: {
    type: String as PropType<QDividerPropBorderStyle>,
    default: 'solid',
    validator: validateArray<QDividerPropBorderStyle>([
      'solid',
      'dashed',
      'dotted'
    ])
  }
});

const slots = useSlots();

const classList = computed<Record<string, boolean>>(() => ({
  [`q-divider_direction_${props.direction}`]: true,
  [`q-divider_content_${props.contentPosition}`]:
    props.direction === 'horizontal',
  [`q-divider_style_${props.borderStyle}`]: true,
  'q-divider_with-text': Boolean(
    slots.default && props.direction === 'horizontal'
  )
}));
</script>

<template>
  <div
    class="q-divider"
    :class="classList"
    role="separator"
    :aria-orientation="direction"
  >
    <span
      v-if="$slots.default && direction === 'horizontal'"
      class="q-divider__text"
    >
      <slot />
    </span>
  </div>
</template>
