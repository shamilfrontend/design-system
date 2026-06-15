<script setup lang="ts">
defineOptions({
  name: 'QSidebar'
});

defineProps({
  width: { type: [String, Number], default: 260 },
  collapsed: { type: Boolean, default: false },
  collapsible: { type: Boolean, default: false }
});
</script>

<template>
  <aside
    class="q-sidebar"
    :class="{ 'q-sidebar_collapsed': collapsed }"
    :style="{
      width: collapsed
        ? '64px'
        : typeof width === 'number'
          ? `${width}px`
          : width
    }"
  >
    <slot />
  </aside>
</template>
