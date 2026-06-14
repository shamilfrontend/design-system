import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QBackTop } from '@/qComponents/QBackTop';
export default {
  title: 'Navigation/QBackTop',
  component: QBackTop
} satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QBackTop },
    template: `<div style="height:200px;overflow:auto"><div style="height:600px;padding:16px">Scroll down</div><q-back-top :visibility-height="80" /></div>`
  });
