<script setup lang="ts">
import type { PropType } from 'vue';

import { t } from '@/qComponents/locale';

import type {
  QPageHeaderPropBack,
  QPageHeaderPropSubtitle,
  QPageHeaderPropTitle
} from './types';

defineOptions({
  name: 'QPageHeader',
});

defineProps({
  title: {
    type: String as PropType<QPageHeaderPropTitle>,
    default: null
  },
  subtitle: {
    type: String as PropType<QPageHeaderPropSubtitle>,
    default: null
  },
  back: {
    type: Boolean as PropType<QPageHeaderPropBack>,
    default: false
  }
});

const emit = defineEmits<{
  back: [];
}>();

function handleBack(): void {
  emit('back');
}
</script>

<template>
  <div class="q-page-header">
    <div class="q-page-header__top">
      <button
        v-if="back"
        type="button"
        class="q-page-header__back q-icon-arrow-left"
        :aria-label="t('QPageHeader.back')"
        @click="handleBack"
      />
      <div class="q-page-header__heading">
        <div
          v-if="$slots.breadcrumb"
          class="q-page-header__breadcrumb"
        >
          <slot name="breadcrumb" />
        </div>
        <h1
          v-if="title || $slots.title"
          class="q-page-header__title"
        >
          <slot name="title">{{ title }}</slot>
        </h1>
        <p
          v-if="subtitle || $slots.subtitle"
          class="q-page-header__subtitle"
        >
          <slot name="subtitle">{{ subtitle }}</slot>
        </p>
      </div>
      <div
        v-if="$slots.extra"
        class="q-page-header__extra"
      >
        <slot name="extra" />
      </div>
    </div>
    <div
      v-if="$slots.default"
      class="q-page-header__content"
    >
      <slot />
    </div>
  </div>
</template>
