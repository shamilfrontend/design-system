import type { Meta, StoryFn } from '@storybook/vue3';
import { defineAsyncComponent, defineComponent } from 'vue';

import { useDialog } from '@/components';
import type { QDialogOptions } from '@/components';
import { QDialogContainer } from '@/components/QDialog/src/QDialogContainer';

const storyMetadata: Meta = {
  title: 'Feedback/QDialog/Component',
  component: QDialogContainer,
  argTypes: {
    content: { control: false },
    teleportTo: { control: false }
  }
};

const QDialogComponentStory: StoryFn<QDialogOptions> = args =>
  defineComponent({
    setup() {
      const dialog = useDialog();

      const handleClick = async (): Promise<void> => {
        try {
          const result = await dialog(
            defineAsyncComponent(() => import('./DialogFormTest.vue')),
            args
          );

          console.log('resolve', result);
        } catch (result) {
          console.log('reject', result);
        }
      };

      return { handleClick };
    },
    template: '<q-button @click="handleClick">Click to open dialog</q-button>'
  });

export const Component = QDialogComponentStory.bind({});
export default storyMetadata;
