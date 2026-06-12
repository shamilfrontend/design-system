<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import LandingHero from './LandingHero.vue';
import LandingSectionFallback from './LandingSectionFallback.vue';
import LandingValues from './LandingValues.vue';
import { landingContent } from '../../data/landing';

const LandingPlatforms = defineAsyncComponent(
  () => import('./LandingPlatforms.vue')
);
const LandingStats = defineAsyncComponent(() => import('./LandingStats.vue'));
const LandingCustomization = defineAsyncComponent(
  () => import('./LandingCustomization.vue')
);
const LandingStyleGrid = defineAsyncComponent(
  () => import('./LandingStyleGrid.vue')
);
const LandingTools = defineAsyncComponent(() => import('./LandingTools.vue'));
const LandingExamples = defineAsyncComponent(
  () => import('./LandingExamples.vue')
);
const LandingReviews = defineAsyncComponent(
  () => import('./LandingReviews.vue')
);
const LandingTeam = defineAsyncComponent(() => import('./LandingTeam.vue'));
const LandingAnnouncements = defineAsyncComponent(
  () => import('./LandingAnnouncements.vue')
);
const LandingFooter = defineAsyncComponent(
  () => import('./LandingFooter.vue')
);
</script>

<template>
  <div class="landing-page">
    <LandingHero :content="landingContent.hero" />
    <LandingValues :content="landingContent.values" />

    <Suspense>
      <template #default>
        <LandingPlatforms :content="landingContent.platforms" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingStats :content="landingContent.stats" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingCustomization :content="landingContent.customization" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingStyleGrid :content="landingContent.styleGrid" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingTools :content="landingContent.tools" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingExamples :content="landingContent.examples" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingReviews :content="landingContent.reviews" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingTeam :content="landingContent.team" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingAnnouncements :content="landingContent.announcements" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>

    <Suspense>
      <template #default>
        <LandingFooter :content="landingContent.footer" />
      </template>
      <template #fallback>
        <LandingSectionFallback />
      </template>
    </Suspense>
  </div>
</template>
