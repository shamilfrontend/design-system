<script setup lang="ts">
import { computed, inject, useSlots } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import type { QFormProvider } from '@/qComponents/QForm';

import type { Nullable, ClassValue } from '#/helpers';

import type {
  QButtonPropType,
  QButtonPropSize,
  QButtonPropPlain,
  QButtonPropText,
  QButtonPropLink,
  QButtonPropIcon,
  QButtonPropNativeType,
  QButtonPropLoading,
  QButtonPropDisabled,
  QButtonPropAutofocus,
  QButtonPropRound,
  QButtonPropCircle,
  QButtonPropBg,
  QButtonPropTag,
  QButtonPropColor,
  QButtonPropDark,
  QButtonPropAutoInsertSpace,
  QButtonPropFullWidth
} from './types';

defineOptions({ name: 'QButton' });

const props = defineProps({
  type: {
    type: String as PropType<QButtonPropType>,
    default: 'primary',
    validator: validateArray<QButtonPropType>([
      'default',
      'primary',
      'success',
      'warning',
      'danger',
      'info'
    ])
  },

  plain: {
    type: Boolean as PropType<QButtonPropPlain>,
    default: false
  },

  text: {
    type: Boolean as PropType<QButtonPropText>,
    default: false
  },

  link: {
    type: Boolean as PropType<QButtonPropLink>,
    default: false
  },

  size: {
    type: String as PropType<QButtonPropSize>,
    default: 'default',
    validator: validateArray<QButtonPropSize>(['large', 'default', 'small'])
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
   * whether to round button corners
   */
  round: {
    type: Boolean as PropType<QButtonPropRound>,
    default: false
  },

  /**
   * change button's shape to circle
   */
  circle: {
    type: Boolean as PropType<QButtonPropCircle>,
    default: false
  },

  /**
   * whether to show text-button background
   */
  bg: {
    type: Boolean as PropType<QButtonPropBg>,
    default: false
  },

  /**
   * root html tag
   */
  tag: {
    type: String as PropType<QButtonPropTag>,
    default: 'button'
  },

  /**
   * custom button color
   */
  color: {
    type: String as PropType<QButtonPropColor>,
    default: ''
  },

  /**
   * dark mode when used with custom color
   */
  dark: {
    type: Boolean as PropType<QButtonPropDark>,
    default: false
  },

  /**
   * compatible prop with Element Plus API
   */
  autoInsertSpace: {
    type: Boolean as PropType<QButtonPropAutoInsertSpace>,
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

const isButtonTag = computed<boolean>(() => props.tag === 'button');

const isCircle = computed<boolean>(() => Boolean(props.circle));

const hasDefaultSlot = computed<boolean>(() => Boolean(slots.default));
const isIconOnly = computed<boolean>(
  () => Boolean(props.icon) && !hasDefaultSlot.value
);
const isBlocked = computed<boolean>(() => isDisabled.value || isLoading.value);

const nativeTypeAttr = computed<string | undefined>(() =>
  isButtonTag.value ? (props.nativeType ?? 'button') : undefined
);

const disabledAttr = computed<boolean | undefined>(() =>
  isButtonTag.value ? isBlocked.value : undefined
);

const ariaDisabledAttr = computed<string | undefined>(() =>
  !isButtonTag.value && isBlocked.value ? 'true' : undefined
);

const tabIndexAttr = computed<number | undefined>(() =>
  !isButtonTag.value && isBlocked.value ? -1 : undefined
);

const customStyle = computed<Record<string, string> | undefined>(() => {
  if (!props.color) {
    return undefined;
  }

  const hoverActiveColor = `color-mix(in srgb, ${props.color} 88%, black)`;
  const plainColor = `color-mix(in srgb, ${props.color} 20%, transparent)`;
  const textColor = `color-mix(in srgb, ${props.color} 14%, transparent)`;

  return {
    '--button-main-bg': props.color,
    '--button-border-color': props.color,
    '--button-plain-color': props.color,
    '--button-hover-active-bg': hoverActiveColor,
    '--button-plain-bg': plainColor,
    '--button-plain-bg-hover': plainColor,
    '--button-text-bg-hover': textColor,
    '--button-text-color': props.dark ? '#fff' : 'var(--color-text-regular)',
    '--button-hover-color': props.dark ? '#fff' : 'var(--color-text-regular)',
    '--button-active-color': props.dark ? '#fff' : 'var(--color-text-regular)'
  };
});

const classList = computed<ClassValue[]>(() => {
  const classes: ClassValue[] = [
    `q-button_type_${props.type}`,
    `q-button_size_${props.size}`
  ];

  if (isIconOnly.value) {
    classes.push('q-button_variant_icon');
  }

  classes.push({
    'q-button_plain': Boolean(props.plain) && !props.text && !props.link,
    'q-button_text': Boolean(props.text) && !props.link,
    'q-button_link': Boolean(props.link),
    'q-button_bg': Boolean(props.bg),
    'q-button_round': Boolean(props.round),
    'q-button_dark': Boolean(props.dark),
    'q-button_disabled': isDisabled.value && !isLoading.value,
    'q-button_loading': isLoading.value,
    'q-button_circle': isCircle.value,
    'q-button_full-width': Boolean(props.fullWidth) && !isCircle.value
  });

  return classes;
});

function onRootClick(event: MouseEvent): void {
  if (!isButtonTag.value && isBlocked.value) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}
</script>

<template>
  <component
    :is="props.tag"
    class="q-button"
    :disabled="disabledAttr"
    :aria-disabled="ariaDisabledAttr"
    :tabindex="tabIndexAttr"
    :autofocus="Boolean(props.autofocus)"
    :type="nativeTypeAttr"
    :class="classList"
    :style="customStyle"
    :aria-busy="isLoading || undefined"
    :aria-label="props.ariaLabel ?? undefined"
    @click="onRootClick"
  >
    <span
      v-if="isLoading"
      class="q-button__spinner-icon q-icon-reverse"
      aria-hidden="true"
    />
    <span
      v-else-if="props.icon"
      :class="props.icon"
      :aria-hidden="hasDefaultSlot ? true : undefined"
    />
    <span
      v-if="slots.default"
      class="q-button__inner"
    >
      <slot />
    </span>
  </component>
</template>
