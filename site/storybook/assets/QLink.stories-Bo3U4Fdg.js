import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { in as r, rn as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    r(),
    (a = { title: `Components/QLink`, component: i }),
    (o = () =>
      t({
        components: { QLink: i },
        template: `<q-link href="https://example.com" target="_blank">External link</q-link>`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QLink
  },
  template: \`<q-link href="https://example.com" target="_blank">External link</q-link>\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
