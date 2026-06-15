import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QCalendar } from '@/components/QCalendar';
export default { title: 'Data/QCalendar', component: QCalendar } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QCalendar },
    setup() {
      const month = ref(new Date());
      const events = [
        {
          date: new Date().toISOString().slice(0, 10),
          title: 'Meet',
          type: 'primary'
        }
      ];
      return { month, events };
    },
    template: `<q-calendar v-model="month" :events="events" style="max-width:560px" />`
  });
