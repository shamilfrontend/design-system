<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

defineOptions({ name: 'QWatermark'});

const props = defineProps({
  content: { type: String, default: 'Watermark' },
  gapX: { type: Number, default: 100 },
  gapY: { type: Number, default: 100 },
  rotate: { type: Number, default: -22 },
  zIndex: { type: Number, default: 9 }
});

const canvasRef = ref<HTMLCanvasElement | null>(null);
const bgStyle = ref<Record<string, string | number>>({});

function draw(): void {
  const canvas = canvasRef.value;

  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  if (!ctx) return;

  canvas.width = props.gapX;
  canvas.height = props.gapY;
  ctx.clearRect(0, 0, props.gapX, props.gapY);
  ctx.translate(props.gapX / 2, props.gapY / 2);
  ctx.rotate((props.rotate * Math.PI) / 180);
  ctx.fillStyle = 'rgba(110, 107, 123, 0.15)';
  ctx.font = '14px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(props.content, 0, 0);
  bgStyle.value = {
    backgroundImage: `url(${canvas.toDataURL()})`,
    backgroundRepeat: 'repeat',
    zIndex: props.zIndex
  };
}

onMounted(draw);

watch(
  () => [props.content, props.gapX, props.gapY, props.rotate],
  draw
);

const wrapperStyle = computed<Record<string, string>>(() => ({
  position: 'relative'
}));
</script>

<template>
  <div
    class="q-watermark"
    :style="wrapperStyle"
  >
    <slot />
    <canvas
      ref="canvasRef"
      class="q-watermark__canvas"
      aria-hidden="true"
    />
    <div
      class="q-watermark__overlay"
      :style="bgStyle"
      aria-hidden="true"
    />
  </div>
</template>
