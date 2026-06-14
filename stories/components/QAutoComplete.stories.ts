import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import { QAutoComplete } from '@/qComponents/QAutoComplete';
export default { title: 'Components/QAutoComplete', component: QAutoComplete } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QAutoComplete },
  setup() {
    const q = ref('');
    const options = ['Apple', 'Apricot', 'Banana', 'Blueberry'];
    return { q, options };
  },
  template: `<div style="width:280px"><q-auto-complete v-model="q" :options="options" placeholder="Search fruit" /></div>`
});
