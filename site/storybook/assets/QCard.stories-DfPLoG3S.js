import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { Sr as a, xr as o } from './iframe-CABL6dQv.js';
var s, c, l, u, d, f;
e(() => {
  (n(),
    r(),
    a(),
    (s = {
      title: `Components/QCard`,
      component: o,
      argTypes: {
        shadow: {
          control: { type: `select` },
          options: [`always`, `hover`, `never`]
        }
      }
    }),
    (c = e =>
      t({
        components: { QCard: o, QButton: i },
        setup() {
          return { args: e };
        },
        template: `
      <q-card
        :shadow="args.shadow"
        :title="args.title"
        :body-padding="args.bodyPadding"
        style="width: 360px"
      >
        Card body with flexible slots.
        <template #footer>
          <q-button size="small">Action</q-button>
        </template>
      </q-card>
    `
      })),
    (l = c.bind({})),
    (l.args = { shadow: `always`, title: `Card title`, bodyPadding: !0 }),
    (u = c.bind({})),
    (u.args = { ...l.args, shadow: `hover` }),
    (d = () =>
      t({
        components: { QCard: o },
        template: `
      <q-card shadow="always" style="width: 360px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Custom header</span>
            <span style="font-size: 12px; color: var(--color-text-muted)">Meta</span>
          </div>
        </template>
        Content area without title prop.
      </q-card>
    `
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QCard,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-card
        :shadow="args.shadow"
        :title="args.title"
        :body-padding="args.bodyPadding"
        style="width: 360px"
      >
        Card body with flexible slots.
        <template #footer>
          <q-button size="small">Action</q-button>
        </template>
      </q-card>
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
    QCard,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-card
        :shadow="args.shadow"
        :title="args.title"
        :body-padding="args.bodyPadding"
        style="width: 360px"
      >
        Card body with flexible slots.
        <template #footer>
          <q-button size="small">Action</q-button>
        </template>
      </q-card>
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
    QCard
  },
  template: \`
      <q-card shadow="always" style="width: 360px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>Custom header</span>
            <span style="font-size: 12px; color: var(--color-text-muted)">Meta</span>
          </div>
        </template>
        Content area without title prop.
      </q-card>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`, `HoverShadow`, `CustomHeader`]));
})();
export {
  d as CustomHeader,
  l as Default,
  u as HoverShadow,
  f as __namedExportsOrder,
  s as default
};
