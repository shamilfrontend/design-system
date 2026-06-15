<script setup lang="ts">
import { computed, ref, watch } from 'vue';

import { t } from '@/locale';

defineOptions({
  name: 'QDatePickerTimeFooter'
});

const props = defineProps({
  hours: {
    type: Number,
    default: 0
  },
  minutes: {
    type: Number,
    default: 0
  },
  label: {
    type: String,
    default: null
  },
  step: {
    type: Number,
    default: 1
  }
});

const emit = defineEmits<{
  'update:hours': [value: number];
  'update:minutes': [value: number];
  confirm: [];
}>();

const localHours = ref<number>(props.hours);
const localMinutes = ref<number>(props.minutes);

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

function selectHour(hour: number): void {
  localHours.value = hour;
  emit('update:hours', hour);
}

function selectMinute(minute: number): void {
  localMinutes.value = minute;
  emit('update:minutes', minute);
}

function handleConfirm(): void {
  emit('confirm');
}

watch(
  () => props.hours,
  value => {
    localHours.value = value;
  }
);

watch(
  () => props.minutes,
  value => {
    localMinutes.value = value;
  }
);
</script>

<template>
  <div class="q-picker-panel__datetime-footer">
    <span
      v-if="label"
      class="q-picker-panel__time-label"
    >
      {{ label }}
    </span>
    <div class="q-picker-panel__time-columns">
      <ul class="q-picker-panel__time-column">
        <li
          v-for="hour in hoursList"
          :key="hour"
          class="q-picker-panel__time-cell"
          :class="{
            'q-picker-panel__time-cell_active': hour === localHours
          }"
          @click="selectHour(hour)"
        >
          {{ pad(hour) }}
        </li>
      </ul>
      <ul class="q-picker-panel__time-column">
        <li
          v-for="minute in minutesList"
          :key="minute"
          class="q-picker-panel__time-cell"
          :class="{
            'q-picker-panel__time-cell_active': minute === localMinutes
          }"
          @click="selectMinute(minute)"
        >
          {{ pad(minute) }}
        </li>
      </ul>
    </div>
    <button
      type="button"
      class="q-picker-panel__confirm-btn"
      @click="handleConfirm"
    >
      {{ t('QTimePicker.confirm') }}
    </button>
  </div>
</template>
