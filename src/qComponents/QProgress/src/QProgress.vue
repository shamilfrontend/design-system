<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type {
  QProgressPropIndeterminate,
  QProgressPropPercentage,
  QProgressPropShowText,
  QProgressPropStatus,
  QProgressPropStrokeWidth,
  QProgressPropType
} from './types';

defineOptions({
  name: 'QProgress',
});

const props = defineProps({
  type: {
    type: String as PropType<QProgressPropType>,
    default: 'line',
    validator: validateArray<QProgressPropType>(['line', 'circle'])
  },
  percentage: {
    type: Number as PropType<QProgressPropPercentage>,
    default: 0
  },
  status: {
    type: String as PropType<QProgressPropStatus>,
    default: null,
    validator: (value: QProgressPropStatus): boolean =>
      value === null ||
      validateArray<NonNullable<QProgressPropStatus>>([
        'success',
        'warning',
        'error'
      ])(value)
  },
  strokeWidth: {
    type: Number as PropType<QProgressPropStrokeWidth>,
    default: 6
  },
  showText: {
    type: Boolean as PropType<QProgressPropShowText>,
    default: true
  },
  indeterminate: {
    type: Boolean as PropType<QProgressPropIndeterminate>,
    default: false
  }
});

const normalizedPercentage = computed<number>(() =>
  Math.min(100, Math.max(0, props.percentage ?? 0))
);

const barStyle = computed<Record<string, string>>(() => ({
  width: `${normalizedPercentage.value}%`
}));

const circleSize = 126;
const circleRadius = computed<number>(() => (circleSize - props.strokeWidth) / 2);
const circleCircumference = computed<number>(
  () => 2 * Math.PI * circleRadius.value
);
const circleOffset = computed<number>(
  () =>
    circleCircumference.value *
    (1 - normalizedPercentage.value / 100)
);

const statusClass = computed<string | null>(() =>
  props.status ? `q-progress_status_${props.status}` : null
);

const displayText = computed<string>(() => `${normalizedPercentage.value}%`);
</script>

<template>
  <div
    class="q-progress"
    :class="[
      `q-progress_type_${type}`,
      statusClass,
      { 'q-progress_indeterminate': indeterminate }
    ]"
    role="progressbar"
    :aria-valuenow="indeterminate ? undefined : normalizedPercentage"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    <template v-if="type === 'line'">
      <div class="q-progress__outer">
        <div
          class="q-progress__inner"
          :style="indeterminate ? undefined : barStyle"
        />
      </div>
      <span
        v-if="showText && !indeterminate"
        class="q-progress__text"
      >
        {{ displayText }}
      </span>
    </template>

    <template v-else>
      <svg
        class="q-progress__circle"
        :width="circleSize"
        :height="circleSize"
        :viewBox="`0 0 ${circleSize} ${circleSize}`"
      >
        <circle
          class="q-progress__circle-track"
          :cx="circleSize / 2"
          :cy="circleSize / 2"
          :r="circleRadius"
          :stroke-width="strokeWidth"
          fill="none"
        />
        <circle
          class="q-progress__circle-bar"
          :cx="circleSize / 2"
          :cy="circleSize / 2"
          :r="circleRadius"
          :stroke-width="strokeWidth"
          fill="none"
          :stroke-dasharray="`${circleCircumference} ${circleCircumference}`"
          :stroke-dashoffset="indeterminate ? undefined : circleOffset"
        />
      </svg>
      <span
        v-if="showText && !indeterminate"
        class="q-progress__text q-progress__text_circle"
      >
        {{ displayText }}
      </span>
    </template>
  </div>
</template>
