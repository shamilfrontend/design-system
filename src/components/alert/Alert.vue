<script setup lang="ts">
import { computed, ref, useSlots } from "vue";

type AlertTone =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark";
type AlertVariant =
  | "solid"
  | "outline"
  | "light"
  | "left-border"
  | "label"
  | "additional";

interface Props {
  title?: string;
  description?: string;
  tone?: AlertTone;
  variant?: AlertVariant;
  dismissible?: boolean;
  icon?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "",
  description: "",
  tone: "primary",
  variant: "solid",
  dismissible: false,
  icon: "",
});

const emit = defineEmits<{
  close: [];
}>();

const slots = useSlots();
const isVisible = ref(true);

const alertClasses = computed(() => [
  `ds-alert--variant-${props.variant}`,
  `ds-alert--tone-${props.tone}`,
  {
    "ds-alert--dismissible": props.dismissible,
    "ds-alert--with-icon": Boolean(props.icon),
  },
]);

const closeAlert = (): void => {
  isVisible.value = false;
  emit("close");
};
</script>

<template>
  <div
    v-if="isVisible"
    class="ds ds-alert"
    :class="alertClasses"
    role="alert"
  >
    <button
      v-if="props.dismissible"
      type="button"
      class="ds-alert__close"
      aria-label="Close alert"
      @click="closeAlert"
    >
      ×
    </button>
    <div class="ds-alert__content">
      <span
        v-if="props.icon"
        class="ds-alert__icon"
        aria-hidden="true"
      >
        {{ props.icon }}
      </span>
      <div class="ds-alert__body">
        <strong
          v-if="props.title"
          class="ds-alert__title"
        >
          {{ props.title }}
        </strong>
        <p
          v-if="props.description"
          class="ds-alert__description"
        >
          {{ props.description }}
        </p>
        <div
          v-if="slots.default"
          class="ds-alert__text"
        >
          <slot />
        </div>
        <div
          v-if="slots.actions"
          class="ds-alert__actions"
        >
          <slot name="actions" />
        </div>
      </div>
    </div>
  </div>
</template>
