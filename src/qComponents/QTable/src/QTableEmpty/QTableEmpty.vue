<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import image from '@/assets/empty-table-v2.svg';
import { t } from '@/qComponents/locale';

import type { QTableEmptyPropEmptyText } from './types';

defineOptions({
  name: 'QTableEmpty',
});

const props = defineProps({
  emptyText: {
    type: String as PropType<QTableEmptyPropEmptyText>,
    default: null
  }
});

const noDataText = computed<string>(
  () => props.emptyText || t('QTable.noDataText')
);
</script>

<template>
  <div class="q-table-empty">
    <slot>
      <div class="q-table-empty__image">
        <img
          :src="image"
          class="q-table-empty__img"
          :alt="noDataText ?? ''"
        />
      </div>

      <div class="q-table-empty__text">
        {{ noDataText }}
      </div>
    </slot>
  </div>
</template>
