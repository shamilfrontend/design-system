<script setup lang="ts">
import {
  computed,
  inject,
  nextTick,
  onMounted,
  ref,
  watch,
  useAttrs,
  PropType
} from 'vue';
import type { Ref } from 'vue';

import { validateArray } from '@/qComponents/helpers';
import { t } from '@/qComponents/locale';
import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable } from '#/helpers';

import calcTextareaHeight from './calcTextareaHeight';
import type { QTextareaPropResize, QTextareaPropAutosize } from './types';

defineOptions({
  name: 'QTextarea',
  componentName: 'QTextarea',
  inheritAttrs: false
});

const props = defineProps({
  /**
   * default to v-model
   */
  modelValue: {
    type: String,
    default: null
  },
  /**
   * control the resizability
   */
  resize: {
    type: String as PropType<QTextareaPropResize>,
    default: 'vertical',
    validator: validateArray<QTextareaPropResize>([
      'vertical',
      'horizontal',
      'both',
      'none'
    ])
  },
  /**
   * whether textarea is disabled
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * shows the counter
   */
  showSymbolLimit: {
    type: Boolean,
    default: false
  },
  /**
   * whether textarea has an adaptive height. Can accept an object, e.g. { minRows: 2, maxRows: 6 }
   */
  autosize: {
    type: [Boolean, Object] as PropType<QTextareaPropAutosize>,
    default: true
  },
  /** validate parent form if present */
  validateEvent: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  change: [event: Event];
  focus: [event: FocusEvent];
  blur: [event: FocusEvent];
  input: [event: Event];
}>();

const attrs = useAttrs();

const textareaCalcStyle = ref<{
  minHeight?: string;
  height?: string;
  resize?: string;
}>({});
const qForm = inject<Nullable<QFormProvider>>('qForm', null);
const qFormItem = inject<
  Nullable<QFormItemProvider & { errorMessage?: Ref<Nullable<string>> }>
>('qFormItem', null);
const textarea = ref<Nullable<HTMLTextAreaElement>>(null);

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
    !attrs.readonly
  )
);

const textLength = computed<number>(() => props.modelValue?.length ?? 0);

const classes = computed<Record<string, boolean>>(() => {
  const mainClass = 'q-textarea';

  return {
    [mainClass]: true,
    [`${mainClass}_disabled`]: isDisabled.value
  };
});

const textareaStyle = computed<Record<string, string>>(() => ({
  ...textareaCalcStyle.value,
  resize: props.autosize ? 'none' : props.resize
}));

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
  emit('blur', event);
  if (props.validateEvent) qFormItem?.validateField('blur');
}

function handleFocus(event: FocusEvent): void {
  emit('focus', event);
}

async function resizeTextarea(): Promise<void> {
  await nextTick();
  const { autosize } = props;

  if (!autosize) {
    textareaCalcStyle.value = {
      minHeight: calcTextareaHeight(textarea.value).minHeight
    };
    return;
  }

  const minRows = autosize === true ? 1 : autosize.minRows;
  const maxRows = autosize === true ? null : autosize.maxRows;

  textareaCalcStyle.value = calcTextareaHeight(
    textarea.value,
    minRows,
    maxRows
  );
}

watch(
  () => props.modelValue,
  () => {
    resizeTextarea();
    if (props.validateEvent) qFormItem?.validateField('change');
  }
);

onMounted(() => resizeTextarea());
</script>

<template>
  <div :class="classes">
    <div
      v-if="isSymbolLimitShown"
      class="q-textarea__count"
    >
      {{ t('QTextarea.charNumber') }}: {{ textLength }}/{{ $attrs.maxlength }}
    </div>
    <div
      v-if="isDisabled"
      class="q-textarea__disabled-icon q-icon-lock"
      aria-hidden="true"
    />
    <textarea
      v-bind="$attrs"
      ref="textarea"
      class="q-textarea__inner"
      :disabled="isDisabled"
      :aria-disabled="isDisabled || undefined"
      :aria-invalid="isInvalid || undefined"
      :style="textareaStyle"
      :value="modelValue"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    />
  </div>
</template>
