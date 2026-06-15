<script setup lang="ts">
import { addMonths, subMonths, isSameMonth } from 'date-fns';
import { isNil } from 'lodash-es';
import type { PropType } from 'vue';
import {
  reactive,
  computed,
  inject,
  watch,
  ref,
  onMounted,
  useSlots
} from 'vue';

import { t } from '@/locale';

import type { Nullable, ClassValue } from '#/helpers';

import type { RangePickValue, RangeState } from '../../commonTypes';
import {
  DATE_CELLS_COUNT,
  DATE_CELLS_IN_ROW_COUNT,
  MONTHS_COUNT
} from '../../constants';
import DateTable from '../../tables/DateTable/DateTable.vue';
import type { QDatePickerProvider } from '../../types';
import {
  getActualMonth,
  leftYearComposable,
  isValidValue,
  useLeftPrevYearClick,
  useRightNextYearClick,
  useRightPrevYearClick,
  useLeftNextYearClick,
  getRangeChangedState,
  getLabelFromDate
} from '../composition';
import QDatePickerTimeFooter from '../QDatePickerTimeFooter.vue';

import type {
  DatePanelRangePropModelValue,
  DateRangePanelState
} from './types';

defineOptions({
  name: 'QDatePickerPanelDateRange'
});

const props = defineProps({
  modelValue: {
    type: Array as PropType<DatePanelRangePropModelValue>,
    default: null
  }
});

const emit = defineEmits(['pick']);

const slots = useSlots();

const state = reactive<DateRangePanelState>({
  minDate: null,
  maxDate: null,
  leftDate: new Date(),
  rightDate: addMonths(new Date(), 1),
  rangeState: {
    hoveredDate: null,
    pickedDate: null,
    selecting: false
  },
  panelInFocus: null,
  dateCells: null,
  monthCells: null,
  yearCells: null,
  lastFocusedCellIndex: 0
});

const picker = inject<QDatePickerProvider>(
  'qDatePicker',
  {} as QDatePickerProvider
);
const root = ref<Nullable<HTMLElement>>(null);
const leftPanel = ref<Nullable<HTMLElement>>(null);
const rightPanel = ref<Nullable<HTMLElement>>(null);

const shortcuts = picker.shortcuts;
const isMobileView = picker.isMobileView;
const isDateTimeRange = computed<boolean>(
  () => picker.type.value === 'datetimerange'
);
const startHours = ref<number>(0);
const startMinutes = ref<number>(0);
const endHours = ref<number>(23);
const endMinutes = ref<number>(59);

const showTimeFooter = computed<boolean>(
  () => isDateTimeRange.value && Boolean(state.minDate && state.maxDate)
);

const leftLabel = computed<string>(() =>
  getLabelFromDate(state.leftDate, picker.type.value)
);
const rightLabel = computed<string>(() =>
  getLabelFromDate(state.rightDate, picker.type.value)
);
const leftYear = computed<number>(() => leftYearComposable(state.leftDate));

const leftMonth = computed<number>(() => getActualMonth(state.leftDate));
const rightMonth = computed<number>(() => getActualMonth(state.rightDate, 1));

const rightPanelClasses = computed<ClassValue>(() => ({
  'q-picker-panel__content': true,
  'q-picker-panel__content_no-left-borders': true,
  'q-picker-panel__content_focused': state.panelInFocus === 'right'
}));

const leftPanelClasses = computed<ClassValue>(() => ({
  'q-picker-panel__content': true,
  'q-picker-panel__content_no-left-borders': Boolean(
    slots.sidebar || picker.shortcuts.value?.length
  ),
  'q-picker-panel__content_no-right-borders': true,
  'q-picker-panel__content_focused': state.panelInFocus === 'left'
}));

const rightYear = computed<number>(() => state.rightDate.getFullYear());
const enableMonthArrow = computed<boolean>(() => {
  if (picker.isMobileView.value) return true;
  const nextMonth = (leftMonth.value + 1) % 12;
  const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
  return (
    new Date(leftYear.value + yearOffset, nextMonth) <
    new Date(rightYear.value, rightMonth.value)
  );
});

const enableYearArrow = computed<boolean>(() => {
  if (picker.isMobileView.value) return true;
  return Boolean(
    rightYear.value * MONTHS_COUNT +
      rightMonth.value -
      (leftYear.value * MONTHS_COUNT + leftMonth.value + 1) >=
    MONTHS_COUNT
  );
});

function handleRangeSelecting(value: RangeState): void {
  state.rangeState = value;
}

function handleRangePick(val: RangePickValue, close = true): void {
  const { maxDate, minDate, rangeState } = getRangeChangedState(
    val,
    state.rangeState,
    'daterange'
  );
  state.maxDate = maxDate;
  state.minDate = minDate;
  state.rangeState = rangeState;

  picker.emit('intermediateChange', [minDate, maxDate]);

  if (isDateTimeRange.value && isValidValue([minDate, maxDate])) {
    if (minDate) {
      startHours.value = minDate.getHours();
      startMinutes.value = minDate.getMinutes();
    }

    if (maxDate) {
      endHours.value = maxDate.getHours();
      endMinutes.value = maxDate.getMinutes();
    }
  }

  const shouldClose = close && !isDateTimeRange.value;

  if (!shouldClose) return;

  if (isValidValue([minDate, maxDate]) && state.minDate && state.maxDate) {
    emit('pick', [state.minDate, state.maxDate]);
  }
}

function confirmDateTimeRange(): void {
  if (!state.minDate || !state.maxDate) return;

  const start = new Date(state.minDate);
  start.setHours(startHours.value, startMinutes.value, 0, 0);

  const end = new Date(state.maxDate);
  end.setHours(endHours.value, endMinutes.value, 0, 0);

  emit('pick', [start, end]);
}

function handleClear(): void {
  state.minDate = null;
  state.maxDate = null;
  state.leftDate = new Date();
  state.rightDate = addMonths(new Date(), 1);
  state.rangeState = {
    hoveredDate: null,
    pickedDate: null,
    selecting: false
  };
}

function handleLeftPrevMonthClick(): void {
  state.leftDate = subMonths(state.leftDate, 1);
}

function handleRightNextMonthClick(): void {
  state.rightDate = addMonths(state.rightDate, 1);
}

function handleLeftPrevYearClick(): void {
  state.leftDate = useLeftPrevYearClick(state.leftDate);
}

function handleLeftNextYearClick(): void {
  state.leftDate = useLeftNextYearClick(state.leftDate);
}

function handleRightNextYearClick(): void {
  state.rightDate = useRightNextYearClick(state.rightDate);
}

function handleRightPrevYearClick(): void {
  state.rightDate = useRightPrevYearClick(state.rightDate);
}

function handleLeftNextMonthClick(): void {
  state.leftDate = addMonths(state.leftDate, 1);
}

function handleRightPrevMonthClick(): void {
  state.rightDate = subMonths(state.rightDate, 1);
}

function setPanelFocus(): void {
  if (leftPanel.value?.contains(document.activeElement)) {
    state.panelInFocus = 'left';
  } else if (rightPanel.value?.contains(document.activeElement)) {
    state.panelInFocus = 'right';
  }
}

function moveWithinDates(e: KeyboardEvent): void {
  let currentNodeIndex;
  let nextNodeIndex;
  if (!state.dateCells?.length) return;
  Array.from(state.dateCells).some((element, index) => {
    const isItActiveElement = document.activeElement === element;
    if (isItActiveElement) currentNodeIndex = index;
    return isItActiveElement;
  });

  if (isNil(currentNodeIndex)) return;

  switch (e.key) {
    case 'ArrowUp':
      nextNodeIndex = currentNodeIndex - DATE_CELLS_IN_ROW_COUNT;
      break;

    case 'ArrowRight':
      if (
        state.panelInFocus === 'left' &&
        (currentNodeIndex + 1) % DATE_CELLS_IN_ROW_COUNT === 0
      ) {
        nextNodeIndex = DATE_CELLS_COUNT;
        setPanelFocus();
        break;
      }
      nextNodeIndex = currentNodeIndex + 1;
      break;

    case 'ArrowLeft':
      if (
        state.panelInFocus === 'right' &&
        (currentNodeIndex - DATE_CELLS_IN_ROW_COUNT) %
          DATE_CELLS_IN_ROW_COUNT ===
          0
      ) {
        nextNodeIndex = DATE_CELLS_IN_ROW_COUNT - 1;
        setPanelFocus();
      } else {
        nextNodeIndex = currentNodeIndex - 1;
      }

      break;

    case 'ArrowDown':
      nextNodeIndex = currentNodeIndex + DATE_CELLS_IN_ROW_COUNT;
      break;
    default:
      break;
  }

  if (isNil(nextNodeIndex)) return;

  const node = state.dateCells[nextNodeIndex];
  const newIndex = nextNodeIndex % DATE_CELLS_IN_ROW_COUNT;
  if (node) {
    node.focus();
    state.lastFocusedCellIndex = nextNodeIndex;
  } else if (!isNil(state.lastFocusedCellIndex)) {
    if (nextNodeIndex > state.lastFocusedCellIndex) {
      handleRightNextMonthClick();
      handleLeftNextMonthClick();
      state.dateCells[newIndex]?.focus();
    } else if (nextNodeIndex < state.lastFocusedCellIndex) {
      handleLeftPrevMonthClick();
      handleRightPrevMonthClick();
      state.dateCells?.[DATE_CELLS_COUNT + newIndex]?.focus();
    }
  }
}

function navigateDropdown(e: KeyboardEvent): void {
  if (e.key !== 'Tab') {
    const target = e.target as HTMLElement;
    if (target.classList.contains('cell_date')) {
      moveWithinDates(e);
    } else {
      state.dateCells?.[0]?.focus();
    }
  }

  setPanelFocus();
}

function handleShortcutClick(shortcut: Date): void {
  picker.emitChange(shortcut, false);
}

watch(
  () => props.modelValue,
  newVal => {
    if (!newVal || !newVal.length) {
      handleClear();
    } else {
      state.minDate = newVal[0];
      state.maxDate = newVal[1];
      if (
        state.minDate &&
        state.maxDate &&
        isSameMonth(state.minDate, state.maxDate)
      ) {
        state.leftDate = state.minDate;
        state.rightDate = addMonths(state.minDate, 1);
      } else {
        state.leftDate = state.minDate;
        state.rightDate = state.maxDate;
      }
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (!root.value) return;
  state.dateCells = root.value.querySelectorAll('.q-date-table .cell');
});

defineExpose({
  navigateDropdown
});
</script>

<template>
  <div
    ref="root"
    class="q-picker-panel"
  >
    <div class="q-picker-panel__body-wrapper">
      <div class="q-picker-panel__body">
        <div
          v-if="shortcuts?.length"
          class="q-picker-panel__sidebar"
        >
          <button
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            type="button"
            class="q-picker-panel__shortcut"
            @click="handleShortcutClick(shortcut.value)"
          >
            {{ shortcut.text }}
          </button>
        </div>

        <div
          ref="leftPanel"
          :class="leftPanelClasses"
        >
          <div class="q-picker-panel__header">
            <button
              type="button"
              :title="t('QDatePicker.prevYear')"
              :aria-label="t('QDatePicker.prevYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-left"
              @click="handleLeftPrevYearClick"
            />
            <button
              type="button"
              :title="t('QDatePicker.prevMonth')"
              :aria-label="t('QDatePicker.prevMonth')"
              class="q-picker-panel__icon-btn q-icon-triangle-left"
              @click="handleLeftPrevMonthClick"
            />
            <div class="q-picker-panel__header-sign">{{ leftLabel }}</div>
            <button
              type="button"
              :disabled="!enableMonthArrow"
              :title="t('QDatePicker.nextMonth')"
              :aria-label="t('QDatePicker.nextMonth')"
              class="q-picker-panel__icon-btn q-icon-triangle-right"
              @click="handleLeftNextMonthClick"
            />
            <button
              type="button"
              :disabled="!enableYearArrow"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleLeftNextYearClick"
            />
          </div>
          <date-table
            selection-mode="range"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :month="leftMonth"
            :year="leftYear"
            :range-state="state.rangeState"
            @pick="handleRangePick"
            @range-selecting="handleRangeSelecting"
          />
        </div>
        <div
          v-if="!isMobileView"
          ref="rightPanel"
          :class="rightPanelClasses"
        >
          <div class="q-picker-panel__header">
            <button
              type="button"
              :disabled="!enableYearArrow"
              :title="t('QDatePicker.prevYear')"
              :aria-label="t('QDatePicker.prevYear')"
              :class="{ 'q-picker-panel__icon-btn_disabled': !enableYearArrow }"
              class="q-picker-panel__icon-btn q-icon-double-triangle-left"
              @click="handleRightPrevYearClick"
            />
            <button
              type="button"
              :disabled="!enableMonthArrow"
              :title="t('QDatePicker.prevMonth')"
              :aria-label="t('QDatePicker.prevMonth')"
              :class="{
                'q-picker-panel__icon-btn_disabled': !enableMonthArrow
              }"
              class="q-picker-panel__icon-btn q-icon-triangle-left"
              @click="handleRightPrevMonthClick"
            />
            <div class="q-picker-panel__header-sign">
              {{ rightLabel }}
            </div>
            <button
              type="button"
              :title="t('QDatePicker.nextMonth')"
              :aria-label="t('QDatePicker.nextMonth')"
              class="q-picker-panel__icon-btn q-icon-triangle-right"
              @click="handleRightNextMonthClick"
            />
            <button
              type="button"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleRightNextYearClick"
            />
          </div>
          <date-table
            selection-mode="range"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :month="rightMonth"
            :year="rightYear"
            :range-state="state.rangeState"
            @pick="handleRangePick"
            @range-selecting="handleRangeSelecting"
          />
        </div>
      </div>
      <div
        v-if="showTimeFooter"
        class="q-picker-panel__datetime-range-footer"
      >
        <q-date-picker-time-footer
          v-model:hours="startHours"
          v-model:minutes="startMinutes"
          :label="t('QDatePicker.timeFrom')"
          @confirm="confirmDateTimeRange"
        />
        <q-date-picker-time-footer
          v-model:hours="endHours"
          v-model:minutes="endMinutes"
          :label="t('QDatePicker.timeTo')"
          @confirm="confirmDateTimeRange"
        />
      </div>
    </div>
  </div>
</template>
