import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import {
  En as a,
  Tn as o,
  Xt as s,
  Yt as c,
  Zt as l
} from './iframe-CABL6dQv.js';
var u, d, f;
e(() => {
  (n(),
    r(),
    a(),
    l(),
    (u = { title: `Components/QDropdown`, component: o }),
    (d = () =>
      t({
        components: { QDropdown: o, QMenu: c, QMenuItem: s, QButton: i },
        template: `
      <q-dropdown>
        <q-button>Actions</q-button>
        <template #dropdown>
          <q-menu>
            <q-menu-item icon="q-icon-edit">Edit</q-menu-item>
            <q-menu-item icon="q-icon-copy">Copy</q-menu-item>
            <q-menu-item divided disabled>Disabled</q-menu-item>
            <q-menu-item icon="q-icon-trash">Delete</q-menu-item>
          </q-menu>
        </template>
      </q-dropdown>
    `
      })),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QDropdown,
    QMenu,
    QMenuItem,
    QButton
  },
  template: \`
      <q-dropdown>
        <q-button>Actions</q-button>
        <template #dropdown>
          <q-menu>
            <q-menu-item icon="q-icon-edit">Edit</q-menu-item>
            <q-menu-item icon="q-icon-copy">Copy</q-menu-item>
            <q-menu-item divided disabled>Disabled</q-menu-item>
            <q-menu-item icon="q-icon-trash">Delete</q-menu-item>
          </q-menu>
        </template>
      </q-dropdown>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`]));
})();
export { d as Default, f as __namedExportsOrder, u as default };
