import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import { QDrawerModal } from '@/qComponents/QDrawer';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QDrawerModal', component: QDrawerModal } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QDrawerModal, QButton },
  setup() { const open = ref(false); return { open }; },
  template: `<div><q-button @click="open=true">Open</q-button><q-drawer-modal v-model="open" title="Filters">Drawer body</q-drawer-modal></div>`
});
