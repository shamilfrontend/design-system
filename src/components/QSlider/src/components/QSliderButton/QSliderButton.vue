<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from 'vue';
import type { CSSProperties, PropType } from 'vue';

import type { ClassValue } from '#/helpers';

import type {
  QSliderPropModelValue,
  QSliderPropTooltipMode
} from '../../types';

import type {
  QSliderButtonPropPosition,
  QSliderButtonPropPathLeft,
  QSliderButtonPropPathWidth,
  BtnClasses
} from './types';

defineOptions({
  name: 'QSliderButton'
});

const props = defineProps({
  position: {
    type: String as PropType<QSliderButtonPropPosition>,
    default: null
  },

  pathLeft: {
    type: Number as PropType<QSliderButtonPropPathLeft>,
    default: null
  },

  pathWidth: {
    type: Number as PropType<QSliderButtonPropPathWidth>,
    default: null
  },
  tooltipMode: {
    type: String as PropType<QSliderPropTooltipMode>,
    default: null
  },
  currentValue: {
    type: [String, Number, Boolean] as PropType<QSliderPropModelValue>,
    default: null
  },
  currentIndex: {
    type: Number,
    default: 0
  },
  valueMin: {
    type: Number,
    default: 0
  },
  valueMax: {
    type: Number,
    default: 0
  },
  disabled: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits<{
  'update:position': [percent: number];
  'drag-start': [];
}>();

const isDragging = ref<boolean>(false);

const btnClasses = computed<BtnClasses>(() => ({
  'q-slider-button_is-disabled': props.disabled,
  'q-slider-button_is-dragging': isDragging.value
}));

const tooltipClasses = computed<ClassValue>(() => ({
  'q-slider-button__tooltip_is-always-visible': props.tooltipMode === 'always'
}));

const btnStyles = computed<CSSProperties>(() => ({
  left: props.position ?? undefined
}));

const isTooltipHidden = computed<boolean>(
  () =>
    !props.tooltipMode ||
    props.currentValue === undefined ||
    props.currentValue === null
);

const tooltipStyles = computed<CSSProperties>(() => ({
  left: props.position ?? undefined
}));

function handleDragging({ clientX }: MouseEvent): void {
  if (!isDragging.value || props.disabled) return;

  let percent =
    ((clientX - Number(props.pathLeft)) / Number(props.pathWidth)) * 100;

  if (percent < 0) {
    percent = 0;
  } else if (percent > 100) {
    percent = 100;
  }

  emit('update:position', percent);
}

function handleDragEnd(): void {
  isDragging.value = false;
}

function handleBtnDown(event: MouseEvent): void {
  emit('drag-start');
  event.preventDefault();

  isDragging.value = true;

  document.addEventListener('mousemove', handleDragging);
  document.addEventListener('mouseup', handleDragEnd);
  document.addEventListener('contextmenu', handleDragEnd);
}

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleDragging);
  document.removeEventListener('mouseup', handleDragEnd);
  document.removeEventListener('contextmenu', handleDragEnd);
});
</script>

<template>
  <button
    type="button"
    class="q-slider-button"
    :class="btnClasses"
    :style="btnStyles"
    role="slider"
    :aria-valuemin="valueMin"
    :aria-valuemax="valueMax"
    :aria-valuenow="currentIndex"
    :aria-valuetext="String(currentValue ?? '')"
    :aria-disabled="disabled || undefined"
    @mousedown="handleBtnDown"
  >
    <div
      class="q-slider-button__target"
      aria-hidden="true"
    />
  </button>
  <div
    v-if="!isTooltipHidden"
    class="q-slider-button__tooltip"
    :class="tooltipClasses"
    :style="tooltipStyles"
    aria-hidden="true"
  >
    {{ currentValue }}
  </div>
</template>
