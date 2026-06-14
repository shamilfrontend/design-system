import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { O as i, k as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    a(),
    (o = { title: `Components/QMentions`, component: i }),
    (s = () =>
      n({
        components: { QMentions: i },
        setup() {
          return {
            v: t(``),
            options: [
              { value: `1`, label: `Alice` },
              { value: `2`, label: `Bob` }
            ]
          };
        },
        template: `<q-mentions v-model="v" :options="options" style="width:320px" />`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QMentions
  },
  setup() {
    const v = ref('');
    const options = [{
      value: '1',
      label: 'Alice'
    }, {
      value: '2',
      label: 'Bob'
    }];
    return {
      v,
      options
    };
  },
  template: \`<q-mentions v-model="v" :options="options" style="width:320px" />\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
