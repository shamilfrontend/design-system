<script setup lang="ts">
import { computed } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type { Nullable } from '#/helpers';

import type {
  QSkeletonPropVariant,
  QSkeletonPropAnimated,
  QSkeletonPropRows,
  QSkeletonPropWidth,
  QSkeletonPropHeight,
  QSkeletonPropRadius
} from './types';

defineOptions({
  name: 'QSkeleton',
  componentName: 'QSkeleton'
});

const props = defineProps({
  /**
   * skeleton shape preset
   */
  variant: {
    type: String as PropType<QSkeletonPropVariant>,
    default: 'text',
    validator: validateArray<'text' | 'circle' | 'rect' | 'button'>([
      'text',
      'circle',
      'rect',
      'button'
    ])
  },
  /**
   * whether shimmer animation is enabled
   */
  animated: {
    type: Boolean as PropType<QSkeletonPropAnimated>,
    default: true
  },
  /**
   * number of text rows (works with variant="text")
   */
  rows: {
    type: Number as PropType<QSkeletonPropRows>,
    default: 1
  },
  /**
   * custom width
   */
  width: {
    type: [String, Number] as PropType<QSkeletonPropWidth>,
    default: null
  },
  /**
   * custom height
   */
  height: {
    type: [String, Number] as PropType<QSkeletonPropHeight>,
    default: null
  },
  /**
   * custom border radius
   */
  radius: {
    type: [String, Number] as PropType<QSkeletonPropRadius>,
    default: null
  }
});

function formatSize(value: Nullable<string | number>): Nullable<string> {
  if (value == null) return null;

  return typeof value === 'number' ? `${value}px` : value;
}

const skeletonStyle = computed<StyleValue>(() => {
  const style: Record<string, string> = {};
  const width = formatSize(props.width);
  const height = formatSize(props.height);
  const radius = formatSize(props.radius);

  if (width) style.width = width;
  if (height) style.height = height;
  if (radius) style.borderRadius = radius;

  return style;
});

const rowItems = computed<number[]>(() => {
  if (props.variant !== 'text') return [0];

  const count = Math.max(1, props.rows ?? 1);

  return Array.from({ length: count }, (_, index) => index);
});

const isMultiRowText = computed<boolean>(
  () => props.variant === 'text' && rowItems.value.length > 1
);
</script>

<template>
  <div
    v-if="isMultiRowText"
    class="q-skeleton-group"
  >
    <span
      v-for="row in rowItems"
      :key="row"
      class="q-skeleton q-skeleton__row"
      :class="[
        `q-skeleton_variant_${variant}`,
        { 'q-skeleton_animated': animated }
      ]"
      :style="[
        skeletonStyle,
        row === rowItems.length - 1 && !width ? { width: '72%' } : null
      ]"
      aria-hidden="true"
    />
  </div>
  <span
    v-else
    class="q-skeleton"
    :class="[
      `q-skeleton_variant_${variant}`,
      { 'q-skeleton_animated': animated }
    ]"
    :style="skeletonStyle"
    aria-hidden="true"
  />
</template>
