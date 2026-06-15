<script setup lang="ts">
import { computed } from 'vue';

import { t } from '@/qComponents/locale';

defineOptions({
  name: 'QTag',
});

const props = defineProps({
  /**
   * whether is close button shown
   */
  closable: {
    type: Boolean,
    default: false
  },
  /**
   * accessible label for close button
   */
  ariaLabel: {
    type: String,
    default: null
  }
});

const emit = defineEmits([
  /**
   * triggers when the close button is clicked
   */
  'close'
]);

const closeLabel = computed<string>(() => props.ariaLabel ?? t('QTag.close'));

function handleClose(event: MouseEvent): void {
  emit('close', event);
}
</script>

<template>
  <div
    class="q-tag"
    :class="{
      'q-tag_closable': closable
    }"
  >
    <div class="q-tag__text">
      <!-- @slot text of QTag -->
      <slot />
    </div>
    <button
      v-if="closable"
      type="button"
      class="q-tag__close q-icon-close"
      :aria-label="closeLabel"
      @click.stop="handleClose"
    />
  </div>
</template>
