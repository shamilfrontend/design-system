<script setup lang="ts">
import { computed, inject, useId, useSlots, watchEffect } from 'vue';
import type { Ref } from 'vue';

import { QButton } from '@/qComponents/QButton';
import { QScrollbar } from '@/qComponents/QScrollbar';

import type { Nullable } from '#/helpers';

import type { QDialogContainerProvider } from '../QDialogContainer';

defineOptions({
  name: 'QDialogContent',
  componentName: 'QDialogContent'
});

const props = defineProps({
  /**
   * title of the QDialog
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
>('qDialogA11y', null);

watchEffect(() => {
  if (a11yContext && hasTitle.value) {
    a11yContext.dialogTitleId.value = titleId;
  }
});

const qDialogContainer = inject<Nullable<QDialogContainerProvider>>(
  'qDialogContainer',
  null
);

const handleCloseBtnClick = (): void => {
  qDialogContainer?.emitCloseEvent();
};
</script>

<template>
  <div class="q-dialog-content">
    <div
      v-if="hasTitle"
      :id="titleId"
      class="q-dialog-content__title"
    >
      <slot name="title">{{ title }}</slot>
    </div>

    <q-button
      v-if="!hideCloseButton"
      class="q-dialog-content__close"
      circle
      theme="secondary"
      type="icon"
      icon="q-icon-close"
      @click="handleCloseBtnClick"
    />

    <q-scrollbar
      theme="secondary"
      view-class="q-dialog-content__view"
    >
      <div class="q-dialog-content__body">
        <slot />
      </div>
    </q-scrollbar>
  </div>
</template>
