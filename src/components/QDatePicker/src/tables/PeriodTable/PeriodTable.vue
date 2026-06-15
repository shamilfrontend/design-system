<script setup lang="ts">
import {
  addYears,
  startOfMonth,
  isSameMonth,
  isSameYear,
  startOfDecade
} from 'date-fns';
import { debounce } from 'lodash-es';
import { reactive, computed, inject } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/components/config';
import { notNull } from '@/helpers';

import type { Nullable, ClassValue } from '#/helpers';

import type { RangeState } from '../../commonTypes';
import { PERIOD_CELLS_IN_ROW_COUNT } from '../../constants';
import {
  formatToLocalReadableString,
  isDateInRangeInterval,
  checkDisabled
} from '../../helpers';
import type { QDatePickerProvider } from '../../types';

import type { PeriodCellModel, PeriodTableState } from './types';

defineOptions({
  name: 'QDatePickerPeriodTable'
});

const props = defineProps({
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
  type: {
    type: String,
    default: 'month',
    validator: notNull
  },
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
  rangeState: {
    type: Object as PropType<RangeState>,
    default: (): RangeState => ({
      hoveredDate: null,
      pickedDate: null,
      selecting: false
    }),
    validator: notNull
  }
});

const emit = defineEmits(['pick', 'rangeSelecting']);

const state = reactive<PeriodTableState>({
  tableRows: [[], [], []]
});

const picker = inject<QDatePickerProvider>(
  'qDatePicker',
  {} as QDatePickerProvider
);

const startYear = computed<Date>(() =>
  startOfDecade(props.year ? new Date(props.year, 0, 1) : new Date())
);

const isMonthTable = computed(() => props.type === 'month');
const isSameFn = computed(() =>
  props.type === 'month' ? isSameMonth : isSameYear
);

const rows = computed<PeriodCellModel[][]>(() => {
  const tableRows = state.tableRows;
  let startYearDate = startYear.value;
  return tableRows.map((row, i) => {
    const newRow = [];
    for (let j = 0; j < PERIOD_CELLS_IN_ROW_COUNT; j += 1) {
      const index = i * PERIOD_CELLS_IN_ROW_COUNT + j;
      const date =
        props.type === 'month'
          ? startOfMonth(new Date(props.year, index))
          : startYearDate;
      const cell: PeriodCellModel = {
        type: 'normal',
        inRange: false,
        text: index,
        date,
        disabled: checkDisabled(
          date,
          picker.disabledValues.value,
          isSameFn.value
        )
      };

      if (props.minDate) {
        let minDateNum = props.minDate.getTime();
        let maxDateNum = props.maxDate?.getTime();

        minDateNum = startOfMonth(minDateNum).getTime();
        maxDateNum = maxDateNum
          ? startOfMonth(maxDateNum).getTime()
          : minDateNum;

        minDateNum = Math.min(minDateNum, maxDateNum);
        maxDateNum = Math.max(minDateNum, maxDateNum);

        cell.inRange = Boolean(
          minDateNum &&
          date.getTime() >= minDateNum &&
          date.getTime() <= maxDateNum
        );
      }

      if (isSameFn.value(date, new Date())) {
        cell.type = 'today';
      }

      newRow.push(cell);
      startYearDate = addYears(startYearDate, 1);
    }

    return newRow;
  });
});

function getMonthName(monthIndex: number): string {
  return formatToLocalReadableString(
    new Date(props.year, monthIndex, 1),
    'LLL',
    getConfig('locale')
  );
}

function getCellClasses(cell: PeriodCellModel): ClassValue {
  const isCurrent = Boolean(
    props.value && cell.date && isSameFn.value(props.value, cell.date)
  );
  const isInRange = Boolean(
    cell.inRange ||
    (cell.date && isDateInRangeInterval(cell.date, props.rangeState))
  );

  const isNextDecade = !isMonthTable.value && Boolean(cell.text > 9);

  return {
    'q-period-table__cell': true,
    'q-period-table__cell_period': true,
    'q-period-table__cell_today': cell.type === 'today',
    'q-period-table__cell_current': isCurrent,
    'q-period-table__cell_in-range': isInRange,
    'q-period-table__cell_next-decade': isNextDecade
  };
}

function getCellContent(cell: PeriodCellModel): string {
  return String(
    isMonthTable.value
      ? getMonthName(cell.text)
      : (cell.date?.getFullYear() ?? '')
  );
}

function mouseMove(cell: PeriodCellModel): void {
  if (!props.rangeState.selecting) return;
  if (cell.disabled) return;
  emit('rangeSelecting', {
    selecting: true,
    hoveredDate: cell.date,
    pickedDate: props.minDate
  });
}

const handleMouseMove = debounce(mouseMove, 10);

function handleTableClick(cell: PeriodCellModel): void {
  if (cell.disabled) return;
  const newDate = cell.date;
  if (!newDate) return;
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  if (picker.type.value === 'monthrange' || picker.type.value === 'yearrange') {
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
    } else if (props.minDate && newDate >= props.minDate) {
      emit('pick', {
        minDate: props.minDate,
        maxDate: newDate,
        rangeState: { ...props.rangeState, selecting: false }
      });
    } else {
      emit('pick', {
        minDate: newDate,
        maxDate: props.minDate,
        rangeState: { ...props.rangeState, selecting: false }
      });
    }
  } else {
    emit('pick', month, year, props.type);
  }
}
</script>

<template>
  <table
    role="grid"
    cellspacing="4"
    cellpadding="5"
    class="q-period-table"
  >
    <tbody role="rowgroup">
      <tr
        v-for="(row, index) in rows"
        :key="index"
        role="row"
      >
        <td
          v-for="(cell, key) in row"
          :key="key"
          role="gridcell"
          class="q-period-table__cell-wrapper"
        >
          <button
            :class="getCellClasses(cell)"
            :disabled="cell.disabled"
            :aria-disabled="cell.disabled || undefined"
            type="button"
            tabindex="-1"
            @click="handleTableClick(cell)"
            @mousemove="handleMouseMove(cell)"
          >
            {{ getCellContent(cell) }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
