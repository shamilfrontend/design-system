<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';

import {
  Q_DROPDOWN_INJECTION_KEY,
  type QDropdownContext
} from '@/qComponents/QDropdown/src/constants';

import type {
  QMenuItemPropCommand,
  QMenuItemPropDisabled,
  QMenuItemPropDivided,
  QMenuItemPropIcon
} from './types';

defineOptions({
  name: 'QMenuItem',
  componentName: 'QMenuItem'
});

const props = defineProps({
  disabled: {
    type: Boolean as PropType<QMenuItemPropDisabled>,
    default: false
  },
  divided: {
    type: Boolean as PropType<QMenuItemPropDivided>,
    default: false
  },
  icon: {
    type: String as PropType<QMenuItemPropIcon>,
    default: null
  },
  command: {
    type: String as PropType<QMenuItemPropCommand>,
    default: null
  }
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const dropdown = inject<QDropdownContext | null>(
  Q_DROPDOWN_INJECTION_KEY,
  null
);

function handleClick(event: MouseEvent): void {
  if (props.disabled) return;

  emit('click', event);
  dropdown?.close();
}
</script>

<template>
  <li
    role="menuitem"
    class="q-menu__item"
    :class="{
      'q-menu__item_disabled': disabled,
      'q-menu__item_divided': divided,
      'q-menu__item_with-icon': icon
    }"
    :aria-disabled="disabled || undefined"
    @click="handleClick"
  >
    <span
      v-if="icon"
      class="q-menu__icon"
      :class="icon"
      aria-hidden="true"
    />
    <slot />
  </li>
</template>
