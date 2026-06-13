import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent, ref } from 'vue';
import { QTour } from '@/qComponents/QTour';
import { QButton } from '@/qComponents/QButton';
export default { title: 'Components/QTour', component: QTour } satisfies Meta;
export const Default: StoryFn = () => defineComponent({
  components: { QTour, QButton },
  setup() {
    const open = ref(false);
    const current = ref(0);
    const steps = [{ target: '#tour-btn', title: 'Start', description: 'Click here' }];
    return { open, current, steps };
  },
  template: `<div><q-button id="tour-btn" @click="open=true">Target</q-button><q-tour v-model="open" v-model:current="current" :steps="steps" /></div>`
});
