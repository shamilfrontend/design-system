<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import type { PropType } from 'vue';
import { t } from '@/qComponents/locale';
import type { QTourStep } from './types';

defineOptions({ name: 'QTour', componentName: 'QTour' });
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  steps: { type: Array as PropType<QTourStep[]>, default: () => [] },
  current: { type: Number, default: 0 }
});
const emit = defineEmits<{ 'update:modelValue': [value: boolean]; 'update:current': [value: number]; finish: []; }>();
const popoverStyle = ref<Record<string, string | number>>({});
const isLast = computed(() => props.current >= props.steps.length - 1);
const step = computed(() => props.steps[props.current]);
async function positionPopover(): Promise<void> {
  await nextTick();
  const s = step.value;
  if (!s) return;
  const el = document.querySelector(s.target);
  if (!el) return;
  const rect = el.getBoundingClientRect();
  popoverStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`,
    zIndex: 3000
  };
}
function close(): void { emit('update:modelValue', false); emit('finish'); }
function next(): void {
  if (isLast.value) close();
  else emit('update:current', props.current + 1);
}
function prev(): void { if (props.current > 0) emit('update:current', props.current - 1); }
watch(() => [props.modelValue, props.current], () => { if (props.modelValue) positionPopover(); });
onMounted(() => { if (props.modelValue) positionPopover(); });
</script>
<template>
  <teleport to="body">
    <div v-if="modelValue && step" class="q-tour">
      <div class="q-tour__mask" @click="close" />
      <div class="q-tour__popover" :style="popoverStyle">
        <h4 class="q-tour__title">{{ step.title }}</h4>
        <p v-if="step.description" class="q-tour__desc">{{ step.description }}</p>
        <div class="q-tour__footer">
          <button v-if="current > 0" type="button" class="q-tour__btn" @click="prev">{{ t('QTour.prev') }}</button>
          <button type="button" class="q-tour__btn q-tour__btn_primary" @click="next">{{ isLast ? t('QTour.finish') : t('QTour.next') }}</button>
        </div>
      </div>
    </div>
  </teleport>
</template>
