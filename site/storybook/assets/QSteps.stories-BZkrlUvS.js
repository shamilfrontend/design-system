import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { ct as i, st as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QSteps`, component: a }),
    (s = () =>
      n({
        components: { QSteps: a },
        setup() {
          return {
            active: t(1),
            steps: [
              { title: `Account` },
              { title: `Profile` },
              { title: `Done` }
            ]
          };
        },
        template: `<q-steps v-model:active="active" :steps="steps" style="max-width:480px" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QSteps
  },
  setup() {
    const active = ref(1);
    const steps = [{
      title: 'Account'
    }, {
      title: 'Profile'
    }, {
      title: 'Done'
    }];
    return {
      active,
      steps
    };
  },
  template: \`<q-steps v-model:active="active" :steps="steps" style="max-width:480px" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
