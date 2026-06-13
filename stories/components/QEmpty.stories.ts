import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QEmpty } from '@/qComponents/QEmpty';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QEmpty', component: QEmpty } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QEmpty, QButton },
  template: `<q-empty description="No data yet"><q-button size="small">Create item</q-button></q-empty>`
});
