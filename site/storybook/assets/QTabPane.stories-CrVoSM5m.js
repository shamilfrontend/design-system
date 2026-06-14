import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { $ as i, et as a, nt as o, tt as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (r(),
    o(),
    a(),
    (c = {
      title: `Components/QTabs/QTabPane`,
      component: s,
      subcomponents: { QTabs: i },
      argTypes: { width: { control: { type: `number` } } }
    }),
    (l = e =>
      n({
        components: { QTabs: i, QTabPane: s },
        setup() {
          return { args: e, activeTab: t(`first_tab`) };
        },
        template: `
      <q-tabs v-model="activeTab">
        <q-tab-pane
          :width="args.width"
          :name="args.name"
          :title="args.title"
          :disabled="args.disabled"
        />
        <q-tab-pane
          name="second_tab"
          title="Second tab"
        />
        <q-tab-pane
          name="third_tab"
          title="Third tab"
        />
      </q-tabs>
    `
      })),
    (u = l.bind({})),
    (u.args = { name: `first_tab`, title: `First tab` }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QTabs,
    QTabPane
  },
  setup() {
    const activeTab = ref<string>('first_tab');
    return {
      args,
      activeTab
    };
  },
  template: \`
      <q-tabs v-model="activeTab">
        <q-tab-pane
          :width="args.width"
          :name="args.name"
          :title="args.title"
          :disabled="args.disabled"
        />
        <q-tab-pane
          name="second_tab"
          title="Second tab"
        />
        <q-tab-pane
          name="third_tab"
          title="Third tab"
        />
      </q-tabs>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
