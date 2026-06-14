import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Dt as i, Et as a, Ot as o, Tt as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (r(),
    o(),
    a(),
    (c = {
      title: `Components/QRadioGroup`,
      component: s,
      subcomponents: { QRadio: i },
      argTypes: {
        modelValue: { control: !1 },
        direction: {
          options: [`vertical`, `horizontal`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (l = e =>
      n({
        components: { QRadio: i, QRadioGroup: s },
        setup() {
          return {
            value: t(1),
            args: e,
            handleChange: e => {
              console.log(e, `change`);
            }
          };
        },
        template: `
      <q-radio-group
        v-model="value"
        :direction="args.direction"
        :disabled="args.disabled"
        :tag="args.tag"
        @change="handleChange"
      >
        <q-radio :value="1" label="Option A" />
        <q-radio :value="2" label="Option B" />
        <q-radio :value="3" label="Option C" />
      </q-radio-group>
    `
      })),
    (u = l.bind({})),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QRadio,
    QRadioGroup
  },
  setup() {
    const value = ref<number>(1);
    const handleChange = (modelValue: number): void => {
      console.log(modelValue, 'change');
    };
    return {
      value,
      args,
      handleChange
    };
  },
  template: \`
      <q-radio-group
        v-model="value"
        :direction="args.direction"
        :disabled="args.disabled"
        :tag="args.tag"
        @change="handleChange"
      >
        <q-radio :value="1" label="Option A" />
        <q-radio :value="2" label="Option B" />
        <q-radio :value="3" label="Option C" />
      </q-radio-group>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
