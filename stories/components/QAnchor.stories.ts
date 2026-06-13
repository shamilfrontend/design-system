import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QAnchor } from '@/qComponents/QAnchor';
export default { title: 'Components/QAnchor', component: QAnchor } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QAnchor },
  setup: () => ({ items: [{ key: '1', href: '#s1', title: 'Section 1' }, { key: '2', href: '#s2', title: 'Section 2' }] }),
  template: `<div><q-anchor :items="items" /><div id="s1" style="height:200px">S1</div><div id="s2" style="height:200px">S2</div></div>`
});
