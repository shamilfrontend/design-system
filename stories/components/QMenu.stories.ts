import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QDropdown } from '@/qComponents/QDropdown';
import { QMenu, QMenuItem } from '@/qComponents/QMenu';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QMenu', component: QMenu } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QDropdown, QMenu, QMenuItem, QButton },
  template: `<q-dropdown><q-button>Menu</q-button><template #dropdown><q-menu><q-menu-item>Edit</q-menu-item><q-menu-item divided>Delete</q-menu-item></q-menu></template></q-dropdown>`
});
