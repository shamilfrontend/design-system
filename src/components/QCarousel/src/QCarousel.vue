<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useSlots } from 'vue';

import { t } from '@/locale';

defineOptions({
  name: 'QCarousel'
});

const props = defineProps({
  autoplay: { type: Boolean, default: false },
  interval: { type: Number, default: 3000 },
  loop: { type: Boolean, default: true },
  height: { type: [String, Number], default: 300 }
});

const slots = useSlots();
const currentIndex = ref<number>(0);
let timer: ReturnType<typeof setInterval> | null = null;

const slidesCount = computed<number>(
  () => slots.default?.().filter(vnode => vnode.type).length ?? 0
);

const carouselStyle = computed<Record<string, string>>(() => ({
  height: typeof props.height === 'number' ? `${props.height}px` : props.height
}));

function goTo(index: number): void {
  if (index < 0 || index >= slidesCount.value) return;

  currentIndex.value = index;
}

function next(): void {
  if (currentIndex.value < slidesCount.value - 1) {
    currentIndex.value += 1;
  } else if (props.loop && slidesCount.value > 0) {
    currentIndex.value = 0;
  }
}

function prev(): void {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  } else if (props.loop && slidesCount.value > 0) {
    currentIndex.value = slidesCount.value - 1;
  }
}

function startAutoplay(): void {
  if (!props.autoplay || slidesCount.value <= 1) return;

  timer = setInterval(next, props.interval);
}

function stopAutoplay(): void {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
}

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
});
</script>

<template>
  <div
    class="q-carousel"
    :style="carouselStyle"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div
      class="q-carousel__track"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <slot />
    </div>
    <button
      v-if="slidesCount > 1"
      type="button"
      class="q-carousel__arrow q-carousel__arrow_prev q-icon-arrow-left"
      :aria-label="t('QCarousel.prev')"
      @click="prev"
    />
    <button
      v-if="slidesCount > 1"
      type="button"
      class="q-carousel__arrow q-carousel__arrow_next q-icon-arrow-right"
      :aria-label="t('QCarousel.next')"
      @click="next"
    />
    <div
      v-if="slidesCount > 1"
      class="q-carousel__dots"
    >
      <button
        v-for="i in slidesCount"
        :key="i"
        type="button"
        class="q-carousel__dot"
        :class="{ 'q-carousel__dot_active': currentIndex === i - 1 }"
        @click="goTo(i - 1)"
      />
    </div>
  </div>
</template>
