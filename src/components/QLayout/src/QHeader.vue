<script setup lang="ts">
defineOptions({
  name: 'QHeader'
});

defineProps({
  fixed: { type: Boolean, default: false },
  height: { type: [String, Number], default: 64 }
});
</script>

<template>
  <header
    class="q-header"
    :class="{ 'q-header_fixed': fixed }"
    :style="{ height: typeof height === 'number' ? `${height}px` : height }"
  >
    <slot />
  </header>
</template>
