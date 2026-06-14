import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QDescriptions, QDescriptionsItem } from '@/qComponents/QDescriptions';
export default {
  title: 'Data/QDescriptions',
  component: QDescriptions
} satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QDescriptions, QDescriptionsItem },
    template: `<q-descriptions title="User" bordered :column="2"><q-descriptions-item label="Name">Alex</q-descriptions-item><q-descriptions-item label="Role">Admin</q-descriptions-item></q-descriptions>`
  });
