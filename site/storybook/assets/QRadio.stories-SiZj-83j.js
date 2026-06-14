import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Dt as i, Ot as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QRadio`,
      component: i,
      argTypes: {
        checked: { control: !1 },
        value: { control: !1 },
        label: { control: `text` },
        labelSize: {
          options: [`regular`, `small`],
          control: { type: `select` },
          defaultValue: `regular`
        }
      }
    }),
    (s = e =>
      n({
        components: { QRadio: i },
        setup() {
          let n = t(1);
          return {
            radio1: n,
            radio2: t(1),
            args: e,
            handleChange: e => {
              (console.log(e, `change`), (n.value = e));
            }
          };
        },
        template: `
      <div>
        <q-radio
          :checked="radio1 === 1"
          :value="1"
          :label="args.label"
          :disabled="args.disabled"
          :name="args.name"
          :label-size="args.labelSize"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 2"
          :value="2"
          :label-size="args.labelSize"
          label="Option B"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 3"
          :value="3"
          :label-size="args.labelSize"
          label="Option C"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 4"
          :value="4"
          :label-size="args.labelSize"
          disabled
          label="Disabled"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio2 === 1"
          :value="1"
          :label-size="args.labelSize"
          disabled
          label="Checked & disabled"
          @change="radio2 = $event"
        />
      </div>
    `
      })),
    (c = s.bind({})),
    (c.args = { label: `Option A` }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QRadio
  },
  setup() {
    const radio1 = ref<number>(1);
    const radio2 = ref<number>(1);
    const handleChange = (value: number): void => {
      console.log(value, 'change');
      radio1.value = value;
    };
    return {
      radio1,
      radio2,
      args,
      handleChange
    };
  },
  template: \`
      <div>
        <q-radio
          :checked="radio1 === 1"
          :value="1"
          :label="args.label"
          :disabled="args.disabled"
          :name="args.name"
          :label-size="args.labelSize"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 2"
          :value="2"
          :label-size="args.labelSize"
          label="Option B"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 3"
          :value="3"
          :label-size="args.labelSize"
          label="Option C"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio1 === 4"
          :value="4"
          :label-size="args.labelSize"
          disabled
          label="Disabled"
          @change="handleChange"
        />
        <br /><br />
        <q-radio
          :checked="radio2 === 1"
          :value="1"
          :label-size="args.labelSize"
          disabled
          label="Checked & disabled"
          @change="radio2 = $event"
        />
      </div>
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
