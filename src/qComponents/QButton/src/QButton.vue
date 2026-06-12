<script setup lang="ts">
import { computed, inject, useSlots } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import type { QFormProvider } from '@/qComponents/QForm';

import type { Nullable, ClassValue } from '#/helpers';

import type {
  QButtonPropType,
  QButtonPropTheme,
  QButtonPropSize,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropCircle,
  QButtonPropFullWidth
} from './types';

defineOptions({
  name: 'QButton',
  componentName: 'QButton'
});

const props = defineProps({
  type: {
    type: String as PropType<QButtonPropType>,
    default: 'default',
    validator: validateArray<QButtonPropType>(['default', 'icon'])
  },

  theme: {
    type: String as PropType<QButtonPropTheme>,
    default: 'primary',
    validator: validateArray<QButtonPropTheme>(['primary', 'secondary', 'link'])
  },

  size: {
    type: String as PropType<QButtonPropSize>,
    default: 'regular',
    validator: validateArray<QButtonPropSize>(['small', 'regular'])
  },

  /**
   * any q-icon
   */
  icon: {
    type: String as PropType<QButtonPropIcon>,
    default: null
  },

  /**
   * as native button type
   */
  nativeType: {
    type: String as PropType<QButtonPropNativeType>,
    default: 'button',
    validator: validateArray<QButtonPropNativeType>([
      'button',
      'submit',
      'reset'
    ])
  },

  /**
   * whether to show loader inside button
   */
  loading: {
    type: Boolean as PropType<QButtonPropLoading>,
    default: false
  },

  /**
   * whether the button is disabled
   */
  disabled: {
    type: Boolean as PropType<QButtonPropDisabled>,
    default: false
  },

  /**
   * as native button autofocus
   */
  autofocus: {
    type: Boolean as PropType<QButtonPropAutofocus>,
    default: false
  },

  /**
   * change button's shape to circle (use with type icon)
   */
  circle: {
    type: Boolean as PropType<QButtonPropCircle>,
    default: false
  },

  /**
   * sets button width to 100%
   */
  fullWidth: {
    type: Boolean as PropType<QButtonPropFullWidth>,
    default: false
  },

  /**
   * accessible label for icon-only buttons
   */
  ariaLabel: {
    type: String,
    default: null
  }
});

const slots = useSlots();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isLoading = computed<boolean>(() => Boolean(props.loading));

const isIconType = computed<boolean>(() => props.type === 'icon');

const isCircle = computed<boolean>(
  () => Boolean(props.circle) && isIconType.value
);

const hasDefaultSlot = computed<boolean>(() => Boolean(slots.default));

const classList = computed<ClassValue[]>(() => {
  const classes: ClassValue[] = Object.entries({
    theme: props.theme ?? 'primary',
    type: props.type ?? 'default',
    size: props.size ?? 'regular'
  })
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `q-button_${key}_${value}`);

  classes.push({
    'q-button_disabled': isDisabled.value && !isLoading.value,
    'q-button_loading': isLoading.value,
    'q-button_circle': isCircle.value,
    'q-button_full-width': Boolean(props.fullWidth) && !isCircle.value
  });

  return classes;
});
</script>

<template>
  <button
    class="q-button"
    :disabled="isDisabled || isLoading"
    :autofocus="Boolean(autofocus)"
    :type="nativeType ?? 'button'"
    :class="classList"
    :aria-busy="isLoading || undefined"
    :aria-label="ariaLabel ?? undefined"
  >
    <span
      v-if="isLoading"
      class="q-button__spinner-icon q-icon-reverse"
      aria-hidden="true"
    />
    <span
      v-else-if="icon"
      :class="icon"
      :aria-hidden="hasDefaultSlot ? true : undefined"
    />
    <span
      v-if="$slots.default"
      class="q-button__inner"
    >
      <slot />
    </span>
  </button>
</template>
