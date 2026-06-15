import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QButton } from '@/components/QButton';
import { QDropdown } from '@/components/QDropdown';
import { QMenu, QMenuItem } from '@/components/QMenu';

const storyMetadata: Meta = {
  title: 'Navigation/QDropdown',
  component: QDropdown
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QDropdown, QMenu, QMenuItem, QButton },
    template: `
      <q-dropdown>
        <q-button>Actions</q-button>
        <template #dropdown>
          <q-menu>
            <q-menu-item icon="q-icon-edit">Edit</q-menu-item>
            <q-menu-item icon="q-icon-copy">Copy</q-menu-item>
            <q-menu-item divided disabled>Disabled</q-menu-item>
            <q-menu-item icon="q-icon-trash">Delete</q-menu-item>
          </q-menu>
        </template>
      </q-dropdown>
    `
  });

export default storyMetadata;
