<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingStyleGridSection } from '../../data/landing/types';

interface Props {
  content: LandingStyleGridSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="style-grid"
  >
    <div class="landing-style-grid">
      <a
        v-for="item in content.items"
        :key="item.title"
        :href="item.link"
        class="landing-style-grid__card"
        :target="item.external ? '_blank' : undefined"
        :rel="item.external ? 'noopener noreferrer' : undefined"
      >
        <span class="landing-style-grid__icon">{{ item.icon }}</span>
        <h3 class="landing-style-grid__title">{{ item.title }}</h3>
        <p class="landing-style-grid__text">{{ item.description }}</p>
      </a>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-style-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include landing-breakpoint(xl) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include landing-breakpoint(sm) {
    grid-template-columns: 1fr;
  }

  &__card {
    display: block;
    padding: 28px 24px;
    border: 1px solid var(--landing-border);
    border-radius: var(--landing-radius);
    background: var(--landing-surface);
    text-decoration: none;
    transition: border-color 0.2s ease, transform 0.2s ease;

    &:hover {
      border-color: var(--landing-primary);
      transform: translateY(-2px);
    }

    &:focus-visible {
      @include landing-focus-ring;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    border-radius: 10px;
    background: var(--landing-primary);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

  &__title {
    margin: 0 0 8px;
    font-size: 17px;
    font-weight: 700;
    color: var(--landing-text);
  }

  &__text {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--landing-text-muted);
  }
}
</style>
