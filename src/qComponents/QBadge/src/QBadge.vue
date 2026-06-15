<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type {
  QBadgePropValue,
  QBadgePropMax,
  QBadgePropType,
  QBadgePropIsDot,
  QBadgePropHidden
} from './types';

defineOptions({
  name: 'QBadge',
});

const props = defineProps({
  /**
   * badge value
   */
  value: {
    type: [String, Number] as PropType<QBadgePropValue>,
    default: null
  },
  /**
   * maximum value before showing `{max}+`
   */
  max: {
    type: Number as PropType<QBadgePropMax>,
    default: 99
  },
  /**
   * badge color type
   */
  type: {
    type: String as PropType<QBadgePropType>,
    default: 'danger',
    validator: validateArray<
      'primary' | 'success' | 'warning' | 'danger' | 'info'
    >(['primary', 'success', 'warning', 'danger', 'info'])
  },
  /**
   * whether badge is a dot without value
   */
  isDot: {
    type: Boolean as PropType<QBadgePropIsDot>,
    default: false
  },
  /**
   * whether badge is hidden
   */
  hidden: {
    type: Boolean as PropType<QBadgePropHidden>,
    default: false
  }
});

const shouldShowBadge = computed<boolean>(() => {
  if (props.hidden) return false;
  if (props.isDot) return true;

  return props.value != null && props.value !== '' && props.value !== 0;
});

const displayValue = computed<string>(() => {
  if (props.isDot) return '';

  const value = props.value;

  if (value == null) return '';

  if (
    typeof value === 'number' &&
    props.max != null &&
    value > props.max
  ) {
    return `${props.max}+`;
  }

  return String(value);
});

const badgeClasses = computed<Record<string, boolean>>(() => ({
  [`q-badge__content_type_${props.type}`]: Boolean(props.type),
  'q-badge__content_dot': Boolean(props.isDot)
}));
</script>

<template>
  <div class="q-badge">
    <slot />
    <sup
      v-if="shouldShowBadge"
      class="q-badge__content"
      :class="badgeClasses"
    >
      {{ displayValue }}
    </sup>
  </div>
</template>
