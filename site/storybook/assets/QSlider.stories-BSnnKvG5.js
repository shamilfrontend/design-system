import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { i, t as a } from './locale-tU0CN4Au.js';
import { mt as o, pt as s } from './iframe-CABL6dQv.js';
var c,
  l = e(() => {
    (r(),
      a(),
      (c = e =>
        n({
          setup() {
            return { args: e, value: t(`normal`) };
          },
          template: `
      <q-slider
        v-model="value"
        v-bind="args"
      />
    `
        })),
      (c.args = {
        data: [
          { value: `easy`, label: i(`qSlider.easyLevel`) },
          { value: `normal`, label: i(`qSlider.mediumlevel`) },
          { value: `hard`, label: i(`qSlider.hardLevel`) }
        ]
      }));
  }),
  u,
  d = e(() => {
    (r(),
      a(),
      (u = e =>
        n({
          setup() {
            return { args: e, value: t(`normal`) };
          },
          template: `
      <q-slider
        v-model="value"
        v-bind="args"
      >
        <template #caption="{ label, data }">
          <div style="margin: 0; font-size: 14px; line-height: 18px;">{{ label }}</div>
          <div style="margin-top: 4px; font-size: 10px; line-height: 12px;">{{ data?.description }}</div>
        </template>
      </q-slider>
    `
        })),
      (u.args = {
        disabled: !1,
        data: [
          {
            value: `easy`,
            label: i(`qSlider.easyLevel`),
            slotData: { description: i(`qSlider.captionDescription`) }
          },
          {
            value: `normal`,
            label: i(`qSlider.mediumlevel`),
            slotData: { description: i(`qSlider.captionDescription`) }
          },
          {
            value: `hard`,
            label: i(`qSlider.hardLevel`),
            slotData: { description: i(`qSlider.captionDescription`) }
          }
        ]
      }));
  }),
  f,
  p = e(() => {
    (r(),
      (f = e =>
        n({
          setup() {
            return { args: e, value: t(33) };
          },
          template: `
      <q-slider
        v-model="value"
        v-bind="args"
      />
    `
        })),
      (f.args = {
        data: Array(101)
          .fill(null)
          .map((e, t) => ({
            value: t,
            label: [0, 100, 12, 33].includes(t) ? String(t) : void 0
          })),
        tooltipMode: `always`
      }));
  }),
  m,
  h;
e(() => {
  (o(),
    l(),
    d(),
    p(),
    (m = {
      title: `Components/QSlider`,
      component: s,
      argTypes: {
        tooltipMode: {
          options: [`hover`, `always`, null],
          control: { type: `select` }
        }
      },
      decorators: [
        () => ({ template: `<div style="width: 50vw;"><story /></div>` })
      ]
    }),
    (h = [`Default`, `SlotCaption`, `WithEmptyCaptions`]));
})();
export {
  c as Default,
  u as SlotCaption,
  f as WithEmptyCaptions,
  h as __namedExportsOrder,
  m as default
};
