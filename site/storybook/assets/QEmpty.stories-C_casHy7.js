import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { Cn as a, wn as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    o(),
    r(),
    (s = { title: `Components/QEmpty`, component: a }),
    (c = () =>
      t({
        components: { QEmpty: a, QButton: i },
        template: `<q-empty description="No data yet"><q-button size="small">Create item</q-button></q-empty>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QEmpty,
    QButton
  },
  template: \`<q-empty description="No data yet"><q-button size="small">Create item</q-button></q-empty>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, s as default };
