import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { n as i, t as a } from './QButton-Cew9k7i-.js';
import { C as o, S as s } from './iframe-CABL6dQv.js';
var c, l, u;
e(() => {
  (r(),
    o(),
    i(),
    (c = { title: `Components/QTour`, component: s }),
    (l = () =>
      n({
        components: { QTour: s, QButton: a },
        setup() {
          return {
            open: t(!1),
            current: t(0),
            steps: [
              { target: `#tour-btn`, title: `Start`, description: `Click here` }
            ]
          };
        },
        template: `<div><q-button id="tour-btn" @click="open=true">Target</q-button><q-tour v-model="open" v-model:current="current" :steps="steps" /></div>`
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTour,
    QButton
  },
  setup() {
    const open = ref(false);
    const current = ref(0);
    const steps = [{
      target: '#tour-btn',
      title: 'Start',
      description: 'Click here'
    }];
    return {
      open,
      current,
      steps
    };
  },
  template: \`<div><q-button id="tour-btn" @click="open=true">Target</q-button><q-tour v-model="open" v-model:current="current" :steps="steps" /></div>\`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u = [`Default`]));
})();
export { l as Default, u as __namedExportsOrder, c as default };
