import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QAlert } from '@/qComponents/QAlert';
import type { QAlertProps } from '@/qComponents/QAlert';

const storyMetadata: Meta = {
  title: 'Feedback/QAlert',
  component: QAlert,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'warning', 'info', 'error']
    }
  }
};

const QAlertStory: StoryFn<QAlertProps> = args =>
  defineComponent({
    components: { QAlert },
    setup() {
      return { args };
    },
    template: `
      <q-alert
        :type="args.type"
        :title="args.title"
        :closable="args.closable"
        :show-icon="args.showIcon"
        style="max-width: 480px"
      >
        Additional description and context for this alert message.
      </q-alert>
    `
  });

export const Default = QAlertStory.bind({});
Default.args = {
  type: 'info',
  title: 'Information',
  closable: false,
  showIcon: true
};

export const Closable = QAlertStory.bind({});
Closable.args = {
  ...Default.args,
  type: 'warning',
  title: 'Warning',
  closable: true
};

export const Types: StoryFn = () =>
  defineComponent({
    components: { QAlert },
    template: `
      <div style="display: grid; gap: 12px; max-width: 480px">
        <q-alert type="success" title="Success">Operation completed successfully.</q-alert>
        <q-alert type="warning" title="Warning">Please review the form fields.</q-alert>
        <q-alert type="info" title="Info">New updates are available.</q-alert>
        <q-alert type="error" title="Error">Something went wrong.</q-alert>
      </div>
    `
  });

export default storyMetadata;
