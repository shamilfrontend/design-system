import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { n as i, t as a } from './QButton-Cew9k7i-.js';
import { d as o, h as s } from './iframe-CABL6dQv.js';
var c, l, u;
e(() => {
  (r(),
    o(),
    i(),
    (c = { title: `Components/QDrawerModal`, component: s }),
    (l = () =>
      n({
        components: { QDrawerModal: s, QButton: a },
        setup() {
          return { open: t(!1) };
        },
        template: `<div><q-button @click="open=true">Open</q-button><q-drawer-modal v-model="open" title="Filters">Drawer body</q-drawer-modal></div>`
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QDrawerModal,
    QButton
  },
  setup() {
    const open = ref(false);
    return {
      open
    };
  },
  template: \`<div><q-button @click="open=true">Open</q-button><q-drawer-modal v-model="open" title="Filters">Drawer body</q-drawer-modal></div>\`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u = [`Default`]));
})();
export { l as Default, u as __namedExportsOrder, c as default };
