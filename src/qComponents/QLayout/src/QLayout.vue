<script setup lang="ts">
defineOptions({
  name: 'QLayout',
  componentName: 'QLayout'
});

defineProps({
  hasSider: { type: Boolean, default: false }
});
</script>

<template>
  <div
    class="q-layout"
    :class="{ 'q-layout_has-sider': hasSider || $slots.sidebar }"
  >
    <slot name="header" />
    <div class="q-layout__body">
      <slot name="sidebar" />
      <main class="q-layout__main">
        <slot />
      </main>
    </div>
    <slot name="footer" />
  </div>
</template>
