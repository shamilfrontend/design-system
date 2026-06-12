<script setup lang="ts">
import { isNumber, isEmpty } from 'lodash-es';
import { inject, computed } from 'vue';

import { t } from '@/qComponents/locale';
import { QInput } from '@/qComponents/QInput';

import findFullPath from '../helpers/findFullPath';
import type { QCascaderProvider } from '../types';

defineOptions({
  name: 'QCascaderInput',
  componentName: 'QCascaderInput'
});

const qCascader = inject<QCascaderProvider>(
  'qCascader',
  {} as QCascaderProvider
);

const value = computed(() => {
  const modelValue = qCascader.modelValue.value;

  if (Array.isArray(modelValue)) return null;

  const fullPath = findFullPath(qCascader.options.value, modelValue);
  if (!fullPath) return null;

  if (!qCascader.allLevelsShown.value) return fullPath[fullPath.length - 1];

  const separator = qCascader.separator.value ?? ' ';
  return fullPath.join(separator);
});

const hasValue = computed<boolean>(
  () =>
    isNumber(qCascader.modelValue.value) || !isEmpty(qCascader.modelValue.value)
);

const placeholder = computed(() => {
  const text = qCascader.placeholder.value ?? t('QCascader.placeholder');
  if (!qCascader.multiple.value) return text;
  return hasValue.value ? null : text;
});

const isClearBtnShown = computed<boolean>(
  () =>
    Boolean(qCascader.clearable.value) &&
    !qCascader.disabled.value &&
    hasValue.value
);

const arrowIconClass = computed<string>(() =>
  qCascader.isDropdownShown.value ? 'q-cascader-input__icon-arrow_reverse' : ''
);

const disabled = qCascader.disabled;

function clearValue(): void {
  qCascader.updateValue(null);
}
</script>

<template>
  <div
    :id="qCascader.uniqueId"
    class="q-cascader-input"
    :aria-expanded="qCascader.isDropdownShown.value"
    aria-haspopup="listbox"
    :aria-disabled="disabled || undefined"
  >
    <q-input
      ref="input"
      :model-value="value"
      type="text"
      readonly
      :placeholder="placeholder"
      :disabled="disabled"
      :validate-event="false"
      @keyup.backspace="clearValue"
    >
      <template #suffix>
        <span
          v-if="isClearBtnShown"
          class="q-cascader-input__icon-close q-input__icon q-icon-close"
          aria-hidden="true"
          @click.stop="clearValue"
        />
        <span
          class="q-cascader-input__icon-arrow q-input__icon q-icon-triangle-down"
          :class="arrowIconClass"
          aria-hidden="true"
        />
      </template>
    </q-input>
  </div>
</template>
