import type { Meta, StoryFn } from '@storybook/vue3';
import { defineAsyncComponent, defineComponent } from 'vue';

import { useDrawer } from '@/qComponents';
import type { QDrawerOptions } from '@/qComponents';
import { QDrawerContainer } from '@/qComponents/QDrawer/src/QDrawerContainer';

const storyMetadata: Meta = {
  title: 'Feedback/QDrawer/Extended',
  component: QDrawerContainer,
  argTypes: {
    content: { control: false },
    teleportTo: { control: false },
    position: {
      options: ['left', 'right'],
      control: { type: 'inline-radio' }
    }
  }
};

const QDrawerStoryComponent: StoryFn<QDrawerOptions> = args =>
  defineComponent({
    setup() {
      const drawer = useDrawer();

      const handleClick = async (): Promise<void> => {
        try {
          const result = await drawer(
            {
              component: defineAsyncComponent(
                () => import('./DrawerFormTest.vue')
              ),
              props: {
                someExternalProp: 'Some external prop here'
              },
              listeners: {
                nameInput: (value: string) => {
                  console.log(`listeners - nameInput: ${value}`);
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
    template: '<q-button @click="handleClick">Click to open drawer</q-button>'
  });

export const Extended = QDrawerStoryComponent.bind({});
export default storyMetadata;
