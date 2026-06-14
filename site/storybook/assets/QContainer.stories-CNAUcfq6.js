import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { an as r, un as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QContainer`, component: r }),
    (o = () =>
      t({
        components: { QContainer: r },
        template: `
      <q-container size="md" style="background: var(--color-tertiary-gray-light); padding: 24px">
        Container content
      </q-container>
    `
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QContainer
  },
  template: \`
      <q-container size="md" style="background: var(--color-tertiary-gray-light); padding: 24px">
        Container content
      </q-container>
    \`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
