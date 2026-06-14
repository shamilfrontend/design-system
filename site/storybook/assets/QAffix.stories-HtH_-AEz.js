import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { N as a, P as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    o(),
    r(),
    (s = { title: `Components/QAffix`, component: a }),
    (c = () =>
      t({
        components: { QAffix: a, QButton: i },
        template: `<div style="height:300px;overflow:auto"><div style="height:400px"><q-affix :offset-top="0"><q-button size="small">Sticky</q-button></q-affix></div></div>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QAffix,
    QButton
  },
  template: \`<div style="height:300px;overflow:auto"><div style="height:400px"><q-affix :offset-top="0"><q-button size="small">Sticky</q-button></q-affix></div></div>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, s as default };
