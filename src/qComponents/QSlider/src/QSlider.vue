<script setup lang="ts">
import {
  reactive,
  ref,
  computed,
  onMounted,
  provide,
  inject,
  watch,
  useSlots
} from 'vue';
import type { PropType } from 'vue';

import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable } from '#/helpers';

import QSliderBar from './components/QSliderBar/QSliderBar.vue';
import QSliderButton from './components/QSliderButton/QSliderButton.vue';
import QSliderCaptions from './components/QSliderCaptions/QSliderCaptions.vue';
import type {
  QSliderPropModelValue,
  QSliderPropData,
  QSliderState,
  QSliderProvider,
  RootClasses,
  QSliderPropTooltipMode
} from './types';

defineOptions({
  name: 'QSlider'
});

const props = defineProps({
  /**
   * binding value
   */
  modelValue: {
    type: [String, Number, Boolean] as PropType<QSliderPropModelValue>,
    default: null
  },

  /**
   * array of objects with required fields, example:
   * `{ value: 'test', label: 'text', style: {}, slotData: {} }`
   */
  data: {
    type: Array as PropType<QSliderPropData>,
    required: true
  },
  /**
   * Slider's tooltip displaying mode:
   * `'hover' | 'always'`.
   * If `null`, the tooltip will be hidden
   */
  tooltipMode: {
    type: String as PropType<QSliderPropTooltipMode>,
    default: null
  },
  /**
   *
   * whether Slider steps is visible
   */
  showSteps: {
    type: Boolean,
    default: false
  },
  /**
   * whether Slider is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: QSliderPropModelValue];
}>();

const slots = useSlots();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);
const qFormItem = inject<Nullable<QFormItemProvider>>('qFormItem', null);

const path = ref<Nullable<HTMLElement>>(null);

const state = reactive<QSliderState>({
  btnPosition: null,
  pathLeft: null,
  pathWidth: null
});

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const rootClasses = computed<RootClasses>(() => ({
  'q-slider_is-disabled': isDisabled.value
}));

const currentIndex = computed<number>(() => {
  const index = props.data.findIndex(({ value }) => value === props.modelValue);
  return index === -1 ? 0 : index;
});

const sliderValueMax = computed<number>(() =>
  Math.max(props.data.length - 1, 0)
);

function setBtnPosition(index: number): void {
  if (index < 1 || props.data.length < 2) {
    state.btnPosition = '0%';
    return;
  }

  state.btnPosition = `${(100 / (props.data.length - 1)) * index}%`;
}

function handlePathClick({ clientX }: MouseEvent): void {
  if (isDisabled.value || !path?.value) return;

  const { width, left }: DOMRect = path.value.getBoundingClientRect();
  const percent: number = ((clientX - left) / width) * 100;

  const index = Math.round((percent * (props.data.length - 1)) / 100);
  setBtnPosition(index);
  emit('update:modelValue', props.data[index]?.value);
}

function handleBtnPositionUpdate(percent: number): void {
  if (isDisabled.value) return;

  const index = Math.round((percent * (props.data.length - 1)) / 100);
  setBtnPosition(index);
  emit('update:modelValue', props.data[index]?.value);
}

function handleCaptionChange(value: QSliderPropModelValue): void {
  if (isDisabled.value) return;

  const index = props.data.findIndex(item => item.value === value);
  setBtnPosition(index);
  emit('update:modelValue', value);
}

function setupValue(): void {
  setBtnPosition(currentIndex.value);
}

function setupPathValues(): void {
  if (!path?.value) return;

  const { width, left }: DOMRect = path.value.getBoundingClientRect();
  state.pathLeft = left;
  state.pathWidth = width;
}

watch(
  () => props.modelValue,
  () => {
    setupValue();
    qFormItem?.validateField('change');
  }
);

onMounted(() => {
  setupValue();
  setupPathValues();
});

provide<QSliderProvider>('qSlider', {
  slots
});
</script>

<template>
  <div
    class="q-slider"
    :class="rootClasses"
  >
    <div
      ref="path"
      class="q-slider__path"
      @click="handlePathClick"
    >
      <q-slider-bar :size="state.btnPosition" />

      <q-slider-button
        v-model:position="state.btnPosition"
        :current-value="modelValue"
        :current-index="currentIndex"
        :value-min="0"
        :value-max="sliderValueMax"
        :path-left="state.pathLeft"
        :path-width="state.pathWidth"
        :disabled="isDisabled"
        :tooltip-mode="tooltipMode"
        @drag-start="setupPathValues"
        @update:position="handleBtnPositionUpdate"
      />

      <div
        v-if="showSteps"
        class="q-slider__steps"
        aria-hidden="true"
      >
        <div
          v-for="step in data.length"
          :key="step"
          class="q-slider__step"
        />
      </div>
    </div>

    <q-slider-captions
      :model-value="modelValue"
      :data="data"
      :disabled="isDisabled"
      @update:model-value="handleCaptionChange"
    />
  </div>
</template>
