<script setup lang="ts">
import { isNil } from 'lodash-es';
import { computed, inject, nextTick, ref, watch, useSlots } from 'vue';
import type { Ref } from 'vue';

import { getConfig } from '@/qComponents/config';
import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable } from '#/helpers';

defineOptions({
  name: 'QInputNumber',
  inheritAttrs: false
});

const MIN_INTEGER = Number(String(Number.MIN_SAFE_INTEGER).slice(0, -2));
const MAX_INTEGER = Number(String(Number.MAX_SAFE_INTEGER).slice(0, -2));

const props = defineProps({
  /** Input value */
  modelValue: {
    type: Number,
    default: null
  },

  /** Number of digits after decimal separator */
  precision: {
    type: Number,
    default: null,
    validator: (val: number) => val >= 0 && val <= 20
  },

  /** Disabled status */
  disabled: {
    type: Boolean,
    default: false
  },

  /** Minimum allowed value. Must be less than maximum value */
  min: {
    type: Number,
    default: -90071992547409,
    validator: (val: number): boolean => val >= -90071992547409
  },

  /** Maximum allowed value. Must be higher than minimum value */
  max: {
    type: Number,
    default: 90071992547409,
    validator: (val: number): boolean => val <= 90071992547409
  },

  /** Text before main value in blurred state of the input */
  prefix: {
    type: String,
    default: null
  },

  /** Text after main value in blurred state of the input */
  suffix: {
    type: String,
    default: null
  },

  /** validate parent form if present */
  validateEvent: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: Nullable<number>];
  change: [value: Nullable<number>];
  input: [value: Nullable<number>];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
}>();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);
const qFormItem = inject<
  Nullable<QFormItemProvider & { errorMessage?: Ref<Nullable<string>> }>
>('qFormItem', null);
const inputRef = ref<Nullable<HTMLInputElement>>(null);
const slots = useSlots();

const precision = computed<number>(() => Math.max(props.precision ?? 0, 0));

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isInvalid = computed<boolean>(() =>
  Boolean(qFormItem?.errorMessage?.value)
);

const isPostfixVisible = computed<boolean>(() =>
  Boolean(isDisabled.value || slots.postfix)
);

let internalValue: Nullable<string> = null;

function formatNumber(value: Nullable<string>): string {
  if (!value) return '';

  const locale = getConfig('locale');

  const localizedNumber = Number(value).toLocaleString(locale, {
    maximumFractionDigits: precision.value
  });

  const prefix = props.prefix ?? '';
  const suffix = props.suffix ?? '';

  return `${prefix} ${localizedNumber} ${suffix}`.trim();
}

function changesEmitter(type: 'input' | 'change', value: string): void {
  const emittedValue =
    value && !Number.isNaN(Number(value)) ? Number(value) : null;

  if (props.modelValue === emittedValue) return;

  emit('update:modelValue', emittedValue);
  if (type === 'input') {
    emit('input', emittedValue);
  } else {
    emit('change', emittedValue);
  }
  if (props.validateEvent) qFormItem?.validateField(type);
}

function getValueMatchRegExp({ matchEnd }: { matchEnd: boolean }): RegExp {
  const signPattern = (props.min ?? MIN_INTEGER) < 0 ? '-?' : '';
  const integerPattern = '[0-9]*';
  const fractionPattern =
    precision.value > 0 ? `[.,]?[0-9]{0,${precision.value}}` : '';
  const endPattern = matchEnd ? '$' : '';

  return new RegExp(
    `^${signPattern}${integerPattern}${fractionPattern}${endPattern}`
  );
}

function matchValue(value: string): string {
  const cleanValue = value
    .replace(/[^0-9,.-]/g, '')
    .replace(/-{2,}/g, '-')
    .replace(',', '.');
  const match = cleanValue.match(getValueMatchRegExp({ matchEnd: false }));

  return cleanValue && match ? String(Number(match[0])) : '';
}

function testValue(value: string): boolean {
  const hasIncorrectCombination = /^(--|(-?(0{2,}|0[1-9])))/.test(value);

  return (
    !hasIncorrectCombination &&
    getValueMatchRegExp({ matchEnd: true }).test(value)
  );
}

function getClampedValue(value: string): string {
  const min = props.min ?? MIN_INTEGER;
  const max = props.max ?? MAX_INTEGER;

  if (!value) return '';
  if (Number(value) < min) return String(min);
  if (Number(value) > max) return String(max);
  return value;
}

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement;

  if (event instanceof InputEvent && event.inputType === 'insertFromPaste') {
    internalValue = getClampedValue(matchValue(target.value));
    target.value = internalValue;
  } else {
    if (testValue(target.value)) {
      internalValue = getClampedValue(target.value);
    }
    target.value = internalValue ?? '';
  }

  if (Number.isNaN(Number(target.value))) return;

  changesEmitter('input', target.value);
}

function handleChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  target.value = matchValue(target.value);
  changesEmitter('change', target.value);
}

function handleFocus(event: FocusEvent): void {
  const target = event.target as HTMLInputElement;
  internalValue = isNil(props.modelValue)
    ? target.value
    : getClampedValue(matchValue(String(props.modelValue)));
  target.value = internalValue;
  emit('focus', event);
  if (props.validateEvent) qFormItem?.validateField('focus');
}

function handleBlur(event: FocusEvent): void {
  const target = event.target as HTMLInputElement;
  target.value = formatNumber(target.value);
  internalValue = null;
  emit('blur', event);
  if (props.validateEvent) qFormItem?.validateField('blur');
}

watch(
  () => props.modelValue,
  async value => {
    await nextTick();

    const input = inputRef.value;
    if (!input) return;

    if (isNil(value)) {
      internalValue = '';
      input.value = internalValue;
      return;
    }

    if (!internalValue || value !== Number(internalValue)) {
      internalValue = getClampedValue(matchValue(String(value)));
      input.value = formatNumber(internalValue);
    }
  },
  { immediate: true }
);
</script>

<template>
  <div class="q-input-number">
    <input
      v-bind="$attrs"
      ref="inputRef"
      :disabled="isDisabled"
      :aria-disabled="isDisabled || undefined"
      :aria-invalid="isInvalid || undefined"
      type="text"
      inputMode="numeric"
      class="q-input-number__inner"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <div
      v-if="isPostfixVisible"
      class="q-input-number__postfix"
    >
      <span
        v-if="isDisabled"
        class="q-input-number__icon q-icon-lock"
        aria-hidden="true"
      />
      <slot
        v-else
        name="postfix"
      />
    </div>
  </div>
</template>
