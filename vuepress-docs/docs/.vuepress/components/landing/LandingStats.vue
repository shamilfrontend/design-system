<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import ProgressRing from './ProgressRing.vue';
import type { LandingStatsSection } from '../../data/landing/types';

interface Props {
  content: LandingStatsSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="stats"
  >
    <div class="landing-stats">
      <div
        v-for="item in content.items"
        :key="item.label"
        class="landing-stats__item"
      >
        <ProgressRing :value="item.value" :percent="item.percent" />
        <p class="landing-stats__label">{{ item.label }}</p>
      </div>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @include landing-breakpoint(lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include landing-breakpoint(sm) {
    grid-template-columns: 1fr;
  }

  &__item {
    text-align: center;
  }

  &__label {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
    color: var(--landing-text-muted);
  }
}
</style>
