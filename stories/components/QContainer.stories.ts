import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QContainer } from '@/qComponents/QLayout';

const storyMetadata: Meta = {
  title: 'Components/QContainer',
  component: QContainer
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QContainer },
    template: `
      <q-container size="md" style="background: var(--color-tertiary-gray-light); padding: 24px">
        Container content
      </q-container>
    `
  });

export default storyMetadata;
