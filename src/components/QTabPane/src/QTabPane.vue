<script setup lang="ts">
import { inject, computed } from 'vue';

import type { QTabsProvider } from '@/components/QTabs';

import type { Optional } from '#/helpers';

defineOptions({
  name: 'QTabPane'
});

const props = defineProps({
  /**
   * key of QTabPane
   */
  name: {
    type: String,
    required: true
  },
  /**
   * title of QTabPane
   */
  title: {
    type: String,
    required: true
  },
  /**
   * width of QTabPane
   */
  width: {
    type: [String, Number],
    default: null
  },
  /**
   * whether QTabPane is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  }
});

const qTabs = inject<QTabsProvider>('qTabs');

const isActive = computed<boolean>(() => {
  return qTabs?.currentName.value === props.name;
});

const isDisabled = computed<boolean>(
  () => props.disabled || Boolean(qTabs?.disabled.value) || isActive.value
);

const tabWidthStyle = computed<Record<string, Optional<string>>>(() => {
  const width = props.width ?? qTabs?.tabWidth.value ?? '';

  if (!width) return {};

  return {
    '--tab-pane-width': Number.isNaN(Number(width))
      ? String(width)
      : `${Number(width)}px`
  };
});

const tabBtnClasses = computed<Record<string, boolean>>(() => ({
  'q-tab-pane__btn_active': isActive.value,
  'q-tab-pane__btn_disabled': isDisabled.value
}));

function handleTabClick(): void {
  qTabs?.updateValue(props.name);
}
</script>

<template>
  <div
    class="q-tab-pane"
    :style="tabWidthStyle"
  >
    <div class="q-tab-pane__inner">
      <button
        type="button"
        class="q-tab-pane__btn"
        role="tab"
        :class="tabBtnClasses"
        :disabled="isDisabled"
        :aria-selected="isActive"
        :aria-disabled="isDisabled"
        @click="handleTabClick"
      >
        {{ title }}
      </button>

      <slot name="content" />
    </div>
  </div>
</template>
