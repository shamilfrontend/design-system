import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { U as i, W as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    a(),
    (o = { title: `Components/QTransfer`, component: i }),
    (s = () =>
      n({
        components: { QTransfer: i },
        setup() {
          return {
            v: t([]),
            data: [
              { key: 1, label: `Admin` },
              { key: 2, label: `Editor` },
              { key: 3, label: `Viewer` }
            ]
          };
        },
        template: `<q-transfer v-model="v" :data="data" :titles="['Available','Selected']" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTransfer
  },
  setup() {
    const v = ref([]);
    const data = [{
      key: 1,
      label: 'Admin'
    }, {
      key: 2,
      label: 'Editor'
    }, {
      key: 3,
      label: 'Viewer'
    }];
    return {
      v,
      data
    };
  },
  template: \`<q-transfer v-model="v" :data="data" :titles="['Available','Selected']" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
