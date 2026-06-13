<script setup lang="ts">
defineOptions({
  name: 'QCarouselItem',
  componentName: 'QCarouselItem'
});
</script>

<template>
  <div class="q-carousel__slide">
    <slot />
  </div>
</template>
