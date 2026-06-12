<script setup lang="ts">
import LandingCard from './LandingCard.vue';
import LandingSection from './LandingSection.vue';
import type { LandingValuesSection } from '../../data/landing/types';

interface Props {
  content: LandingValuesSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="values"
  >
    <div class="landing-values">
      <LandingCard
        v-for="item in content.items"
        :key="item.title"
        class="landing-values__card"
        :icon="item.icon"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @include landing-breakpoint(lg) {
    grid-template-columns: 1fr;
  }
}
</style>
