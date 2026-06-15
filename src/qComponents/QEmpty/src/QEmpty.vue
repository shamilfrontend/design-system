<script setup lang="ts">
import { computed } from 'vue';
import type { PropType, StyleValue } from 'vue';

import image from '@/assets/empty-table-v2.svg';
import { t } from '@/qComponents/locale';

import type { QEmptyPropDescription, QEmptyPropImageSize } from './types';

defineOptions({
  name: 'QEmpty',
});

const props = defineProps({
  description: {
    type: String as PropType<QEmptyPropDescription>,
    default: null
  },
  imageSize: {
    type: Number as PropType<QEmptyPropImageSize>,
    default: 120
  }
});

const descriptionText = computed<string>(
  () => props.description ?? t('QEmpty.description')
);

const imageStyle = computed<StyleValue>(() => ({
  width: `${props.imageSize}px`,
  height: `${props.imageSize}px`
}));
</script>

<template>
  <div class="q-empty">
    <div class="q-empty__image">
      <slot name="image">
        <img
          :src="image"
          class="q-empty__img"
          :style="imageStyle"
          :alt="descriptionText"
        />
      </slot>
    </div>
    <p class="q-empty__description">
      <slot>{{ descriptionText }}</slot>
    </p>
    <div
      v-if="$slots.default"
      class="q-empty__footer"
    >
      <slot />
    </div>
  </div>
</template>
