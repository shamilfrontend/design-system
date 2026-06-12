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
  QInputPropDisabled,
  QInputPropShowSymbolLimit,
  QInputPropValidateEvent,
  QInputPropSuffixIcon,
  QInputPropClearable,
  QInputPropPasswordSwitch,
  QInputPropRootClass
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
    default: null
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
  showSymbolLimit: {
    type: Boolean as PropType<QInputPropShowSymbolLimit>,
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
  passwordSwitch: {
    type: Boolean as PropType<QInputPropPasswordSwitch>,
    default: false
  },
  /**
   * as native attrs bind to native input, via rootClass you can set class for q-input root
   */
  rootClass: {
    type: [String, Array, Object] as PropType<QInputPropRootClass>,
    default: null
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  clear: [event: MouseEvent];
  input: [event: Event];
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

const inputType = computed<string>(() => {
  if (!props.passwordSwitch) return String(attrs.type ?? 'text');

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
    props.showSymbolLimit &&
    attrs.maxlength &&
    !isDisabled.value &&
    !attrs.readonly &&
    !props.passwordSwitch
  )
);

const isPasswordSwitchShown = computed<boolean>(() =>
  Boolean(
    props.passwordSwitch &&
    !attrs.readonly &&
    (props.modelValue || state.focused || state.hovering)
  )
);

const isClearButtonShown = computed<boolean>(() =>
  Boolean(
    props.clearable &&
    !attrs.readonly &&
    props.modelValue &&
    (state.focused || state.hovering)
  )
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
  const classList: IsArray<ClassValue> = ['q-input', props.rootClass];

  if (isDisabled.value) classList.push('q-input_disabled');
  if (isSuffixVisible.value) classList.push('q-input_suffix');

  return classList;
});

const textLength = computed<number>(() => props.modelValue?.length ?? 0);

function updateModel(event: Event): void {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value ?? '');
}

function handleInput(event: Event): void {
  emit('input', event);
  updateModel(event);
}

function handleChange(event: Event): void {
  emit('change', event);
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
  input?.value?.focus();
}

function handleClearClick(event: MouseEvent): void {
  emit('update:modelValue', '');
  emit('clear', event);
  input?.value?.focus();
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) qFormItem?.validateField('change');
  }
);
</script>

<template>
  <div
    ref="root"
    :class="classes"
    @mouseenter="state.hovering = true"
    @mouseleave="state.hovering = false"
  >
    <div
      v-if="isSymbolLimitShown"
      class="q-input__count"
    >
      <span class="q-input__count-inner">
        {{ t('QInput.charNumber') }}: {{ textLength }}/{{ $attrs.maxlength }}
      </span>
    </div>

    <input
      v-bind="$attrs"
      ref="input"
      :value="modelValue"
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

      <span
        v-else-if="isPasswordSwitchShown"
        class="q-input__icon"
        :class="state.isPasswordVisible ? 'q-icon-eye' : 'q-icon-eye-close'"
        aria-hidden="true"
        @click="handlePasswordVisible"
      />

      <span
        v-else-if="isClearButtonShown"
        class="q-input__icon q-icon-close"
        aria-hidden="true"
        @click="handleClearClick"
      />

      <span
        v-else-if="suffixIcon"
        class="q-input__icon"
        :class="suffixIcon"
        aria-hidden="true"
      />

      <slot
        v-else
        name="suffix"
      />
    </span>
  </div>
</template>
