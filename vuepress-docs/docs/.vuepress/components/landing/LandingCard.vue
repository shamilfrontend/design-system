<script setup lang="ts">
interface Props {
  icon: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <article class="landing-card">
    <div class="landing-card__icon">{{ icon }}</div>
    <h3 class="landing-card__title">{{ title }}</h3>
    <p class="landing-card__text">{{ description }}</p>
  </article>
</template>

<style lang="scss" scoped>
.landing-card {
  background: var(--landing-surface);
  border: 1px solid var(--landing-border);
  border-radius: var(--landing-radius);
  padding: 32px;
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: rgb(115 103 240 / 40%);
    transform: translateY(-2px);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
    border-radius: 10px;
    background: rgb(115 103 240 / 15%);
    color: var(--landing-primary-light);
    font-size: 24px;
  }

  &__title {
    margin: 0 0 12px;
    font-size: 20px;
    font-weight: 700;
    color: var(--landing-text);
  }

  &__text {
    margin: 0;
    font-size: 15px;
    line-height: 1.6;
    color: var(--landing-text-muted);
  }
}
</style>
