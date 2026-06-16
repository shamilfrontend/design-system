import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QAvatar } from '@/components/QAvatar';
export default { title: 'Data/QAvatar', component: QAvatar } satisfies Meta;
export const Fallback: StoryFn = () =>
  defineComponent({
    components: { QAvatar },
    template: `<div style="display:flex;gap:12px;align-items:center;"><q-avatar size="small">SA</q-avatar><q-avatar>MB</q-avatar><q-avatar size="large">XL</q-avatar></div>`
  });
