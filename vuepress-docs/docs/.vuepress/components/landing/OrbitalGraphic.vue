<script setup lang="ts">
import { computed } from 'vue';

interface OrbitLabel {
  label: string;
  angle: number;
}

interface Props {
  variant?: 'hero' | 'platforms';
  labels?: OrbitLabel[];
  size?: 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'hero',
  labels: () => [],
  size: 'lg'
});

const ringCount = computed(() => (props.variant === 'hero' ? 4 : 3));

const rings = computed(() =>
  Array.from({ length: ringCount.value }, (_, index) => ({
    index,
    size: 100 - index * 18,
    duration: 90 + index * 30,
    reverse: index % 2 === 1
  }))
);

const dots = computed(() => {
  if (props.variant === 'hero') {
    return [
      { angle: 45, color: '#ff9f43', ringIndex: 0 },
      { angle: 160, color: '#7367f0', ringIndex: 1 },
      { angle: 280, color: '#9e95f5', ringIndex: 2 },
      { angle: 320, color: '#00cfe8', ringIndex: 3 }
    ];
  }

  return [];
});
</script>

<template>
  <div
    class="orbital-graphic"
    :class="[`orbital-graphic--${variant}`, `orbital-graphic--${size}`]"
    aria-hidden="true"
  >
    <div class="orbital-graphic__scene">
      <div
        v-for="ring in rings"
        :key="ring.index"
        class="orbital-graphic__ring"
        :class="{ 'orbital-graphic__ring--reverse': ring.reverse }"
        :style="{
          width: `${ring.size}%`,
          height: `${ring.size}%`,
          animationDuration: `${ring.duration}s`
        }"
      />

      <div class="orbital-graphic__planet" />

      <div
        v-for="(dot, index) in dots"
        :key="`dot-${index}`"
        class="orbital-graphic__dot"
        :style="{
          '--dot-angle': `${dot.angle}deg`,
          '--dot-color': dot.color,
          '--dot-radius': `${(100 - dot.ringIndex * 18) / 2}%`
        }"
      />

      <div
        v-for="(item, index) in labels"
        :key="`label-${index}`"
        class="orbital-graphic__label"
        :style="{ '--label-angle': `${item.angle}deg` }"
      >
        <span class="orbital-graphic__label-text">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/landing/mixins' as *;

.orbital-graphic {
  position: relative;
  width: 100%;
  aspect-ratio: 1;

  &--lg {
    max-width: 520px;
  }

  &--md {
    max-width: 400px;
    margin: 0 auto;
  }

  &__scene {
    position: relative;
    width: 100%;
    height: 100%;
  }

  &__ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgb(255 255 255 / 10%);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: orbit-spin 90s linear infinite;

    &--reverse {
      animation-name: orbit-spin-reverse;
    }
  }

  &__planet {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28%;
    height: 28%;
    border-radius: 50%;
    background:
      repeating-linear-gradient(
        -45deg,
        rgb(94 80 238 / 90%) 0,
        rgb(94 80 238 / 90%) 8px,
        rgb(115 103 240 / 70%) 8px,
        rgb(115 103 240 / 70%) 16px
      ),
      radial-gradient(circle at 35% 35%, #9e95f5, #5e50ee 70%);
    box-shadow:
      0 0 60px var(--landing-primary-glow),
      inset 0 -4px 12px rgb(0 0 0 / 30%);
    transform: translate(-50%, -50%);
  }

  &__dot {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--dot-color);
    box-shadow: 0 0 12px var(--dot-color);
    transform: rotate(var(--dot-angle)) translateX(var(--dot-radius))
      rotate(calc(-1 * var(--dot-angle)));
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: rotate(var(--label-angle));
  }

  &__label-text {
    position: absolute;
    top: -14px;
    left: 42%;
    padding: 6px 14px;
    border: 1px solid var(--landing-border);
    border-radius: 20px;
    background: var(--landing-surface-elevated);
    color: var(--landing-text);
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    transform: rotate(calc(-1 * var(--label-angle)));
  }

  &--platforms &__label-text {
    left: 46%;
  }
}

@include landing-breakpoint(md) {
  .orbital-graphic--lg {
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
