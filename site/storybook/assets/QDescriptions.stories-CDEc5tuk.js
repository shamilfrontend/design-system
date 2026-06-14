import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { An as r, jn as i, kn as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (n(),
    i(),
    (o = { title: `Components/QDescriptions`, component: a }),
    (s = () =>
      t({
        components: { QDescriptions: a, QDescriptionsItem: r },
        template: `<q-descriptions title="User" bordered :column="2"><q-descriptions-item label="Name">Alex</q-descriptions-item><q-descriptions-item label="Role">Admin</q-descriptions-item></q-descriptions>`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QDescriptions,
    QDescriptionsItem
  },
  template: \`<q-descriptions title="User" bordered :column="2"><q-descriptions-item label="Name">Alex</q-descriptions-item><q-descriptions-item label="Role">Admin</q-descriptions-item></q-descriptions>\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
