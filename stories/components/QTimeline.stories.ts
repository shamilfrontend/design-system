import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QTimeline } from '@/qComponents/QTimeline';
export default { title: 'Components/QTimeline', component: QTimeline } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QTimeline },
  setup() {
    const items = [
      { timestamp: '10:00', title: 'Created', type: 'primary' },
      { timestamp: '12:00', title: 'Approved', type: 'success' }
    ];
    return { items };
  },
  template: `<q-timeline :items="items" style="max-width:400px" />`
});
