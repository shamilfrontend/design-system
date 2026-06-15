<script setup lang="ts">
import type { PropType } from 'vue';

defineOptions({
  name: 'QStatistic',
});

defineProps({
  title: { type: String, default: null },
  value: { type: [String, Number], default: 0 },
  prefix: { type: String, default: null },
  suffix: { type: String, default: null },
  precision: { type: Number, default: null },
  valueStyle: {
    type: Object as PropType<Record<string, string>>,
    default: (): Record<string, string> => ({})
  }
});
</script>

<template>
  <div class="q-statistic">
    <div
      v-if="title"
      class="q-statistic__title"
    >
      {{ title }}
    </div>
    <div
      class="q-statistic__value"
      :style="valueStyle"
    >
      <span
        v-if="prefix"
        class="q-statistic__prefix"
      >{{ prefix }}</span>
      <slot>{{ value }}</slot>
      <span
        v-if="suffix"
        class="q-statistic__suffix"
      >{{ suffix }}</span>
    </div>
  </div>
</template>
