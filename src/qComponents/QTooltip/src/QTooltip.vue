<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import { placements } from '@popperjs/core/lib/enums';
import {
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted,
  useSlots
} from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { isServer } from '@/qComponents/constants/isServer';
import { validateArray } from '@/qComponents/helpers';

import type { Nullable } from '#/helpers';

import type {
  QTooltipPropContent,
  QTooltipPropPlacement,
  QTooltipPropEffect,
  QTooltipPropDisabled,
  QTooltipPropOpenDelay,
  QTooltipPropCloseDelay,
  QTooltipPropTeleportTo,
  QTooltipPropPopperOptions
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QTooltip',
  componentName: 'QTooltip'
});

const props = defineProps({
  /**
   * tooltip text
   */
  content: {
    type: String as PropType<QTooltipPropContent>,
    default: null
  },
  /**
   * tooltip placement
   */
  placement: {
    type: String as PropType<QTooltipPropPlacement>,
    default: 'top',
    validator: validateArray<QTooltipPropPlacement>(placements)
  },
  /**
   * visual theme
   */
  effect: {
    type: String as PropType<QTooltipPropEffect>,
    default: 'dark',
    validator: validateArray<QTooltipPropEffect>(['dark', 'light'])
  },
  /**
   * whether tooltip is disabled
   */
  disabled: {
    type: Boolean as PropType<QTooltipPropDisabled>,
    default: false
  },
  /**
   * delay before appearing, in milliseconds
   */
  openDelay: {
    type: Number as PropType<QTooltipPropOpenDelay>,
    default: 200
  },
  /**
   * delay before disappearing, in milliseconds
   */
  closeDelay: {
    type: Number as PropType<QTooltipPropCloseDelay>,
    default: 0
  },
  /**
   * target element where tooltip will be teleported
   */
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QTooltipPropTeleportTo>,
    default: 'body'
  },
  /**
   * see: https://popper.js.org/docs/v2/constructors/#options
   */
  popperOptions: {
    type: Object as PropType<QTooltipPropPopperOptions>,
    default: (): QTooltipPropPopperOptions => ({})
  }
});

const slots = useSlots();

const trigger = ref<Nullable<HTMLElement>>(null);
const tooltip = ref<Nullable<HTMLElement>>(null);
const isVisible = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);

const hasContent = computed<boolean>(
  () => Boolean(props.content) || Boolean(slots.content)
);

const tooltipClasses = computed<Record<string, boolean>>(() => ({
  [`q-tooltip_effect_${props.effect}`]: Boolean(props.effect)
}));

const tooltipStyles = computed<Record<string, number>>(() => ({
  zIndex: zIndex.value
}));

let popperInstance: Nullable<Instance> = null;
let timer: Nullable<ReturnType<typeof setTimeout>> = null;

function getTriggerElement(): Nullable<Element> {
  return trigger.value?.firstElementChild ?? trigger.value;
}

async function createPopper(): Promise<void> {
  const triggerElement = getTriggerElement();

  if (!triggerElement || !tooltip.value) return;

  popperInstance = createPopperJs(triggerElement, tooltip.value, {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      }
    ],
    ...props.popperOptions
  });
}

function destroyPopper(): void {
  if (popperInstance) {
    popperInstance.destroy();
    popperInstance = null;
  }
}

function clearTimer(): void {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}

function showTooltip(): void {
  if (props.disabled || !hasContent.value) return;

  clearTimer();
  timer = setTimeout(() => {
    isVisible.value = true;
  }, props.openDelay ?? 0);
}

function hideTooltip(): void {
  clearTimer();
  timer = setTimeout(() => {
    isVisible.value = false;
  }, props.closeDelay ?? 0);
}

function handleFocusIn(): void {
  showTooltip();
}

function handleFocusOut(event: FocusEvent): void {
  const relatedTarget = event.relatedTarget as Node | null;

  if (
    trigger.value?.contains(relatedTarget) ||
    tooltip.value?.contains(relatedTarget)
  ) {
    return;
  }

  hideTooltip();
}

watch(isVisible, value => {
  if (value) {
    zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
    createPopper();
  }
});

onMounted(() => {
  if (!trigger.value) return;

  trigger.value.addEventListener('mouseenter', showTooltip, false);
  trigger.value.addEventListener('mouseleave', hideTooltip, false);
  trigger.value.addEventListener('focusin', handleFocusIn, false);
  trigger.value.addEventListener('focusout', handleFocusOut, false);
});

onUnmounted(() => {
  trigger.value?.removeEventListener('mouseenter', showTooltip, false);
  trigger.value?.removeEventListener('mouseleave', hideTooltip, false);
  trigger.value?.removeEventListener('focusin', handleFocusIn, false);
  trigger.value?.removeEventListener('focusout', handleFocusOut, false);

  clearTimer();
  destroyPopper();
});
</script>

<template>
  <span
    ref="trigger"
    class="q-tooltip-trigger"
  >
    <slot />
  </span>

  <teleport
    :to="teleportTo || 'body'"
    :disabled="!teleportTo"
  >
    <transition
      name="q-fade"
      @after-leave="destroyPopper"
    >
      <div
        v-show="isVisible && hasContent"
        ref="tooltip"
        class="q-tooltip"
        :class="tooltipClasses"
        :style="tooltipStyles"
        role="tooltip"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
      >
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </transition>
  </teleport>
</template>
