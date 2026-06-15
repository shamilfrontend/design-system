import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QSwitch } from '@/components';
import type { QSwitchProps } from '@/components';

const storyMetadata: Meta = {
  title: 'Form/QSwitch',
  component: QSwitch,

  argTypes: {
    modelValue: { control: false },
    validateEvent: { control: false },
    activeValue: { control: { type: 'text' } },
    inactiveValue: { control: { type: 'text' } }
  }
};

const QSwitchStory: StoryFn<QSwitchProps> = args =>
  defineComponent({
    setup() {
      const isOn = ref(true);

      return {
        args,
        isOn
      };
    },

    template: `
      <q-switch 
        v-model="isOn"
        :loading="args.loading"
        :disabled="args.disabled"
        :active-value="args.activeValue"
        :inactive-value="args.inactiveValue"
      />
    `
  });

export const Default = QSwitchStory.bind({});
export default storyMetadata;
