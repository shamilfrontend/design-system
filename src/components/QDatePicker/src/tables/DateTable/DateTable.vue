<script setup lang="ts">
import {
  getDaysInMonth,
  startOfMonth,
  isSameDay,
  isWithinInterval,
  startOfWeek,
  endOfWeek,
  isToday,
  Locale,
  Day
} from 'date-fns';
import { ru, enGB as en } from 'date-fns/locale';
import { throttle } from 'lodash-es';
import { reactive, computed, inject } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/components/config';
import { notNull } from '@/helpers';

import type { Nullable, ClassValue } from '#/helpers';

import type { DateCellModel, RangeState } from '../../commonTypes';
import {
  DAYS_IN_WEEK,
  LAST_MONTH_IN_YEAR_INDEX,
  WEEK_FRONTIER
} from '../../constants';
import { isDateInRangeInterval } from '../../helpers';
import type { QDatePickerProvider } from '../../types';

import checkDisabled from './checkDisabled';
import type { DateTableState } from './types';

const locales: Record<string, Locale> = { ru, en };

defineOptions({
  name: 'QDatePickerDateTable'
});

const props = defineProps({
  year: {
    type: Number,
    default: new Date().getFullYear(),
    validator: notNull
  },
  month: {
    type: Number,
    default: new Date().getMonth(),
    validator: notNull
  },
  value: {
    type: Date as PropType<Nullable<Date>>,
    default: null
  },
  minDate: {
    type: Date as PropType<Nullable<Date>>,
    default: null
  },
  maxDate: {
    type: Date as PropType<Nullable<Date>>,
    default: null
  },
  rangeState: {
    type: Object as PropType<RangeState>,
    default: (): RangeState => ({
      hoveredDate: null,
      pickedDate: null,
      selecting: false
    })
  }
});

const emit = defineEmits(['pick', 'rangeSelecting']);

const state = reactive<DateTableState>({
  lastRow: null,
  lastColumn: null,
  tableRows: [[], [], [], [], [], []]
});

const picker = inject<QDatePickerProvider>(
  'qDatePicker',
  {} as QDatePickerProvider
);

const offsetDay = computed<number>(() => {
  const firstDayOfWeek = picker.firstDayOfWeek.value;
  return firstDayOfWeek > WEEK_FRONTIER
    ? DAYS_IN_WEEK - firstDayOfWeek
    : -firstDayOfWeek;
});

const days = computed<string[]>(() => {
  const DAYS_OF_WEEK = [...Array(DAYS_IN_WEEK).keys()].map(i =>
    locales[getConfig('locale')]?.localize?.day(i as Day, {
      width: 'short'
    })
  );

  const day = picker.firstDayOfWeek.value;
  return [...DAYS_OF_WEEK, ...DAYS_OF_WEEK].slice(day, day + DAYS_IN_WEEK);
});

const startMonthDate = computed<Date>(() =>
  startOfMonth(new Date(props.year, props.month, 1))
);

const rows = computed<DateCellModel[][]>(() => {
  const date = new Date(props.year, props.month, 1);
  const firstDay = startMonthDate.value.getDay();
  const dateCountOfMonth = getDaysInMonth(date);
  const dateCountOfLastMonth = getDaysInMonth(
    new Date(
      props.year,
      props.month === 0 ? LAST_MONTH_IN_YEAR_INDEX : props.month - 1
    )
  );

  const offset = offsetDay.value;
  let count = 1;

  return state.tableRows.map((_, i) => {
    const newRow: DateCellModel[] = [];
    for (let j = 0; j < DAYS_IN_WEEK; j += 1) {
      const cell: DateCellModel = {
        row: i,
        column: j,
        type: 'normal',
        inRange: false,
        start: false,
        end: false,
        text: '',
        date: null,
        disabled: false
      };

      if (i === 0 || i === 1) {
        const numberOfDaysFromPreviousMonth =
          firstDay + offset < 0
            ? DAYS_IN_WEEK + firstDay + offset
            : firstDay + offset;

        if (j + i * DAYS_IN_WEEK >= numberOfDaysFromPreviousMonth) {
          cell.text = count;
          count += 1;
          cell.date = new Date(props.year, props.month, cell.text);
        } else {
          cell.text =
            dateCountOfLastMonth -
            (numberOfDaysFromPreviousMonth - (j % DAYS_IN_WEEK)) +
            1 +
            i * DAYS_IN_WEEK;
          cell.type = 'prev-month';
          cell.date = new Date(props.year, props.month - 1, cell.text);
        }
      } else if (count <= dateCountOfMonth) {
        cell.text = count;
        count += 1;
        cell.date = new Date(props.year, props.month, cell.text);
      } else {
        cell.text = count - dateCountOfMonth;
        count += 1;
        cell.type = 'next-month';
        cell.date = new Date(props.year, props.month + 1, cell.text);
      }

      if (props.minDate) {
        let minDateNum = props.minDate.getTime();
        let maxDateNum = props.maxDate?.getTime() ?? minDateNum;

        minDateNum = Math.min(minDateNum, maxDateNum);
        maxDateNum = Math.max(minDateNum, maxDateNum);

        cell.inRange = Boolean(
          minDateNum &&
          cell.date.getTime() >= minDateNum &&
          cell.date.getTime() <= maxDateNum
        );
      }

      if (isToday(cell.date)) {
        if (!['prev-month', 'next-month'].includes(cell.type)) {
          cell.type = 'today';
        }
      }

      cell.disabled = cell.date
        ? checkDisabled(cell.date, picker.disabledValues.value)
        : false;
      newRow.push(cell);
    }

    return newRow;
  });
});

function getCellClasses(cell: DateCellModel): ClassValue {
  const classes = ['cell', 'cell_date'];
  if (['today', 'prev-month', 'next-month'].includes(cell.type)) {
    classes.push(`cell_${cell.type}`);
  }

  if (
    ['normal', 'today'].includes(cell.type) &&
    props.value &&
    cell.date &&
    isSameDay(cell.date, props.value)
  ) {
    classes.push('cell_current');
  }

  if (
    cell.inRange ||
    (cell.date &&
      (isDateInRangeInterval(cell.date, props.rangeState) ||
        (picker.type.value === 'week' &&
          props.value &&
          isWithinInterval(cell.date, {
            start: startOfWeek(props.value, { weekStartsOn: 1 }),
            end: endOfWeek(props.value, { weekStartsOn: 1 })
          }))))
  ) {
    classes.push('cell_in-range');
  }

  if (cell.disabled) {
    classes.push('cell_disabled');
  }

  return classes;
}

function mouseMove(cell: DateCellModel): void {
  if (!props.rangeState.selecting || cell.disabled) return;
  emit('rangeSelecting', {
    selecting: true,
    hoveredDate: cell.date,
    pickedDate: props.minDate
  });
}

const handleMouseMove = throttle(mouseMove, 200);

function handleClick(cell: DateCellModel): void {
  if (cell.disabled || cell.type === 'week') return;
  const newDate = cell.date;
  if (picker.type.value === 'daterange') {
    if (!props.rangeState.selecting) {
      emit('pick', {
        minDate: newDate,
        maxDate: null,
        rangeState: {
          pickedDate: newDate,
          hoveredDate: null,
          selecting: true
        }
      });
    } else {
      let dates;
      if (newDate && props.minDate && newDate >= props.minDate) {
        dates = { minDate: props.minDate, maxDate: newDate };
      } else {
        dates = { minDate: newDate, maxDate: props.minDate };
      }
      emit('pick', {
        ...dates,
        rangeState: {
          hoveredDate: null,
          pickedDate: null,
          selecting: false
        }
      });
    }
  } else if (picker.type.value === 'date') {
    emit('pick', newDate);
  } else if (picker.type.value === 'week') {
    const value = newDate ? startOfWeek(newDate, { weekStartsOn: 1 }) : null;
    emit('pick', value);
  } else {
    emit('pick', newDate);
  }
}
</script>

<template>
  <table
    role="grid"
    cellspacing="10"
    cellpadding="2"
    class="q-date-table"
  >
    <thead role="rowgroup">
      <tr role="row">
        <th
          v-for="day in days"
          :key="day"
          role="columnheader"
          class="q-date-table__days"
          scope="col"
        >
          {{ day }}
        </th>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr
        v-for="(row, key) in rows"
        :key="key"
        role="row"
        class="q-date-table__row"
      >
        <td
          v-for="(cell, index) in row"
          :key="index"
          role="gridcell"
          class="q-date-table__cell-wrapper"
        >
          <button
            :class="getCellClasses(cell)"
            type="button"
            tabindex="-1"
            :disabled="cell.disabled"
            :aria-disabled="cell.disabled || undefined"
            @click="handleClick(cell)"
            @mouseenter="handleMouseMove(cell)"
          >
            {{ cell.text }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
