<script setup lang="ts">
import type { ValidateFieldsError } from 'async-validator';
import { concat } from 'lodash-es';
import { PropType, provide, ref, watch, toRef } from 'vue';
import type { Ref } from 'vue';

import type { QFormItemContext } from '@/qComponents/QFormItem';

import type { Nullable } from '#/helpers';

import type {
  QFormPropModel,
  QFormPropRules,
  QFormProvider,
  ValidateFnResult
} from './types';

defineOptions({
  name: 'QForm',
});

const props = defineProps({
  /**
   * data of form component
   */
  model: {
    type: Object as PropType<QFormPropModel>,
    default: (): QFormPropModel => ({})
  },
  /**
   * validation rules of form.
   * https://github.com/yiminghe/async-validator#rules
   */
  rules: {
    type: Object as PropType<QFormPropRules>,
    default: (): QFormPropRules => ({})
  },
  /**
   * whether to disabled all components in this form. If set to true,
   * it cannot be overridden by its inner components `disabled` prop
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * whether required fields should have a red asterisk (star) beside their labels
   */
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  /**
   * whether to show the error message
   */
  showErrorMessage: {
    type: Boolean,
    default: true
  },
  /**
   * whether to trigger validation when the `rules` prop is changed
   */
  validateOnRuleChange: {
    type: Boolean,
    default: true
  }
});

const fieldsList: Ref<QFormItemContext[]> = ref([]);

function filterFields(passedProps?: string[] | string): QFormItemContext[] {
  const preparedProps = concat(passedProps || []);

  return preparedProps.length
    ? fieldsList.value.filter(({ prop }) =>
        prop ? preparedProps.includes(prop) : false
      )
    : fieldsList.value;
}

/**
 *  @public
 */
function clearValidate(passedProps?: string[] | string): void {
  const filteredFields = filterFields(passedProps);

  filteredFields.forEach(field => field.clearValidate());
}

/**
 *  @public
 */
function resetFields(passedProps?: string[] | string): void {
  if (!props.model) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[Warn][QForm] model is required for resetFields to work.');
    }
    return;
  }
  const filteredFields = filterFields(passedProps);

  filteredFields.forEach(field => field.resetField());
}

/**
 *  @public
 */
async function validate(
  passedProps?: string[] | string
): Promise<Nullable<ValidateFnResult>> {
  if (!props.model) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[Warn][QForm] model is required for validate to work!');
    }
    return null;
  }

  const filteredFields = filterFields(passedProps);

  let isValid = true;
  let invalidFields: ValidateFieldsError = {};

  await Promise.all(
    filteredFields.map(async field => {
      const { errors, fields } = (await field.validateField()) ?? {};
      if (!errors || !fields) return;

      isValid = false;
      invalidFields = { ...invalidFields, ...fields };
    })
  );

  return { isValid, invalidFields };
}

watch(
  () => props.rules,
  () => {
    if (props.validateOnRuleChange) validate();
  },
  { deep: true }
);

provide<QFormProvider>('qForm', {
  disabled: toRef(props, 'disabled'),
  model: toRef(props, 'model'),
  rules: toRef(props, 'rules'),
  hideRequiredAsterisk: toRef(props, 'hideRequiredAsterisk'),
  showErrorMessage: toRef(props, 'showErrorMessage'),
  fields: fieldsList,
  validate,
  resetFields,
  clearValidate
});

defineExpose({ validate, resetFields, clearValidate });
</script>

<template>
  <form class="q-form">
    <slot />
  </form>
</template>
