import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QLink } from '@/qComponents/QLink';
export default { title: 'Basic/QLink', component: QLink } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QLink },
    template: `<q-link href="https://example.com" target="_blank">External link</q-link>`
  });
