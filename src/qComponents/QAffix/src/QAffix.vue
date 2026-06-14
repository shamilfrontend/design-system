<script setup lang="ts">
import { computed } from 'vue';
import type { PropType, StyleValue } from 'vue';
import type { QAffixPropOffsetTop } from './types';

defineOptions({ name: 'QAffix', componentName: 'QAffix' });

const props = defineProps({
  offsetTop: { type: Number as PropType<QAffixPropOffsetTop>, default: 0 }
});

const affixStyle = computed<StyleValue>(() => ({
  position: 'sticky',
  top: `${props.offsetTop}px`,
  zIndex: 10
}));
</script>
<template>
  <div class="q-affix" :style="affixStyle"><slot /></div>
</template>
