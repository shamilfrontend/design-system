import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/qComponents/QButton';
import { QTooltip } from '@/qComponents/QTooltip';
import type { QTooltipProps } from '@/qComponents/QTooltip';

const storyMetadata: Meta = {
  title: 'Components/QTooltip',
  component: QTooltip,
  argTypes: {
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'right'
      ]
    },
    effect: {
      control: { type: 'select' },
      options: ['dark', 'light']
    }
  }
};

const QTooltipStory: StoryFn<QTooltipProps> = args =>
  defineComponent({
    components: { QTooltip, QButton },
    setup() {
      return { args };
    },
    template: `
      <q-tooltip v-bind="args">
        <q-button>Hover me</q-button>
      </q-tooltip>
    `
  });

export const Default = QTooltipStory.bind({});
Default.args = {
  content: 'Tooltip text',
  placement: 'top',
  effect: 'dark',
  disabled: false,
  openDelay: 200,
  closeDelay: 0
};

export const Light = QTooltipStory.bind({});
Light.args = {
  ...Default.args,
  effect: 'light',
  content: 'Light tooltip'
};

export const CustomContent = () =>
  defineComponent({
    components: { QTooltip, QButton },
    template: `
      <q-tooltip placement="right">
        <q-button theme="secondary">Custom slot</q-button>
        <template #content>
          <strong>Bold</strong> tooltip content
        </template>
      </q-tooltip>
    `
  });

export default storyMetadata;
