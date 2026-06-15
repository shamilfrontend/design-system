<script setup lang="ts">
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths
} from 'date-fns';
import { computed, ref, watch } from 'vue';
import type { PropType } from 'vue';

import type { QCalendarEvent } from './types';

defineOptions({ name: 'QCalendar' });
const props = defineProps({
  modelValue: { type: Date, default: () => new Date() },
  events: { type: Array as PropType<QCalendarEvent[]>, default: () => [] }
});
const emit = defineEmits<{ 'update:modelValue': [value: Date] }>();
const current = ref(new Date(props.modelValue));
watch(
  () => props.modelValue,
  v => {
    current.value = new Date(v);
  }
);
const monthLabel = computed(() => format(current.value, 'MMMM yyyy'));
const days = computed(() => {
  const start = startOfWeek(startOfMonth(current.value), { weekStartsOn: 1 });
  const end = endOfWeek(endOfMonth(current.value), { weekStartsOn: 1 });
  return eachDayOfInterval({ start, end });
});
function eventsFor(day: Date): QCalendarEvent[] {
  return props.events.filter(e => isSameDay(new Date(e.date), day));
}
function prevMonth(): void {
  current.value = subMonths(current.value, 1);
  emit('update:modelValue', current.value);
}
function nextMonth(): void {
  current.value = addMonths(current.value, 1);
  emit('update:modelValue', current.value);
}
</script>
<template>
  <div class="q-calendar">
    <div class="q-calendar__header">
      <button
        type="button"
        class="q-calendar__nav q-icon-triangle-left"
        @click="prevMonth"
      />
      <span class="q-calendar__title">{{ monthLabel }}</span>
      <button
        type="button"
        class="q-calendar__nav q-icon-triangle-right"
        @click="nextMonth"
      />
    </div>
    <div class="q-calendar__grid">
      <div
        v-for="day in days"
        :key="day.toISOString()"
        class="q-calendar__cell"
        :class="{ 'q-calendar__cell_outside': !isSameMonth(day, current) }"
      >
        <span class="q-calendar__day">{{ format(day, 'd') }}</span>
        <span
          v-for="ev in eventsFor(day)"
          :key="ev.title + ev.date"
          class="q-calendar__event"
          :class="ev.type ? `q-calendar__event_${ev.type}` : ''"
          >{{ ev.title }}</span
        >
      </div>
    </div>
  </div>
</template>
