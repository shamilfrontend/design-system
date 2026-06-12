<script setup lang="ts">
import { ref, computed } from 'vue';

import { t } from '@/qComponents/locale';

defineOptions({
  name: 'QUploadDropZone',
  componentName: 'QUploadDropZone'
});

const props = defineProps({
  hasValue: {
    type: Boolean,
    default: false
  },
  isMultiple: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  textUploadFile: {
    type: String,
    default: null
  },
  textReplaceFile: {
    type: String,
    default: null
  },
  textLoadingFile: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['drop']);

const isDragover = ref<boolean>(false);

const classes = computed<Record<string, boolean>>(() => ({
  'q-upload-drop-zone_is-dragover': isDragover.value,
  'q-upload-drop-zone_is-disabled': Boolean(props.isDisabled),
  'q-upload-drop-zone_is-loading': Boolean(props.isLoading)
}));

const icon = computed<string>(() => {
  if (props.isLoading) return 'q-icon-reverse';

  return props.isDisabled ? 'q-icon-lock' : 'q-icon-cloud-upload';
});

const text = computed<string>(() => {
  if (props.isLoading) return props.textLoadingFile ?? t('QUpload.loading');

  const textUploadFile = props.textUploadFile ?? t('QUpload.uploadFile');
  if (props.isMultiple) return textUploadFile;

  return props.hasValue
    ? (props.textReplaceFile ?? t('QUpload.replaceFile'))
    : textUploadFile;
});

function handleDrop(dropEvent: DragEvent): void {
  if (props.isDisabled) return;
  if (isDragover.value) isDragover.value = false;

  emit('drop', dropEvent);
}

function handleDragover(): void {
  if (!props.isDisabled) isDragover.value = true;
}

function handleDragleave(): void {
  isDragover.value = false;
}
</script>

<template>
  <div
    class="q-upload-drop-zone"
    :class="classes"
    tabindex="0"
    @dragenter.prevent
    @drop.prevent="handleDrop"
    @dragover.prevent="handleDragover"
    @dragleave.prevent="handleDragleave"
  >
    <span
      class="q-upload-drop-zone__icon"
      :class="icon"
    />
    <div class="q-upload-drop-zone__text">{{ text }}</div>
  </div>
</template>
