<script setup lang="ts">
import { ref, computed, inject, useId, useSlots, watchEffect } from 'vue';
import type { PropType, Ref } from 'vue';

import { QButton } from '@/qComponents/QButton';

import { Nullable } from '#/helpers';

import { QMessageBoxAction } from '../constants';
import type { QMessageBoxContainerProvider } from '../QMessageBoxContainer';

import type { QMessageBoxContentPropBeforeClose } from './types';

defineOptions({
  name: 'QMessageBoxContent',
  componentName: 'QMessageBoxContent'
});

const props = defineProps({
  /**
   * title of the QMessageBox
   */
  title: {
    type: String,
    default: null
  },
  /**
   * content of the QMessageBox
   */
  message: {
    type: String,
    default: null
  },
  /**
   * subcontent of the QMessageBox
   */
  submessage: {
    type: String,
    default: null
  },
  /**
   * text content of confirm button
   */
  confirmButtonText: {
    type: String,
    default: null
  },
  /**
   * text content of cancel button
   */
  cancelButtonText: {
    type: String,
    default: null
  },
  /**
   * callback before QMessageBox closes, and it will prevent QMessageBox from closing
   */
  beforeClose: {
    type: Function as unknown as PropType<QMessageBoxContentPropBeforeClose>,
    default: null
  }
});

const slots = useSlots();
const titleId = useId();

const hasTitle = computed<boolean>(() => Boolean(props.title || slots.title));

const a11yContext = inject<
  Nullable<{ dialogTitleId: Ref<string | undefined> }>
>('qMessageBoxA11y', null);

watchEffect(() => {
  if (a11yContext && hasTitle.value) {
    a11yContext.dialogTitleId.value = titleId;
  }
});

const qMessageBoxContainer = inject<Nullable<QMessageBoxContainerProvider>>(
  'qMessageBoxContainer',
  null
);

const isConfirmBtnLoading = ref<boolean>(false);
const isCancelBtnLoading = ref<boolean>(false);

const isActionsSectionShown = computed<boolean>(
  () => Boolean(props.confirmButtonText) || Boolean(props.cancelButtonText)
);

const commitBeforeClose = async (
  action: QMessageBoxAction
): Promise<boolean> => {
  let isReadyToClose = true;

  if (typeof props.beforeClose === 'function') {
    isReadyToClose = await props.beforeClose(action);
  }

  return isReadyToClose;
};

const handleConfirmBtnClick = async (): Promise<void> => {
  const action = QMessageBoxAction.confirm;
  isConfirmBtnLoading.value = true;
  const isDone = await commitBeforeClose(action);
  isConfirmBtnLoading.value = false;

  if (isDone) qMessageBoxContainer?.emitDoneEvent({ action });
};

const handleCancelBtnClick = async (): Promise<void> => {
  const action = QMessageBoxAction.cancel;
  isCancelBtnLoading.value = true;
  const isDone = await commitBeforeClose(action);
  isCancelBtnLoading.value = false;

  if (isDone) qMessageBoxContainer?.emitDoneEvent({ action });
};
</script>

<template>
  <div class="q-message-box-content">
    <div
      :id="hasTitle ? titleId : undefined"
      class="q-message-box-content__title"
    >
      <slot name="title">{{ title }}</slot>
    </div>

    <slot>
      <div class="q-message-box-content__content">
        <slot name="content">
          <div
            v-if="message || $slots.message"
            class="q-message-box-content__message"
          >
            <slot name="message">{{ message }}</slot>
          </div>

          <div
            v-if="submessage || $slots.submessage"
            class="q-message-box-content__submessage"
          >
            <slot name="submessage">{{ submessage }}</slot>
          </div>
        </slot>
      </div>

      <div
        v-if="isActionsSectionShown || $slots.actions"
        class="q-message-box-content__actions"
      >
        <slot name="actions">
          <q-button
            v-if="confirmButtonText"
            :loading="isConfirmBtnLoading"
            :disabled="isCancelBtnLoading"
            @click="handleConfirmBtnClick"
          >
            {{ confirmButtonText }}
          </q-button>

          <q-button
            v-if="cancelButtonText"
            type="primary"
            plain
            :loading="isCancelBtnLoading"
            :disabled="isConfirmBtnLoading"
            @click="handleCancelBtnClick"
          >
            {{ cancelButtonText }}
          </q-button>
        </slot>
      </div>
    </slot>
  </div>
</template>
