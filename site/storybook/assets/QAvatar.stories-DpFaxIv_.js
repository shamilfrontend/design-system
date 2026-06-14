import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Ar as r, dt as i, ft as a, kr as o } from './iframe-CABL6dQv.js';
var s, c, l;
e(() => {
  (n(),
    r(),
    a(),
    (s = { title: `Components/QAvatar`, component: o }),
    (c = () =>
      t({
        components: { QAvatar: o, QSpace: i },
        template: `<q-space><q-avatar size="small">SA</q-avatar><q-avatar>MB</q-avatar><q-avatar size="large">XL</q-avatar></q-space>`
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QAvatar,
    QSpace
  },
  template: \`<q-space><q-avatar size="small">SA</q-avatar><q-avatar>MB</q-avatar><q-avatar size="large">XL</q-avatar></q-space>\`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Fallback`]));
})();
export { c as Fallback, l as __namedExportsOrder, s as default };
