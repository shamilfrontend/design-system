<script setup lang="ts">
import { computed } from 'vue';
import type { CSSProperties, PropType } from 'vue';

import type { QSliderBarPropSize } from './types';

defineOptions({
  name: 'QSliderBar'
});

const props = defineProps({
  size: {
    type: String as PropType<QSliderBarPropSize>,
    default: null
  }
});

const barStyle = computed<CSSProperties>(() => ({
  width: props.size ?? undefined
}));
</script>

<template>
  <div
    class="q-slider__bar"
    :style="barStyle"
    aria-hidden="true"
  />
</template>
