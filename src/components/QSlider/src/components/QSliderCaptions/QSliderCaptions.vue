<script setup lang="ts">
import { computed, inject, defineComponent, markRaw } from 'vue';
import type { PropType, Component, StyleValue, VNode } from 'vue';

import type { ClassValue } from '#/helpers';

import type {
  QSliderPropModelValue,
  QSliderPropData,
  QSliderProvider
} from '../../types';

const ARR_LENGTH_CORRECTION = 1;

defineOptions({
  name: 'QSliderCaptions'
});

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean] as PropType<QSliderPropModelValue>,
    default: null
  },

  data: {
    type: Array as PropType<QSliderPropData>,
    required: true
  },

  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: QSliderPropModelValue];
}>();

const qSlider = inject<QSliderProvider>('qSlider');

const captionClasses = computed<ClassValue>(() => ({
  'q-slider-captions': true,
  'q-slider-captions_is-disabled': props.disabled
}));

function getCaptionItemClasses(value: QSliderPropModelValue): ClassValue {
  return {
    'q-slider-captions__caption': true,
    'q-slider-captions__caption_active': value === props.modelValue
  };
}

function handleCaptionClick(value: QSliderPropModelValue): void {
  emit('update:modelValue', value);
}

function getCaptionLeftPosition(index: number): string {
  return `${(index / (props.data.length - ARR_LENGTH_CORRECTION)) * 100}%`;
}

interface CaptionEntry {
  value: QSliderPropModelValue;
  label?: string;
  style?: StyleValue;
  slotComponent?: Component;
}

const preparedData = computed<CaptionEntry[]>(() => {
  const captionSlot = qSlider?.slots.caption;

  if (captionSlot) {
    return props.data.map(item => ({
      value: item.value,
      style: item.style,
      slotComponent: markRaw(
        defineComponent({
          name: 'QSliderCaptionSlot',
          setup: (): (() => VNode | VNode[]) => () =>
            captionSlot({
              data: 'slotData' in item ? (item.slotData ?? {}) : {},
              label: item.label
            })
        })
      )
    }));
  }

  return props.data.map(({ value, style, label }) => ({
    value,
    label,
    style
  }));
});
</script>

<template>
  <div :class="captionClasses">
    <div
      v-for="(entry, index) in preparedData"
      v-show="entry.slotComponent || entry.label"
      :key="String(entry.value)"
      :class="getCaptionItemClasses(entry.value)"
      :style="{ left: getCaptionLeftPosition(index) }"
      role="button"
      tabindex="0"
      @click="handleCaptionClick(entry.value)"
      @keydown.enter="handleCaptionClick(entry.value)"
      @keydown.space.prevent="handleCaptionClick(entry.value)"
    >
      <div
        v-if="entry.slotComponent"
        class="q-slider-captions__slot"
        :style="entry.style"
      >
        <component :is="entry.slotComponent" />
      </div>
      <template v-else-if="entry.label">
        {{ entry.label }}
      </template>
    </div>
  </div>
</template>
