<script setup lang="ts">
import { computed, getCurrentInstance, onMounted } from 'vue';
import type { PropType, Ref } from 'vue';

defineOptions({
  name: 'QProgressIndicatiorContainer',
});

const props = defineProps({
  isShown: {
    type: Object as PropType<Ref<boolean>>,
    required: true
  },
  isStarted: {
    type: Object as PropType<Ref<boolean>>,
    required: true
  },
  progress: {
    type: Object as PropType<Ref<number>>,
    required: true
  }
});

const instance = getCurrentInstance();

const isShownValue = computed<boolean>(() => props.isShown.value);
const isStartedValue = computed<boolean>(() => props.isStarted.value);
const progressValue = computed<number>(() => props.progress.value);

const classes = computed<Record<string, boolean>>(() => ({
  'q-progress-indicatior': true,
  'q-progress-indicatior_shown': isShownValue.value
}));

const styles = computed<Record<string, string>>(() => ({
  transform: `translateX(${-100 + progressValue.value}%)`
}));

function mountInstance(): void {
  if (!instance?.vnode?.el) return;

  instance.vnode.el.remove();
  document.body.appendChild(instance.vnode.el as Node);
}

onMounted(() => {
  mountInstance();
});
</script>

<template>
  <div
    :class="classes"
    :style="styles"
    role="progressbar"
    :aria-busy="isStartedValue || undefined"
    :aria-valuenow="progressValue"
    aria-valuemin="0"
    aria-valuemax="100"
  />
</template>
