<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import { t } from '@/qComponents/locale';

import type {
  QResultPropStatus,
  QResultPropSubtitle,
  QResultPropTitle
} from './types';

defineOptions({
  name: 'QResult',
});

const props = defineProps({
  status: {
    type: String as PropType<QResultPropStatus>,
    default: 'info',
    validator: validateArray<QResultPropStatus>([
      'success',
      'error',
      'warning',
      'info',
      '404',
      '403',
      '500'
    ])
  },
  title: {
    type: String as PropType<QResultPropTitle>,
    default: null
  },
  subtitle: {
    type: String as PropType<QResultPropSubtitle>,
    default: null
  }
});

const defaultIcon = computed<string>(() => {
  switch (props.status) {
    case 'success':
      return 'q-icon-check';
    case 'error':
    case '500':
      return 'q-icon-alert-fill';
    case 'warning':
      return 'q-icon-attention-mark';
    case '404':
    case '403':
      return 'q-icon-info-fill';
    case 'info':
    default:
      return 'q-icon-info-fill';
  }
});

const defaultTitle = computed<string>(() => {
  if (props.title) return props.title;

  const titles: Record<QResultPropStatus, string> = {
    success: t('QResult.successTitle'),
    error: t('QResult.errorTitle'),
    warning: t('QResult.warningTitle'),
    info: t('QResult.infoTitle'),
    '404': t('QResult.notFoundTitle'),
    '403': t('QResult.forbiddenTitle'),
    '500': t('QResult.serverErrorTitle')
  };

  return titles[props.status];
});
</script>

<template>
  <div
    class="q-result"
    :class="`q-result_status_${status}`"
  >
    <div class="q-result__icon">
      <slot name="icon">
        <span
          :class="defaultIcon"
          aria-hidden="true"
        />
      </slot>
    </div>
    <h2 class="q-result__title">{{ defaultTitle }}</h2>
    <p
      v-if="subtitle || $slots.subtitle"
      class="q-result__subtitle"
    >
      <slot name="subtitle">{{ subtitle }}</slot>
    </p>
    <div
      v-if="$slots.extra"
      class="q-result__extra"
    >
      <slot name="extra" />
    </div>
  </div>
</template>
