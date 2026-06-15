import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QInput } from '@/components/QInput';
import type { QInputProps } from '@/components/QInput';

import iconsList from '../core/iconsList';

const storyMetadata: Meta = {
  title: 'Form/QInput',
  component: QInput,
  argTypes: {
    placeholder: { control: { type: 'text' } },
    maxlength: { control: { type: 'number' } },
    modelValue: { control: false },
    type: {
      options: ['text', 'password', 'number', 'email', 'hidden', 'tel', 'url'],
      control: { type: 'select' }
    },
    prefixIcon: { options: [null, ...iconsList], control: { type: 'select' } },
    suffixIcon: { options: [null, ...iconsList], control: { type: 'select' } },
    size: {
      options: ['large', 'default', 'small'],
      control: { type: 'select' }
    },
    autocomplete: {
      options: ['on', 'off'],
      control: { type: 'select' }
    },
    readonly: { control: { type: 'boolean' } }
  }
};

type StoryArgs = QInputProps & {
  placeholder: string;
  maxlength: string | number;
  type: string;
};

const QInputStory: StoryFn<StoryArgs> = args =>
  defineComponent({
    setup() {
      const data = ref<string>('');

      const handleFocus = (event: Event): void => {
        console.log('handleFocus', event);
      };
      const handleBlur = (event: Event): void => {
        console.log('handleBlur', event);
      };
      const handleInput = (event: Event): void => {
        console.log('handleInput', event);
      };
      const handleChange = (event: Event): void => {
        console.log('handleChange', event);
      };
      const handleClear = (event: Event): void => {
        console.log('handleClear', event);
      };

      return {
        data,
        args,
        handleFocus,
        handleBlur,
        handleInput,
        handleChange,
        handleClear
      };
    },

    template: `
      <div style="width: 300px">
        <q-input
          v-model="data"
          :prefix-icon="args.prefixIcon"
          :suffix-icon="args.suffixIcon"
          :show-word-limit="args.showWordLimit"
          :show-password="args.showPassword"
          :size="args.size"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :validate-event="args.validateEvent"
          :autocomplete="args.autocomplete"
          :placeholder="args.placeholder"
          :maxlength="args.maxlength"
          :type="args.type"
          :readonly="args.readonly"
          @blur="handleBlur"
          @focus="handleFocus"
          @input="handleInput"
          @change="handleChange"
          @clear="handleClear"
        />
      </div>
    `
  });

export const Default = QInputStory.bind({});

Default.args = {
  placeholder: 'Input text',
  maxlength: 25,
  type: 'text'
};

export const Password = QInputStory.bind({});
Password.args = {
  placeholder: 'Password',
  type: 'password',
  showPassword: true
};

export const WithPrefixSuffix = QInputStory.bind({});
WithPrefixSuffix.args = {
  placeholder: 'Search',
  type: 'text',
  prefixIcon: 'q-icon-search',
  suffixIcon: 'q-icon-cog-stroke'
};

export const WordLimit = QInputStory.bind({});
WordLimit.args = {
  placeholder: 'Type text',
  maxlength: 20,
  type: 'text',
  showWordLimit: true
};

export default storyMetadata;
