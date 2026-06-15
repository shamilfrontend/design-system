<script setup lang="ts">
import { isNil } from 'lodash-es';
import { inject, ref, computed } from 'vue';
import type { PropType } from 'vue';

import type { QFormProvider } from '@/components/QForm';
import { validateArray, randId } from '@/helpers';

import type { Nullable } from '#/helpers';

import QUploadDropZone from './QUploadDropZone';
import QUploadFileMultiple from './QUploadFileMultiple';
import QUploadFileSingle from './QUploadFileSingle';
import type {
  QUploadFile,
  QUploadPropValue,
  QUploadPropDirection,
  QUploadPropAccept
} from './types';

defineOptions({
  name: 'QUpload'
});

const props = defineProps({
  value: {
    type: [Object, Array] as PropType<QUploadPropValue>,
    default: null
  },
  /**
   * whether uploading multiple files is permitted
   */
  multiple: {
    type: Boolean,
    default: false
  },
  /**
   * direction to show the file list
   */
  direction: {
    type: String as PropType<QUploadPropDirection>,
    default: 'right',
    validator: validateArray(['right', 'bottom'])
  },
  /**
   * maximum number of uploads allowed
   */
  limit: {
    type: Number,
    default: null
  },
  /**
   * the accept attribute value is a string or an array that defines the file types the file input should accept.
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers
   */
  accept: {
    type: [String, Array] as PropType<QUploadPropAccept>,
    default: () => []
  },
  /**
   * whether to disable upload
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: true
  },
  /**
   * whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true
  },
  /**
   * used to change 'upload file' text
   */
  textUploadFile: {
    type: String,
    default: null
  },
  /**
   * used to change 'replace file' text
   */
  textReplaceFile: {
    type: String,
    default: null
  },
  /**
   * used to change 'loading file' text
   */
  textLoadingFile: {
    type: String,
    default: null
  },
  /**
   * used to change 'uploaded files' text
   */
  textUploadedFiles: {
    type: String,
    default: null
  }
});

const emit = defineEmits<{
  'clear-all': [];
  clear: [fileId?: string];
  abort: [fileId?: string];
  select: [sourceFile: File, fileId: string];
  exceed: [];
  'select-all': [preparedFileList: { id: string; sourceFile: File }[]];
}>();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const hasValue = computed<boolean>(() =>
  props.multiple
    ? Boolean(Array.isArray(props.value) && props.value.length)
    : props.value !== null
);

const classes = computed<Record<string, boolean>>(() => {
  const isMultiple = Boolean(props.multiple);

  return {
    'q-upload': true,
    'q-upload_multiple': isMultiple,
    [`q-upload_multiple_open-${props.direction}`]:
      isMultiple && Boolean(Array.isArray(props.value) && props.value.length)
  };
});

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isLoading = computed<boolean>(
  () =>
    !props.multiple &&
    !isNil(!Array.isArray(props.value) ? props.value?.loading : null)
);

const fileInput = ref<Nullable<HTMLInputElement>>(null);

const handleUploadClick = (): void => {
  if (isDisabled.value || isLoading.value) return;

  const input = fileInput.value;
  if (!input) return;
  input.value = '';
  input.click();
};

const resetNativeInput = (): void => {
  if (fileInput.value) fileInput.value.value = '';
};

const handleClearAll = (): void => {
  resetNativeInput();
  emit('clear-all');
};

const handleClear = (fileId?: string): void => {
  resetNativeInput();
  emit('clear', fileId);
};

const handleAbort = (fileId?: string): void => {
  resetNativeInput();
  emit('abort', fileId);
};

const processFile = (fileList: Nullable<FileList>): void => {
  if (isDisabled.value) return;

  if (!fileList) return;

  if (!props.multiple) {
    const sourceFile = fileList[0];
    if (sourceFile) emit('select', sourceFile, randId());
    return;
  }

  if (
    props.limit &&
    Array.isArray(props.value) &&
    props.value.length + fileList.length > props.limit
  ) {
    emit('exceed');
    return;
  }

  const preparedFileList = Array.from(fileList).map(sourceFile => {
    const fileId = randId();
    emit('select', sourceFile, fileId);

    return { id: fileId, sourceFile };
  });
  emit('select-all', preparedFileList);
};

const handleFileDrop = ({ dataTransfer }: DragEvent): void => {
  const fileList = dataTransfer?.files ?? null;
  processFile(fileList);
};

const handleFileChange = ({ target }: Event): void => {
  const fileList = (target as HTMLInputElement)?.files;
  processFile(fileList);
};

const multipleValue = computed<QUploadFile[]>(() =>
  props.multiple && Array.isArray(props.value) ? props.value : []
);

const singleValue = computed(() =>
  !props.multiple && props.value && !Array.isArray(props.value)
    ? { name: props.value.name, loading: props.value.loading ?? undefined }
    : null
);
</script>

<template>
  <div :class="classes">
    <q-upload-drop-zone
      :has-value="hasValue"
      :is-multiple="multiple"
      :is-disabled="isDisabled"
      :is-loading="isLoading"
      :text-upload-file="textUploadFile"
      :text-replace-file="textReplaceFile"
      :text-loading-file="textLoadingFile"
      @drop="handleFileDrop"
      @click="handleUploadClick"
      @keyup.enter="handleUploadClick"
    />

    <input
      ref="fileInput"
      class="q-upload__input"
      type="file"
      tabindex="-1"
      :accept="accept?.toString()"
      :multiple="multiple"
      @change="handleFileChange"
    />

    <q-upload-file-multiple
      v-if="multiple"
      :value="multipleValue"
      :is-disabled="isDisabled"
      :is-clearable="clearable"
      :text-uploaded-files="textUploadedFiles"
      @clear-all="handleClearAll"
      @clear="handleClear"
      @abort="handleAbort"
    />
    <template v-else>
      <q-upload-file-single
        v-if="singleValue"
        :value="singleValue"
        :is-loading="isLoading"
        :is-disabled="isDisabled"
        :is-clearable="clearable"
        @clear="handleClear"
        @abort="handleAbort"
      />
    </template>
  </div>
</template>
