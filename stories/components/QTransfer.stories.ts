import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QTransfer } from '@/components/QTransfer';
export default { title: 'Form/QTransfer', component: QTransfer } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QTransfer },
    setup() {
      const v = ref([]);
      const data = [
        { key: 1, label: 'Admin' },
        { key: 2, label: 'Editor' },
        { key: 3, label: 'Viewer' }
      ];
      return { v, data };
    },
    template: `<q-transfer v-model="v" :data="data" :titles="['Available','Selected']" />`
  });
