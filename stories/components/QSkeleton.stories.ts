import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QSkeleton } from '@/qComponents/QSkeleton';
import type { QSkeletonProps } from '@/qComponents/QSkeleton';

const storyMetadata: Meta = {
  title: 'Components/QSkeleton',
  component: QSkeleton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['text', 'circle', 'rect', 'button']
    }
  }
};

const QSkeletonStory: StoryFn<QSkeletonProps> = args =>
  defineComponent({
    components: { QSkeleton },
    setup() {
      return { args };
    },
    template: `
      <q-skeleton
        :variant="args.variant"
        :animated="args.animated"
        :rows="args.rows"
        :width="args.width"
        :height="args.height"
        :radius="args.radius"
      />
    `
  });

export const Default = QSkeletonStory.bind({});
Default.args = {
  variant: 'text',
  animated: true,
  rows: 1,
  width: null,
  height: null,
  radius: null
};

export const Paragraph = QSkeletonStory.bind({});
Paragraph.args = {
  ...Default.args,
  rows: 4
};

export const AvatarBlock = () =>
  defineComponent({
    components: { QSkeleton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; width: 320px">
        <q-skeleton variant="circle" />
        <div style="flex: 1">
          <q-skeleton :rows="2" />
        </div>
      </div>
    `
  });

export const CardPlaceholder = () =>
  defineComponent({
    components: { QSkeleton },
    template: `
      <div style="width: 320px">
        <q-skeleton variant="rect" :height="160" />
        <div style="margin-top: 16px">
          <q-skeleton :rows="3" />
        </div>
        <q-skeleton variant="button" style="margin-top: 16px" />
      </div>
    `
  });

export default storyMetadata;
