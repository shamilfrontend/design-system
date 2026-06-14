import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QTree } from '@/qComponents/QTree';
export default { title: 'Data/QTree', component: QTree } satisfies Meta;
const data = [
  {
    id: 1,
    label: 'Root',
    children: [
      { id: 2, label: 'Child A' },
      { id: 3, label: 'Child B' }
    ]
  }
];
export const Default: StoryFn = () =>
  defineComponent({
    components: { QTree },
    setup: () => ({ data }),
    template: `<q-tree :data="data" default-expand-all style="width:240px" />`
  });
