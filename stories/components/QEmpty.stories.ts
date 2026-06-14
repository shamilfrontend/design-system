import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/qComponents/QButton';
import { QEmpty } from '@/qComponents/QEmpty';
export default { title: 'Data/QEmpty', component: QEmpty } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QEmpty, QButton },
    template: `<q-empty description="No data yet"><q-button size="small">Create item</q-button></q-empty>`
  });
