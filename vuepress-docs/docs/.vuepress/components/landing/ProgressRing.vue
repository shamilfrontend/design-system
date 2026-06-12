<script setup lang="ts">
import {
  getStrokeOffset,
  PROGRESS_RING_CIRCUMFERENCE
} from './utils/progress-ring';

interface Props {
  value: string;
  percent: number;
}

defineProps<Props>();
</script>

<template>
  <div class="progress-ring">
    <svg viewBox="0 0 120 120" class="progress-ring__svg" aria-hidden="true">
      <circle
        class="progress-ring__track"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke-width="6"
      />
      <circle
        class="progress-ring__progress"
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        :stroke-dasharray="PROGRESS_RING_CIRCUMFERENCE"
        :stroke-dashoffset="getStrokeOffset(percent)"
        transform="rotate(-90 60 60)"
      />
    </svg>
    <span class="progress-ring__value">{{ value }}</span>
  </div>
</template>

<style lang="scss" scoped>
.progress-ring {
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto 16px;

  &__svg {
    width: 100%;
    height: 100%;
  }

  &__track {
    stroke: var(--landing-border);
  }

  &__progress {
    stroke: var(--landing-primary);
    filter: drop-shadow(0 0 8px var(--landing-primary-glow));
  }

  &__value {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 22px;
    font-weight: 800;
    color: var(--landing-text);
    transform: translate(-50%, -50%);
  }
}
</style>
