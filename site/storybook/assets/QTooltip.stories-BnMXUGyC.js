import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { G as a, K as o } from './iframe-CABL6dQv.js';
var s, c, l, u, d, f;
e(() => {
  (n(),
    r(),
    o(),
    (s = {
      title: `Components/QTooltip`,
      component: a,
      argTypes: {
        placement: {
          control: { type: `select` },
          options: [
            `top`,
            `top-start`,
            `top-end`,
            `bottom`,
            `bottom-start`,
            `bottom-end`,
            `left`,
            `right`
          ]
        },
        effect: { control: { type: `select` }, options: [`dark`, `light`] }
      }
    }),
    (c = e =>
      t({
        components: { QTooltip: a, QButton: i },
        setup() {
          return { args: e };
        },
        template: `
      <q-tooltip v-bind="args">
        <q-button>Hover me</q-button>
      </q-tooltip>
    `
      })),
    (l = c.bind({})),
    (l.args = {
      content: `Tooltip text`,
      placement: `top`,
      effect: `dark`,
      disabled: !1,
      openDelay: 200,
      closeDelay: 0
    }),
    (u = c.bind({})),
    (u.args = { ...l.args, effect: `light`, content: `Light tooltip` }),
    (d = () =>
      t({
        components: { QTooltip: a, QButton: i },
        template: `
      <q-tooltip placement="right">
        <q-button theme="secondary">Custom slot</q-button>
        <template #content>
          <strong>Bold</strong> tooltip content
        </template>
      </q-tooltip>
    `
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QTooltip,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-tooltip v-bind="args">
        <q-button>Hover me</q-button>
      </q-tooltip>
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
  components: {
    QTooltip,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-tooltip v-bind="args">
        <q-button>Hover me</q-button>
      </q-tooltip>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QTooltip,
    QButton
  },
  template: \`
      <q-tooltip placement="right">
        <q-button theme="secondary">Custom slot</q-button>
        <template #content>
          <strong>Bold</strong> tooltip content
        </template>
      </q-tooltip>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`, `Light`, `CustomContent`]));
})();
export {
  d as CustomContent,
  l as Default,
  u as Light,
  f as __namedExportsOrder,
  s as default
};
