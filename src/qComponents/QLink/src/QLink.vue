<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type {
  QLinkPropDisabled,
  QLinkPropHref,
  QLinkPropTarget,
  QLinkPropType,
  QLinkPropUnderline
} from './types';

defineOptions({
  name: 'QLink',
  inheritAttrs: false
});

const props = defineProps({
  type: {
    type: String as PropType<QLinkPropType>,
    default: 'default',
    validator: validateArray<QLinkPropType>([
      'default',
      'primary',
      'success',
      'warning',
      'danger'
    ])
  },
  underline: {
    type: Boolean as PropType<QLinkPropUnderline>,
    default: true
  },
  disabled: {
    type: Boolean as PropType<QLinkPropDisabled>,
    default: false
  },
  href: {
    type: String as PropType<QLinkPropHref>,
    default: null
  },
  target: {
    type: String as PropType<QLinkPropTarget>,
    default: '_self'
  }
});

const isExternal = computed<boolean>(() => Boolean(props.href));

const classList = computed<Record<string, boolean>>(() => ({
  [`q-link_type_${props.type}`]: true,
  'q-link_underline': props.underline,
  'q-link_disabled': props.disabled
}));
</script>

<template>
  <a
    v-if="isExternal"
    class="q-link"
    :class="classList"
    :href="disabled ? undefined : href ?? undefined"
    :target="target"
    :aria-disabled="disabled || undefined"
    v-bind="$attrs"
    @click="disabled ? $event.preventDefault() : undefined"
  >
    <slot />
  </a>
  <span
    v-else
    class="q-link q-link_native"
    :class="classList"
    :aria-disabled="disabled || undefined"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>
