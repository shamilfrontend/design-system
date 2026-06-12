<script setup lang="ts">
import LandingButton from './LandingButton.vue';
import OrbitalGraphic from './OrbitalGraphic.vue';
import type { LandingHeroSection } from '../../data/landing/types';

interface Props {
  content: LandingHeroSection;
}

defineProps<Props>();
</script>

<template>
  <section class="landing-hero" aria-label="Главный экран">
    <div class="landing-hero__inner">
      <div class="landing-hero__content">
        <img
          class="landing-hero__logo"
          src="/qui-logo.svg"
          alt="Qui Max"
          width="64"
          height="64"
        />
        <h1 class="landing-hero__title">{{ content.title }}</h1>
        <p class="landing-hero__subtitle">{{ content.subtitle }}</p>
        <div class="landing-hero__actions">
          <LandingButton
            v-for="action in content.actions"
            :key="action.text"
            :action="action"
          />
        </div>
      </div>
      <div class="landing-hero__graphic">
        <OrbitalGraphic variant="hero" size="lg" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-hero {
  padding: 80px 24px 0;
  min-height: 70vh;
  display: flex;
  align-items: center;

  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    max-width: var(--landing-max-width);
    margin: 0 auto;
    width: 100%;
  }

  &__logo {
    margin-bottom: 24px;
  }

  &__title {
    margin: 0 0 20px;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 800;
    line-height: 1.1;
    background: linear-gradient(135deg, #fff 30%, var(--landing-primary-light));
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &__subtitle {
    margin: 0 0 36px;
    max-width: 520px;
    font-size: 18px;
    line-height: 1.7;
    color: var(--landing-text-muted);
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }

  &__graphic {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @include landing-breakpoint(lg) {
    padding-top: 48px;
    min-height: auto;

    .landing-hero__inner {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .landing-hero__subtitle {
      margin-left: auto;
      margin-right: auto;
    }

    .landing-hero__actions {
      justify-content: center;
    }

    .landing-hero__graphic {
      order: -1;
    }
  }
}
</style>
