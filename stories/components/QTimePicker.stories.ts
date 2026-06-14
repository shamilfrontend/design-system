import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QTimePicker } from '@/qComponents/QTimePicker';
export default {
  title: 'Form/QTimePicker',
  component: QTimePicker
} satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QTimePicker },
    setup() {
      const v = ref('09:30');
      return { v };
    },
    template: `<q-time-picker v-model="v" />`
  });
