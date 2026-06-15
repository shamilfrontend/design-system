<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/components/config';
import { isServer } from '@/constants/isServer';

import type { Nullable } from '#/helpers';

import type { QDialogAction } from '../types';

import type {
  QDialogModalPropBeforeClose,
  QDialogModalPropModelValue,
  QDialogModalPropTeleportTo,
  QDialogModalPropTitle,
  QDialogModalPropWidth
} from './types';

defineOptions({
  name: 'QDialogModal'
});

const props = defineProps({
  modelValue: {
    type: Boolean as PropType<QDialogModalPropModelValue>,
    default: false
  },
  title: {
    type: String as PropType<QDialogModalPropTitle>,
    default: null
  },
  width: {
    type: [String, Number] as PropType<QDialogModalPropWidth>,
    default: '480px'
  },
  beforeClose: {
    type: Function as PropType<QDialogModalPropBeforeClose>,
    default: null
  },
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QDialogModalPropTeleportTo>,
    default: 'body'
  },
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  showClose: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  open: [];
  close: [];
  confirm: [];
  cancel: [];
}>();

const dialog = ref<Nullable<HTMLElement>>(null);
const isShown = ref<boolean>(false);
const zIndex = ref<number>(getConfig('nextZIndex') ?? 2000);

const dialogStyle = computed<Record<string, string | number>>(() => ({
  zIndex: zIndex.value,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width
}));

async function closeDialog(action: QDialogAction = 'close'): Promise<void> {
  if (props.beforeClose) {
    const canClose = await props.beforeClose(action);

    if (!canClose) return;
  }

  isShown.value = false;
  emit('update:modelValue', false);
  emit('close');

  if (action === 'confirm') emit('confirm');
  if (action === 'cancel') emit('cancel');
}

function handleBackdropClick(): void {
  if (props.closeOnClickModal) {
    closeDialog('cancel');
  }
}

function handleDocumentFocus(event: FocusEvent): void {
  const dialogValue = dialog.value;

  if (dialogValue && !dialogValue.contains(event.target as HTMLElement)) {
    dialogValue.focus();
  }
}

watch(
  () => props.modelValue,
  async value => {
    if (value) {
      zIndex.value = getConfig('nextZIndex') ?? 2000;
      document.body.style.overflow = 'hidden';
      document.addEventListener('focus', handleDocumentFocus, true);
      isShown.value = true;
      emit('open');
      await nextTick();
      dialog.value?.focus();
    } else if (isShown.value) {
      isShown.value = false;
      document.body.style.overflow = '';
      document.removeEventListener('focus', handleDocumentFocus, true);
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (props.modelValue) {
    document.body.style.overflow = 'hidden';
  }
});

onBeforeUnmount(() => {
  document.body.style.overflow = '';
  document.removeEventListener('focus', handleDocumentFocus, true);
});
</script>

<template>
  <teleport :to="teleportTo || 'body'">
    <transition
      name="q-fade-up"
      @after-leave="emit('close')"
    >
      <div
        v-show="isShown"
        class="q-dialog-container"
        :style="{ zIndex }"
        @click.self="handleBackdropClick"
      >
        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          class="q-dialog-container__wrapper q-dialog-modal"
          :style="dialogStyle"
          @keyup.esc="closeDialog('cancel')"
        >
          <div
            v-if="title || showClose"
            class="q-dialog-modal__header"
          >
            <h3
              v-if="title"
              class="q-dialog-modal__title"
            >
              {{ title }}
            </h3>
            <button
              v-if="showClose"
              type="button"
              class="q-dialog-modal__close q-icon-close"
              aria-label="Close"
              @click="closeDialog('close')"
            />
          </div>
          <div class="q-dialog-container__content q-dialog-modal__body">
            <slot />
          </div>
          <div
            v-if="$slots.footer"
            class="q-dialog-modal__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
