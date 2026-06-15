<script setup lang="ts">
defineOptions({
  name: 'QMenu'
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
