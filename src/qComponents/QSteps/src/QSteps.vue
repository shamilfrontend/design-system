<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type {
  QStepsItem,
  QStepsPropActive,
  QStepsPropDirection,
  QStepsPropFinishStatus
} from './types';

defineOptions({
  name: 'QSteps',
  componentName: 'QSteps'
});

const props = defineProps({
  steps: {
    type: Array as PropType<QStepsItem[]>,
    default: (): QStepsItem[] => []
  },
  active: {
    type: Number as PropType<QStepsPropActive>,
    default: 0
  },
  direction: {
    type: String as PropType<QStepsPropDirection>,
    default: 'horizontal',
    validator: validateArray<QStepsPropDirection>(['horizontal', 'vertical'])
  },
  finishStatus: {
    type: String as PropType<QStepsPropFinishStatus>,
    default: 'finish',
    validator: validateArray<QStepsPropFinishStatus>([
      'wait',
      'process',
      'finish',
      'error'
    ])
  }
});

const emit = defineEmits<{
  'update:active': [value: number];
}>();

interface StepView extends QStepsItem {
  status: QStepsPropFinishStatus;
  index: number;
}

function getStepStatus(index: number): QStepsPropFinishStatus {
  if (index < props.active) return props.finishStatus;
  if (index === props.active) return 'process';

  return 'wait';
}

const stepViews = computed<StepView[]>(() =>
  props.steps.map((step, index) => ({
    ...step,
    index,
    status: getStepStatus(index)
  }))
);

function handleStepClick(index: number): void {
  emit('update:active', index);
}
</script>

<template>
  <div
    class="q-steps"
    :class="`q-steps_direction_${direction}`"
  >
    <div
      v-for="step in stepViews"
      :key="step.index"
      class="q-steps__item"
      :class="`q-steps__item_status_${step.status}`"
      @click="handleStepClick(step.index)"
    >
      <div class="q-steps__head">
        <span
          class="q-steps__icon"
          :class="step.icon"
        >
          <template v-if="!step.icon">{{ step.index + 1 }}</template>
        </span>
        <span
          v-if="step.index < stepViews.length - 1"
          class="q-steps__line"
        />
      </div>
      <div class="q-steps__content">
        <div class="q-steps__title">{{ step.title }}</div>
        <div
          v-if="step.description"
          class="q-steps__description"
        >
          {{ step.description }}
        </div>
      </div>
    </div>
  </div>
</template>
