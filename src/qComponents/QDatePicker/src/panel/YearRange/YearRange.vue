<script setup lang="ts">
import { addYears, getDecade, isDate, subYears } from 'date-fns';
import { isNil } from 'lodash-es';
import { reactive, computed, watch, inject, ref, onMounted } from 'vue';
import type { PropType } from 'vue';

import { t } from '@/qComponents/locale';

import type { Nullable, ClassValue } from '#/helpers';

import { RangePickValue, RangeState } from '../../commonTypes';
import { PERIOD_CELLS_IN_ROW_COUNT, YEARS_IN_DECADE } from '../../constants';
import PeriodTable from '../../tables/PeriodTable/PeriodTable.vue';
import type { QDatePickerProvider } from '../../types';
import {
  leftYearComposable,
  isValidValue,
  getRangeChangedState,
  getPeriodNextNodeIndex,
  getLabelFromDate
} from '../composition';
import type { DatePanelRangePropModelValue } from '../DateRange/types';

import type { YearRangeState } from './types';

defineOptions({
  name: 'QDatePickerYearRange'
});

const props = defineProps({
  modelValue: {
    type: Array as PropType<DatePanelRangePropModelValue>,
    default: null
  }
});

const emit = defineEmits(['pick']);

const state = reactive<YearRangeState>({
  minDate: null,
  maxDate: null,
  leftDate: new Date(),
  rightDate: addYears(new Date(), YEARS_IN_DECADE),
  rangeState: {
    hoveredDate: null,
    pickedDate: null,
    selecting: false
  },
  isRanged: true,
  currentView: 'yearrange',
  panelInFocus: null,
  yearCells: null,
  lastFocusedCellIndex: null
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

const rightYear = computed<number>(() => {
  if (isDate(state.rightDate) && isDate(state.leftDate)) {
    return getDecade(state.rightDate) === getDecade(state.leftDate)
      ? state.leftDate.getFullYear() + YEARS_IN_DECADE
      : state.rightDate.getFullYear();
  }

  return new Date().getFullYear() + YEARS_IN_DECADE;
});
const leftYear = computed<number>(() => leftYearComposable(state.leftDate));
const leftLabel = computed<string>(() =>
  getLabelFromDate(state.leftDate, picker.type.value)
);
const rightLabel = computed<string>(() =>
  getLabelFromDate(state.rightDate, picker.type.value)
);

const enableYearArrow = computed<boolean>(() => {
  if (picker.isMobileView.value) return true;
  return rightYear.value > leftYear.value + YEARS_IN_DECADE;
});
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

function handleLeftNextYearClick(): void {
  state.leftDate = addYears(state.leftDate, YEARS_IN_DECADE);
}
function handleLeftPrevYearClick(): void {
  state.leftDate = subYears(state.leftDate, YEARS_IN_DECADE);
}
function handleRightNextYearClick(): void {
  state.rightDate = addYears(state.rightDate, YEARS_IN_DECADE);
}
function handleRightPrevYearClick(): void {
  state.rightDate = subYears(state.rightDate, YEARS_IN_DECADE);
}
function handleClear(): void {
  state.minDate = null;
  state.maxDate = null;
  state.leftDate = new Date();
  state.rightDate = addYears(new Date(), YEARS_IN_DECADE);
}

function handleRangePick(val: RangePickValue, close = true): void {
  const { maxDate, minDate, rangeState } = getRangeChangedState(
    val,
    state.rangeState,
    'yearrange'
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

function handleRangeSelecting(value: RangeState): void {
  state.rangeState = value;
}

function moveWithinPeriod(e: KeyboardEvent): void {
  if (!state?.yearCells?.length || !state.panelInFocus) return;
  const nextNodeIndex = getPeriodNextNodeIndex(
    e.key,
    state.yearCells,
    state.panelInFocus
  );

  if (isNil(nextNodeIndex)) return;
  const node = state.yearCells[nextNodeIndex];
  const newIndex = nextNodeIndex % PERIOD_CELLS_IN_ROW_COUNT;

  if (node) {
    node.focus();
    state.lastFocusedCellIndex = nextNodeIndex;
  } else if (!isNil(state.lastFocusedCellIndex)) {
    if (nextNodeIndex > state.lastFocusedCellIndex) {
      handleRightNextYearClick();
      handleLeftNextYearClick();
      state.yearCells?.[newIndex]?.focus();
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
      state.yearCells?.[0]?.focus();
    }
  }

  setPanelFocus();
}

function handleShortcutClick(shortcut: Date): void {
  emit('pick', shortcut as unknown as DatePanelRangePropModelValue);
}

onMounted(() => {
  if (!root.value) return;
  state.yearCells = root.value.querySelectorAll('.q-period-table__cell');
});

watch(
  () => props.modelValue,
  newVal => {
    if (!newVal?.length) {
      handleClear();
    } else {
      state.minDate = newVal[0];
      state.maxDate = newVal[1];
      if (getDecade(state.minDate) === getDecade(state.maxDate)) {
        state.leftDate = state.minDate;
        state.rightDate = addYears(state.minDate, 10);
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
      <div class="q-picker-panel__body">
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
            <div class="q-picker-panel__header-sign">{{ leftLabel }}</div>
            <button
              type="button"
              :disabled="!enableYearArrow"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              :class="{
                'q-picker-panel__icon-btn_disabled': !enableYearArrow
              }"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleLeftNextYearClick"
            />
          </div>
          <period-table
            :year="leftYear"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            :range-state="state.rangeState"
            type="year"
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
              :class="{
                'q-picker-panel__icon-btn_disabled': !enableYearArrow
              }"
              class="q-picker-panel__icon-btn q-icon-double-triangle-left"
              @click="handleRightPrevYearClick"
            />
            <div class="q-picker-panel__header-sign">
              {{ rightLabel }}
            </div>
            <button
              type="button"
              :title="t('QDatePicker.nextYear')"
              :aria-label="t('QDatePicker.nextYear')"
              class="q-picker-panel__icon-btn q-icon-double-triangle-right"
              @click="handleRightNextYearClick"
            />
          </div>
          <period-table
            :year="rightYear"
            :min-date="state.minDate"
            :max-date="state.maxDate"
            type="year"
            :range-state="state.rangeState"
            @pick="handleRangePick"
            @range-selecting="handleRangeSelecting"
          />
        </div>
      </div>
    </div>
  </div>
</template>
