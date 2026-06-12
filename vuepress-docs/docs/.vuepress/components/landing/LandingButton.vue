<script setup lang="ts">
import type { LandingAction } from '../../data/landing/types';

interface Props {
  action: LandingAction;
}

const props = defineProps<Props>();

const isExternal = props.action.link.startsWith('http');
</script>

<template>
  <a
    :href="action.link"
    class="landing-button"
    :class="`landing-button--${action.type}`"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    {{ action.text }}
  </a>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.landing-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;

  &:focus-visible {
    @include landing-focus-ring;
  }

  &--primary {
    background: var(--landing-primary);
    color: #fff;
    box-shadow: 0 8px 25px -8px var(--landing-primary);

    &:hover {
      background: #5e50ee;
      transform: translateY(-1px);
    }
  }

  &--secondary {
    background: transparent;
    border: 1px solid var(--landing-border);
    color: var(--landing-text);

    &:hover {
      border-color: var(--landing-primary);
      color: var(--landing-primary-light);
    }
  }
}
</style>
