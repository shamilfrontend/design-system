<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  nextTick
} from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { t } from '@/qComponents/locale';
import { QInput } from '@/qComponents/QInput';

import type { Nullable } from '#/helpers';

import type {
  QAutoCompleteOption,
  QAutoCompletePropModelValue,
  QAutoCompletePropOptions
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QAutoComplete',
});

const props = defineProps({
  modelValue: {
    type: String as PropType<QAutoCompletePropModelValue>,
    default: ''
  },
  options: {
    type: Array as PropType<QAutoCompletePropOptions>,
    default: (): QAutoCompletePropOptions => []
  },
  placeholder: {
    type: String,
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  select: [option: QAutoCompleteOption];
}>();

const reference = ref<Nullable<HTMLElement>>(null);
const panel = ref<Nullable<HTMLElement>>(null);
const isVisible = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);

let popperJS: Nullable<Instance> = null;

const placeholderText = computed<string>(
  () => props.placeholder ?? t('QAutoComplete.placeholder')
);

const normalizedOptions = computed<QAutoCompleteOption[]>(() =>
  props.options.map(option =>
    typeof option === 'string' ? { value: option, label: option } : option
  )
);

const filteredOptions = computed<QAutoCompleteOption[]>(() => {
  const query = props.modelValue.trim().toLowerCase();

  if (!query) return normalizedOptions.value;

  return normalizedOptions.value.filter(option =>
    (option.label ?? option.value).toLowerCase().includes(query)
  );
});

function handleInput(value: string): void {
  emit('update:modelValue', value);
  isVisible.value = true;
}

function selectOption(option: QAutoCompleteOption): void {
  emit('update:modelValue', option.value);
  emit('select', option);
  isVisible.value = false;
}

async function createPopper(): Promise<void> {
  if (!reference.value || !panel.value) return;

  popperJS = createPopperJs(reference.value, panel.value, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, 4] } }]
  });
}

function destroyPopper(): void {
  popperJS?.destroy();
  popperJS = null;
}

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;

  if (reference.value?.contains(target) || panel.value?.contains(target)) {
    return;
  }

  isVisible.value = false;
}

watch(isVisible, async value => {
  if (value) {
    zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
    await nextTick();
    createPopper();
  } else {
    destroyPopper();
  }
});

onMounted(() => {
  document.addEventListener('click', handleDocumentClick, false);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick, false);
  destroyPopper();
});
</script>

<template>
  <div
    ref="reference"
    class="q-autocomplete"
  >
    <q-input
      :model-value="modelValue"
      :placeholder="placeholderText"
      :disabled="disabled"
      :clearable="clearable"
      @update:model-value="handleInput"
      @focus="isVisible = true"
    />

    <teleport to="body">
      <transition name="q-fade">
        <div
          v-show="isVisible && filteredOptions.length"
          ref="panel"
          class="q-autocomplete__panel"
          :style="{ zIndex }"
        >
          <ul class="q-autocomplete__list">
            <li
              v-for="(option, index) in filteredOptions"
              :key="`${option.value}-${index}`"
              class="q-autocomplete__item"
              @click="selectOption(option)"
            >
              {{ option.label ?? option.value }}
            </li>
          </ul>
        </div>
      </transition>
    </teleport>
  </div>
</template>
