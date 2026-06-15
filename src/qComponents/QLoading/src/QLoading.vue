<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/qComponents/helpers';

import type { QLoadingPropSize, QLoadingPropText } from './types';

defineOptions({
  name: 'QLoading',
});

const props = defineProps({
  size: {
    type: String as PropType<QLoadingPropSize>,
    default: 'medium',
    validator: validateArray<QLoadingPropSize>(['small', 'medium', 'large'])
  },
  text: {
    type: String as PropType<QLoadingPropText>,
    default: null
  }
});

const spinnerClass = computed<string>(() => `q-loading__spinner_size_${props.size}`);
</script>

<template>
  <div
    class="q-loading"
    role="status"
    aria-live="polite"
  >
    <span
      class="q-loading__spinner q-icon-reverse"
      :class="spinnerClass"
      aria-hidden="true"
    />
    <span
      v-if="text"
      class="q-loading__text"
    >
      {{ text }}
    </span>
  </div>
</template>
