import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { J as i, q as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QTimePicker`, component: a }),
    (s = () =>
      n({
        components: { QTimePicker: a },
        setup() {
          return { v: t(`09:30`) };
        },
        template: `<q-time-picker v-model="v" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTimePicker
  },
  setup() {
    const v = ref('09:30');
    return {
      v
    };
  },
  template: \`<q-time-picker v-model="v" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
