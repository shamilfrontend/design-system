import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { _n as r, gn as i, hn as a } from './iframe-CABL6dQv.js';
var o, s, c, l, u, d, f;
e(() => {
  (n(),
    i(),
    (o = {
      title: `Components/QIcon`,
      component: a,
      argTypes: {
        name: { control: { type: `select` }, options: r },
        size: {
          control: { type: `select` },
          options: [`small`, `regular`, `large`]
        },
        color: { control: { type: `color` } },
        spin: { control: { type: `boolean` } },
        ariaLabel: { control: { type: `text` } }
      }
    }),
    (s = e =>
      t({
        components: { QIcon: a },
        setup() {
          return { args: e };
        },
        template: `
      <q-icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
        :spin="args.spin"
        :aria-label="args.ariaLabel"
      />
    `
      })),
    (c = s.bind({})),
    (c.args = {
      name: `search`,
      size: `regular`,
      color: null,
      spin: !1,
      ariaLabel: null
    }),
    (l = s.bind({})),
    (l.args = { ...c.args, name: `close` }),
    (u = s.bind({})),
    (u.args = { ...c.args, name: `reverse`, spin: !0, color: `#6366f1` }),
    (d = () =>
      t({
        components: { QIcon: a },
        template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <q-icon name="star-fill" size="small" />
        <q-icon name="star-fill" size="regular" />
        <q-icon name="star-fill" size="large" />
        <q-icon name="star-fill" :size="32" color="var(--color-primary)" />
      </div>
    `
      })),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
        :spin="args.spin"
        :aria-label="args.ariaLabel"
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
  components: {
    QIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
        :spin="args.spin"
        :aria-label="args.ariaLabel"
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
  components: {
    QIcon
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-icon
        :name="args.name"
        :size="args.size"
        :color="args.color"
        :spin="args.spin"
        :aria-label="args.ariaLabel"
      />
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
    QIcon
  },
  template: \`
      <div style="display: flex; gap: 24px; align-items: center;">
        <q-icon name="star-fill" size="small" />
        <q-icon name="star-fill" size="regular" />
        <q-icon name="star-fill" size="large" />
        <q-icon name="star-fill" :size="32" color="var(--color-primary)" />
      </div>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`, `ShortName`, `Spinning`, `Sizes`]));
})();
export {
  c as Default,
  l as ShortName,
  d as Sizes,
  u as Spinning,
  f as __namedExportsOrder,
  o as default
};
