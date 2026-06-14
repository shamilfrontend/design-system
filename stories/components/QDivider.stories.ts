import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QDivider } from '@/qComponents/QDivider';
export default { title: 'Components/QDivider', component: QDivider } satisfies Meta;
export const Horizontal: StoryFn = () => defineComponent({
  components: { QDivider },
  template: `<div style="width:360px"><p>Above</p><q-divider>OR</q-divider><p>Below</p></div>`
});
export const Vertical: StoryFn = () => defineComponent({
  components: { QDivider },
  template: `<div style="display:flex;align-items:center;height:40px"><span>A</span><q-divider direction="vertical" /><span>B</span></div>`
});
