import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Dr as r, Or as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QBackTop`, component: r }),
    (o = () =>
      t({
        components: { QBackTop: r },
        template: `<div style="height:200px;overflow:auto"><div style="height:600px;padding:16px">Scroll down</div><q-back-top :visibility-height="80" /></div>`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QBackTop
  },
  template: \`<div style="height:200px;overflow:auto"><div style="height:600px;padding:16px">Scroll down</div><q-back-top :visibility-height="80" /></div>\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
