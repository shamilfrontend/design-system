import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { Bt as a, zt as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    a(),
    r(),
    (s = { title: `Components/QPageHeader`, component: o }),
    (c = () =>
      t({
        components: { QPageHeader: o, QButton: i },
        template: `<q-page-header title="Dashboard" subtitle="Overview" back><template #extra><q-button size="small">Export</q-button></template></q-page-header>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QPageHeader,
    QButton
  },
  template: \`<q-page-header title="Dashboard" subtitle="Overview" back><template #extra><q-button size="small">Export</q-button></template></q-page-header>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, s as default };
