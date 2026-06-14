import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import type { QIconProps } from '@/qComponents/QIcon';
import { QIcon } from '@/qComponents/QIcon';
import { Q_ICON_NAMES } from '@/qComponents/QIcon';

const storyMetadata: Meta = {
  title: 'Basic/QIcon',
  component: QIcon,
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Q_ICON_NAMES
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'regular', 'large']
    },
    color: { control: { type: 'color' } },
    spin: { control: { type: 'boolean' } },
    ariaLabel: { control: { type: 'text' } }
  }
};

const QIconStory: StoryFn<QIconProps> = args =>
  defineComponent({
    components: { QIcon },
    setup() {
      return { args };
    },
    template: `
      <q-icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
        :spin="args.spin"
        :aria-label="args.ariaLabel"
      />
    `
  });

export const Default = QIconStory.bind({});
Default.args = {
  name: 'search',
  size: 'regular',
  color: null,
  spin: false,
  ariaLabel: null
};

export const ShortName = QIconStory.bind({});
ShortName.args = {
  ...Default.args,
  name: 'close'
};

export const Spinning = QIconStory.bind({});
Spinning.args = {
  ...Default.args,
  name: 'reverse',
  spin: true,
  color: '#6366f1'
};

export const Sizes: StoryFn = () =>
  defineComponent({
    components: { QIcon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <q-icon name="star-fill" size="small" />
        <q-icon name="star-fill" size="regular" />
        <q-icon name="star-fill" size="large" />
        <q-icon name="star-fill" :size="32" color="var(--color-primary)" />
      </div>
    `
  });

export default storyMetadata;
