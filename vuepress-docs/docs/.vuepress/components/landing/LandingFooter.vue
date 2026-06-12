<script setup lang="ts">
import type { LandingFooterSection } from '../../data/landing/types';

interface Props {
  content: LandingFooterSection;
}

defineProps<Props>();
</script>

<template>
  <footer class="landing-footer">
    <p>{{ content.text }}</p>
    <a
      class="landing-footer__netlify"
      href="https://www.netlify.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        :src="content.netlifyBadge"
        alt="Deploys by Netlify"
        width="114"
        height="32"
        loading="lazy"
      />
    </a>
  </footer>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-footer {
  padding: 40px 24px 48px;
  text-align: center;
  border-top: 1px solid var(--landing-border);
  color: var(--landing-text-muted);
  font-size: 14px;

  p {
    margin: 0 0 16px;
  }

  &__netlify {
    display: inline-block;

    &:focus-visible {
      @include landing-focus-ring;
      border-radius: 4px;
    }

    img {
      height: 32px;
      opacity: 0.8;
      transition: opacity 0.2s ease;
    }

    &:hover img {
      opacity: 1;
    }
  }
}
</style>
