<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingTeamSection } from '../../data/landing/types';

interface Props {
  content: LandingTeamSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection :title="content.title" :subtitle="content.subtitle" id="team">
    <div class="landing-team">
      <article
        v-for="member in content.items"
        :key="member.name"
        class="landing-team__card"
      >
        <div class="landing-team__portrait" aria-hidden="true">
          {{ member.initials }}
        </div>
        <blockquote class="landing-team__quote">
          «{{ member.quote }}»
        </blockquote>
        <footer class="landing-team__info">
          <strong>{{ member.name }}</strong>
          <span>{{ member.role }}</span>
        </footer>
      </article>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-team {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @include landing-breakpoint(md) {
    grid-template-columns: 1fr;
  }

  &__card {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 24px;
    align-items: start;
    padding: 32px;
    border: 1px solid var(--landing-border);
    border-radius: var(--landing-radius-lg);
    background: var(--landing-surface);

    @include landing-breakpoint(sm) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  &__portrait {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3a3a44, #1c1c22);
    border: 2px solid var(--landing-border);
    color: var(--landing-text-muted);
    font-size: 32px;
    font-weight: 800;

    @include landing-breakpoint(sm) {
      margin: 0 auto;
    }
  }

  &__quote {
    margin: 0 0 16px;
    font-size: 16px;
    line-height: 1.7;
    color: var(--landing-text);
    font-style: italic;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 14px;
    color: var(--landing-text-muted);

    strong {
      color: var(--landing-text);
      font-size: 16px;
    }
  }
}
</style>
