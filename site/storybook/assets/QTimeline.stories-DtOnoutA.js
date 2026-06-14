import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { X as r, Y as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    r(),
    (a = { title: `Components/QTimeline`, component: i }),
    (o = () =>
      t({
        components: { QTimeline: i },
        setup() {
          return {
            items: [
              { timestamp: `10:00`, title: `Created`, type: `primary` },
              { timestamp: `12:00`, title: `Approved`, type: `success` }
            ]
          };
        },
        template: `<q-timeline :items="items" style="max-width:400px" />`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTimeline
  },
  setup() {
    const items = [{
      timestamp: '10:00',
      title: 'Created',
      type: 'primary'
    }, {
      timestamp: '12:00',
      title: 'Approved',
      type: 'success'
    }];
    return {
      items
    };
  },
  template: \`<q-timeline :items="items" style="max-width:400px" />\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
