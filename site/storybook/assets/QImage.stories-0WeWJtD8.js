import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { mn as r, pn as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    r(),
    (a = { title: `Components/QImage`, component: i }),
    (o = () =>
      t({
        components: { QImage: i },
        template: `<q-image src="https://picsum.photos/200/120" alt="Demo" :width="200" :height="120" preview />`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QImage
  },
  template: \`<q-image src="https://picsum.photos/200/120" alt="Demo" :width="200" :height="120" preview />\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
