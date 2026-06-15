<script setup lang="ts">
defineOptions({
  name: 'QCarouselItem'
});
</script>

<template>
  <div class="q-carousel__slide">
    <slot />
  </div>
</template>
