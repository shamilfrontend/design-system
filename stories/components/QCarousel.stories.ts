import type { Meta, StoryFn } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { QCarousel, QCarouselItem } from '@/components/QCarousel';
export default { title: 'Data/QCarousel', component: QCarousel } satisfies Meta;
export const Default: StoryFn = () =>
  defineComponent({
    components: { QCarousel, QCarouselItem },
    template: `<q-carousel :height="180" autoplay style="width:360px"><q-carousel-item><div style="background:#7367f0;height:100%;display:flex;align-items:center;justify-content:center;color:#fff">Slide 1</div></q-carousel-item><q-carousel-item><div style="background:#28c76f;height:100%;display:flex;align-items:center;justify-content:center;color:#fff">Slide 2</div></q-carousel-item></q-carousel>`
  });
