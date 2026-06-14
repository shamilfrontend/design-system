import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Fr as i, Ir as a, nr as o, rr as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (i(),
    r(),
    s(),
    (c = {
      title: `Components/QColorPicker`,
      component: o,
      argTypes: {
        modelValue: { control: !1 },
        placement: { options: a, control: { type: `select` } },
        colorFormat: { options: [`hex`, `rgb`], control: { type: `select` } }
      }
    }),
    (l = e =>
      n({
        setup() {
          return { args: e, color: t(`#f25`) };
        },
        template: `
      <div style="width:584px; height:312px">
        <q-color-picker
          v-model="color"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :alpha-shown="args.alphaShown"
          :color-format="args.colorFormat"
          :placement="args.placement"
          :popper-options="args.popperOptions"
          :teleport-to="args.teleportTo"
        />
      </div>
    `
      })),
    (u = l.bind({})),
    (u.args = { popperOptions: {} }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const color = ref<string>('#f25');
    return {
      args,
      color
    };
  },
  template: \`
      <div style="width:584px; height:312px">
        <q-color-picker
          v-model="color"
          :disabled="args.disabled"
          :clearable="args.clearable"
          :alpha-shown="args.alphaShown"
          :color-format="args.colorFormat"
          :placement="args.placement"
          :popper-options="args.popperOptions"
          :teleport-to="args.teleportTo"
        />
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
