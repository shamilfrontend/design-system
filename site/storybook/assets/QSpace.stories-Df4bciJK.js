import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { dt as a, ft as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    o(),
    r(),
    (s = { title: `Components/QSpace`, component: a }),
    (c = () =>
      t({
        components: { QSpace: a, QButton: i },
        template: `<q-space><q-button size="small">One</q-button><q-button size="small">Two</q-button><q-button size="small">Three</q-button></q-space>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QSpace,
    QButton
  },
  template: \`<q-space><q-button size="small">One</q-button><q-button size="small">Two</q-button><q-button size="small">Three</q-button></q-space>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, s as default };
