import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/qComponents/QButton';
import { QCard } from '@/qComponents/QCard';
import type { QCardProps } from '@/qComponents/QCard';

const storyMetadata: Meta = {
  title: 'Components/QCard',
  component: QCard,
  argTypes: {
    shadow: {
      control: { type: 'select' },
      options: ['always', 'hover', 'never']
    }
  }
};

const QCardStory: StoryFn<QCardProps> = args =>
  defineComponent({
    components: { QCard, QButton },
    setup() {
      return { args };
    },
    template: `
      <q-card
        :shadow="args.shadow"
        :title="args.title"
        :body-padding="args.bodyPadding"
        style="width: 360px"
      >
        Card body with flexible slots.
        <template #footer>
          <q-button size="small">Action</q-button>
        </template>
      </q-card>
    `
  });

export const Default = QCardStory.bind({});
Default.args = {
  shadow: 'always',
  title: 'Card title',
  bodyPadding: true
};

export const HoverShadow = QCardStory.bind({});
HoverShadow.args = {
  ...Default.args,
  shadow: 'hover'
};

export const CustomHeader: StoryFn = () =>
  defineComponent({
    components: { QCard },
    template: `
      <q-card shadow="always" style="width: 360px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Custom header</span>
            <span style="font-size: 12px; color: var(--color-text-muted)">Meta</span>
          </div>
        </template>
        Content area without title prop.
      </q-card>
    `
  });

export default storyMetadata;
