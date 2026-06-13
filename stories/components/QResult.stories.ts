import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QResult } from '@/qComponents/QResult';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QResult', component: QResult } satisfies Meta;
export const Success: StoryFn = () => defineComponent({
  components: { QResult, QButton },
  template: `<q-result status="success" title="Done" subtitle="Saved successfully"><template #extra><q-button>Continue</q-button></template></q-result>`
});
