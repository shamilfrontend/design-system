import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QButton-Cew9k7i-.js';
import { Er as a, Tr as o, gn as s, hn as c } from './iframe-CABL6dQv.js';
var l, u, d, f, p, m, h;
e(() => {
  (n(),
    a(),
    r(),
    s(),
    (l = {
      title: `Components/QBadge`,
      component: o,
      argTypes: {
        type: {
          control: { type: `select` },
          options: [`primary`, `success`, `warning`, `danger`, `info`]
        }
      }
    }),
    (u = e =>
      t({
        components: { QBadge: o, QButton: i },
        setup() {
          return { args: e };
        },
        template: `
      <q-badge
        :value="args.value"
        :max="args.max"
        :type="args.type"
        :is-dot="args.isDot"
        :hidden="args.hidden"
      >
        <q-button>Messages</q-button>
      </q-badge>
    `
      })),
    (d = u.bind({})),
    (d.args = { value: 5, max: 99, type: `danger`, isDot: !1, hidden: !1 }),
    (f = u.bind({})),
    (f.args = { ...d.args, isDot: !0, value: null }),
    (p = u.bind({})),
    (p.args = { ...d.args, value: 120, max: 99 }),
    (m = () =>
      t({
        components: { QBadge: o, QIcon: c },
        template: `
      <q-badge :value="3" type="primary">
        <q-icon name="bell" size="large" />
      </q-badge>
    `
      })),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QBadge,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-badge
        :value="args.value"
        :max="args.max"
        :type="args.type"
        :is-dot="args.isDot"
        :hidden="args.hidden"
      >
        <q-button>Messages</q-button>
      </q-badge>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f.parameters = {
      ...f.parameters,
      docs: {
        ...f.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QBadge,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-badge
        :value="args.value"
        :max="args.max"
        :type="args.type"
        :is-dot="args.isDot"
        :hidden="args.hidden"
      >
        <q-button>Messages</q-button>
      </q-badge>
    \`
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p.parameters = {
      ...p.parameters,
      docs: {
        ...p.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QBadge,
    QButton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-badge
        :value="args.value"
        :max="args.max"
        :type="args.type"
        :is-dot="args.isDot"
        :hidden="args.hidden"
      >
        <q-button>Messages</q-button>
      </q-badge>
    \`
})`,
          ...p.parameters?.docs?.source
        }
      }
    }),
    (m.parameters = {
      ...m.parameters,
      docs: {
        ...m.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QBadge,
    QIcon
  },
  template: \`
      <q-badge :value="3" type="primary">
        <q-icon name="bell" size="large" />
      </q-badge>
    \`
})`,
          ...m.parameters?.docs?.source
        }
      }
    }),
    (h = [`Default`, `Dot`, `MaxValue`, `WithIcon`]));
})();
export {
  d as Default,
  f as Dot,
  p as MaxValue,
  m as WithIcon,
  h as __namedExportsOrder,
  l as default
};
