<script setup lang="ts">
import { computed, inject, useId, useSlots, watchEffect } from 'vue';
import type { Ref } from 'vue';

import { QScrollbar } from '@/qComponents/QScrollbar';

import type { Nullable } from '#/helpers';

import type { QDrawerContainerProvider } from '../QDrawerContainer';

defineOptions({
  name: 'QDrawerContent',
  componentName: 'QDrawerContent'
});

const props = defineProps({
  /**
   * title of the QDrawer
   */
  title: {
    type: String,
    default: null
  },
  /**
   * whether to hide close button
   */
  hideCloseButton: {
    type: Boolean,
    default: false
  }
});

const slots = useSlots();
const titleId = useId();

const hasTitle = computed<boolean>(() => Boolean(props.title || slots.title));

const a11yContext = inject<
  Nullable<{ dialogTitleId: Ref<string | undefined> }>
>('qDrawerA11y', null);

watchEffect(() => {
  if (a11yContext && hasTitle.value) {
    a11yContext.dialogTitleId.value = titleId;
  }
});

const qDrawerContainer = inject<Nullable<QDrawerContainerProvider>>(
  'qDrawerContainer',
  null
);

const handleCloseBtnClick = (): void => {
  qDrawerContainer?.emitCloseEvent();
};
</script>

<template>
  <div class="q-drawer-content">
    <div
      v-if="hasTitle"
      :id="titleId"
      class="q-drawer-content__title"
    >
      <slot name="title">{{ title }}</slot>
    </div>

    <button
      v-if="!hideCloseButton"
      type="button"
      class="q-drawer-content__close q-icon-close"
      @click="handleCloseBtnClick"
    />

    <q-scrollbar view-class="q-drawer-content__view">
      <div class="q-drawer-content__body">
        <slot />
      </div>
    </q-scrollbar>
  </div>
</template>
