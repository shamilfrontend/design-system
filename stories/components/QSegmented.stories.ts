import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QSegmented } from '@/qComponents/QSegmented';

const storyMetadata: Meta = {
  title: 'Data/QSegmented',
  component: QSegmented
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QSegmented },
    setup() {
      const value = ref('day');
      const options = [
        { label: 'Day', value: 'day' },
        { label: 'Week', value: 'week' },
        { label: 'Month', value: 'month' }
      ];

      return { value, options };
    },
    template: `
      <q-segmented v-model="value" :options="options" />
    `
  });

export default storyMetadata;
