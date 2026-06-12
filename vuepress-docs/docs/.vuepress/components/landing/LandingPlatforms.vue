<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import OrbitalGraphic from './OrbitalGraphic.vue';
import type { LandingPlatformsSection } from '../../data/landing/types';

interface Props {
  content: LandingPlatformsSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="platforms"
  >
    <div class="landing-platforms">
      <OrbitalGraphic
        variant="platforms"
        size="md"
        :labels="content.labels"
      />
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
.landing-platforms {
  display: flex;
  justify-content: center;
  padding: 24px 0;
}
</style>
