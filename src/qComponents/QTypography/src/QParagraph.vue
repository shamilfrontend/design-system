<script setup lang="ts">
defineOptions({ name: 'QParagraph'});
defineProps({ ellipsis: { type: Boolean, default: false } });
</script>
<template>
  <p class="q-paragraph" :class="{ 'q-paragraph_ellipsis': ellipsis }"><slot /></p>
</template>
