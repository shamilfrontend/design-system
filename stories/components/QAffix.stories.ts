import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QAffix } from '@/qComponents/QAffix';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QAffix', component: QAffix } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QAffix, QButton },
  template: `<div style="height:300px;overflow:auto"><div style="height:400px"><q-affix :offset-top="0"><q-button size="small">Sticky</q-button></q-affix></div></div>`
});
