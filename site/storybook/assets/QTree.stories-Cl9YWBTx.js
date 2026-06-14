import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { H as r, V as i } from './iframe-CABL6dQv.js';
var a, o, s, c;
e(() => {
  (n(),
    r(),
    (a = { title: `Components/QTree`, component: i }),
    (o = [
      {
        id: 1,
        label: `Root`,
        children: [
          { id: 2, label: `Child A` },
          { id: 3, label: `Child B` }
        ]
      }
    ]),
    (s = () =>
      t({
        components: { QTree: i },
        setup: () => ({ data: o }),
        template: `<q-tree :data="data" default-expand-all style="width:240px" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTree
  },
  setup: () => ({
    data
  }),
  template: \`<q-tree :data="data" default-expand-all style="width:240px" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, a as default };
