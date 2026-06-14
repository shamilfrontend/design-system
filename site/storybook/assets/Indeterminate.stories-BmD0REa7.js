import { i as e } from './preload-helper-CMdWXl7s.js';
import { U as t, Z as n, b as r, t as i } from './vue.esm-bundler-BVbty6R8.js';
import { _r as a, dr as o, gr as s, ur as c } from './iframe-CABL6dQv.js';
var l, u, d, f;
e(() => {
  (i(),
    a(),
    o(),
    (l = {
      title: `Components/QCheckboxGroup/Indeterminate`,
      component: c,
      argTypes: {
        direction: {
          options: [`vertical`, `horizontal`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (u = e =>
      r({
        components: { QCheckboxGroup: c, QCheckbox: s },
        setup() {
          let r = n(!1),
            i = n([`Option A`, `Option C`]),
            a = n([`Option A`, `Option B`, `Option C`, `Option D`]),
            o = n(!0);
          return (
            t(i, e => {
              let t = e.length;
              ((r.value = t === a.value.length),
                (o.value = t > 0 && t < a.value.length));
            }),
            {
              args: e,
              areAllChecked: r,
              checkedCities: i,
              cities: a,
              isIndeterminate: o,
              handleChange: e => {
                ((i.value = e ? a.value : []), (o.value = !1));
              }
            }
          );
        },
        template: `
      <div>
        <q-checkbox
          v-model="areAllChecked"
          :indeterminate="isIndeterminate"
          @change="handleChange"
        >
          Check all
        </q-checkbox>
        <br/><br/>
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
          >
            {{ city }}
          </q-checkbox>
        </q-checkbox-group>
      </div>
    `
      })),
    (d = u.bind({})),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QCheckboxGroup,
    QCheckbox
  },
  setup() {
    const areAllChecked = ref<boolean>(false);
    const checkedCities = ref<string[]>(['Option A', 'Option C']);
    const cities = ref<string[]>(['Option A', 'Option B', 'Option C', 'Option D']);
    const isIndeterminate = ref<boolean>(true);
    const handleChange = (value: boolean): void => {
      checkedCities.value = value ? cities.value : [];
      isIndeterminate.value = false;
    };
    watch(checkedCities, value => {
      const checkedCount = value.length;
      areAllChecked.value = checkedCount === cities.value.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < cities.value.length;
    });
    return {
      args,
      areAllChecked,
      checkedCities,
      cities,
      isIndeterminate,
      handleChange
    };
  },
  template: \`
      <div>
        <q-checkbox
          v-model="areAllChecked"
          :indeterminate="isIndeterminate"
          @change="handleChange"
        >
          Check all
        </q-checkbox>
        <br/><br/>
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
          >
            {{ city }}
          </q-checkbox>
        </q-checkbox-group>
      </div>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Indeterminate`]));
})();
export { d as Indeterminate, f as __namedExportsOrder, l as default };
