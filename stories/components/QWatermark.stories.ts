import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QWatermark } from '@/qComponents/QWatermark';
export default {
  title: 'Others/QWatermark',
  component: QWatermark
} satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QWatermark },
    template: `<q-watermark content="Draft" style="height:160px;border:1px solid #eee;padding:16px">Protected content</q-watermark>`
  });
