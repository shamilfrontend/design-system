<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  title: string;
  subtitle?: string;
  id?: string;
}

const props = defineProps<Props>();

const titleId = computed(() => (props.id ? `${props.id}-title` : undefined));
</script>

<template>
  <section
    :id="id"
    class="landing-section"
    :aria-labelledby="titleId"
  >
    <div class="landing-section__inner">
      <h2 :id="titleId" class="landing-section__title">{{ title }}</h2>
      <p v-if="subtitle" class="landing-section__subtitle">{{ subtitle }}</p>
      <slot />
    </div>
  </section>
</template>
