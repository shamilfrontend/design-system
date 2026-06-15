import type { StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import type { QSliderPropData } from '@/components/QSlider';

const QSliderStory: StoryFn = args =>
  defineComponent({
    setup() {
      const value = ref<number>(33);

      return { args, value };
    },

    template: `
      <q-slider
        v-model="value"
        v-bind="args"
      />
    `
  });

const data: QSliderPropData<number> = Array(101)
  .fill(null)
  .map((_, index) => ({
    value: index,
    label: [0, 100, 12, 33].includes(index) ? String(index) : undefined
  }));

QSliderStory.args = {
  data,
  tooltipMode: 'always'
};

export default QSliderStory;
