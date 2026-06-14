import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { T as r, w as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    r(),
    (a = { title: `Components/QWatermark`, component: i }),
    (o = () =>
      t({
        components: { QWatermark: i },
        template: `<q-watermark content="Draft" style="height:160px;border:1px solid #eee;padding:16px">Protected content</q-watermark>`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QWatermark
  },
  template: \`<q-watermark content="Draft" style="height:160px;border:1px solid #eee;padding:16px">Protected content</q-watermark>\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
