<script setup lang="ts">
import { computed } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type { Nullable } from '#/helpers';

import type {
  QIconPropName,
  QIconPropSize,
  QIconPropColor,
  QIconPropSpin,
  QIconPropAriaLabel
} from './types';
import { resolveIconClass } from './utils';

defineOptions({
  name: 'QIcon',
});

const props = defineProps({
  /**
   * icon name with or without `q-icon-` prefix, e.g. `search` or `q-icon-search`
   */
  name: {
    type: String as PropType<QIconPropName>,
    required: true
  },
  /**
   * icon size preset or custom value in pixels
   */
  size: {
    type: [String, Number] as PropType<QIconPropSize>,
    default: 'regular',
    validator: (value: QIconPropSize) => {
      if (value == null) {
        return true;
      }

      if (typeof value === 'number') {
        return value > 0;
      }

      return validateArray<'small' | 'regular' | 'large'>([
        'small',
        'regular',
        'large'
      ])(value);
    }
  },
  /**
   * icon color
   */
  color: {
    type: String as PropType<QIconPropColor>,
    default: null
  },
  /**
   * whether to rotate icon continuously
   */
  spin: {
    type: Boolean as PropType<QIconPropSpin>,
    default: false
  },
  /**
   * accessible label for the icon
   */
  ariaLabel: {
    type: String as PropType<QIconPropAriaLabel>,
    default: null
  }
});

const iconClass = computed<string>(() => resolveIconClass(props.name));

const sizeClass = computed<Nullable<string>>(() =>
  typeof props.size === 'string' ? `q-icon_size_${props.size}` : null
);

const iconStyle = computed<StyleValue>(() => {
  const style: Record<string, string> = {};

  if (typeof props.size === 'number') {
    style.fontSize = `${props.size}px`;
  }

  if (props.color) {
    style.color = props.color;
  }

  return style;
});

const isDecorative = computed<boolean>(() => !props.ariaLabel);
</script>

<template>
  <i
    class="q-icon"
    :class="[iconClass, sizeClass, { 'q-icon_spin': spin }]"
    :style="iconStyle"
    role="img"
    :aria-hidden="isDecorative ? true : undefined"
    :aria-label="ariaLabel ?? undefined"
  />
</template>
