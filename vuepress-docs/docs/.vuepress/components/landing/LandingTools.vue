<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingToolsSection } from '../../data/landing/types';

interface Props {
  content: LandingToolsSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection :title="content.title" :subtitle="content.subtitle" id="tools">
    <div class="landing-tools">
      <component
        :is="tool.link && !tool.comingSoon ? 'a' : 'div'"
        v-for="tool in content.items"
        :key="tool.name"
        :href="tool.link"
        class="landing-tools__card"
        :class="{ 'landing-tools__card--disabled': tool.comingSoon }"
        :target="tool.link?.startsWith('http') ? '_blank' : undefined"
        :rel="tool.link?.startsWith('http') ? 'noopener noreferrer' : undefined"
      >
        <h3 class="landing-tools__name">{{ tool.name }}</h3>
        <p class="landing-tools__desc">{{ tool.description }}</p>
        <span v-if="tool.comingSoon" class="landing-tools__badge">Скоро</span>
      </component>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-tools {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @include landing-breakpoint(lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include landing-breakpoint(sm) {
    grid-template-columns: 1fr;
  }

  &__card {
    position: relative;
    display: block;
    padding: 28px 24px;
    border: 1px solid var(--landing-border);
    border-radius: var(--landing-radius);
    background: var(--landing-surface);
    text-decoration: none;
    transition: border-color 0.2s ease;

    &:not(&--disabled):hover {
      border-color: var(--landing-primary);
    }

    &:not(&--disabled):focus-visible {
      @include landing-focus-ring;
    }

    &--disabled {
      opacity: 0.7;
      cursor: default;
    }
  }

  &__name {
    margin: 0 0 8px;
    font-size: 20px;
    font-weight: 700;
    color: var(--landing-primary-light);
  }

  &__desc {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--landing-text-muted);
  }

  &__badge {
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 4px 10px;
    border-radius: 12px;
    background: rgb(115 103 240 / 20%);
    color: var(--landing-primary-light);
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
  }
}
</style>
