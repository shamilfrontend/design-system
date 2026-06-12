<script setup lang="ts">
import { isDate, addYears, addMonths, isSameMonth } from 'date-fns';
import { isNil } from 'lodash-es';
import { reactive, computed, watch, inject, onMounted, ref } from 'vue';
import type { PropType } from 'vue';

import { t } from '@/qComponents/locale';

import type { Nullable, ClassValue } from '#/helpers';

import type { RangePickValue, RangeState } from '../../commonTypes';
import { PERIOD_CELLS_IN_ROW_COUNT } from '../../constants';
import PeriodTable from '../../tables/PeriodTable/PeriodTable.vue';
import type { QDatePickerProvider } from '../../types';
import {
  leftYearComposable,
  isValidValue,
  useLeftPrevYearClick,
  useLeftNextYearClick,
  useRightNextYearClick,
  useRightPrevYearClick,
  getRangeChangedState,
  getActualMonth,
  getPeriodNextNodeIndex
} from '../composition';
import type { DatePanelRangePropModelValue } from '../DateRange/types';

import type { MonthRangeState } from './types';

defineOptions({
  name: 'QDatePickerMonthRange'
});

const props = defineProps({
  modelValue: {
    type: Array as PropType<DatePanelRangePropModelValue>,
    default: null
  }
});

const emit = defineEmits(['pick']);

const state = reactive<MonthRangeState>({
  minDate: null,
  maxDate: null,
  leftDate: new Date(),
  rightDate: addYears(new Date(), 1),
  rangeState: {
    hoveredDate: null,
    pickedDate: null,
    selecting: false
  },
  isRanged: true,
  currentView: 'monthrange',
  panelInFocus: null,
  monthCells: null,
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

const leftPanelClasses = computed<ClassValue>(() => ({
  'q-picker-panel__content': true,
  'q-picker-panel__content_no-right-borders': true,
  'q-picker-panel__content_focused': state.panelInFocus === 'left'
}));

const rightPanelClasses = computed<ClassValue>(() => ({
  'q-picker-panel__content': true,
  'q-picker-panel__content_no-left-borders': true,
  'q-picker-panel__content_focused': state.panelInFocus === 'right'
}));

const rightYear = computed<number>(() => {
  if (isDate(state.rightDate) && isDate(state.leftDate)) {
    return state.rightDate.getFullYear() === state.leftDate.getFullYear()
      ? state.leftDate.getFullYear() + 1
      : state.rightDate.getFullYear();
  }

  return new Date().getFullYear() + 1;
});

const leftYear = computed<number>(() => leftYearComposable(state.leftDate));
const leftMonth = computed<number>(() => getActualMonth(state.leftDate));
const rightMonth = computed<number>(() => getActualMonth(state.rightDate, 1));

const enableYearArrow = computed<boolean>(() => {
  if (picker.isMobileView.value) return true;
  return rightYear.value > leftYear.value + 1;
});

function handleRangeSelecting(value: RangeState): void {
  state.rangeState = value;
}

function handleRangePick(val: RangePickValue, close = true): void {
  const { maxDate, minDate, rangeState } = getRangeChangedState(
    val,
    state.rangeState,
    'monthrange'
  );
  state.maxDate = maxDate;
  state.minDate = minDate;
  state.rangeState = rangeState;

  picker.emit('intermediateChange', [minDate, maxDate]);

  if (!close) return;

  if (isValidValue([minDate, maxDate]) && state.minDate && state.maxDate) {
    emit('pick', [state.minDate, state.maxDate]);
  }
}

function handleClear(): void {
  state.minDate = null;
  state.maxDate = null;
  state.leftDate = new Date();
  state.rightDate = addYears(new Date(), 1);
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

function moveWithinPeriod(e: KeyboardEvent): void {
  if (!state?.monthCells?.length || !state.panelInFocus) return;
  const nextNodeIndex = getPeriodNextNodeIndex(
    e.key,
    state.monthCells,
    state.panelInFocus
  );

  if (isNil(nextNodeIndex)) return;
  const node = state.monthCells[nextNodeIndex];
  const newIndex = nextNodeIndex % PERIOD_CELLS_IN_ROW_COUNT;

  if (node) {
    node.focus();
    state.lastFocusedCellIndex = nextNodeIndex;
  } else if (!isNil(state.lastFocusedCellIndex)) {
    if (nextNodeIndex > state.lastFocusedCellIndex) {
      handleRightNextYearClick();
      handleLeftNextYearClick();
      state.monthCells?.[newIndex]?.focus();
    } else if (nextNodeIndex < state.lastFocusedCellIndex) {
      handleLeftPrevYearClick();
      handleRightPrevYearClick();
    }
  }
}

function setPanelFocus(): void {
  if (leftPanel.value?.contains(document.activeElement)) {
    state.panelInFocus = 'left';
  } else if (rightPanel.value?.contains(document.activeElement)) {
    state.panelInFocus = 'right';
  }
}

function navigateDropdown(e: KeyboardEvent): void {
  if (e.key !== 'Tab') {
    const target = e.target as HTMLElement;
    if (target.classList.contains('q-period-table__cell_period')) {
      moveWithinPeriod(e);
    } else {
      state.monthCells?.[0]?.focus();
    }
  }

  setPanelFocus();
}

function handleShortcutClick(shortcut: Date): void {
  emit('pick', shortcut as unknown as DatePanelRangePropModelValue);
}

onMounted(() => {
  if (!root.value) return;
  state.monthCells = root.value.querySelectorAll('.q-period-table__cell');
});

watch(
  () => props.modelValue,
  newVal => {
    if (!newVal || !newVal.length) {
      handleClear();
    } else {
      state.minDate = newVal[0];
      state.maxDate = newVal[1];

      if (isSameMonth(state.minDate, state.maxDate)) {
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
            <div class="q-picker-panel__header-sign">{{ leftYear }}</div>
            <button
              type="button"
              :disabled="!enableYearArrow"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleLeftNextYearClick"
            />
          </div>
          <period-table
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
            <div class="q-picker-panel__header-sign">{{ rightYear }}</div>
            <button
              type="button"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleRightNextYearClick"
            />
          </div>
          <period-table
            selection-mode="range"
            :month="rightMonth"
            :year="rightYear"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :range-state="state.rangeState"
            @pick="handleRangePick"
            @range-selecting="handleRangeSelecting"
          />
        </div>
      </div>
    </div>
  </div>
</template>
