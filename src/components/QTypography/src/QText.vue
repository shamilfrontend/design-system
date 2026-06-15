<script setup lang="ts">
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';

import type { QTextPropType } from './types';

defineOptions({ name: 'QText' });
defineProps({
  type: {
    type: String as PropType<QTextPropType>,
    default: 'default',
    validator: validateArray<QTextPropType>([
      'default',
      'secondary',
      'success',
      'warning',
      'danger'
    ])
  }
});
</script>
<template>
  <span
    class="q-text"
    :class="`q-text_type_${type}`"
    ><slot
  /></span>
</template>
