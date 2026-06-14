import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QSteps } from '@/qComponents/QSteps';
export default { title: 'Navigation/QSteps', component: QSteps } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QSteps },
    setup() {
      const active = ref(1);
      const steps = [
        { title: 'Account' },
        { title: 'Profile' },
        { title: 'Done' }
      ];
      return { active, steps };
    },
    template: `<q-steps v-model:active="active" :steps="steps" style="max-width:480px" />`
  });
