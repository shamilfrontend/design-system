import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Nt as r, Pt as i } from './iframe-CABL6dQv.js';
var a, o, s, c;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QProgress`, component: r }),
    (o = () =>
      t({
        components: { QProgress: r },
        template: `
      <div style="width: 360px">
        <q-progress :percentage="65" />
      </div>
    `
      })),
    (s = () =>
      t({
        components: { QProgress: r },
        template: `<q-progress type="circle" :percentage="75" />`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QProgress
  },
  template: \`
      <div style="width: 360px">
        <q-progress :percentage="65" />
      </div>
    \`
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
    QProgress
  },
  template: \`<q-progress type="circle" :percentage="75" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Linear`, `Circle`]));
})();
export { s as Circle, o as Linear, c as __namedExportsOrder, a as default };
