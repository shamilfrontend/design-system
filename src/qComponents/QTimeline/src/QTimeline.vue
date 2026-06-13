<script setup lang="ts">
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type { QTimelinePropItems, QTimelinePropMode } from './types';

defineOptions({
  name: 'QTimeline',
  componentName: 'QTimeline'
});

defineProps({
  items: {
    type: Array as PropType<QTimelinePropItems>,
    default: (): QTimelinePropItems => []
  },
  mode: {
    type: String as PropType<QTimelinePropMode>,
    default: 'left',
    validator: validateArray<QTimelinePropMode>(['left', 'alternate', 'right'])
  }
});
</script>

<template>
  <ul
    class="q-timeline"
    :class="`q-timeline_mode_${mode}`"
  >
    <li
      v-for="(item, index) in items"
      :key="index"
      class="q-timeline__item"
      :class="item.type ? `q-timeline__item_type_${item.type}` : null"
    >
      <div class="q-timeline__dot" />
      <div class="q-timeline__content">
        <div
          v-if="item.timestamp"
          class="q-timeline__timestamp"
        >
          {{ item.timestamp }}
        </div>
        <div class="q-timeline__title">{{ item.title }}</div>
        <div
          v-if="item.content"
          class="q-timeline__text"
        >
          {{ item.content }}
        </div>
      </div>
    </li>
  </ul>
</template>
