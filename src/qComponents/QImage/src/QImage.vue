<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType, StyleValue } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import { QDialogModal } from '@/qComponents/QDialog';

import type {
  QImagePropAlt,
  QImagePropFit,
  QImagePropHeight,
  QImagePropLazy,
  QImagePropPreview,
  QImagePropSrc,
  QImagePropWidth
} from './types';

defineOptions({
  name: 'QImage',
  componentName: 'QImage'
});

const props = defineProps({
  src: {
    type: String as PropType<QImagePropSrc>,
    required: true
  },
  alt: {
    type: String as PropType<QImagePropAlt>,
    default: ''
  },
  fit: {
    type: String as PropType<QImagePropFit>,
    default: 'cover',
    validator: validateArray<QImagePropFit>([
      'fill',
      'contain',
      'cover',
      'none',
      'scale-down'
    ])
  },
  lazy: {
    type: Boolean as PropType<QImagePropLazy>,
    default: false
  },
  preview: {
    type: Boolean as PropType<QImagePropPreview>,
    default: false
  },
  width: {
    type: [String, Number] as PropType<QImagePropWidth>,
    default: null
  },
  height: {
    type: [String, Number] as PropType<QImagePropHeight>,
    default: null
  }
});

const hasError = ref<boolean>(false);
const previewVisible = ref<boolean>(false);

const imageStyle = computed<StyleValue>(() => {
  const style: Record<string, string> = {
    objectFit: props.fit
  };

  if (props.width != null) {
    style.width =
      typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  if (props.height != null) {
    style.height =
      typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  return style;
});

const classList = computed<Record<string, boolean>>(() => ({
  'q-image_previewable': props.preview && !hasError.value
}));

function handleError(): void {
  hasError.value = true;
}

function openPreview(): void {
  if (props.preview && !hasError.value) {
    previewVisible.value = true;
  }
}
</script>

<template>
  <div
    class="q-image"
    :class="classList"
    @click="openPreview"
  >
    <img
      v-if="!hasError"
      :src="src"
      :alt="alt"
      class="q-image__img"
      :style="imageStyle"
      :loading="lazy ? 'lazy' : 'eager'"
      @error="handleError"
    />
    <div
      v-else
      class="q-image__fallback"
    >
      <slot name="error">
        <span
          class="q-icon-info-fill q-image__fallback-icon"
          aria-hidden="true"
        />
      </slot>
    </div>

    <q-dialog-modal
      v-if="preview"
      v-model="previewVisible"
      width="auto"
      :show-close="true"
    >
      <img
        :src="src"
        :alt="alt"
        class="q-image__preview"
      />
    </q-dialog-modal>
  </div>
</template>
