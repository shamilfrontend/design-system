import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QSpace } from '@/qComponents/QSpace';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QSpace', component: QSpace } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QSpace, QButton },
  template: `<q-space><q-button size="small">One</q-button><q-button size="small">Two</q-button><q-button size="small">Three</q-button></q-space>`
});
