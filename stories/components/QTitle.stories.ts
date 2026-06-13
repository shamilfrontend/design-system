import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QTitle, QParagraph } from '@/qComponents/QTypography';
export default { title: 'Components/QTitle', component: QTitle } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QTitle, QParagraph },
  template: `<q-title :level="2">Page title</q-title><q-paragraph>Body text</q-paragraph>`
});
