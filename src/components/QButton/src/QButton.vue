<script setup lang="ts">
import { computed, inject, useSlots, Comment, Text, Fragment } from 'vue';

import type { QFormProvider } from '@/components/QForm';

import type { Nullable, ClassValue } from '#/helpers';

import {
  QButtonTypeEnum,
  QButtonSizeEnum,
  QButtonNativeTypeEnum,
  QButtonTagEnum
} from './types';
import type { QButtonProps } from './types';

defineOptions({ name: 'QButton' });

const props = withDefaults(defineProps<QButtonProps>(), {
  type: QButtonTypeEnum.Primary,
  plain: false,
  text: false,
  link: false,
  size: QButtonSizeEnum.Default,
  icon: null,
  nativeType: QButtonNativeTypeEnum.Button,
  loading: false,
  disabled: false,
  autofocus: false,
  round: false,
  circle: false,
  bg: false,
  tag: QButtonTagEnum.Button,
  color: '',
  dark: false,
  autoInsertSpace: false,
  fullWidth: false,
  ariaLabel: null
});

const slots = useSlots();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isLoading = computed<boolean>(() => Boolean(props.loading));

const isButtonTag = computed<boolean>(
  () => props.tag === QButtonTagEnum.Button
);

const isCircle = computed<boolean>(() => Boolean(props.circle));

function hasVisibleSlotContent(node: unknown): boolean {
  if (!node || typeof node !== 'object') {
    return false;
  }

  const vnode = node as {
    type?: unknown;
    children?: unknown;
  };

  if (vnode.type === Comment) {
    return false;
  }

  if (vnode.type === Text) {
    return String(vnode.children ?? '').trim().length > 0;
  }

  if (vnode.type === Fragment && Array.isArray(vnode.children)) {
    return vnode.children.some(hasVisibleSlotContent);
  }

  return true;
}

const hasDefaultSlot = computed<boolean>(() =>
  (slots.default?.() ?? []).some(hasVisibleSlotContent)
);
const isIconOnly = computed<boolean>(
  () => Boolean(props.icon) && !hasDefaultSlot.value
);
const isBlocked = computed<boolean>(() => isDisabled.value || isLoading.value);

const nativeTypeAttr = computed<string | undefined>(() =>
  isButtonTag.value
    ? (props.nativeType ?? QButtonNativeTypeEnum.Button)
    : undefined
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
      v-if="hasDefaultSlot"
      class="q-button__inner"
    >
      <slot />
    </span>
  </component>
</template>
