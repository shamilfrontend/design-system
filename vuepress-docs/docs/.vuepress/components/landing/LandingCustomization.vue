<script setup lang="ts">
import LandingSection from './LandingSection.vue';
import type { LandingCustomizationSection } from '../../data/landing/types';

interface Props {
  content: LandingCustomizationSection;
}

defineProps<Props>();
</script>

<template>
  <LandingSection
    :title="content.title"
    :subtitle="content.subtitle"
    id="customization"
  >
    <div class="landing-customization">
      <div class="landing-customization__mockup">
        <div class="landing-customization__phone">
          <img
            :src="content.image"
            alt="Пример компонентов Qui Max"
            class="landing-customization__image"
            width="256"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
      <ul class="landing-customization__list">
        <li
          v-for="point in content.points"
          :key="point"
          class="landing-customization__item"
        >
          {{ point }}
        </li>
      </ul>
    </div>
  </LandingSection>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-customization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @include landing-breakpoint(md) {
    grid-template-columns: 1fr;
  }

  &__mockup {
    display: flex;
    justify-content: center;
  }

  &__phone {
    width: 280px;
    padding: 12px;
    border: 1px solid var(--landing-border);
    border-radius: 24px;
    background: var(--landing-surface);
    box-shadow: 0 24px 48px rgb(0 0 0 / 40%);
  }

  &__image {
    display: block;
    width: 100%;
    border-radius: 14px;
    object-fit: cover;
  }

  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    position: relative;
    padding: 16px 0 16px 28px;
    font-size: 16px;
    line-height: 1.6;
    color: var(--landing-text-muted);
    border-bottom: 1px solid var(--landing-border);

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 22px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--landing-primary);
      box-shadow: 0 0 8px var(--landing-primary-glow);
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
