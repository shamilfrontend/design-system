<script setup lang="ts">
import { inject, computed, type Component } from 'vue';

import { randId } from '@/qComponents/helpers';
import type { QCollapseProvider } from '@/qComponents/QCollapse';

import type { ClassValue } from '#/helpers';

import QCollapseTransition from './QCollapseTransition.vue';

defineOptions({
  name: 'QCollapseItem',
});

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  name: {
    type: [String, Number],
    default: null
  }
});

const qCollapse = inject<QCollapseProvider>('qCollapse');

const preparedName = computed<string | number>(
  () => props.name ?? qCollapse?.uniqueId('default-collapse-name-') ?? randId()
);

const isActive = computed<boolean>(
  () =>
    qCollapse?.activeNames?.value.includes(preparedName.value ?? '') ?? false
);

const customIcon = computed<Component | string>(() => {
  if (!qCollapse?.openIcon || !qCollapse?.closeIcon) return 'div';

  return isActive.value ? qCollapse.closeIcon : qCollapse.openIcon;
});

const isCustomIcon = computed<boolean>(() => customIcon.value !== 'div');

const icon = computed<'q-icon-minus' | 'q-icon-plus'>(() =>
  isActive.value ? 'q-icon-minus' : 'q-icon-plus'
);

const collapseIconClass = computed<ClassValue>(() => ({
  'q-collapse-item__icon': !isCustomIcon.value,
  'q-collapse-item__icon-custom': isCustomIcon.value,
  [icon.value]: !isCustomIcon.value
}));

function handleHeaderClick(): void {
  if (preparedName.value) qCollapse?.updateValue(preparedName.value);
}
</script>

<template>
  <div
    class="q-collapse-item"
    :class="{
      'q-collapse-item_active': isActive
    }"
  >
    <button
      type="button"
      class="q-collapse-item__header"
      :aria-expanded="isActive"
      @click="handleHeaderClick"
    >
      <slot name="title">
        <div class="q-collapse-item__title">{{ title }}</div>
      </slot>
      <component
        :is="customIcon"
        :class="collapseIconClass"
        aria-hidden="true"
      />
    </button>

    <q-collapse-transition>
      <div
        v-show="isActive"
        class="q-collapse-item__body"
      >
        <div class="q-collapse-item__content">
          <slot />
        </div>
      </div>
    </q-collapse-transition>
  </div>
</template>
