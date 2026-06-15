<script setup lang="ts">
import { computed, ref } from 'vue';
import type { PropType } from 'vue';

import { t } from '@/qComponents/locale';

import type { QMentionOption } from './types';

defineOptions({ name: 'QMentions'});
const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array as PropType<QMentionOption[]>, default: () => [] },
  prefix: { type: String, default: '@' },
  placeholder: { type: String, default: null }
});
const emit = defineEmits<{ 'update:modelValue': [value: string]; change: [value: string]; select: [option: QMentionOption]; }>();
const textarea = ref<HTMLTextAreaElement | null>(null);
const isOpen = ref(false);
const filtered = computed(() => {
  const val = props.modelValue;
  const idx = val.lastIndexOf(props.prefix);
  if (idx === -1) return [];
  const query = val.slice(idx + 1).toLowerCase();
  return props.options.filter(o => o.label.toLowerCase().includes(query));
});
const placeholderText = computed(() => props.placeholder ?? t('QMentions.placeholder'));
function onInput(e: Event): void {
  const value = (e.target as HTMLTextAreaElement).value;
  emit('update:modelValue', value);
  emit('change', value);
  isOpen.value = value.includes(props.prefix);
}
function selectOption(option: QMentionOption): void {
  const val = props.modelValue;
  const idx = val.lastIndexOf(props.prefix);
  const next = idx === -1 ? val + option.label : val.slice(0, idx) + option.label + ' ';
  emit('update:modelValue', next);
  emit('select', option);
  isOpen.value = false;
  textarea.value?.focus();
}
</script>
<template>
  <div class="q-mentions">
    <textarea
      ref="textarea"
      class="q-mentions__input"
      :value="modelValue"
      :placeholder="placeholderText"
      rows="3"
      @input="onInput"
    />
    <ul v-if="isOpen && filtered.length" class="q-mentions__dropdown">
      <li v-for="opt in filtered" :key="opt.value" class="q-mentions__option" @mousedown.prevent="selectOption(opt)">{{ opt.label }}</li>
    </ul>
  </div>
</template>
