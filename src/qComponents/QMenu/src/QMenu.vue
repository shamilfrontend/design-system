<script setup lang="ts">
defineOptions({
  name: 'QMenu',
  componentName: 'QMenu'
});
</script>

<template>
  <ul
    class="q-menu"
    role="menu"
  >
    <slot />
  </ul>
</template>
