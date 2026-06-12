<script lang="ts">
import { defineComponent, computed } from 'vue';
import type { CSSProperties, PropType } from 'vue';

import type {
  QSliderBarPropSize,
  QSliderBarProps,
  QSliderBarInstance
} from './types';

export default defineComponent({
  name: 'QSliderBar',

  props: {
    size: {
      type: String as PropType<QSliderBarPropSize>,
      default: null
    }
  },

  setup(props: QSliderBarProps): QSliderBarInstance {
    const barStyle = computed<CSSProperties>(() => ({
      width: props.size ?? undefined
    }));

    return {
      barStyle
    };
  }
});
</script>

<template>
  <div
    class="q-slider__bar"
    :style="barStyle"
  />
</template>
