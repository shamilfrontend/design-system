<script setup lang="ts">
import type { Instance } from '@popperjs/core';
import { inject, ref, computed, provide, toRef, watch, nextTick } from 'vue';
import type { PropType } from 'vue';

import { isServer } from '@/qComponents/constants/isServer';
import { randId } from '@/qComponents/helpers';
import { useResizeListener } from '@/qComponents/hooks';
import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable, UnwrappedInstance } from '#/helpers';

import QCascaderDropdown from './QCascaderDropdown/QCascaderDropdown.vue';
import QCascaderInput from './QCascaderInput/QCascaderInput.vue';
import type { QCascaderInputInstance } from './QCascaderInput/types';
import QCascaderTags from './QCascaderTags/QCascaderTags.vue';
import type {
  QCascaderPropModelValue,
  QCascaderPropOptions,
  QCascaderPropTeleportTo,
  QCascaderProvider
} from './types';

defineOptions({
  name: 'QCascader',
  componentName: 'QCascader'
});

const props = defineProps({
  /**
   * binding value
   */
  modelValue: {
    type: [String, Number, Array] as PropType<QCascaderPropModelValue>,
    default: null
  },
  /**
   * array of objects with required fields, example:
   * `{ value: 'guide', label: 'Guide', disabled: false, children: [{ ... }] }`
   */
  options: {
    type: Array as PropType<QCascaderPropOptions>,
    default: null
  },
  /**
   * whether all path to value in tags is shown
   */
  allLevelsShown: {
    type: Boolean,
    default: true
  },
  /**
   * separator in tags
   */
  separator: {
    type: String,
    default: ' / '
  },
  /**
   * whether QCascader accept multiple values
   */
  multiple: {
    type: Boolean,
    default: false
  },
  /**
   * whether QCascader is clearable
   */
  clearable: {
    type: Boolean,
    default: false
  },
  /**
   * whether QCascader is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * check each value as independent
   */
  checkStrictly: {
    type: Boolean,
    default: false
  },
  /**
   * hide tags in counter
   */
  collapseTags: {
    type: Boolean,
    default: false
  },
  /**
   * as native placeholder
   */
  placeholder: {
    type: String,
    default: null
  },
  /**
   * Specifies a target element where QCascader will be moved.
   * (has to be a valid query selector, or an HTMLElement)
   */
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QCascaderPropTeleportTo>,
    default: null
  }
});

const emit = defineEmits([
  /**
   * triggers when model updates
   */
  'update:modelValue',
  /**
   * alias for update:modelValue
   */
  'change',
  /**
   * triggers when dropdown closes
   */
  'dropdown-close',
  /**
   * triggers when dropdown expands
   */
  'dropdown-expand'
]);

const qForm = inject<Nullable<QFormProvider>>('qForm', null);
const qFormItem = inject<Nullable<QFormItemProvider>>('qFormItem', null);
const reference = ref<UnwrappedInstance<QCascaderInputInstance>>(null);

const popperJS = ref<Nullable<Instance>>(null);
const isDropdownShown = ref<boolean>(false);

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

watch(isDisabled, value => {
  if (value) isDropdownShown.value = false;
});

watch(isDropdownShown, value => {
  if (value) {
    emit('dropdown-expand');
  } else {
    emit('dropdown-close');
  }
});

const rootClasses = computed<Record<string, boolean>>(() => ({
  'q-cascader': true,
  'q-cascader_disabled': isDisabled.value,
  'q-cascader_multiple': Boolean(props.multiple),
  'q-cascader_single': !props.multiple,
  'q-cascader_clearable': Boolean(props.clearable)
}));

function handleReferenceTrigger(): void {
  if (isDisabled.value) return;
  isDropdownShown.value = !isDropdownShown.value;
}

function handleDropdownClose(): void {
  isDropdownShown.value = false;
}

function emitChange(value: QCascaderPropModelValue = null): void {
  emit('update:modelValue', value);
  emit('change', value);

  qFormItem?.validateField('change');
}

function updateValue(
  value: Nullable<string | number | (string | number)[]>,
  isExist?: boolean
): void {
  if (!props.multiple || value === null) {
    emitChange(value);
    return;
  }

  const currentVal =
    Array.isArray(props.modelValue) || props.modelValue === null
      ? props.modelValue
      : [props.modelValue];
  const currentValue = new Set(currentVal);

  const updateCurrentValue = (rowValue: string | number): void => {
    if (isExist) {
      currentValue.delete(rowValue);
    } else {
      currentValue.add(rowValue);
    }
  };

  if (Array.isArray(value)) {
    value.forEach(updateCurrentValue);
  } else {
    updateCurrentValue(value);
  }

  const newValue = Array.from(currentValue);
  emitChange(newValue.length ? newValue : null);
}

provide<QCascaderProvider>('qCascader', {
  isDropdownShown,
  modelValue: toRef(props, 'modelValue'),
  options: toRef(props, 'options'),
  allLevelsShown: toRef(props, 'allLevelsShown'),
  separator: toRef(props, 'separator'),
  disabled: isDisabled,
  multiple: toRef(props, 'multiple'),
  clearable: toRef(props, 'clearable'),
  checkStrictly: toRef(props, 'checkStrictly'),
  collapseTags: toRef(props, 'collapseTags'),
  placeholder: toRef(props, 'placeholder'),
  uniqueId: randId('q-cascader-'),
  popoverReference: reference,
  popperJS,
  updateValue
});

async function updatePopperJs(): Promise<void> {
  if (!popperJS.value) return;

  await nextTick();
  popperJS.value.update();
}

function afterLeave(): void {
  popperJS.value?.destroy();
}

const referenceEl = computed<Nullable<HTMLElement>>(
  () => reference.value?.$el ?? null
);

const referenceElResize = useResizeListener(referenceEl);

watch(referenceElResize.observedEntry, () => {
  updatePopperJs();
});
</script>

<template>
  <div :class="rootClasses">
    <q-cascader-input
      ref="reference"
      @click="handleReferenceTrigger"
      @keyup.enter="handleReferenceTrigger"
    />

    <q-cascader-tags />

    <teleport
      :to="teleportTo || 'body'"
      :disabled="!teleportTo"
    >
      <transition
        name="q-cascader__dropdown_animation"
        @after-leave="afterLeave"
      >
        <q-cascader-dropdown
          v-if="isDropdownShown"
          @close="handleDropdownClose"
        />
      </transition>
    </teleport>
  </div>
</template>
