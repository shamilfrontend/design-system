import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';
import { QList, QListItem } from '@/qComponents/QList';
import { QAvatar } from '@/qComponents/QAvatar';
export default { title: 'Components/QList', component: QList } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QList, QListItem, QAvatar },
  template: `<q-list bordered style="width:360px"><q-list-item><template #prefix><q-avatar size="small">U</q-avatar></template><template #title>User</template>Last activity 2h ago</q-list-item></q-list>`
});
