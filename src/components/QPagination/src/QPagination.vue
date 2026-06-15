<script setup lang="ts">
import { range } from 'lodash-es';
import { computed } from 'vue';

import { t } from '@/locale';

defineOptions({
  name: 'QPagination'
});

const props = defineProps({
  /**
   * total page count
   */
  pageCount: { type: Number, default: null },
  /**
   * total item count
   */
  total: { type: Number, default: null },
  /**
   * item count of each page
   */
  pageSize: { type: Number, default: null },
  /**
   * current page number
   */
  currentPage: {
    type: Number,
    default: 1,
    validator: (value: number): boolean => value >= 1
  },
  /**
   * whether Pagination is disabled
   */
  disabled: { type: Boolean, default: false },
  /**
   * number of visible page's buttons
   */
  pagerCount: {
    type: Number,
    default: 7,
    validator: (value: number): boolean => value >= 3
  },
  /**
   * accessible label for pagination navigation
   */
  ariaLabel: {
    type: String,
    default: null
  }
});

const emit = defineEmits<{
  'current-change': [newPage: number];
  'prev-click': [newPage: number];
  'next-click': [newPage: number];
  'quick-prev-click': [newPage: number];
  'quick-next-click': [newPage: number];
}>();

const navigationLabel = computed<string>(
  () => props.ariaLabel ?? t('QPagination.ariaLabel')
);

const preparedPageCount = computed<number>(() => {
  const pageCount =
    props.pageCount ?? Math.ceil((props.total ?? 0) / (props.pageSize ?? 0));

  return pageCount && Number.isFinite(pageCount) ? pageCount : 1;
});

const isPrevBtnDisabled = computed<boolean>(
  () => props.disabled || props.currentPage <= 1
);

const isNextBtnDisabled = computed<boolean>(
  () => props.disabled || props.currentPage >= preparedPageCount.value
);

const isPrevQuickBtnShown = computed<boolean>(() => {
  if (preparedPageCount.value <= props.pagerCount) return false;

  const halfPagerCount = (props.pagerCount - 1) / 2;
  return props.currentPage > props.pagerCount - halfPagerCount;
});

const isNextQuickBtnShown = computed<boolean>(() => {
  if (preparedPageCount.value <= props.pagerCount) return false;

  const halfPagerCount = (props.pagerCount - 1) / 2;
  return props.currentPage < preparedPageCount.value - halfPagerCount;
});

const pagers = computed<number[]>(() => {
  if (preparedPageCount.value <= 1) return [];

  let rangeStart = 2;
  let rangeEnd = preparedPageCount.value;

  if (isPrevQuickBtnShown.value && isNextQuickBtnShown.value) {
    const offset = Math.floor(props.pagerCount / 2) - 1;

    rangeStart = props.currentPage - offset;
    rangeEnd = props.currentPage + offset + 1;
  } else if (isPrevQuickBtnShown.value) {
    rangeStart = preparedPageCount.value - (props.pagerCount - 2);
  } else if (isNextQuickBtnShown.value) {
    rangeEnd = props.pagerCount;
  }

  return range(rangeStart, rangeEnd);
});

function handlePrevBtnClick(): void {
  let newPage = props.currentPage - 1;
  if (newPage > preparedPageCount.value) newPage = preparedPageCount.value;

  emit('prev-click', newPage);
  emit('current-change', newPage);
}

function handlePageBtnClick(newPage: number): void {
  if (props.currentPage === newPage) return;
  emit('current-change', newPage);
}

function handleNextBtnClick(): void {
  const newPage = props.currentPage + 1;

  emit('next-click', newPage);
  emit('current-change', newPage);
}

function handlePrevQuickBtnClick(): void {
  let newPage = props.currentPage - (props.pagerCount - 2);
  if (newPage > preparedPageCount.value) newPage = preparedPageCount.value;
  else if (newPage < 1) newPage = 1;

  emit('quick-prev-click', newPage);
  emit('current-change', newPage);
}

function handleNextQuickBtnClick(): void {
  let newPage = props.currentPage + (props.pagerCount - 2);
  if (newPage > preparedPageCount.value) newPage = preparedPageCount.value;
  else if (newPage < 1) newPage = 1;

  emit('quick-next-click', newPage);
  emit('current-change', newPage);
}
</script>

<template>
  <nav
    class="q-pagination"
    :class="{
      'q-pagination_disabled': disabled
    }"
    :aria-label="navigationLabel"
  >
    <button
      type="button"
      class="q-pagination__btn q-pagination__btn_icon q-icon-arrow-left"
      :class="{
        'q-pagination__btn_disabled': isPrevBtnDisabled
      }"
      :disabled="isPrevBtnDisabled"
      :aria-label="t('QPagination.prevPage')"
      @click="handlePrevBtnClick"
    />

    <button
      type="button"
      class="q-pagination__btn"
      :class="{
        'q-pagination__btn_active': currentPage === 1
      }"
      :disabled="disabled"
      :aria-current="currentPage === 1 ? 'page' : undefined"
      @click="handlePageBtnClick(1)"
    >
      1
    </button>

    <button
      v-if="isPrevQuickBtnShown"
      type="button"
      class="q-pagination__btn q-pagination__btn_quick q-icon-triangle-left"
      :disabled="disabled"
      :aria-label="t('QPagination.prevPages')"
      @click="handlePrevQuickBtnClick"
    />

    <button
      v-for="page in pagers"
      :key="page"
      type="button"
      class="q-pagination__btn"
      :class="{
        'q-pagination__btn_active': page === currentPage
      }"
      :disabled="disabled"
      :aria-current="page === currentPage ? 'page' : undefined"
      @click="handlePageBtnClick(page)"
    >
      {{ page }}
    </button>

    <button
      v-if="isNextQuickBtnShown"
      type="button"
      class="q-pagination__btn q-pagination__btn_quick q-icon-triangle-right"
      :disabled="disabled"
      :aria-label="t('QPagination.nextPages')"
      @click="handleNextQuickBtnClick"
    />

    <button
      v-if="preparedPageCount > 1"
      type="button"
      class="q-pagination__btn"
      :class="{
        'q-pagination__btn_active': preparedPageCount === currentPage
      }"
      :disabled="disabled"
      :aria-current="preparedPageCount === currentPage ? 'page' : undefined"
      @click="handlePageBtnClick(preparedPageCount)"
    >
      {{ preparedPageCount }}
    </button>

    <button
      type="button"
      class="q-pagination__btn q-pagination__btn_icon q-icon-arrow-right"
      :class="{
        'q-pagination__btn_disabled': isNextBtnDisabled
      }"
      :disabled="isNextBtnDisabled"
      :aria-label="t('QPagination.nextPage')"
      @click="handleNextBtnClick"
    />
  </nav>
</template>
