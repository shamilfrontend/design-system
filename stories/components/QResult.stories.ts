import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/components/QButton';
import { QResult } from '@/components/QResult';
export default { title: 'Data/QResult', component: QResult } satisfies Meta;
export const Success: StoryFn = () =>
  defineComponent({
    components: { QResult, QButton },
    template: `<q-result status="success" title="Done" subtitle="Saved successfully"><template #extra><q-button>Continue</q-button></template></q-result>`
  });
