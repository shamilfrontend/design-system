import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/components/QButton';
import { QEmpty } from '@/components/QEmpty';
export default { title: 'Data/QEmpty', component: QEmpty } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QEmpty, QButton },
    template: `<q-empty description="No data yet"><q-button size="small">Create item</q-button></q-empty>`
  });
