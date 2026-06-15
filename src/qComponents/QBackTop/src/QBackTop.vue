<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import { t } from '@/qComponents/locale';

defineOptions({
  name: 'QBackTop',
});

const props = defineProps({
  visibilityHeight: { type: Number, default: 200 },
  right: { type: Number, default: 40 },
  bottom: { type: Number, default: 40 }
});

const visible = ref<boolean>(false);

function handleScroll(): void {
  visible.value = window.scrollY >= props.visibilityHeight;
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition name="q-fade">
    <button
      v-show="visible"
      type="button"
      class="q-back-top q-icon-arrow-up"
      :style="{ right: `${right}px`, bottom: `${bottom}px` }"
      :aria-label="t('QBackTop.ariaLabel')"
      @click="scrollToTop"
    />
  </transition>
</template>
