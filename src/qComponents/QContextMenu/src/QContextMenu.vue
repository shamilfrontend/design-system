<script setup lang="ts">
import {
  createPopper as createPopperJs,
  Instance,
  Options,
  Placement
} from '@popperjs/core';
import { computed, ref, watch, onUnmounted, onBeforeUpdate } from 'vue';
import type { PropType, VNodeRef } from 'vue';

import { getConfig } from '@/qComponents/config';
import { isServer } from '@/qComponents/constants/isServer';
import { validateArray } from '@/qComponents/helpers';
import { t } from '@/qComponents/locale';

import type { Nullable } from '#/helpers';

import type {
  QContextMenuPropPosition,
  QContextMenuPropMenuItems,
  QContextMenuPropTeleportTo
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QContextMenu',
});

const props = defineProps({
  menuItems: {
    type: Array as PropType<QContextMenuPropMenuItems>,
    required: true
  },
  position: {
    type: String as PropType<QContextMenuPropPosition>,
    default: 'left',
    validator: validateArray<QContextMenuPropPosition>(['left', 'right'])
  },
  /**
   * Specifies a target element where QContextMenu will be moved.
   * (has to be a valid query selector, or an HTMLElement)
   */
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QContextMenuPropTeleportTo>,
    default: null
  },
  /**
   * accessible label for the menu trigger button
   */
  ariaLabel: {
    type: String,
    default: null
  }
});

const emit = defineEmits<{
  action: [actionName: string];
}>();

const triggerLabel = computed<string>(
  () => props.ariaLabel ?? t('QContextMenu.ariaLabel')
);

const reference = ref<Nullable<HTMLElement>>(null);
const contextMenu = ref<Nullable<HTMLElement>>(null);
const isContextMenuShown = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);
const popperJS = ref<Nullable<Instance>>(null);

const placement = computed<Placement>(() =>
  props.position === 'right' ? 'bottom-start' : 'bottom-end'
);

let menuItemElements: HTMLElement[] = [];

const setItemRef: VNodeRef = el => {
  if (el instanceof HTMLElement) menuItemElements.push(el);
};

function createPopper(): void {
  if (!reference.value || !contextMenu.value) return;

  isContextMenuShown.value = true;

  const options: Partial<Options> = {
    placement: placement.value,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, -40]
        }
      }
    ]
  };

  popperJS.value = createPopperJs(reference.value, contextMenu.value, options);

  zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
}

function closePopper(): void {
  isContextMenuShown.value = false;
  menuItemElements = [];
}

function afterLeave(): void {
  popperJS.value?.destroy();
  popperJS.value = null;
}

function handleTriggerClick(e: MouseEvent): void {
  if (reference.value === e.target) return;
  if (isContextMenuShown.value) {
    closePopper();
    return;
  }

  createPopper();
}

function handleKeyUp(e: KeyboardEvent): void {
  if (e.key === 'Escape') closePopper();

  if (!['ArrowUp', 'ArrowDown'].includes(e.key) || !isContextMenuShown.value) {
    return;
  }

  if (!document.activeElement?.classList.contains('q-context-menu__item')) {
    menuItemElements[0]?.focus();
    return;
  }

  let currentNodeIndex = 0;
  let nextNodeIndex = 1;
  Array.from(menuItemElements).some((element, index) => {
    const isItActiveElement = document.activeElement === element;

    if (isItActiveElement) currentNodeIndex = index;

    return isItActiveElement;
  });

  switch (e.key) {
    case 'ArrowUp': {
      nextNodeIndex = currentNodeIndex - 1;
      break;
    }

    case 'ArrowDown': {
      nextNodeIndex = currentNodeIndex + 1;
      break;
    }

    default:
      break;
  }
  menuItemElements[nextNodeIndex]?.focus();
}

function handleItemClick(actionName: string): void {
  emit('action', actionName);
  closePopper();
}

function handleDocumentClick(e: MouseEvent): void {
  const target = e.target as HTMLElement;

  if (
    reference.value?.contains(target) ||
    contextMenu.value?.contains(target)
  ) {
    return;
  }

  closePopper();
}

watch(isContextMenuShown, value => {
  if (value) {
    document.addEventListener('click', handleDocumentClick, true);
    document.addEventListener('keyup', handleKeyUp, true);
    return;
  }

  document.removeEventListener('click', handleDocumentClick, true);
  document.removeEventListener('keyup', handleKeyUp, true);
});

onUnmounted(() => {
  document.removeEventListener('click', handleDocumentClick, true);
});

onBeforeUpdate(() => {
  menuItemElements = [];
});
</script>

<template>
  <div class="q-context-wrapper">
    <div
      ref="reference"
      class="q-context-trigger"
      :aria-expanded="isContextMenuShown"
      aria-haspopup="menu"
      @click="handleTriggerClick"
    >
      <slot v-if="$slots.default" />
      <button
        v-else
        type="button"
        class="q-context-trigger__button q-icon-dots-3-horizontal"
        :aria-label="triggerLabel"
      />
    </div>

    <teleport
      :to="teleportTo || 'body'"
      :disabled="!teleportTo"
    >
      <transition
        name="q-fade"
        @after-leave="afterLeave"
      >
        <div
          v-show="isContextMenuShown"
          ref="contextMenu"
          class="q-context-menu"
          role="menu"
          :style="{ zIndex }"
        >
          <button
            v-for="(item, index) in menuItems"
            :key="index"
            :ref="setItemRef"
            type="button"
            tabindex="-1"
            role="menuitem"
            class="q-context-menu__item"
            :class="{ 'q-context-menu__item_with-icon': item.icon }"
            @click="handleItemClick(item.action)"
          >
            <span
              v-if="item.icon"
              class="q-context-menu__icon"
              :class="item.icon"
              aria-hidden="true"
            />
            {{ item.name }}
          </button>
        </div>
      </transition>
    </teleport>
  </div>
</template>
