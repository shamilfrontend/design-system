<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import { placements } from '@popperjs/core/lib/enums';
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  provide,
  useSlots
} from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { isServer } from '@/qComponents/constants/isServer';
import { validateArray } from '@/qComponents/helpers';

import type { Nullable } from '#/helpers';

import {
  Q_DROPDOWN_INJECTION_KEY,
  type QDropdownContext
} from './constants';
import type {
  QDropdownPropTrigger,
  QDropdownPropPlacement,
  QDropdownPropPopperOptions,
  QDropdownPropTeleportTo
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QDropdown',
  componentName: 'QDropdown'
});

const props = defineProps({
  trigger: {
    type: String as PropType<QDropdownPropTrigger>,
    default: 'click',
    validator: validateArray<QDropdownPropTrigger>([
      'click',
      'hover',
      'contextmenu'
    ])
  },
  placement: {
    type: String as PropType<QDropdownPropPlacement>,
    default: 'bottom-start',
    validator: validateArray<QDropdownPropPlacement>(placements)
  },
  popperOptions: {
    type: Object as PropType<QDropdownPropPopperOptions>,
    default: (): QDropdownPropPopperOptions => ({})
  },
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QDropdownPropTeleportTo>,
    default: 'body'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  hideOnClick: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits<{
  visibleChange: [visible: boolean];
  command: [command: string];
}>();

const slots = useSlots();

if (!slots.default && process.env.NODE_ENV !== 'production') {
  console.error('QDropdown requires default slot (trigger) to be provided.');
}

const reference = ref<Nullable<HTMLElement>>(null);
const dropdown = ref<Nullable<HTMLElement>>(null);
const isVisible = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);

let popperJS: Nullable<Instance> = null;
let timer: Nullable<ReturnType<typeof setTimeout>> = null;

const dropdownStyles = computed<Record<string, number>>(() => ({
  zIndex: zIndex.value
}));

function closeDropdown(): void {
  isVisible.value = false;
}

provide<QDropdownContext>(Q_DROPDOWN_INJECTION_KEY, {
  close: closeDropdown
});

async function createPopper(): Promise<void> {
  if (!reference.value || !dropdown.value) return;

  const options = {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: { offset: [0, 8] }
      }
    ],
    ...props.popperOptions
  };

  popperJS = createPopperJs(reference.value, dropdown.value, options);
}

function destroyPopper(): void {
  if (popperJS) {
    popperJS.destroy();
    popperJS = null;
  }
}

function showDropdown(): void {
  if (props.disabled) return;

  zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
  isVisible.value = true;
}

function toggleDropdown(): void {
  if (props.disabled) return;

  if (isVisible.value) {
    closeDropdown();
  } else {
    showDropdown();
  }
}

function handleMouseOver(): void {
  if (timer) clearTimeout(timer);
  timer = setTimeout(showDropdown, 100);
}

function handleMouseOut(): void {
  if (timer) clearTimeout(timer);
  timer = setTimeout(closeDropdown, 100);
}

function handleContextMenu(event: MouseEvent): void {
  if (props.disabled) return;

  event.preventDefault();
  showDropdown();
}

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;

  if (
    reference.value?.contains(target) ||
    dropdown.value?.contains(target)
  ) {
    return;
  }

  closeDropdown();
}

function handleDropdownClick(event: MouseEvent): void {
  if (!props.hideOnClick) return;

  const target = event.target as HTMLElement;
  const menuItem = target.closest('.q-menu__item:not(.q-menu__item_disabled)');

  if (menuItem) closeDropdown();
}

watch(isVisible, value => {
  emit('visibleChange', value);

  if (value && !popperJS) {
    createPopper();
  } else if (!value) {
    destroyPopper();
  }
});

onMounted(() => {
  if (!reference.value) return;

  switch (props.trigger) {
    case 'hover':
      reference.value.addEventListener('mouseenter', handleMouseOver, false);
      reference.value.addEventListener('mouseleave', handleMouseOut, false);
      break;

    case 'contextmenu':
      reference.value.addEventListener(
        'contextmenu',
        handleContextMenu,
        false
      );
      document.addEventListener('click', handleDocumentClick, false);
      break;

    case 'click':
    default:
      reference.value.addEventListener('click', toggleDropdown, false);
      document.addEventListener('click', handleDocumentClick, false);
      break;
  }
});

onUnmounted(() => {
  reference.value?.removeEventListener('click', toggleDropdown, false);
  reference.value?.removeEventListener('mouseenter', handleMouseOver, false);
  reference.value?.removeEventListener('mouseleave', handleMouseOut, false);
  reference.value?.removeEventListener(
    'contextmenu',
    handleContextMenu,
    false
  );
  document.removeEventListener('click', handleDocumentClick, false);
  destroyPopper();
});
</script>

<template>
  <div
    ref="reference"
    class="q-dropdown"
    :aria-expanded="isVisible"
    aria-haspopup="menu"
  >
    <slot />
  </div>

  <teleport
    :to="teleportTo || 'body'"
    :disabled="!teleportTo"
  >
    <transition
      name="q-fade"
      @after-leave="destroyPopper"
    >
      <div
        v-show="isVisible"
        ref="dropdown"
        class="q-dropdown__popper"
        :style="dropdownStyles"
        @click="handleDropdownClick"
      >
        <slot name="dropdown" />
      </div>
    </transition>
  </teleport>
</template>
