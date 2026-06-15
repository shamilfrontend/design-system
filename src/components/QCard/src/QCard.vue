<script setup lang="ts">
import { computed, useSlots } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';

import type {
  QCardPropShadow,
  QCardPropTitle,
  QCardPropBodyPadding
} from './types';

defineOptions({
  name: 'QCard'
});

const props = defineProps({
  /**
   * card shadow display mode
   */
  shadow: {
    type: String as PropType<QCardPropShadow>,
    default: 'always',
    validator: validateArray<'always' | 'hover' | 'never'>([
      'always',
      'hover',
      'never'
    ])
  },
  /**
   * card title
   */
  title: {
    type: String as PropType<QCardPropTitle>,
    default: null
  },
  /**
   * whether body has default padding
   */
  bodyPadding: {
    type: Boolean as PropType<QCardPropBodyPadding>,
    default: true
  }
});

const slots = useSlots();

const hasHeader = computed<boolean>(
  () => Boolean(props.title) || Boolean(slots.header)
);
</script>

<template>
  <div
    class="q-card"
    :class="`q-card_shadow_${shadow}`"
  >
    <div
      v-if="hasHeader"
      class="q-card__header"
    >
      <slot name="header">
        {{ title }}
      </slot>
    </div>

    <div
      class="q-card__body"
      :class="{ 'q-card__body_no-padding': !bodyPadding }"
    >
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="q-card__footer"
    >
      <slot name="footer" />
    </div>
  </div>
</template>
