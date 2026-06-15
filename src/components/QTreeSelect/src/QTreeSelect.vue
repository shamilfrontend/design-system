<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/components/config';
import { QTree, type QTreeNode } from '@/components/QTree';
import { t } from '@/locale';

import type { Nullable } from '#/helpers';

import type {
  QTreeSelectPropCheckStrictly,
  QTreeSelectPropClearable,
  QTreeSelectPropData,
  QTreeSelectPropDisabled,
  QTreeSelectPropModelValue,
  QTreeSelectPropMultiple,
  QTreeSelectPropPlaceholder
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QTreeSelect'
});

const props = defineProps({
  modelValue: {
    type: [String, Number, Array] as PropType<QTreeSelectPropModelValue>,
    default: null
  },
  data: {
    type: Array as PropType<QTreeSelectPropData>,
    default: (): QTreeSelectPropData => []
  },
  multiple: {
    type: Boolean as PropType<QTreeSelectPropMultiple>,
    default: false
  },
  placeholder: {
    type: String as PropType<QTreeSelectPropPlaceholder>,
    default: null
  },
  disabled: {
    type: Boolean as PropType<QTreeSelectPropDisabled>,
    default: false
  },
  clearable: {
    type: Boolean as PropType<QTreeSelectPropClearable>,
    default: true
  },
  checkStrictly: {
    type: Boolean as PropType<QTreeSelectPropCheckStrictly>,
    default: false
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: QTreeSelectPropModelValue];
  change: [value: QTreeSelectPropModelValue];
}>();

const reference = ref<Nullable<HTMLElement>>(null);
const panel = ref<Nullable<HTMLElement>>(null);
const isOpen = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);

let popperJS: Nullable<Instance> = null;

const placeholderText = computed<string>(
  () => props.placeholder ?? t('QTreeSelect.placeholder')
);

function findNodeLabel(nodes: QTreeNode[], id: string | number): string | null {
  for (const node of nodes) {
    if (node.id === id) return node.label;

    if (node.children?.length) {
      const found = findNodeLabel(node.children, id);

      if (found) return found;
    }
  }

  return null;
}

const displayText = computed<string>(() => {
  if (props.modelValue == null || props.modelValue === '') {
    return placeholderText.value;
  }

  if (props.multiple && Array.isArray(props.modelValue)) {
    if (!props.modelValue.length) return placeholderText.value;

    return props.modelValue
      .map(id => findNodeLabel(props.data, id) ?? String(id))
      .join(', ');
  }

  if (!Array.isArray(props.modelValue)) {
    return (
      findNodeLabel(props.data, props.modelValue) ?? String(props.modelValue)
    );
  }

  return placeholderText.value;
});

const hasValue = computed<boolean>(() => {
  if (Array.isArray(props.modelValue)) return props.modelValue.length > 0;

  return props.modelValue != null && props.modelValue !== '';
});

function handleSelect(node: QTreeNode): void {
  if (node.disabled) return;

  if (props.multiple) {
    const current = Array.isArray(props.modelValue)
      ? [...props.modelValue]
      : [];
    const index = current.indexOf(node.id);

    if (index >= 0) {
      current.splice(index, 1);
    } else {
      current.push(node.id);
    }

    emit('update:modelValue', current);
    emit('change', current);

    return;
  }

  emit('update:modelValue', node.id);
  emit('change', node.id);
  isOpen.value = false;
}

function clearValue(event: MouseEvent): void {
  event.stopPropagation();
  const value = props.multiple ? [] : null;
  emit('update:modelValue', value);
  emit('change', value);
}

function togglePanel(): void {
  if (props.disabled) return;

  isOpen.value = !isOpen.value;
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

  isOpen.value = false;
}

watch(isOpen, async value => {
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
    class="q-tree-select"
    :class="{
      'q-tree-select_disabled': disabled,
      'q-tree-select_open': isOpen,
      'q-tree-select_has-value': hasValue
    }"
  >
    <div
      class="q-tree-select__trigger"
      @click="togglePanel"
    >
      <span
        class="q-tree-select__label"
        :class="{ 'q-tree-select__label_placeholder': !hasValue }"
      >
        {{ displayText }}
      </span>
      <span class="q-tree-select__suffix">
        <span
          v-if="clearable && hasValue && !disabled"
          class="q-icon-close q-tree-select__clear"
          aria-hidden="true"
          @click="clearValue"
        />
        <span
          class="q-icon-arrow-down q-tree-select__arrow"
          :class="{ 'q-tree-select__arrow_open': isOpen }"
          aria-hidden="true"
        />
      </span>
    </div>

    <teleport to="body">
      <transition name="q-fade">
        <div
          v-show="isOpen"
          ref="panel"
          class="q-tree-select__panel"
          :style="{ zIndex }"
        >
          <q-tree
            :data="data"
            :default-expand-all="false"
            @select="handleSelect"
          />
        </div>
      </transition>
    </teleport>
  </div>
</template>
