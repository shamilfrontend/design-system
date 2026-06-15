<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick, inject } from 'vue';

import type { Nullable } from '#/helpers';

import type { QPickerDropdownProvider } from '../QPickerDropdown';
import type { QPickerHSVAModel } from '../QPickerDropdown/types';
import draggable from '../utils/draggable';

defineOptions({
  name: 'QColorHueSlider',
});

const emit = defineEmits<{
  change: [newModel: QPickerHSVAModel];
}>();

const qPickerDropdown = inject<QPickerDropdownProvider>(
  'qPickerDropdown',
  {} as QPickerDropdownProvider
);

const thumbTop = ref<number>(0);
const thumbStyles = computed<Record<string, string>>(() => ({
  top: `${thumbTop.value}px`
}));

const root = ref<Nullable<HTMLElement>>(null);
const thumb = ref<Nullable<HTMLElement>>(null);
const bar = ref<Nullable<HTMLElement>>(null);

const handleDrag = (event: MouseEvent): void => {
  const thumbElement = thumb.value;
  if (!root.value || !thumbElement) return;

  const rect = root.value.getBoundingClientRect();

  let top = event.clientY - rect.top;
  top = Math.min(top, rect.height - thumbElement.offsetHeight / 2);
  top = Math.max(thumbElement.offsetHeight / 2, top);
  const hue = Math.round(
    ((top - thumbElement.offsetHeight / 2) /
      (rect.height - thumbElement.offsetHeight)) *
      360
  );

  emit('change', { ...qPickerDropdown.hsvaModel, hue });
};

const handleBarClick = (event: MouseEvent): void => {
  if (event.target !== thumb.value) handleDrag(event);
};

const getThumbTop = (): number => {
  const rootElement = root.value;
  const thumbElement = thumb.value;
  if (!rootElement || !thumbElement) return 0;

  return Math.round(
    (qPickerDropdown.hsvaModel.hue *
      (rootElement.offsetHeight - thumbElement.offsetHeight * 1.5)) /
      360
  );
};

const update = (): void => {
  thumbTop.value = getThumbTop();
};

watch(
  () => qPickerDropdown.hsvaModel.hue,
  async () => {
    await nextTick();
    update();
  },
  { immediate: true }
);

onMounted(() => {
  if (bar.value) {
    draggable(bar.value, { drag: handleDrag, end: handleDrag });
  }
});

defineExpose({
  root,
  thumb,
  bar,
  thumbStyles,
  handleBarClick,
  update
});
</script>

<template>
  <div
    ref="root"
    class="q-color-hue-slider"
    role="slider"
    :aria-valuemin="0"
    :aria-valuemax="360"
    :aria-valuenow="qPickerDropdown.hsvaModel.hue"
  >
    <div
      ref="bar"
      class="q-color-hue-slider__bar"
      aria-hidden="true"
      @click="handleBarClick"
    />
    <div
      ref="thumb"
      class="q-color-hue-slider__thumb"
      aria-label="Hue"
      :style="thumbStyles"
    />
  </div>
</template>
