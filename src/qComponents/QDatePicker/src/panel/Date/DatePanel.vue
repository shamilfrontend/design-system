<script setup lang="ts">
import { subMonths, addMonths, subYears, addYears } from 'date-fns';
import { isNil } from 'lodash-es';
import {
  reactive,
  computed,
  onMounted,
  ref,
  inject,
  watch,
  nextTick
} from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { t } from '@/qComponents/locale';

import type { Nullable, ClassValue } from '#/helpers';

import {
  DATE_CELLS_COUNT,
  DATE_CELLS_IN_ROW_COUNT,
  LAST_MONTH_IN_YEAR_INDEX,
  LAST_YEAR_IN_DECADES_RANGE,
  PERIOD_CELLS_IN_ROW_COUNT,
  YEARS_IN_DECADE
} from '../../constants';
import DateTable from '../../tables/DateTable/DateTable.vue';
import PeriodTable from '../../tables/PeriodTable/PeriodTable.vue';
import type { QDatePickerProvider } from '../../types';
import { getPeriodNextNodeIndex } from '../composition';
import QDatePickerTimeFooter from '../QDatePickerTimeFooter.vue';

import type { DatePanelPropModelValue, DatePanelState } from './types';

defineOptions({
  name: 'QDatePickerPanelDate'
});

const props = defineProps({
  modelValue: {
    type: Date as PropType<DatePanelPropModelValue>,
    default: null
  }
});

const emit = defineEmits(['pick']);

const state = reactive<DatePanelState>({
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  currentView: 'date',
  isRanged: false,
  panelInFocus: null,
  lastFocusedCellIndex: 0,
  dateCells: null,
  periodCells: null
});

const picker = inject<QDatePickerProvider>(
  'qDatePicker',
  {} as QDatePickerProvider
);

switch (picker.type.value) {
  case 'date':
  case 'week':
  case 'month':
  case 'year':
  case 'datetime':
    state.currentView = picker.type.value === 'datetime' ? 'date' : picker.type.value;
    break;
  default:
    break;
}

if (props.modelValue instanceof Date) {
  state.year = props.modelValue.getFullYear();
  state.month = props.modelValue.getMonth();
}

const root = ref<Nullable<HTMLElement>>(null);
const isDateTime = computed<boolean>(() => picker.type.value === 'datetime');
const pendingDate = ref<Nullable<Date>>(null);
const timeHours = ref<number>(0);
const timeMinutes = ref<number>(0);
const datePanel = ref<Nullable<HTMLElement>>(null);

const shortcuts = picker.shortcuts;

onMounted(() => {
  if (!root.value) return;
  state.dateCells = root.value.querySelectorAll('.q-date-table .cell');
  state.periodCells = root.value.querySelectorAll('.q-period-table__cell');
});

watch(
  () => state.currentView,
  async currentView => {
    if (!root.value) return;
    await nextTick();
    if (currentView === 'month' || currentView === 'year') {
      state.periodCells = root.value.querySelectorAll(
        '.q-period-table .q-period-table__cell'
      );
    }
  }
);

watch(
  () => props.modelValue,
  value => {
    if (value instanceof Date) {
      state.year = value.getFullYear();
      state.month = value.getMonth();
    } else {
      state.year = new Date().getFullYear();
      state.month = new Date().getMonth();
    }
  }
);

const isPeriodTableShown = computed(() => {
  return ['month', 'year'].includes(state.currentView);
});

function setPanelFocus(): void {
  if (datePanel.value?.contains(document.activeElement)) {
    state.panelInFocus = 'date';
  } else {
    state.panelInFocus = null;
  }
}

const panelContentClasses = computed<ClassValue>(() => ({
  'q-picker-panel__content': true,
  'q-picker-panel__content_focused': state.panelInFocus === 'date'
}));

const currentMonth = computed<string>(() => {
  const formatter = new Intl.DateTimeFormat(getConfig('locale'), {
    month: 'short'
  });
  return formatter.format(new Date(state.year, state.month));
});

const yearLabel = computed<string | number>(() => {
  if (state.currentView === 'year') {
    const startYear =
      Math.floor(state.year / YEARS_IN_DECADE) * YEARS_IN_DECADE;
    return `${startYear} - ${startYear + LAST_YEAR_IN_DECADES_RANGE}`;
  }
  return state.year;
});

function showMonthPicker(): void {
  state.currentView = 'month';
}

function showYearPicker(): void {
  state.currentView = 'year';
}

function showDatePicker(): void {
  state.currentView = 'date';
}

function handlePrevMonthClick(): void {
  const year = state.year;
  if (state.month === 0) {
    state.year -= 1;
  }
  state.month = subMonths(new Date(year, state.month), 1).getMonth();
}

function handleNextMonthClick(): void {
  const year = state.year;
  if (state.month === LAST_MONTH_IN_YEAR_INDEX) {
    state.year += 1;
  }
  state.month = addMonths(new Date(year, state.month), 1).getMonth();
}

function handlePrevYearClick(): void {
  if (state.currentView === 'year') {
    state.year = subYears(
      new Date(state.year, state.month),
      YEARS_IN_DECADE
    ).getFullYear();
  } else {
    state.year = subYears(new Date(state.year, state.month), 1).getFullYear();
  }
}

function handleNextYearClick(): void {
  if (state.currentView === 'year') {
    state.year = addYears(
      new Date(state.year, 1),
      YEARS_IN_DECADE
    ).getFullYear();
  } else {
    state.year = addYears(new Date(state.year, 1), 1).getFullYear();
  }
}

function handlePeriodPick(month: number, year: number, type: string): void {
  if (picker.type.value === 'year') {
    emit('pick', new Date(year, 0, 1));
  } else if (picker.type.value === 'month') {
    if (type === 'month') {
      emit('pick', new Date(year, month, 1));
    } else {
      showMonthPicker();
      state.year = year;
    }
  } else if (props.modelValue instanceof Date) {
    emit('pick', new Date(year, month, props.modelValue.getDate()));
    showDatePicker();
  } else {
    state.month = month;
    state.year = year;
    if (type === 'year') {
      showMonthPicker();
    } else {
      showDatePicker();
    }
  }
}

function handleDatePick(value: DatePanelPropModelValue): void {
  if (isDateTime.value && value instanceof Date) {
    pendingDate.value = value;
    timeHours.value = value.getHours();
    timeMinutes.value = value.getMinutes();

    return;
  }

  emit('pick', value);
}

function confirmDateTime(): void {
  if (!pendingDate.value) return;

  const result = new Date(pendingDate.value);
  result.setHours(timeHours.value, timeMinutes.value, 0, 0);
  emit('pick', result);
}

function moveWithinPeriod(e: KeyboardEvent): void {
  if (!state?.periodCells?.length || !state.panelInFocus) return;
  const nextNodeIndex = getPeriodNextNodeIndex(
    e.key,
    state.periodCells,
    state.panelInFocus
  );

  if (isNil(nextNodeIndex)) return;
  const node = state.periodCells[nextNodeIndex];
  const newIndex = nextNodeIndex % PERIOD_CELLS_IN_ROW_COUNT;

  if (node) {
    node.focus();
    state.lastFocusedCellIndex = nextNodeIndex;
  } else if (!isNil(state.lastFocusedCellIndex)) {
    if (nextNodeIndex > state.lastFocusedCellIndex) {
      handleNextYearClick();
      state.periodCells?.[newIndex]?.focus();
    } else if (nextNodeIndex < state.lastFocusedCellIndex) {
      handlePrevYearClick();
    }
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
    case 'ArrowUp': {
      nextNodeIndex = currentNodeIndex - DATE_CELLS_IN_ROW_COUNT;
      break;
    }

    case 'ArrowRight':
      nextNodeIndex = currentNodeIndex + 1;
      break;

    case 'ArrowLeft':
      nextNodeIndex = currentNodeIndex - 1;
      break;

    case 'ArrowDown': {
      nextNodeIndex = currentNodeIndex + DATE_CELLS_IN_ROW_COUNT;
      break;
    }
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
      handleNextMonthClick();
      state.dateCells?.[newIndex]?.focus();
    } else if (nextNodeIndex < state.lastFocusedCellIndex) {
      handlePrevMonthClick();
      state.dateCells?.[DATE_CELLS_COUNT + newIndex]?.focus();
    }
  }
}

function handleShortcutClick(shortcut: Date): void {
  emit('pick', shortcut);
}

function navigateDropdown(e: KeyboardEvent): void {
  if (e.key !== 'Tab') {
    const target = e.target as HTMLElement;
    if (target.classList.contains('cell_date')) {
      moveWithinDates(e);
    } else if (target.classList.contains('q-period-table__cell_period')) {
      moveWithinPeriod(e);
    } else if (state.currentView !== 'date') {
      state.periodCells?.[0].focus();
    } else {
      state.dateCells?.[0].focus();
    }
  }

  setPanelFocus();
}

defineExpose({
  navigateDropdown
});
</script>

<template>
  <div
    ref="root"
    class="q-picker-panel"
  >
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
        ref="datePanel"
        :class="panelContentClasses"
      >
        <div class="q-picker-panel__header">
          <button
            type="button"
            :title="t('QDatePicker.prevYear')"
            :aria-label="t('QDatePicker.prevYear')"
            class="q-picker-panel__icon-btn q-icon-double-triangle-left"
            @click="handlePrevYearClick"
          />
          <button
            v-show="state.currentView === 'date'"
            type="button"
            :title="t('QDatePicker.prevMonth')"
            :aria-label="t('QDatePicker.prevMonth')"
            class="q-picker-panel__icon-btn q-icon-triangle-left"
            @click="handlePrevMonthClick"
          />
          <div class="q-picker-panel__header-sign">
            <button
              v-show="state.currentView === 'date'"
              class="q-picker-panel__header-label"
              @click="showMonthPicker"
            >
              {{ currentMonth }}
            </button>
            <button
              class="q-picker-panel__header-label"
              :class="{
                'q-picker-panel__header-label_hoverless':
                  state.currentView === 'year'
              }"
              @click="showYearPicker"
            >
              {{ yearLabel }}
            </button>
          </div>
          <button
            v-show="state.currentView === 'date'"
            type="button"
            :title="t('QDatePicker.nextMonth')"
            :aria-label="t('QDatePicker.nextMonth')"
            class="q-picker-panel__icon-btn q-icon-triangle-right"
            @click="handleNextMonthClick"
          />
          <button
            type="button"
            :title="t('QDatePicker.nextYear')"
            :aria-label="t('QDatePicker.nextYear')"
            class="q-picker-panel__icon-btn q-icon-double-triangle-right"
            @click="handleNextYearClick"
          />
        </div>

        <date-table
          v-show="state.currentView === 'date'"
          :value="modelValue"
          :year="state.year"
          :month="state.month"
          @pick="handleDatePick"
        />
        <period-table
          v-if="isPeriodTableShown"
          :type="state.currentView"
          :value="modelValue"
          :month="state.month"
          :year="state.year"
          @pick="handlePeriodPick"
        />
        <div
          v-if="isDateTime && pendingDate"
          class="q-picker-panel__datetime-footer-wrapper"
        >
          <q-date-picker-time-footer
            v-model:hours="timeHours"
            v-model:minutes="timeMinutes"
            @confirm="confirmDateTime"
          />
        </div>
      </div>
    </div>
  </div>
</template>
