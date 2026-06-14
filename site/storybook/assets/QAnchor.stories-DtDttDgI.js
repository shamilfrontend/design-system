import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { F as r, I as i } from './iframe-CABL6dQv.js';
var a, o, s;
e(() => {
  (n(),
    i(),
    (a = { title: `Components/QAnchor`, component: r }),
    (o = () =>
      t({
        components: { QAnchor: r },
        setup: () => ({
          items: [
            { key: `1`, href: `#s1`, title: `Section 1` },
            { key: `2`, href: `#s2`, title: `Section 2` }
          ]
        }),
        template: `<div><q-anchor :items="items" /><div id="s1" style="height:200px">S1</div><div id="s2" style="height:200px">S2</div></div>`
      })),
    (o.parameters = {
      ...o.parameters,
      docs: {
        ...o.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QAnchor
  },
  setup: () => ({
    items: [{
      key: '1',
      href: '#s1',
      title: 'Section 1'
    }, {
      key: '2',
      href: '#s2',
      title: 'Section 2'
    }]
  }),
  template: \`<div><q-anchor :items="items" /><div id="s1" style="height:200px">S1</div><div id="s2" style="height:200px">S2</div></div>\`
})`,
          ...o.parameters?.docs?.source
        }
      }
    }),
    (s = [`Default`]));
})();
export { o as Default, s as __namedExportsOrder, a as default };
