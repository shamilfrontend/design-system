<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';
import { t } from '@/locale';

import type { Nullable } from '#/helpers';

import { DEFAULT_DURATION, NotifyType } from '../constants';
import type { QNotifyId } from '../types';

import type {
  QNotificationToastPropContent,
  QNotificationToastPropType,
  QNotificationToastPropOnClose
} from './types';

defineOptions({
  name: 'QNotificationToast'
});

const props = defineProps({
  uniqId: {
    type: [String, Number] as PropType<QNotifyId>,
    required: true
  },
  /**
   * description text
   */
  content: {
    type: String as PropType<QNotificationToastPropContent>,
    required: true
  },
  /**
   * notification type
   */
  type: {
    type: String as PropType<QNotificationToastPropType>,
    default: null,
    validator: validateArray(Object.values(NotifyType))
  },
  /**
   * icon class
   */
  icon: {
    type: String,
    default: null
  },
  /**
   * duration before close
   */
  duration: {
    type: Number,
    default: DEFAULT_DURATION
  },
  /**
   * callback function when closed
   */
  onClose: {
    type: Function as unknown as PropType<QNotificationToastPropOnClose>,
    default: null
  }
});

const emit = defineEmits<{
  remove: [uniqId: QNotifyId];
}>();

const notificationClasses = computed<Record<string, boolean>>(() => ({
  [`q-notification-toast_type_${props.type}`]: Boolean(props.type)
}));

const iconClass = computed<string>(() => {
  if (props.icon) return props.icon;

  switch (props.type) {
    case 'success':
      return 'q-icon-check';

    case 'warning':
    case 'error':
      return 'q-icon-attention-mark';

    case 'info':
    default:
      return 'q-icon-info';
  }
});

const toastRole = computed<'alert' | 'status'>(() =>
  props.type === 'error' || props.type === 'warning' ? 'alert' : 'status'
);

let timer: Nullable<ReturnType<typeof setTimeout>> = null;

function clearTimer(): void {
  if (timer) clearTimeout(timer);
}

function close(): void {
  if (typeof props.onClose === 'function') props.onClose(props.uniqId);

  emit('remove', props.uniqId);
}

function startTimer(): void {
  if (props.duration !== null && props.duration > 0) {
    timer = setTimeout(close, props.duration);
  }
}

onMounted(() => {
  startTimer();
});

onUnmounted(() => {
  clearTimer();
});
</script>

<template>
  <div
    class="q-notification-toast"
    :class="notificationClasses"
    :role="toastRole"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <div
      class="q-notification-toast__icon"
      :class="iconClass"
      aria-hidden="true"
    />

    <div class="q-notification-toast__content">
      {{ content }}
    </div>

    <button
      type="button"
      class="q-notification-toast__close q-icon-close"
      :aria-label="t('QNotification.close')"
      @click="close"
    />
  </div>
</template>
