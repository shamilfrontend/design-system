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
import { validateArray } from '@/helpers';

import type { Nullable } from '#/helpers';

import type { QDrawerAction } from '../types';

import type {
  QDrawerModalPropBeforeClose,
  QDrawerModalPropModelValue,
  QDrawerModalPropPosition,
  QDrawerModalPropTeleportTo,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth
} from './types';

defineOptions({
  name: 'QDrawerModal'
});

const props = defineProps({
  modelValue: {
    type: Boolean as PropType<QDrawerModalPropModelValue>,
    default: false
  },
  title: {
    type: String as PropType<QDrawerModalPropTitle>,
    default: null
  },
  width: {
    type: [String, Number] as PropType<QDrawerModalPropWidth>,
    default: '400px'
  },
  position: {
    type: String as PropType<QDrawerModalPropPosition>,
    default: 'right',
    validator: validateArray<QDrawerModalPropPosition>(['left', 'right'])
  },
  beforeClose: {
    type: Function as PropType<QDrawerModalPropBeforeClose>,
    default: null
  },
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QDrawerModalPropTeleportTo>,
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

const drawer = ref<Nullable<HTMLElement>>(null);
const isShown = ref<boolean>(false);
const zIndex = ref<number>(getConfig('nextZIndex') ?? 2000);

const drawerStyle = computed<Record<string, string | number>>(() => ({
  zIndex: zIndex.value,
  width: typeof props.width === 'number' ? `${props.width}px` : props.width
}));

const drawerClass = computed<string>(
  () => `q-drawer-container__wrapper_${props.position}`
);

async function closeDrawer(action: QDrawerAction = 'close'): Promise<void> {
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
    closeDrawer('cancel');
  }
}

function handleDocumentFocus(event: FocusEvent): void {
  const drawerValue = drawer.value;

  if (drawerValue && !drawerValue.contains(event.target as HTMLElement)) {
    drawerValue.focus();
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
      drawer.value?.focus();
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
      name="q-fade"
      @after-leave="emit('close')"
    >
      <div
        v-show="isShown"
        class="q-drawer-container"
        :style="{ zIndex }"
      >
        <div
          v-if="closeOnClickModal"
          class="q-drawer-container__clickable-shadow"
          @click="handleBackdropClick"
        />

        <div
          ref="drawer"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          class="q-drawer-container__wrapper q-drawer-modal"
          :class="drawerClass"
          :style="drawerStyle"
          @keyup.esc="closeDrawer('cancel')"
        >
          <div
            v-if="title || showClose"
            class="q-drawer-modal__header"
          >
            <h3
              v-if="title"
              class="q-drawer-modal__title"
            >
              {{ title }}
            </h3>
            <button
              v-if="showClose"
              type="button"
              class="q-drawer-modal__close q-icon-close"
              aria-label="Close"
              @click="closeDrawer('close')"
            />
          </div>
          <div class="q-drawer-container__content q-drawer-modal__body">
            <slot />
          </div>
          <div
            v-if="$slots.footer"
            class="q-drawer-modal__footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
