import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QCol } from '@/components/QCol';
import type { QColProps } from '@/components/QCol';
import { QRow } from '@/components/QRow';
import './layout.scss';

const storyMetadata: Meta = {
  title: 'Basic/Layout/QCol',
  component: QCol,
  subcomponents: { QRow },
  argTypes: {
    cols: {
      options: [null, 'auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: { type: 'select' }
    },
    offset: {
      options: [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      control: { type: 'select' }
    }
  }
};

const QColStory: StoryFn<QColProps> = args =>
  defineComponent({
    components: { QRow, QCol },
    setup() {
      return { args };
    },
    template: `
      <div class="demo">
        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col
            class="demo__col"
            :tag="args.tag"
            :cols="args.cols"
            :offset="args.offset"
          >
            <div class="demo__content">dyn</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
      </div>
    `
  });

export const Default = QColStory.bind({});
Default.args = {
  tag: 'div',
  cols: 5,
  offset: 3
};
export default storyMetadata;
