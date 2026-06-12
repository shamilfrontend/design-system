<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingAnnouncementsSection } from '../../data/landing/types';

interface Props {
  content: LandingAnnouncementsSection;
}

defineProps<Props>();

const colorMap = {
  orange: 'linear-gradient(135deg, #ff9f43, #ea5455)',
  teal: 'linear-gradient(135deg, #00cfe8, #28c76f)',
  purple: 'linear-gradient(135deg, #7367f0, #9e95f5)'
} as const;
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="announcements"
  >
    <div class="landing-announcements">
      <article
        v-for="item in content.items"
        :key="item.title"
        class="landing-announcements__card"
        :style="{ background: colorMap[item.color] }"
      >
        <span class="landing-announcements__star" aria-hidden="true">★</span>
        <h3 class="landing-announcements__title">{{ item.title }}</h3>
        <p class="landing-announcements__text">{{ item.description }}</p>
      </article>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-announcements {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding-bottom: 80px;

  @include landing-breakpoint(lg) {
    grid-template-columns: 1fr;
  }

  &__card {
    position: relative;
    padding: 32px 28px;
    border-radius: var(--landing-radius-lg);
    color: #fff;
    overflow: hidden;
  }

  &__star {
    display: block;
    margin-bottom: 16px;
    font-size: 24px;
    opacity: 0.9;
  }

  &__title {
    margin: 0 0 12px;
    font-size: 22px;
    font-weight: 800;
  }

  &__text {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    opacity: 0.95;
  }
}
</style>
