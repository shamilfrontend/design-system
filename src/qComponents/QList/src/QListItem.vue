<script setup lang="ts">
defineOptions({
  name: 'QListItem',
});
</script>

<template>
  <li class="q-list__item">
    <div
      v-if="$slots.prefix"
      class="q-list__prefix"
    >
      <slot name="prefix" />
    </div>
    <div class="q-list__content">
      <div
        v-if="$slots.title"
        class="q-list__title"
      >
        <slot name="title" />
      </div>
      <div
        v-if="$slots.default"
        class="q-list__description"
      >
        <slot />
      </div>
    </div>
    <div
      v-if="$slots.suffix"
      class="q-list__suffix"
    >
      <slot name="suffix" />
    </div>
  </li>
</template>
