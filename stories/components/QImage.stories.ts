import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QImage } from '@/qComponents/QImage';
export default { title: 'Components/QImage', component: QImage } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QImage },
  template: `<q-image src="https://picsum.photos/200/120" alt="Demo" :width="200" :height="120" preview />`
});
