<script setup lang="ts">
import { isNil } from 'lodash-es';
import { computed, PropType } from 'vue';

import {
  CLEAR_ALL_EVENT,
  CLEAR_EVENT,
  ABORT_EVENT
} from '@/qComponents/constants/events';
import { t } from '@/qComponents/locale';
import { QButton } from '@/qComponents/QButton';

import type { Nullable } from '#/helpers';

import type { QUploadFile } from '../types';

import type { QUploadFileMultiplePropValue } from './types';

defineOptions({
  name: 'QUploadFileMultiple',
  componentName: 'QUploadFileMultiple'
});

const props = defineProps({
  value: {
    type: Array as PropType<QUploadFileMultiplePropValue>,
    default: null
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isClearable: {
    type: Boolean,
    default: true
  },
  textUploadedFiles: {
    type: String,
    default: null
  }
});

const emit = defineEmits<{
  'clear-all': [];
  clear: [fileId: string];
  abort: [fileId: string];
}>();

const title = computed<string>(
  () => props.textUploadedFiles ?? t('QUpload.uploadedFiles')
);

function calcBarStyle(loading: Nullable<number>): Record<string, string> {
  let progress = loading ?? null;

  if (progress === null) return {};

  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  return {
    width: `${progress}%`
  };
}

const fileList = computed<
  {
    file: QUploadFile;
    isLoading: boolean;
    barStyle: Record<string, string>;
  }[]
>(() => {
  if (!props.value) return [];

  return props.value.filter(Boolean).map(file => ({
    file,
    isLoading: !isNil(file.loading),
    barStyle: calcBarStyle(file.loading)
  }));
});

const classes = computed<Record<string, boolean>>(() => ({
  'q-upload-file-multiple_shown': Boolean(fileList.value.length)
}));

const handleRemoveAllFilesBtnClick = (): void => {
  emit(CLEAR_ALL_EVENT);
};

const handleRemoveFileBtnClick = (fileId: string): void => {
  emit(CLEAR_EVENT, fileId);
};

const handleAbortUploadingBtnClick = (fileId: string): void => {
  emit(ABORT_EVENT, fileId);
};
</script>

<template>
  <div
    class="q-upload-file-multiple"
    :class="classes"
  >
    <div class="q-upload-file-multiple__title">
      {{ title }}

      <q-button
        v-if="isClearable"
        class="q-upload-file-multiple__clear-all"
        circle
        type="icon"
        icon="q-icon-trash-bin"
        size="small"
        theme="secondary"
        :disabled="isDisabled"
        @click="handleRemoveAllFilesBtnClick"
      />
    </div>

    <q-scrollbar
      visible
      view-class="q-dialog__view"
    >
      <div class="q-upload-file-multiple__inner">
        <div
          v-for="line in fileList"
          :key="line.file.id"
          class="q-upload-file-multiple__line"
          :title="line.file.name"
        >
          <div
            class="q-upload-file-multiple__icon"
            :class="{
              'q-icon-reverse': line.isLoading,
              'q-icon-file': !line.isLoading
            }"
          />
          <div class="q-upload-file-multiple__name">
            {{ line.file.name }}

            <div
              v-if="line.isLoading"
              class="q-upload-file-multiple__loader"
            >
              <div
                class="q-upload-file-multiple__bar"
                :style="line.barStyle"
              ></div>
            </div>
          </div>

          <div
            v-if="isDisabled"
            class="q-upload-file-multiple__action q-icon-lock"
          ></div>
          <button
            v-else-if="line.isLoading"
            type="button"
            class="q-upload-file-multiple__action q-icon-close"
            @click="handleAbortUploadingBtnClick(line.file.id)"
          />
          <button
            v-else-if="isClearable"
            type="button"
            class="q-upload-file-multiple__action q-icon-trash-bin"
            @click="handleRemoveFileBtnClick(line.file.id)"
          />
        </div>
      </div>
    </q-scrollbar>
  </div>
</template>
