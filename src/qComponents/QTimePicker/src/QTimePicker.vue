<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { t } from '@/qComponents/locale';
import { QInput } from '@/qComponents/QInput';

import type { Nullable } from '#/helpers';

import type { QTimePickerPropModelValue } from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QTimePicker',
});

const props = defineProps({
  modelValue: {
    type: String as PropType<QTimePickerPropModelValue>,
    default: null
  },
  format: {
    type: String,
    default: 'HH:mm'
  },
  placeholder: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  step: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: Nullable<string>];
  change: [value: Nullable<string>];
}>();

const reference = ref<Nullable<HTMLElement>>(null);
const panel = ref<Nullable<HTMLElement>>(null);
const isVisible = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);
const selectedHours = ref<number>(0);
const selectedMinutes = ref<number>(0);

let popperJS: Nullable<Instance> = null;

const placeholderText = computed<string>(
  () => props.placeholder ?? t('QTimePicker.placeholder')
);

const displayValue = computed<string>(() => props.modelValue ?? '');

const hoursList = computed<number[]>(() =>
  Array.from({ length: 24 }, (_, index) => index)
);

const minutesList = computed<number[]>(() => {
  const step = Math.max(1, props.step);
  const items: number[] = [];

  for (let minute = 0; minute < 60; minute += step) {
    items.push(minute);
  }

  return items;
});

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function formatTime(hours: number, minutes: number): string {
  return `${pad(hours)}:${pad(minutes)}`;
}

function parseTime(value: Nullable<string>): void {
  if (!value) {
    selectedHours.value = 0;
    selectedMinutes.value = 0;

    return;
  }

  const match = value.match(/^(\d{1,2}):(\d{2})$/);

  if (!match) return;

  selectedHours.value = Math.min(23, Number(match[1]));
  selectedMinutes.value = Math.min(59, Number(match[2]));
}

function emitValue(value: Nullable<string>): void {
  emit('update:modelValue', value);
  emit('change', value);
}

function confirmSelection(): void {
  const value = formatTime(selectedHours.value, selectedMinutes.value);
  emitValue(value);
  isVisible.value = false;
}

function togglePanel(): void {
  if (props.disabled) return;

  isVisible.value = !isVisible.value;
}

async function createPopper(): Promise<void> {
  if (!reference.value || !panel.value) return;

  popperJS = createPopperJs(reference.value, panel.value, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
  });
}

function destroyPopper(): void {
  popperJS?.destroy();
  popperJS = null;
}

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;

  if (reference.value?.contains(target) || panel.value?.contains(target)) {
    return;
  }

  isVisible.value = false;
}

function selectHour(hour: number): void {
  selectedHours.value = hour;
}

function selectMinute(minute: number): void {
  selectedMinutes.value = minute;
}

watch(
  () => props.modelValue,
  value => {
    parseTime(value);
  },
  { immediate: true }
);

watch(isVisible, async value => {
  if (value) {
    zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
    parseTime(props.modelValue);
    await nextTick();
    createPopper();
  } else {
    destroyPopper();
  }
});

onMounted(() => {
  document.addEventListener('click', handleDocumentClick, false);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick, false);
  destroyPopper();
});
</script>

<template>
  <div
    ref="reference"
    class="q-time-picker"
  >
    <q-input
      :model-value="displayValue"
      :placeholder="placeholderText"
      :disabled="disabled"
      suffix-icon="q-icon-clock-stroke"
      readonly
      @click="togglePanel"
    />

    <teleport to="body">
      <transition name="q-fade">
        <div
          v-show="isVisible"
          ref="panel"
          class="q-time-picker__panel"
          :style="{ zIndex }"
        >
          <div class="q-time-picker__columns">
            <ul class="q-time-picker__column">
              <li
                v-for="hour in hoursList"
                :key="hour"
                class="q-time-picker__cell"
                :class="{
                  'q-time-picker__cell_active': hour === selectedHours
                }"
                @click="selectHour(hour)"
              >
                {{ pad(hour) }}
              </li>
            </ul>
            <ul class="q-time-picker__column">
              <li
                v-for="minute in minutesList"
                :key="minute"
                class="q-time-picker__cell"
                :class="{
                  'q-time-picker__cell_active': minute === selectedMinutes
                }"
                @click="selectMinute(minute)"
              >
                {{ pad(minute) }}
              </li>
            </ul>
          </div>
          <div class="q-time-picker__footer">
            <button
              type="button"
              class="q-time-picker__btn"
              @click="isVisible = false"
            >
              {{ t('QTimePicker.cancel') }}
            </button>
            <button
              type="button"
              class="q-time-picker__btn q-time-picker__btn_primary"
              @click="confirmSelection"
            >
              {{ t('QTimePicker.confirm') }}
            </button>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>
