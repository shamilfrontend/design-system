import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Mr as i, jr as a } from './iframe-CABL6dQv.js';
var o, s, c;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QAutoComplete`, component: a }),
    (s = () =>
      n({
        components: { QAutoComplete: a },
        setup() {
          return {
            q: t(``),
            options: [`Apple`, `Apricot`, `Banana`, `Blueberry`]
          };
        },
        template: `<div style="width:280px"><q-auto-complete v-model="q" :options="options" placeholder="Search fruit" /></div>`
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QAutoComplete
  },
  setup() {
    const q = ref('');
    const options = ['Apple', 'Apricot', 'Banana', 'Blueberry'];
    return {
      q,
      options
    };
  },
  template: \`<div style="width:280px"><q-auto-complete v-model="q" :options="options" placeholder="Search fruit" /></div>\`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, o as default };
