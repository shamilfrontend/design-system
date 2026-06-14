import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Dn as r, On as i } from './iframe-CABL6dQv.js';
var a, o, s, c;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QDivider`, component: r }),
    (o = () =>
      t({
        components: { QDivider: r },
        template: `<div style="width:360px"><p>Above</p><q-divider>OR</q-divider><p>Below</p></div>`
      })),
    (s = () =>
      t({
        components: { QDivider: r },
        template: `<div style="display:flex;align-items:center;height:40px"><span>A</span><q-divider direction="vertical" /><span>B</span></div>`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QDivider
  },
  template: \`<div style="width:360px"><p>Above</p><q-divider>OR</q-divider><p>Below</p></div>\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QDivider
  },
  template: \`<div style="display:flex;align-items:center;height:40px"><span>A</span><q-divider direction="vertical" /><span>B</span></div>\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Horizontal`, `Vertical`]));
})();
export {
  o as Horizontal,
  s as Vertical,
  c as __namedExportsOrder,
  a as default
};
