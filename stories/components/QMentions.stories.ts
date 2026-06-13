import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import { QMentions } from '@/qComponents/QMentions';
export default { title: 'Components/QMentions', component: QMentions } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QMentions },
  setup() {
    const v = ref('');
    const options = [{ value: '1', label: 'Alice' }, { value: '2', label: 'Bob' }];
    return { v, options };
  },
  template: `<q-mentions v-model="v" :options="options" style="width:320px" />`
});
