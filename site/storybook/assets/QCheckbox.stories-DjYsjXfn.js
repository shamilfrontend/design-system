import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { _r as i, gr as a } from './iframe-CABL6dQv.js';
var o, s, c, l, u, d;
e(() => {
  (r(),
    i(),
    (o = {
      title: `Components/QCheckbox`,
      component: a,
      argTypes: {
        modelValue: { control: { type: `boolean` }, defaultValue: !0 },
        indeterminate: { control: { type: `boolean` }, defaultValue: !1 },
        labelSize: {
          options: [`regular`, `small`],
          control: { type: `select` },
          defaultValue: `regular`
        }
      }
    }),
    (s = e =>
      n({
        setup() {
          return { isChecked: t(!!e.modelValue), args: e };
        },
        template: `
      <q-checkbox
        v-model="isChecked"
        :label="args.label"
        :indeterminate="args.indeterminate"
        :disabled="args.disabled"
        :root-tag="args.rootTag"
        :label-size="args.labelSize"
      />
    `
      })),
    (c = s.bind({})),
    (c.args = { label: `Option A` }),
    (l = s.bind({})),
    (l.args = { label: `Option A`, disabled: !0 }),
    (u = s.bind({})),
    (u.args = { label: `Option A`, modelValue: !1, indeterminate: !0 }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const isChecked = ref<boolean>(!!args.modelValue);
    return {
      isChecked,
      args
    };
  },
  template: \`
      <q-checkbox
        v-model="isChecked"
        :label="args.label"
        :indeterminate="args.indeterminate"
        :disabled="args.disabled"
        :root-tag="args.rootTag"
        :label-size="args.labelSize"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const isChecked = ref<boolean>(!!args.modelValue);
    return {
      isChecked,
      args
    };
  },
  template: \`
      <q-checkbox
        v-model="isChecked"
        :label="args.label"
        :indeterminate="args.indeterminate"
        :disabled="args.disabled"
        :root-tag="args.rootTag"
        :label-size="args.labelSize"
      />
    \`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const isChecked = ref<boolean>(!!args.modelValue);
    return {
      isChecked,
      args
    };
  },
  template: \`
      <q-checkbox
        v-model="isChecked"
        :label="args.label"
        :indeterminate="args.indeterminate"
        :disabled="args.disabled"
        :root-tag="args.rootTag"
        :label-size="args.labelSize"
      />
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`, `Disabled`, `Indeterminate`]));
})();
export {
  c as Default,
  l as Disabled,
  u as Indeterminate,
  d as __namedExportsOrder,
  o as default
};
