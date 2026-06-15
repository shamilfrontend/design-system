import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QProgress } from '@/components/QProgress';

const storyMetadata: Meta = {
  title: 'Data/QProgress',
  component: QProgress
};

export const Linear: StoryFn = () =>
  defineComponent({
    components: { QProgress },
    template: `
      <div style="width: 360px">
        <q-progress :percentage="65" />
      </div>
    `
  });

export const Circle: StoryFn = () =>
  defineComponent({
    components: { QProgress },
    template: `<q-progress type="circle" :percentage="75" />`
  });

export default storyMetadata;
