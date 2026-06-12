<template>
  <div class="landing-section-fallback" aria-hidden="true">
    <div class="landing-section-fallback__shimmer" />
  </div>
</template>

<style lang="scss" scoped>
.landing-section-fallback {
  padding: 0 24px;
  margin-bottom: var(--landing-section-gap);

  &__shimmer {
    max-width: var(--landing-max-width);
    height: 200px;
    margin: 0 auto;
    border-radius: var(--landing-radius);
    background: linear-gradient(
      90deg,
      var(--landing-surface) 0%,
      var(--landing-surface-elevated) 50%,
      var(--landing-surface) 100%
    );
    background-size: 200% 100%;
    animation: landing-shimmer 1.2s ease-in-out infinite;
  }
}

@keyframes landing-shimmer {
  0% {
    background-position: 100% 0;
  }

  100% {
    background-position: -100% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .landing-section-fallback__shimmer {
    animation: none;
  }
}
</style>
