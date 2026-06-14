import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { gt as r, ht as i } from './iframe-CABL6dQv.js';
var a, o, s, c, l, u, d;
e(() => {
  (n(),
    r(),
    (a = {
      title: `Components/QSkeleton`,
      component: i,
      argTypes: {
        variant: {
          control: { type: `select` },
          options: [`text`, `circle`, `rect`, `button`]
        }
      }
    }),
    (o = e =>
      t({
        components: { QSkeleton: i },
        setup() {
          return { args: e };
        },
        template: `
      <q-skeleton
        :variant="args.variant"
        :animated="args.animated"
        :rows="args.rows"
        :width="args.width"
        :height="args.height"
        :radius="args.radius"
      />
    `
      })),
    (s = o.bind({})),
    (s.args = {
      variant: `text`,
      animated: !0,
      rows: 1,
      width: null,
      height: null,
      radius: null
    }),
    (c = o.bind({})),
    (c.args = { ...s.args, rows: 4 }),
    (l = () =>
      t({
        components: { QSkeleton: i },
        template: `
      <div style="display: flex; gap: 16px; align-items: center; width: 320px">
        <q-skeleton variant="circle" />
        <div style="flex: 1">
          <q-skeleton :rows="2" />
        </div>
      </div>
    `
      })),
    (u = () =>
      t({
        components: { QSkeleton: i },
        template: `
      <div style="width: 320px">
        <q-skeleton variant="rect" :height="160" />
        <div style="margin-top: 16px">
          <q-skeleton :rows="3" />
        </div>
        <q-skeleton variant="button" style="margin-top: 16px" />
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
    QSkeleton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-skeleton
        :variant="args.variant"
        :animated="args.animated"
        :rows="args.rows"
        :width="args.width"
        :height="args.height"
        :radius="args.radius"
      />
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
    QSkeleton
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-skeleton
        :variant="args.variant"
        :animated="args.animated"
        :rows="args.rows"
        :width="args.width"
        :height="args.height"
        :radius="args.radius"
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
          originalSource: `() => defineComponent({
  components: {
    QSkeleton
  },
  template: \`
      <div style="display: flex; gap: 16px; align-items: center; width: 320px">
        <q-skeleton variant="circle" />
        <div style="flex: 1">
          <q-skeleton :rows="2" />
        </div>
      </div>
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
          originalSource: `() => defineComponent({
  components: {
    QSkeleton
  },
  template: \`
      <div style="width: 320px">
        <q-skeleton variant="rect" :height="160" />
        <div style="margin-top: 16px">
          <q-skeleton :rows="3" />
        </div>
        <q-skeleton variant="button" style="margin-top: 16px" />
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`, `Paragraph`, `AvatarBlock`, `CardPlaceholder`]));
})();
export {
  l as AvatarBlock,
  u as CardPlaceholder,
  s as Default,
  c as Paragraph,
  d as __namedExportsOrder,
  a as default
};
