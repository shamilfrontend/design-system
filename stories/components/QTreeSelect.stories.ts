import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QTreeSelect } from '@/qComponents/QTreeSelect';
export default {
  title: 'Form/QTreeSelect',
  component: QTreeSelect
} satisfies Meta;
const data = [{ id: 'a', label: 'A', children: [{ id: 'a1', label: 'A1' }] }];
export const Default: StoryFn = () =>
  defineComponent({
    components: { QTreeSelect },
    setup() {
      const v = ref(null);
      return { v, data };
    },
    template: `<q-tree-select v-model="v" :data="data" />`
  });
