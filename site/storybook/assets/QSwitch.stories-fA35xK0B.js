import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { at as i, t as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    a(),
    (o = {
      title: `Components/QSwitch`,
      component: i,
      argTypes: {
        modelValue: { control: !1 },
        validateEvent: { control: !1 },
        activeValue: { control: { type: `text` } },
        inactiveValue: { control: { type: `text` } }
      }
    }),
    (s = e =>
      n({
        setup() {
          return { args: e, isOn: t(!0) };
        },
        template: `
      <q-switch 
        v-model="isOn"
        :loading="args.loading"
        :disabled="args.disabled"
        :active-value="args.activeValue"
        :inactive-value="args.inactiveValue"
      />
    `
      })),
    (c = s.bind({})),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const isOn = ref(true);
    return {
      args,
      isOn
    };
  },
  template: \`
      <q-switch 
        v-model="isOn"
        :loading="args.loading"
        :disabled="args.disabled"
        :active-value="args.activeValue"
        :inactive-value="args.inactiveValue"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
