<script setup lang="ts">
defineOptions({
  name: 'QFooter'
});

defineProps({
  fixed: { type: Boolean, default: false },
  height: { type: [String, Number], default: 48 }
});
</script>

<template>
  <footer
    class="q-footer"
    :class="{ 'q-footer_fixed': fixed }"
    :style="{ height: typeof height === 'number' ? `${height}px` : height }"
  >
    <slot />
  </footer>
</template>
