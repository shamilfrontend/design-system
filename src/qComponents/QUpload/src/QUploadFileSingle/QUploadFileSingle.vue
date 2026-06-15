<script setup lang="ts">
import { computed } from 'vue';

import { CLEAR_EVENT, ABORT_EVENT } from '@/qComponents/constants/events';

defineOptions({
  name: 'QUploadFileSingle',
});

const props = defineProps({
  value: {
    type: Object,
    required: true
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isDisabled: {
    type: Boolean,
    default: false
  },
  isClearable: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  clear: [];
  abort: [];
}>();

const fileName = computed<string>(() => props.value?.name ?? '');

const barStyle = computed<{ width?: string }>(() => {
  let loading = props.value?.loading ?? null;

  if (loading === null) return {};

  if (loading < 0) loading = 0;
  if (loading > 100) loading = 100;

  return {
    width: `${loading}%`
  };
});

const handleRemoveFileBtnClick = (): void => {
  emit(CLEAR_EVENT);
};

const handleAbortUploadingBtnClick = (): void => {
  emit(ABORT_EVENT);
};
</script>

<template>
  <div
    class="q-upload-file-single"
    :title="fileName"
  >
    <div class="q-upload-file-single__icon q-icon-file" />
    <div class="q-upload-file-single__name">{{ fileName }}</div>

    <button
      v-if="isClearable && !isDisabled && !isLoading"
      type="button"
      class="q-upload-file-single__btn q-icon-trash-bin"
      @click="handleRemoveFileBtnClick"
    />

    <template v-if="isLoading">
      <button
        type="button"
        class="q-upload-file-single__btn q-icon-close"
        @click="handleAbortUploadingBtnClick"
      />

      <div class="q-upload-file-single__loader">
        <div
          class="q-upload-file-single__bar"
          :style="barStyle"
        ></div>
      </div>
    </template>
  </div>
</template>
