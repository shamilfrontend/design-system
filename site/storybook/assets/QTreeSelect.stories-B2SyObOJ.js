import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { B as i, z as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QTreeSelect`, component: a }),
    (s = [{ id: `a`, label: `A`, children: [{ id: `a1`, label: `A1` }] }]),
    (c = () =>
      n({
        components: { QTreeSelect: a },
        setup() {
          return { v: t(null), data: s };
        },
        template: `<q-tree-select v-model="v" :data="data" />`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTreeSelect
  },
  setup() {
    const v = ref(null);
    return {
      v,
      data
    };
  },
  template: \`<q-tree-select v-model="v" :data="data" />\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
