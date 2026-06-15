<script setup lang="ts">
import { getCurrentInstance, onMounted, computed } from 'vue';
import type { PropType, Ref } from 'vue';

import { REMOVE_EVENT } from '@/qComponents/constants/events';

import { DEFAULT_DURATION } from '../constants';
import QNotificationToast from '../QNotificationToast';
import type { QNotifyItem, QNotifyId } from '../types';

defineOptions({
  name: 'QNotificationContainer',
});

const props = defineProps({
  /**
   * icon class
   */
  list: {
    type: Object as PropType<Ref<QNotifyItem[]>>,
    required: true
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
  }
});

const emit = defineEmits<{
  remove: [id: QNotifyId];
}>();

const instance = getCurrentInstance();

const notifyList = computed<QNotifyItem[]>(() => props.list.value);

function handleRemove(id: QNotifyId): void {
  emit(REMOVE_EVENT, id);
}

function mountInstance(): void {
  if (!instance?.vnode?.el) return;

  instance.vnode.el.remove();
  document.body.appendChild(instance.vnode.el as Node);
}

onMounted(() => {
  mountInstance();
});
</script>

<template>
  <div
    class="q-notification-container"
    aria-live="polite"
    aria-atomic="false"
  >
    <transition-group name="q-notification-container">
      <q-notification-toast
        v-for="toast in notifyList"
        :key="toast.id"
        :uniq-id="toast.id"
        :content="toast.content"
        :type="toast.type"
        :icon="toast.icon ?? icon"
        :duration="toast.duration ?? duration"
        :on-close="toast.onClose"
        @remove="handleRemove"
      />
    </transition-group>
  </div>
</template>
