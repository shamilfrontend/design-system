import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import {
  QContainer,
  QFooter,
  QHeader,
  QLayout,
  QSidebar
} from '@/qComponents/QLayout';

const storyMetadata: Meta = {
  title: 'Basic/QLayout',
  component: QLayout
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QLayout, QHeader, QSidebar, QFooter, QContainer },
    template: `
      <q-layout style="min-height: 400px; border: 1px solid var(--color-border)">
        <template #header>
          <q-header>Header</q-header>
        </template>
        <template #sidebar>
          <q-sidebar>Sidebar</q-sidebar>
        </template>
        <q-container>
          Main content
        </q-container>
        <template #footer>
          <q-footer>Footer</q-footer>
        </template>
      </q-layout>
    `
  });

export default storyMetadata;
