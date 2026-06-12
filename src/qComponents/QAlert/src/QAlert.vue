<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import { t } from '@/qComponents/locale';

import type {
  QAlertPropType,
  QAlertPropTitle,
  QAlertPropClosable,
  QAlertPropShowIcon,
  QAlertPropAriaLabel
} from './types';

defineOptions({
  name: 'QAlert',
  componentName: 'QAlert'
});

const props = defineProps({
  /**
   * alert type
   */
  type: {
    type: String as PropType<QAlertPropType>,
    default: 'info',
    validator: validateArray<'success' | 'warning' | 'info' | 'error'>([
      'success',
      'warning',
      'info',
      'error'
    ])
  },
  /**
   * alert title
   */
  title: {
    type: String as PropType<QAlertPropTitle>,
    default: null
  },
  /**
   * whether close button is shown
   */
  closable: {
    type: Boolean as PropType<QAlertPropClosable>,
    default: false
  },
  /**
   * whether icon is shown
   */
  showIcon: {
    type: Boolean as PropType<QAlertPropShowIcon>,
    default: true
  },
  /**
   * accessible label for close button
   */
  ariaLabel: {
    type: String as PropType<QAlertPropAriaLabel>,
    default: null
  }
});

const emit = defineEmits<{
  close: [event: MouseEvent];
}>();

const isVisible = ref<boolean>(true);

const closeLabel = computed<string>(
  () => props.ariaLabel ?? t('QAlert.close')
);

const iconClass = computed<string>(() => {
  switch (props.type) {
    case 'success':
      return 'q-icon-check';
    case 'warning':
      return 'q-icon-attention-mark';
    case 'error':
      return 'q-icon-alert-fill';
    case 'info':
    default:
      return 'q-icon-info-fill';
  }
});

function handleClose(event: MouseEvent): void {
  isVisible.value = false;
  emit('close', event);
}
</script>

<template>
  <div
    v-if="isVisible"
    class="q-alert"
    :class="`q-alert_type_${type}`"
    role="alert"
  >
    <span
      v-if="showIcon"
      class="q-alert__icon"
      :class="iconClass"
      aria-hidden="true"
    />
    <div class="q-alert__content">
      <div
        v-if="title"
        class="q-alert__title"
      >
        {{ title }}
      </div>
      <div
        v-if="$slots.default"
        class="q-alert__description"
      >
        <slot />
      </div>
    </div>
    <button
      v-if="closable"
      type="button"
      class="q-alert__close q-icon-close"
      :aria-label="closeLabel"
      @click="handleClose"
    />
  </div>
</template>
