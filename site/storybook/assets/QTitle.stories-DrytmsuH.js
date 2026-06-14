import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { A as r, M as i, j as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (n(),
    i(),
    (o = { title: `Components/QTitle`, component: a }),
    (s = () =>
      t({
        components: { QTitle: a, QParagraph: r },
        template: `<q-title :level="2">Page title</q-title><q-paragraph>Body text</q-paragraph>`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTitle,
    QParagraph
  },
  template: \`<q-title :level="2">Page title</q-title><q-paragraph>Body text</q-paragraph>\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
