import { placements } from '@popperjs/core/lib/enums';
import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QColorPicker } from '@/qComponents/QColorPicker';
import type { QColorPickerProps } from '@/qComponents/QColorPicker';

const storyMetadata: Meta = {
  title: 'Components/QColorPicker',
  component: QColorPicker,
  argTypes: {
    modelValue: { control: false },
    placement: { options: placements, control: { type: 'select' } },
    colorFormat: { options: ['hex', 'rgb'], control: { type: 'select' } }
  }
};

const QColorPickerStory: StoryFn<QColorPickerProps> = args =>
  defineComponent({
    setup() {
      const color = ref<string>('#f25');

      return { args, color };
    },
    template: `
      <div style="width:584px; height:312px">
        <q-color-picker
          v-model="color"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :alpha-shown="args.alphaShown"
          :color-format="args.colorFormat"
          :placement="args.placement"
          :popper-options="args.popperOptions"
          :teleport-to="args.teleportTo"
        />
      </div>
    `
  });

export const Default = QColorPickerStory.bind({});
Default.args = {
  popperOptions: {}
};
export default storyMetadata;
