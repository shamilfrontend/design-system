<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import type { PropType } from 'vue';
import type { QAnchorItem, QAnchorPropItems, QAnchorPropOffset } from './types';

defineOptions({ name: 'QAnchor', componentName: 'QAnchor' });

const props = defineProps({
  items: { type: Array as PropType<QAnchorPropItems>, default: () => [] },
  offset: { type: Number as PropType<QAnchorPropOffset>, default: 0 },
  container: { type: [String, Object] as PropType<string | HTMLElement | null>, default: null }
});

const activeKey = ref<string>('');

function getContainer(): HTMLElement | Window {
  if (typeof props.container === 'string') {
    const el = document.querySelector(props.container);

    return el instanceof HTMLElement ? el : window;
  }
  if (props.container instanceof HTMLElement) return props.container;
  return window;
}

function handleScroll(): void {
  const container = getContainer();
  const scrollTop = container instanceof Window ? window.scrollY : container.scrollTop;
  let current = props.items[0]?.key ?? '';
  for (const item of props.items) {
    const el = document.querySelector(item.href);
    if (el) {
      const top = el.getBoundingClientRect().top + scrollTop - props.offset;
      if (scrollTop >= top - 10) current = item.key;
    }
  }
  activeKey.value = current;
}

function scrollTo(href: string): void {
  const el = document.querySelector(href);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

onMounted(() => {
  const container = getContainer();
  container.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});
onUnmounted(() => {
  getContainer().removeEventListener('scroll', handleScroll);
});
</script>
<template>
  <nav class="q-anchor" aria-label="Table of contents">
    <ul class="q-anchor__list">
      <li v-for="item in items" :key="item.key" class="q-anchor__item">
        <a
          :href="item.href"
          class="q-anchor__link"
          :class="{ 'q-anchor__link_active': activeKey === item.key }"
          @click.prevent="scrollTo(item.href)"
        >{{ item.title }}</a>
      </li>
    </ul>
  </nav>
</template>
