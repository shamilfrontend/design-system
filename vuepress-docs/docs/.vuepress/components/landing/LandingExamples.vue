<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingExamplesSection } from '../../data/landing/types';

interface Props {
  content: LandingExamplesSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="examples"
  >
    <div class="landing-examples">
      <div class="landing-examples__track">
        <figure
          v-for="item in content.items"
          :key="item.title"
          class="landing-examples__card"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="landing-examples__image"
            :width="item.width ?? 320"
            :height="item.height ?? 200"
            loading="lazy"
          />
          <figcaption class="landing-examples__caption">
            {{ item.title }}
          </figcaption>
        </figure>
      </div>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
.landing-examples {
  overflow: hidden;

  &__track {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--landing-primary) var(--landing-surface);

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--landing-primary);
      border-radius: 3px;
    }
  }

  &__card {
    flex: 0 0 320px;
    margin: 0;
    scroll-snap-align: start;
  }

  &__image {
    display: block;
    width: 100%;
    height: 200px;
    border: 1px solid var(--landing-border);
    border-radius: var(--landing-radius);
    object-fit: cover;
    background: var(--landing-surface);
  }

  &__caption {
    margin-top: 12px;
    font-size: 14px;
    font-weight: 600;
    color: var(--landing-text-muted);
    text-align: center;
  }
}
</style>
