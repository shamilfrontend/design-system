import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { Ct as a, wt as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    o(),
    r(),
    (s = { title: `Components/QResult`, component: a }),
    (c = () =>
      t({
        components: { QResult: a, QButton: i },
        template: `<q-result status="success" title="Done" subtitle="Saved successfully"><template #extra><q-button>Continue</q-button></template></q-result>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QResult,
    QButton
  },
  template: \`<q-result status="success" title="Done" subtitle="Saved successfully"><template #extra><q-button>Continue</q-button></template></q-result>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Success`]));
})();
export { c as Success, l as __namedExportsOrder, s as default };
