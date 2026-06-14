import type { Meta } from '@storybook/vue3';

import { QProgressIndicatiorStory } from './Template';

const storyMetadata: Meta = {
  title: 'Data/QProgressIndicatior'
};

export default storyMetadata;

export const Default = QProgressIndicatiorStory.bind({});
