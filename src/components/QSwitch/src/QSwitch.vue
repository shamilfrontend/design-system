<script setup lang="ts">
import { computed, inject, watch } from 'vue';

import type { QFormItemProvider, QFormProvider } from '@/components';

import type { ClassValue, Nullable } from '#/helpers';

import type { QSwitchTabIndexType, QSwitchEmitValueType } from './types';

defineOptions({
  name: 'QSwitch'
});

const props = defineProps({
  /**
   * default to v-model
   */
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  /**
   * value for active QSwitch state
   */
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  /**
   * value for inactive QSwitch state
   */
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  /**
   * whether QSwitch is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * whether to show loader inside the QSwitch
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * validate parent form if present
   */
  validateEvent: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: QSwitchEmitValueType];
  change: [value: QSwitchEmitValueType];
}>();

const qFormItem = inject<Nullable<QFormItemProvider>>('qFormItem', null);
const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const isChecked = computed<boolean>(
  () => props.modelValue === props.activeValue
);

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const tabIndex = computed<QSwitchTabIndexType>(() => (props.disabled ? -1 : 0));

const classes = computed<ClassValue>(() => ({
  'q-switch_active': isChecked.value,
  'q-switch_disabled': isDisabled.value,
  'q-switch_loading': Boolean(props.loading)
}));

function emitChange(value: QSwitchEmitValueType): void {
  emit('update:modelValue', value);
  emit('change', value);
}

function handleSwitcherChange(): void {
  if (props.disabled || props.loading) return;

  const value = isChecked.value ? props.inactiveValue : props.activeValue;

  emitChange(value);
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) qFormItem?.validateField('change');
  }
);
</script>

<template>
  <label
    class="q-switch"
    :class="classes"
    role="switch"
    :tabindex="tabIndex"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled || undefined"
    :aria-busy="loading || undefined"
    @keyup.enter="handleSwitcherChange"
    @keyup.space.prevent="handleSwitcherChange"
    @click.prevent="handleSwitcherChange"
  >
    <input
      class="q-switch__checkbox"
      type="checkbox"
      :checked="isChecked"
      tabindex="-1"
      aria-hidden="true"
    />
    <div class="q-switch__wrapper">
      <div class="q-switch__handle">
        <div
          v-if="loading"
          class="q-icon-reverse"
          aria-hidden="true"
        />
      </div>
    </div>
  </label>
</template>
