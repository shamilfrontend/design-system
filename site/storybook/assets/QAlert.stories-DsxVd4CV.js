import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { Lr as r, Rr as i } from './iframe-CABL6dQv.js';
var a, o, s, c, l, u;
e(() => {
  (n(),
    i(),
    (a = {
      title: `Components/QAlert`,
      component: r,
      argTypes: {
        type: {
          control: { type: `select` },
          options: [`success`, `warning`, `info`, `error`]
        }
      }
    }),
    (o = e =>
      t({
        components: { QAlert: r },
        setup() {
          return { args: e };
        },
        template: `
      <q-alert
        :type="args.type"
        :title="args.title"
        :closable="args.closable"
        :show-icon="args.showIcon"
        style="max-width: 480px"
      >
        Additional description and context for this alert message.
      </q-alert>
    `
      })),
    (s = o.bind({})),
    (s.args = {
      type: `info`,
      title: `Information`,
      closable: !1,
      showIcon: !0
    }),
    (c = o.bind({})),
    (c.args = { ...s.args, type: `warning`, title: `Warning`, closable: !0 }),
    (l = () =>
      t({
        components: { QAlert: r },
        template: `
      <div style="display: grid; gap: 12px; max-width: 480px">
        <q-alert type="success" title="Success">Operation completed successfully.</q-alert>
        <q-alert type="warning" title="Warning">Please review the form fields.</q-alert>
        <q-alert type="info" title="Info">New updates are available.</q-alert>
        <q-alert type="error" title="Error">Something went wrong.</q-alert>
      </div>
    `
      })),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-alert
        :type="args.type"
        :title="args.title"
        :closable="args.closable"
        :show-icon="args.showIcon"
        style="max-width: 480px"
      >
        Additional description and context for this alert message.
      </q-alert>
    \`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QAlert
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-alert
        :type="args.type"
        :title="args.title"
        :closable="args.closable"
        :show-icon="args.showIcon"
        style="max-width: 480px"
      >
        Additional description and context for this alert message.
      </q-alert>
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
          originalSource: `() => defineComponent({
  components: {
    QAlert
  },
  template: \`
      <div style="display: grid; gap: 12px; max-width: 480px">
        <q-alert type="success" title="Success">Operation completed successfully.</q-alert>
        <q-alert type="warning" title="Warning">Please review the form fields.</q-alert>
        <q-alert type="info" title="Info">New updates are available.</q-alert>
        <q-alert type="error" title="Error">Something went wrong.</q-alert>
      </div>
    \`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u = [`Default`, `Closable`, `Types`]));
})();
export {
  c as Closable,
  s as Default,
  l as Types,
  u as __namedExportsOrder,
  a as default
};
