import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { _r as i, dr as a, gr as o, ur as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (r(),
    i(),
    a(),
    (c = {
      title: `Components/QCheckboxGroup`,
      component: s,
      argTypes: {
        direction: {
          options: [`vertical`, `horizontal`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (l = e =>
      n({
        components: { QCheckboxGroup: s, QCheckbox: o },
        setup() {
          return {
            checkedCities: t([`Shanghai`, `Beijing`]),
            cities: t([`Shanghai`, `Beijing`, `Guangzhou`, `Shenzhen`]),
            args: e
          };
        },
        template: `
      <q-checkbox-group
        v-model="checkedCities"
        :direction="args.direction"
        :min="args.min"
        :max="args.max"
        :disabled="args.disabled"
      >
        <q-checkbox
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{
          city
        }}</q-checkbox>
      </q-checkbox-group>
    `
      })),
    (u = l.bind({})),
    (u.args = { min: 1, max: 3 }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QCheckboxGroup,
    QCheckbox
  },
  setup() {
    const checkedCities = ref<string[]>(['Shanghai', 'Beijing']);
    const cities = ref<string[]>(['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']);
    return {
      checkedCities,
      cities,
      args
    };
  },
  template: \`
      <q-checkbox-group
        v-model="checkedCities"
        :direction="args.direction"
        :min="args.min"
        :max="args.max"
        :disabled="args.disabled"
      >
        <q-checkbox
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{
          city
        }}</q-checkbox>
      </q-checkbox-group>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
