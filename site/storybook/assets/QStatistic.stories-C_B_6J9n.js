import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { lt as r, ut as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QStatistic`, component: r }),
    (o = () =>
      t({
        components: { QStatistic: r },
        template: `<q-statistic title="Revenue" value="12,480" prefix="$" suffix="/mo" />`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QStatistic
  },
  template: \`<q-statistic title="Revenue" value="12,480" prefix="$" suffix="/mo" />\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
