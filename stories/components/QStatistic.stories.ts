import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QStatistic } from '@/qComponents/QStatistic';
export default {
  title: 'Data/QStatistic',
  component: QStatistic
} satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QStatistic },
    template: `<q-statistic title="Revenue" value="12,480" prefix="$" suffix="/mo" />`
  });
