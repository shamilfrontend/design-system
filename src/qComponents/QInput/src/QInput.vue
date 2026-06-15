<script setup lang="ts">
import {
  inject,
  computed,
  ref,
  reactive,
  watch,
  useAttrs,
  useSlots
} from 'vue';
import type { PropType, Ref } from 'vue';

import { t } from '@/qComponents/locale';
import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable, ClassValue, IsArray } from '#/helpers';

import type {
  QInputState,
  QInputPropModelValue,
  QInputPropType,
  QInputPropSize,
  QInputPropDisabled,
  QInputPropShowWordLimit,
  QInputPropValidateEvent,
  QInputPropPrefixIcon,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropShowPassword,
  QInputPropFormatter,
  QInputPropParser
} from './types';

defineOptions({
  name: 'QInput',
  componentName: 'QInput',
  inheritAttrs: false
});

const props = defineProps({
  /**
   * default to v-model
   */
  modelValue: {
    type: String as PropType<QInputPropModelValue>,
    default: ''
  },
  /**
   * native input type
   */
  type: {
    type: String as PropType<QInputPropType>,
    default: 'text'
  },
  /**
   * input size
   */
  size: {
    type: String as PropType<QInputPropSize>,
    default: 'default'
  },
  /**
   * whether input is disabled
   */
  disabled: {
    type: Boolean as PropType<QInputPropDisabled>,
    default: false
  },
  /**
   * shows the counter
   */
  showWordLimit: {
    type: Boolean as PropType<QInputPropShowWordLimit>,
    default: false
  },
  /**
   * validate parent form if present
   */
  validateEvent: {
    type: Boolean as PropType<QInputPropValidateEvent>,
    default: true
  },
  /**
   * prefix icon class
   */
  prefixIcon: {
    type: String as PropType<QInputPropPrefixIcon>,
    default: null
  },
  /**
   * suffix icon class
   */
  suffixIcon: {
    type: String as PropType<QInputPropSuffixIcon>,
    default: null
  },
  /**
   * whether to show clear button
   */
  clearable: {
    type: Boolean as PropType<QInputPropClearable>,
    default: false
  },
  /**
   * whether to show password
   */
  showPassword: {
    type: Boolean as PropType<QInputPropShowPassword>,
    default: false
  },
  /**
   * value formatter
   */
  formatter: {
    type: Function as PropType<QInputPropFormatter>,
    default: null
  },
  /**
   * value parser
   */
  parser: {
    type: Function as PropType<QInputPropParser>,
    default: null
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [value: string];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [];
  input: [value: string];
}>();

const attrs = useAttrs();
const slots = useSlots();

const root = ref<Nullable<HTMLElement>>(null);
const input = ref<Nullable<HTMLInputElement>>(null);
const qFormItem = inject<
  Nullable<QFormItemProvider & { errorMessage?: Ref<Nullable<string>> }>
>('qFormItem', null);
const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const state = reactive<QInputState>({
  hovering: false,
  focused: false,
  isPasswordVisible: false
});

const innerValue = computed<string>(() => String(props.modelValue ?? ''));
const hasMaxLength = computed<boolean>(() => attrs.maxlength !== undefined);
const maxLength = computed<string | number | undefined>(
  () => attrs.maxlength as string | number | undefined
);
const isReadonly = computed<boolean>(() => Boolean(attrs.readonly));

const inputAttrs = computed<Record<string, unknown>>(() => {
  const { class: _class, style: _style, ...rest } = attrs;
  return rest;
});

const inputType = computed<string>(() => {
  if (!props.showPassword) return props.type ?? 'text';

  return state.isPasswordVisible ? 'text' : 'password';
});

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isInvalid = computed<boolean>(() =>
  Boolean(qFormItem?.errorMessage?.value)
);

const isSymbolLimitShown = computed<boolean>(() =>
  Boolean(
    props.showWordLimit &&
    hasMaxLength.value &&
    !isDisabled.value &&
    !isReadonly.value &&
    inputType.value !== 'password'
  )
);

const isPasswordSwitchShown = computed<boolean>(() =>
  Boolean(
    props.showPassword &&
    !isReadonly.value &&
    (innerValue.value || state.focused || state.hovering)
  )
);

const isClearButtonShown = computed<boolean>(() =>
  Boolean(
    props.clearable &&
    !isReadonly.value &&
    !isDisabled.value &&
    innerValue.value &&
    (state.focused || state.hovering)
  )
);

const isPrefixVisible = computed<boolean>(() =>
  Boolean(props.prefixIcon || slots.prefix)
);

const isSuffixVisible = computed<boolean>(() =>
  Boolean(
    isDisabled.value ||
    isClearButtonShown.value ||
    isPasswordSwitchShown.value ||
    props.suffixIcon ||
    slots.suffix
  )
);

const classes = computed<ClassValue>(() => {
  const classList: IsArray<ClassValue> = [
    'q-input',
    `q-input_size_${props.size}`,
    attrs.class
  ];

  if (isDisabled.value) classList.push('q-input_disabled');
  if (state.focused) classList.push('q-input_focused');
  if (isPrefixVisible.value) classList.push('q-input_prefix');
  if (isSuffixVisible.value) classList.push('q-input_suffix');
  if (slots.prepend) classList.push('q-input_group-prepend');
  if (slots.append) classList.push('q-input_group-append');

  return classList;
});

const textLength = computed<number>(() => innerValue.value.length);
const displayValue = computed<string>(() => {
  if (props.formatter) {
    return props.formatter(innerValue.value);
  }

  return innerValue.value;
});

function updateModel(event: Event): void {
  const target = event.target as HTMLInputElement;
  const parsed = props.parser
    ? props.parser(target.value ?? '')
    : (target.value ?? '');
  emit('update:modelValue', parsed);
}

function focus(): void {
  input.value?.focus();
}

function blur(): void {
  input.value?.blur();
}

function select(): void {
  input.value?.select();
}

function clear(): void {
  emit('update:modelValue', '');
  emit('clear');
}

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement;
  const parsed = props.parser
    ? props.parser(target.value ?? '')
    : (target.value ?? '');
  emit('input', parsed);
  updateModel(event);
}

function handleChange(event: Event): void {
  const target = event.target as HTMLInputElement;
  const parsed = props.parser
    ? props.parser(target.value ?? '')
    : (target.value ?? '');
  emit('change', parsed);
  updateModel(event);
}

function handleBlur(event: FocusEvent): void {
  state.focused = false;
  emit('blur', event);
  if (props.validateEvent) qFormItem?.validateField('blur');
}

function handleFocus(event: FocusEvent): void {
  state.focused = true;
  emit('focus', event);
}

function handlePasswordVisible(): void {
  state.isPasswordVisible = !state.isPasswordVisible;
  focus();
}

function handleClearClick(): void {
  clear();
  focus();
}

function handleActionIconKeydown(
  event: KeyboardEvent,
  handler: () => void
): void {
  if (event.key !== 'Enter' && event.key !== ' ') {
    return;
  }

  event.preventDefault();
  handler();
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) qFormItem?.validateField('change');
  }
);

defineExpose({
  root,
  input,
  focus,
  blur,
  select,
  clear
});
</script>

<template>
  <div
    ref="root"
    :class="classes"
    :style="attrs.style"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <span
      v-if="$slots.prepend"
      class="q-input__prepend"
    >
      <slot name="prepend" />
    </span>

    <div class="q-input__wrapper">
      <span
        v-if="isPrefixVisible"
        class="q-input__prefix"
      >
        <span
          v-if="props.prefixIcon"
          class="q-input__icon"
          :class="props.prefixIcon"
          aria-hidden="true"
        />

        <slot
          v-else
          name="prefix"
        />
      </span>

      <input
        v-bind="inputAttrs"
        ref="input"
        :value="displayValue"
        class="q-input__inner"
        :type="inputType"
        :disabled="isDisabled"
        :aria-disabled="isDisabled || undefined"
        :aria-invalid="isInvalid || undefined"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />

      <span
        v-if="isSuffixVisible"
        class="q-input__suffix"
      >
        <span
          v-if="isDisabled"
          class="q-input__icon q-icon-lock"
          aria-hidden="true"
        />

        <button
          v-else-if="isPasswordSwitchShown"
          class="q-input__icon q-input__action-icon"
          :class="state.isPasswordVisible ? 'q-icon-eye' : 'q-icon-eye-close'"
          type="button"
          aria-label="toggle password visibility"
          @click="handlePasswordVisible"
          @keydown="
            event => handleActionIconKeydown(event, handlePasswordVisible)
          "
        />

        <button
          v-else-if="isClearButtonShown"
          class="q-input__icon q-input__action-icon q-icon-close"
          type="button"
          aria-label="clear input"
          @click="handleClearClick"
          @keydown="event => handleActionIconKeydown(event, handleClearClick)"
        />

        <span
          v-else-if="props.suffixIcon"
          class="q-input__icon"
          :class="props.suffixIcon"
          aria-hidden="true"
        />

        <slot
          v-else
          name="suffix"
        />
      </span>
    </div>

    <span
      v-if="$slots.append"
      class="q-input__append"
    >
      <slot name="append" />
    </span>

    <div
      v-if="isSymbolLimitShown"
      class="q-input__count"
    >
      <span class="q-input__count-inner">
        {{ t('QInput.charNumber') }}: {{ textLength }}/{{ maxLength }}
      </span>
    </div>
  </div>
</template>
