import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';

import { QButton } from '@/components/QButton';
import { QDialogModal } from '@/components/QDialog';

const storyMetadata: Meta = {
  title: 'Feedback/QDialogModal',
  component: QDialogModal
};

export const Default: StoryFn = () =>
  defineComponent({
    components: { QDialogModal, QButton },
    setup() {
      const visible = ref(false);

      return { visible };
    },
    template: `
      <div>
        <q-button @click="visible = true">Open dialog</q-button>
        <q-dialog-modal v-model="visible" title="Dialog title">
          <p>Declarative dialog content.</p>
          <template #footer>
            <q-button theme="secondary" @click="visible = false">Cancel</q-button>
            <q-button @click="visible = false">Confirm</q-button>
          </template>
        </q-dialog-modal>
      </div>
    `
  });

export default storyMetadata;
