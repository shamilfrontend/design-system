<script setup lang="ts">
import { inject } from 'vue';

import { QButton } from '@/components/QButton';
import { QDialogAction } from '@/components/QDialog';
import type { QDialogContainerProvider } from '@/components/QDialog';

import type { QDatePickerPropModelValue, QDatePickerProvider } from '../types';

defineOptions({
  name: 'MobilePanel'
});

const picker = inject<QDatePickerProvider>(
  'qDatePicker',
  {} as QDatePickerProvider
);

const dialog = inject<QDialogContainerProvider>(
  'qDialogContainer',
  {} as QDialogContainerProvider
);

const panelComponent = picker.panelComponent;
const transformedToDate = picker.transformedToDate;

function handlePick(payload: QDatePickerPropModelValue): void {
  dialog.emitDoneEvent({ action: QDialogAction.confirm, payload });
}
</script>

<template>
  <q-button
    class="q-dialog-mobile-panel__close"
    circle
    type="primary"
    plain
    variant="icon"
    icon="q-icon-close"
    @click="dialog.emitCloseEvent"
  />

  <component
    :is="panelComponent"
    :model-value="transformedToDate as any"
    class="q-dialog-mobile-panel__dialog-view"
    @pick="handlePick"
  />
</template>
