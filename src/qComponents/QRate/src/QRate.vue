<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

defineOptions({
  name: 'QRate',
  componentName: 'QRate'
});

const props = defineProps({
  modelValue: { type: Number, default: 0 },
  max: { type: Number, default: 5 },
  disabled: { type: Boolean, default: false },
  allowHalf: { type: Boolean, default: false },
  showText: { type: Boolean, default: false }
});

const emit = defineEmits<{
  'update:modelValue': [value: number];
  change: [value: number];
}>();

const stars = computed<number[]>(() =>
  Array.from({ length: props.max }, (_, i) => i + 1)
);

function setValue(value: number): void {
  if (props.disabled) return;

  emit('update:modelValue', value);
  emit('change', value);
}

function isActive(star: number): boolean {
  return star <= Math.floor(props.modelValue);
}
</script>

<template>
  <div
    class="q-rate"
    :class="{ 'q-rate_disabled': disabled }"
  >
    <button
      v-for="star in stars"
      :key="star"
      type="button"
      class="q-rate__star"
      :class="{ 'q-rate__star_active': isActive(star) }"
      :disabled="disabled"
      @click="setValue(star)"
    >
      ★
    </button>
    <span
      v-if="showText"
      class="q-rate__text"
    >
      {{ modelValue }} / {{ max }}
    </span>
  </div>
</template>
