import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QRate } from '@/components/QRate';
export default { title: 'Form/QRate', component: QRate } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QRate },
    setup() {
      const v = ref(3);
      return { v };
    },
    template: `<q-rate v-model="v" show-text />`
  });
