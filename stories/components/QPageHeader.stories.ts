import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QPageHeader } from '@/qComponents/QPageHeader';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QPageHeader', component: QPageHeader } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QPageHeader, QButton },
  template: `<q-page-header title="Dashboard" subtitle="Overview" back><template #extra><q-button size="small">Export</q-button></template></q-page-header>`
});
