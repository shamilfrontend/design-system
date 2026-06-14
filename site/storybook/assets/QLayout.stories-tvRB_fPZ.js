import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import {
  an as r,
  cn as i,
  ln as a,
  on as o,
  sn as s,
  un as c
} from './iframe-CABL6dQv.js';
var l, u, d;
e(() => {
  (n(),
    c(),
    (l = { title: `Components/QLayout`, component: i }),
    (u = () =>
      t({
        components: {
          QLayout: i,
          QHeader: s,
          QSidebar: a,
          QFooter: o,
          QContainer: r
        },
        template: `
      <q-layout style="min-height: 400px; border: 1px solid var(--color-border)">
        <template #header>
          <q-header>Header</q-header>
        </template>
        <template #sidebar>
          <q-sidebar>Sidebar</q-sidebar>
        </template>
        <q-container>
          Main content
        </q-container>
        <template #footer>
          <q-footer>Footer</q-footer>
        </template>
      </q-layout>
    `
      })),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QLayout,
    QHeader,
    QSidebar,
    QFooter,
    QContainer
  },
  template: \`
      <q-layout style="min-height: 400px; border: 1px solid var(--color-border)">
        <template #header>
          <q-header>Header</q-header>
        </template>
        <template #sidebar>
          <q-sidebar>Sidebar</q-sidebar>
        </template>
        <q-container>
          Main content
        </q-container>
        <template #footer>
          <q-footer>Footer</q-footer>
        </template>
      </q-layout>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, l as default };
