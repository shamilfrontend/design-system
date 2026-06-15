<script setup lang="ts">
import AsyncValidator from 'async-validator';
import type { ValidateError, ValidateFieldsError } from 'async-validator';
import { get, set } from 'lodash-es';
import {
  provide,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  inject,
  watch,
  useSlots
} from 'vue';
import type { PropType, Ref } from 'vue';

import type { QFormProvider } from '@/components/QForm';
import { validateArray } from '@/helpers';

import type { Nullable, ClassValue } from '#/helpers';

import type {
  QFormItemPropFor,
  QFormItemPropProp,
  QFormItemPropLabel,
  QFormItemPropSublabel,
  QFormItemPropError,
  QFormItemPropRules,
  QFormItemPropShowErrorMessage,
  QFormItemPropLabelSize,
  QFormItemContext,
  FilteredRuleItem
} from './types';

defineOptions({
  name: 'QFormItem'
});

const props = defineProps({
  for: {
    type: String as PropType<QFormItemPropFor>,
    default: null
  },
  /**
   * a key of model.In the use of validate and resetFields method,
   * the attribute is required
   */
  prop: {
    type: String as PropType<QFormItemPropProp>,
    default: null
  },
  /**
   * label
   */
  label: {
    type: String as PropType<QFormItemPropLabel>,
    default: null
  },
  sublabel: {
    type: String as PropType<QFormItemPropSublabel>,
    default: null
  },
  /**
   * field error message, set its value and the field will validate error
   * and show this message immediately
   */
  error: {
    type: String as PropType<QFormItemPropError>,
    default: null
  },
  /**
   * validation rules of form.
   * https://github.com/yiminghe/async-validator#rules
   */
  rules: {
    type: [Object, Array] as PropType<QFormItemPropRules>,
    default: null
  },
  /**
   * whether to show the error message
   */
  showErrorMessage: {
    type: Boolean as PropType<QFormItemPropShowErrorMessage>,
    default: true
  },
  /**
   * label size
   */
  labelSize: {
    type: String as PropType<QFormItemPropLabelSize>,
    default: 'regular',
    validator: validateArray<QFormItemPropLabelSize>(['regular', 'small'])
  }
});

const slots = useSlots();

let initialValue: unknown = null;
const errorMessage = ref<Nullable<string>>(null);

const qForm = inject<Nullable<QFormProvider>>('qForm', null);

const isErrorSlotShown = computed<boolean>(() =>
  Boolean(
    (errorMessage.value || slots.error) &&
    props.showErrorMessage &&
    qForm?.showErrorMessage.value
  )
);

const labelFor = computed<string>(() => props.for ?? props.prop ?? '');

const propRules = computed<FilteredRuleItem[]>(() => {
  const rules =
    props.rules ??
    (props.prop ? (get(qForm?.rules.value, props.prop) ?? []) : []);

  return Array.isArray(rules) ? rules : [rules];
});

const isRequired = computed<boolean>(() =>
  propRules.value.some(({ required }) => required)
);

const isHeaderShown = computed<boolean>(() =>
  Boolean(props.label || slots.label || props.sublabel || slots.sublabel)
);

const rootClasses = computed<ClassValue>(() => ({
  'q-form-item_is-required': isRequired.value,
  'q-form-item_is-error': Boolean(errorMessage.value),
  'q-form-item_is-no-asterisk': Boolean(qForm?.hideRequiredAsterisk.value)
}));

const labelClass = computed<ClassValue>(
  () => `q-form-item__label_size_${props.labelSize ?? 'regular'}`
);

function getFilteredRules(
  trigger: Nullable<string>
): Nullable<FilteredRuleItem[]> {
  if (!propRules.value) return null;

  if (!trigger) {
    return propRules.value.map(({ trigger: _, ...rule }) => rule);
  }

  return propRules.value
    .filter(rule => {
      if (!rule?.trigger) return true;

      const result: string[] = [];
      return result.concat(rule.trigger).includes(trigger);
    })
    .map(({ trigger: _, ...rule }) => rule);
}

function validateField(trigger: Nullable<string> = null): Nullable<
  Promise<{
    errors?: Nullable<ValidateError[]>;
    fields?: ValidateFieldsError;
  }>
> {
  const triggeredRules = getFilteredRules(trigger);

  if (!props.prop || !triggeredRules?.length) return null;

  const validator = new AsyncValidator({
    [props.prop]: triggeredRules
  });

  const formModel = { [props.prop]: get(qForm?.model.value, props.prop) };

  return new Promise(resolve => {
    validator.validate(formModel, { firstFields: true }, (errors, fields) => {
      if (!errors) resolve({});

      errorMessage.value = errors?.[0]?.message ?? null;
      resolve({ errors, fields });
    });
  });
}

function resetField(): void {
  if (qForm?.model?.value && props.prop) {
    set(qForm.model.value, props.prop, initialValue);
  }

  errorMessage.value = null;
}

function clearValidate(): void {
  errorMessage.value = null;
}

const qFormItem: QFormItemContext = {
  for: props.for,
  prop: props.prop,
  label: props.label,
  sublabel: props.sublabel,
  rules: props.rules,
  showErrorMessage: props.showErrorMessage,
  errorMessage: errorMessage as Ref<Nullable<string>>,
  initialValue,
  isErrorSlotShown,
  labelFor,
  isRequired,
  isHeaderShown,
  rootClasses,
  getFilteredRules,
  validateField,
  resetField,
  clearValidate
};

provide('qFormItem', {
  validateField,
  resetField,
  errorMessage
});

onMounted(() => {
  if (!props.prop) return;
  initialValue = get(qForm?.model.value, props.prop, null);

  qForm?.fields.value.push(qFormItem);
});

onBeforeUnmount(() => {
  const qFormFields = qForm?.fields;

  qFormFields?.value.splice(qFormFields.value.indexOf(qFormItem), 1);
});

watch(
  () => props.error,
  newValue => {
    errorMessage.value = newValue;
  }
);

defineExpose({ validateField, resetField });
</script>

<template>
  <div
    class="q-form-item"
    :class="rootClasses"
  >
    <div
      v-if="isHeaderShown"
      class="q-form-item__header"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="q-form-item__label"
        :class="labelClass"
      >
        <slot name="label">{{ label }}</slot>
      </label>

      <div
        v-if="sublabel || $slots.sublabel"
        class="q-form-item__sublabel"
      >
        <slot name="sublabel">{{ sublabel }}</slot>
      </div>
    </div>

    <div class="q-form-item__body">
      <slot />

      <transition name="q-fade">
        <slot
          v-if="isErrorSlotShown"
          name="error"
          :error="errorMessage"
        >
          <div class="q-form-item__error">
            {{ errorMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>
