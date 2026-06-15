<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type { QTitlePropLevel } from './types';

defineOptions({ name: 'QTitle'});
const props = defineProps({
  level: {
    type: Number as PropType<QTitlePropLevel>,
    default: 2,
    validator: validateArray<QTitlePropLevel>([1, 2, 3, 4, 5, 6])
  }
});
const tag = computed(() => `h${props.level}`);
</script>
<template>
  <component :is="tag" class="q-title" :class="`q-title_level_${level}`"><slot /></component>
</template>
