<script setup lang="ts">
import { createPopper as createPopperJs, Instance } from '@popperjs/core';
import { placements } from '@popperjs/core/lib/enums';
import { ref, computed, watch, onMounted, onUnmounted, useSlots } from 'vue';
import type { PropType } from 'vue';

import { getConfig } from '@/qComponents/config';
import { isServer } from '@/qComponents/constants/isServer';
import { validateArray } from '@/qComponents/helpers';

import type { Nullable } from '#/helpers';

import type {
  QPopoverPropTeleportTo,
  QPopoverPropTrigger,
  QPopoverPropPlacement,
  QPopoverPropPopperOptions
} from './types';

const DEFAULT_Z_INDEX = 2000;

defineOptions({
  name: 'QPopover',
  componentName: 'QPopover'
});

const props = defineProps({
  /**
   * Popover content title
   */
  title: {
    type: String,
    default: null
  },
  /**
   * opening event trigger
   */
  trigger: {
    type: String as PropType<QPopoverPropTrigger>,
    default: 'click',
    validator: validateArray<QPopoverPropTrigger>(['click', 'hover'])
  },
  /**
   * see: https://popper.js.org/docs/v2/constructors/#options
   */
  placement: {
    type: String as PropType<QPopoverPropPlacement>,
    default: 'top-start',
    validator: validateArray<QPopoverPropPlacement>(placements)
  },
  /**
   * icon class name
   */
  icon: {
    type: String,
    default: null
  },
  /**
   * content icon color
   */
  iconColor: {
    type: String,
    default: 'var(--gradient-secondary)'
  },
  /**
   * custom transition's animation
   */
  transition: {
    type: String,
    default: 'q-fade'
  },
  /**
   * delay before appearing, in milliseconds
   * (works only when trigger is hover)
   */
  openDelay: {
    type: Number,
    default: 10
  },
  /**
   * delay before disappearing, in milliseconds
   * (works only when trigger is hover)
   */
  closeDelay: {
    type: Number,
    default: 10
  },
  /**
   * popover min-width
   */
  minWidth: {
    type: [String, Number],
    default: null
  },
  /**
   * popover max-width
   */
  maxWidth: {
    type: [String, Number],
    default: null
  },
  /**
   * see: https://popper.js.org/docs/v2/constructors/#options
   */
  popperOptions: {
    type: Object as PropType<QPopoverPropPopperOptions>,
    default: (): QPopoverPropPopperOptions => ({})
  },
  /**
   * Specifies a target element where QPopover will be moved.
   * (has to be a valid query selector, or an HTMLElement)
   */
  teleportTo: {
    type: [
      String,
      isServer ? Object : HTMLElement
    ] as PropType<QPopoverPropTeleportTo>,
    default: 'body'
  }
});

const emit = defineEmits<{
  show: [];
  hide: [];
}>();

const slots = useSlots();

if (!slots.reference && process.env.NODE_ENV !== 'production') {
  console.error('QPopover requires reference be provided in the slot.');
}

const reference = ref<Nullable<HTMLElement>>(null);
const isPopoverShown = ref<boolean>(false);
const zIndex = ref<number>(DEFAULT_Z_INDEX);
const popover = ref<Nullable<HTMLElement>>(null);

const popoverClasses = computed<Record<string, boolean>>(() => ({
  'q-popover_without-icon': !props.icon
}));

const popoverStyles = computed<Record<string, string | number>>(() => {
  const result: Record<string, string | number> = {
    zIndex: zIndex.value
  };

  const minWidth = Number(props.minWidth)
    ? `${Number(props.minWidth)}px`
    : props.minWidth;
  if (minWidth) result.minWidth = minWidth;

  const maxWidth = Number(props.maxWidth)
    ? `${Number(props.maxWidth)}px`
    : props.maxWidth;
  if (maxWidth) result.maxWidth = maxWidth;

  return result;
});

const popoverIconStyles = computed<Record<string, string>>(() => {
  if (!props.iconColor) return {};

  const backgroundProperty = props.iconColor.includes('-gradient')
    ? 'backgroundImage'
    : 'backgroundColor';

  return {
    [backgroundProperty]: props.iconColor
  };
});

let popperJS: Nullable<Instance> = null;

async function createPopper(): Promise<void> {
  if (!reference.value?.firstElementChild || !popover.value) return;

  const options = {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 16]
        }
      }
    ],
    ...props.popperOptions
  };

  popperJS = createPopperJs(
    reference.value.firstElementChild,
    popover.value,
    options
  );
}

function togglePopover(): void {
  isPopoverShown.value = !isPopoverShown.value;
}

function destroyPopper(): void {
  isPopoverShown.value = false;

  if (popperJS) {
    popperJS.destroy();
    popperJS = null;
  }
}

let timer: Nullable<ReturnType<typeof setTimeout>> = null;

function handleMouseOver(): void {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    isPopoverShown.value = true;
  }, props.openDelay ?? 0);
}

function onMouseOut(): void {
  if (timer) clearTimeout(timer);

  timer = setTimeout(() => {
    isPopoverShown.value = false;
  }, props.closeDelay ?? 0);
}

function handleDocumentClick(event: MouseEvent): void {
  const target = event.target as HTMLElement;
  if (reference.value?.contains(target) || popover.value?.contains(target)) {
    return;
  }

  isPopoverShown.value = false;
}

watch(isPopoverShown, value => {
  if (value && !popperJS) {
    zIndex.value = getConfig('nextZIndex') ?? DEFAULT_Z_INDEX;
    emit('show');
    createPopper();
  } else {
    emit('hide');
  }
});

onMounted(() => {
  if (!reference.value || !popover.value) return;

  switch (props.trigger) {
    case 'hover':
      reference.value.addEventListener('mouseover', handleMouseOver, false);
      reference.value.addEventListener('mouseout', onMouseOut, false);
      popover.value.addEventListener('mouseover', handleMouseOver, false);
      popover.value.addEventListener('mouseout', onMouseOut, false);
      break;

    case 'click':
    default:
      reference.value.addEventListener('click', togglePopover, false);
      document.addEventListener('click', handleDocumentClick, false);
      break;
  }
});

onUnmounted(() => {
  reference.value?.removeEventListener('click', togglePopover, false);
  reference.value?.removeEventListener('mouseout', onMouseOut, false);
  reference.value?.removeEventListener('mouseover', handleMouseOver, false);
  document.removeEventListener('click', handleDocumentClick, false);

  destroyPopper();
});
</script>

<template>
  <div
    ref="reference"
    class="q-popover-trigger"
    :aria-expanded="isPopoverShown"
  >
    <slot name="reference" />
  </div>

  <teleport
    :to="teleportTo || 'body'"
    :disabled="!teleportTo"
  >
    <transition
      :name="transition"
      @after-leave="destroyPopper"
    >
      <div
        v-show="isPopoverShown"
        ref="popover"
        class="q-popover"
        :class="popoverClasses"
        :style="popoverStyles"
        role="tooltip"
      >
        <div
          v-if="icon"
          class="q-popover__icon"
          :class="icon"
          :style="popoverIconStyles"
          aria-hidden="true"
        />
        <q-scrollbar
          wrap-class="q-popover__inner"
          view-class="scrollbar__list"
        >
          <div
            v-if="title"
            class="q-popover__title"
          >
            {{ title }}
          </div>
          <div
            v-if="$slots.default"
            class="q-popover__content"
          >
            <slot />
          </div>
        </q-scrollbar>
      </div>
    </transition>
  </teleport>
</template>
