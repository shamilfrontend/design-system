import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QButton } from '@/components/QButton';
import { QLoading } from '@/components/QLoading';

const storyMetadata: Meta = {
  title: 'Feedback/QLoading',
  component: QLoading
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QLoading },
    template: `
      <div style="padding: 40px">
        <q-loading text="Loading..." />
      </div>
    `
  });

export const Directive: StoryFn = () =>
  defineComponent({
    components: { QButton, QLoading },
    setup() {
      const isLoading = ref(false);

      function toggle(): void {
        isLoading.value = !isLoading.value;
      }

      return { isLoading, toggle };
    },
    template: `
      <div>
        <q-button @click="toggle">Toggle loading</q-button>
        <div
          v-loading="isLoading"
          style="margin-top: 16px; padding: 48px; border: 1px solid var(--color-border); border-radius: 8px"
        >
          Content area
        </div>
      </div>
    `
  });

export default storyMetadata;
