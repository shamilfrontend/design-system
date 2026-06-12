<script setup lang="ts">
import { computed } from 'vue';
import LandingSection from './LandingSection.vue';
import { resolveReviewLayout } from './utils/review-layout';
import type { LandingReviewsSection } from '../../data/landing/types';

interface Props {
  content: LandingReviewsSection;
}

const props = defineProps<Props>();

const layouts = computed(() =>
  props.content.items.map((item, index) =>
    resolveReviewLayout(index, item.layout)
  )
);
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="reviews"
  >
    <div class="landing-reviews">
      <div class="landing-reviews__cloud">
        <blockquote
          v-for="(item, index) in content.items"
          :key="item.name"
          class="landing-reviews__bubble"
          :style="{
            top: layouts[index]?.top,
            left: layouts[index]?.left,
            transform: `rotate(${layouts[index]?.rotate ?? 0}deg)`
          }"
        >
          <p class="landing-reviews__quote">«{{ item.quote }}»</p>
          <footer class="landing-reviews__author">
            <span class="landing-reviews__avatar" aria-hidden="true">
              {{ item.name[0] }}
            </span>
            <span>
              <strong>{{ item.name }}</strong>
              <span class="landing-reviews__role">{{ item.role }}</span>
            </span>
          </footer>
        </blockquote>
      </div>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-reviews {
  &__cloud {
    position: relative;
    min-height: 420px;

    @include landing-breakpoint(md) {
      min-height: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &__bubble {
    position: absolute;
    max-width: 280px;
    margin: 0;
    padding: 20px;
    border: 1px solid var(--landing-border);
    border-radius: var(--landing-radius-lg);
    background: var(--landing-surface);

    @include landing-breakpoint(md) {
      position: static;
      max-width: none;
      transform: none !important;
    }
  }

  &__quote {
    margin: 0 0 16px;
    font-size: 14px;
    line-height: 1.6;
    color: var(--landing-text-muted);
    font-style: italic;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: var(--landing-text);
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--landing-primary);
    color: #fff;
    font-weight: 700;
    flex-shrink: 0;
  }

  &__role {
    display: block;
    font-size: 12px;
    color: var(--landing-text-muted);
    font-weight: 400;
  }
}
</style>
