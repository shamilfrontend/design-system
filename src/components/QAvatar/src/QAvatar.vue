<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

import { validateArray } from '@/helpers';

import type {
  QAvatarPropAlt,
  QAvatarPropShape,
  QAvatarPropSize,
  QAvatarPropSrc
} from './types';

defineOptions({
  name: 'QAvatar'
});

const props = defineProps({
  size: {
    type: String as PropType<QAvatarPropSize>,
    default: 'medium',
    validator: validateArray<QAvatarPropSize>(['small', 'medium', 'large'])
  },
  shape: {
    type: String as PropType<QAvatarPropShape>,
    default: 'circle',
    validator: validateArray<QAvatarPropShape>(['circle', 'square'])
  },
  src: {
    type: String as PropType<QAvatarPropSrc>,
    default: null
  },
  alt: {
    type: String as PropType<QAvatarPropAlt>,
    default: null
  }
});

const hasError = ref<boolean>(false);

const classList = computed<Record<string, boolean>>(() => ({
  [`q-avatar_size_${props.size}`]: true,
  [`q-avatar_shape_${props.shape}`]: true
}));

const showImage = computed<boolean>(
  () => Boolean(props.src) && !hasError.value
);

function handleError(): void {
  hasError.value = true;
}
</script>

<template>
  <span
    class="q-avatar"
    :class="classList"
    role="img"
    :aria-label="alt ?? undefined"
  >
    <img
      v-if="showImage"
      :src="src ?? undefined"
      :alt="alt ?? ''"
      class="q-avatar__img"
      @error="handleError"
    />
    <span
      v-else
      class="q-avatar__fallback"
    >
      <slot />
    </span>
  </span>
</template>
