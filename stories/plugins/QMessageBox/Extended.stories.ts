import type { StoryFn, Meta } from '@storybook/vue3';
import { defineComponent, defineAsyncComponent } from 'vue';

import { useMessageBox } from '@/qComponents';
import type { QMessageBoxOptions } from '@/qComponents';
import { QMessageBoxContainer } from '@/qComponents/QMessageBox/src/QMessageBoxContainer';

const storyMetadata: Meta = {
  title: 'Plugins/QMessageBox/Extended',
  component: QMessageBoxContainer,
  argTypes: {
    content: { control: false },
    teleportTo: { control: false }
  }
};

const QMessageBoxExtendedStory: StoryFn<QMessageBoxOptions> = args =>
  defineComponent({
    setup() {
      const messageBox = useMessageBox();

      const handleClick = async (): Promise<void> => {
        try {
          const result = await messageBox(
            {
              component: defineAsyncComponent(
                () => import('./MessageBoxFormTest.vue')
              ),
              props: {
                someExternalProp: 'some external prop here'
              },
              listeners: {
                nameInput: (value: string) => {
                  console.log('listeners - nameInput:', value);
                }
              }
            },
            args
          );

          console.log('resolve', result);
        } catch (result) {
          console.log('reject', result);
        }
      };

      return { handleClick };
    },
    template:
      '<q-button @click="handleClick">Click to open message box</q-button>'
  });

export const Extended = QMessageBoxExtendedStory.bind({});

export default storyMetadata;
