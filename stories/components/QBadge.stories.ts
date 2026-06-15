import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QBadge } from '@/components/QBadge';
import type { QBadgeProps } from '@/components/QBadge';
import { QButton } from '@/components/QButton';
import { QIcon } from '@/components/QIcon';

const storyMetadata: Meta = {
  title: 'Data/QBadge',
  component: QBadge,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info']
    }
  }
};

const QBadgeStory: StoryFn<QBadgeProps> = args =>
  defineComponent({
    components: { QBadge, QButton },
    setup() {
      return { args };
    },
    template: `
      <q-badge
        :value="args.value"
        :max="args.max"
        :type="args.type"
        :is-dot="args.isDot"
        :hidden="args.hidden"
      >
        <q-button>Messages</q-button>
      </q-badge>
    `
  });

export const Default = QBadgeStory.bind({});
Default.args = {
  value: 5,
  max: 99,
  type: 'danger',
  isDot: false,
  hidden: false
};

export const Dot = QBadgeStory.bind({});
Dot.args = {
  ...Default.args,
  isDot: true,
  value: null
};

export const MaxValue = QBadgeStory.bind({});
MaxValue.args = {
  ...Default.args,
  value: 120,
  max: 99
};

export const WithIcon: StoryFn = () =>
  defineComponent({
    components: { QBadge, QIcon },
    template: `
      <q-badge :value="3" type="primary">
        <q-icon name="bell" size="large" />
      </q-badge>
    `
  });

export default storyMetadata;
