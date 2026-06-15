<script setup lang="ts">
import { createPopper, Instance, Options } from '@popperjs/core';
import { placements } from '@popperjs/core/lib/enums';
import { colord } from 'colord';
import { inject, ref, computed, watch, nextTick, provide, useSlots } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { isServer } from '@/qComponents/constants/isServer';
import { validateArray } from '@/qComponents/helpers';
import type { QFormProvider } from '@/qComponents/QForm';
import type { QFormItemProvider } from '@/qComponents/QFormItem';

import type { Nullable, UnwrappedInstance } from '#/helpers';

import QPickerDropdown from './QPickerDropdown';
import type { QPickerDropdownInstance } from './QPickerDropdown';
import type {
  QColorPickerPropColorFormat,
  QColorPickerPropPlacement,
  QColorPickerPropPopperOptions,
  QColorPickerPropTeleportTo,
  QColorPickerProvider
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QColorPicker',
});

const props = defineProps({
  /**
   * binding value
   */
  modelValue: {
    type: String,
    default: null
  },
  /**
   * whether to disable the ColorPicker
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: true
  },
  /**
   * whether to display the alpha slider
   */
  alphaShown: {
    type: Boolean,
    default: false
  },
  /**
   * output color format
   */
  colorFormat: {
    type: String as PropType<QColorPickerPropColorFormat>,
    default: 'hex',
    validator: validateArray<QColorPickerPropColorFormat>(['hex', 'rgb'])
  },
  placement: {
    type: String as PropType<QColorPickerPropPlacement>,
    default: 'right-start',
    validator: validateArray<QColorPickerPropPlacement>(placements)
  },
  popperOptions: {
    type: Object as PropType<QColorPickerPropPopperOptions>,
    default: (): Partial<QColorPickerPropPopperOptions> => ({})
  },
  /**
   * Specifies a target element where QColorPicker will be moved.
   * (has to be a valid query selector, or an HTMLElement)
   */
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QColorPickerPropTeleportTo>,
    default: null
  }
});

const emit = defineEmits<{
  /**
   * triggers when model updates
   */
  'update:modelValue': [value: Nullable<string>];
  /**
   * alias for update:modelValue
   */
  change: [value: Nullable<string>];
}>();

const slots = useSlots();

const qForm = inject<Nullable<QFormProvider>>('qForm', null);
const qFormItem = inject<Nullable<QFormItemProvider>>('qFormItem', null);

const zIndex = ref<number>(DEFAULT_Z_INDEX);
const isPickerShown = ref<boolean>(false);
const popperJS = ref<Nullable<Instance>>(null);

const isDisabled = computed<boolean>(
  () => props.disabled || (qForm?.disabled.value ?? false)
);

const isColorDark = computed<boolean>(() =>
  props.modelValue ? colord(props.modelValue).isDark() : false
);

const iconClasses = computed<Record<string, boolean>>(() => ({
  'q-color-picker-trigger__icon': true,
  'q-color-picker-trigger__icon_light': isColorDark.value,
  'q-icon-triangle-down': !isDisabled.value,
  'q-icon-lock': isDisabled.value
}));

const options = computed<Partial<Options>>(() => ({
  placement: props.placement,
  modifiers: [{ name: 'offset', options: { offset: [0, 16] } }],
  ...props.popperOptions
}));

const handleClose = (): void => {
  isPickerShown.value = false;
};

const handleTriggerClick = (): void => {
  if (isDisabled.value) return;

  isPickerShown.value = !isPickerShown.value;
};

const handlePick = (value: Nullable<string>): void => {
  emit('update:modelValue', value);
  emit('change', value);

  if (props.modelValue !== value) {
    qFormItem?.validateField('change');
  }

  isPickerShown.value = false;
};

const trigger = ref<Nullable<HTMLElement>>(null);
const dropdown = ref<UnwrappedInstance<QPickerDropdownInstance>>(null);

const createPopperJs = async (): Promise<void> => {
  if (popperJS.value?.destroy) {
    popperJS.value.destroy();
    popperJS.value = null;
  }

  if (!trigger.value || !dropdown.value) return;
  await nextTick();
  popperJS.value = createPopper(
    trigger.value,
    dropdown.value.$el,
    options.value
  );
};

watch(isPickerShown, value => {
  if (isDisabled.value || !value) return;

  zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
  createPopperJs();
});

provide<QColorPickerProvider>('qColorPicker', { trigger });

defineExpose({
  trigger,
  dropdown,
  zIndex,
  iconClasses,
  isDisabled,
  isPickerShown,
  handleClose,
  handleTriggerClick,
  handlePick
});
</script>

<template>
  <div class="q-color-picker">
    <div
      ref="trigger"
      class="q-color-picker-trigger"
      :class="{
        'q-color-picker-trigger_is-disabled': isDisabled,
        'q-color-picker-trigger_is-opened': isPickerShown
      }"
      :aria-expanded="isPickerShown"
      @click="handleTriggerClick"
    >
      <!-- @slot _Optional_. HTML element that triggers dropdown -->
      <slot
        v-if="slots.trigger"
        name="trigger"
      />
      <button
        v-else
        :disabled="isDisabled"
        class="q-color-picker-trigger__default"
      >
        <div
          class="q-color-picker-trigger__color"
          aria-hidden="true"
          :style="{
            backgroundColor: modelValue
          }"
        />
        <span
          :class="iconClasses"
          aria-hidden="true"
        />
      </button>
    </div>

    <teleport
      :to="teleportTo || 'body'"
      :disabled="!teleportTo"
    >
      <transition name="q-fade">
        <q-picker-dropdown
          ref="dropdown"
          :is-shown="isPickerShown"
          :is-clear-btn-shown="clearable"
          :color="modelValue"
          :color-format="colorFormat"
          :alpha-shown="alphaShown"
          :style="{ zIndex }"
          @click.stop
          @close="handleClose"
          @pick="handlePick"
        />
      </transition>
    </teleport>
  </div>
</template>
