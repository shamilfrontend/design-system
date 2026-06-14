import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { At as i, kt as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QRate`, component: a }),
    (s = () =>
      n({
        components: { QRate: a },
        setup() {
          return { v: t(3) };
        },
        template: `<q-rate v-model="v" show-text />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QRate
  },
  setup() {
    const v = ref(3);
    return {
      v
    };
  },
  template: \`<q-rate v-model="v" show-text />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
