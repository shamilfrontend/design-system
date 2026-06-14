import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import {
  Gt as r,
  Kt as i,
  Ut as a,
  Wt as o,
  _n as s,
  qt as c
} from './iframe-CABL6dQv.js';
import { t as l } from './iconsList-DiWPY8la.js';
var u, d, f, p;
e(() => {
  (n(),
    a(),
    i(),
    l(),
    (u = {
      title: `Plugins/QNotification`,
      component: r,
      argTypes: {
        icon: { options: s, control: { type: `select` } },
        type: { options: Object.values(c), control: { type: `select` } }
      }
    }),
    (d = e =>
      t({
        setup() {
          let t = o(),
            n = null;
          return {
            handleClick: () => {
              n = t(e.content, {
                type: e.type,
                duration: e.duration,
                icon: e.icon
              });
            },
            handleCloseLastClick: () => {
              n && t.close(n);
            },
            handleCloseAllClick: () => {
              t.closeAll();
            }
          };
        },
        template: `
      <q-button @click="handleClick">Click to open</q-button>
      <q-button @click="handleCloseLastClick">Close last</q-button>
      <q-button
        theme="secondary"
        @click="handleCloseAllClick"
      >
        Close all
      </q-button>
    `
      })),
    (f = d.bind({})),
    (f.args = {
      content: `Morbi massa libero, vehicula nec consequat sed, porta a sem.`,
      type: c.WARNING,
      duration: null,
      icon: null
    }),
    (f.parameters = {
      ...f.parameters,
      docs: {
        ...f.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const notify = useNotify();
    let lastCloudId: Nullable<QNotifyId> = null;
    const handleClick = (): void => {
      const notifyId = notify(args.content, {
        type: args.type,
        duration: args.duration,
        icon: args.icon
      });
      lastCloudId = notifyId;
    };
    const handleCloseLastClick = (): void => {
      if (lastCloudId) notify.close(lastCloudId);
    };
    const handleCloseAllClick = (): void => {
      notify.closeAll();
    };
    return {
      handleClick,
      handleCloseLastClick,
      handleCloseAllClick
    };
  },
  template: \`
      <q-button @click="handleClick">Click to open</q-button>
      <q-button @click="handleCloseLastClick">Close last</q-button>
      <q-button
        theme="secondary"
        @click="handleCloseAllClick"
      >
        Close all
      </q-button>
    \`
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p = [`Default`]));
})();
export { f as Default, p as __namedExportsOrder, u as default };
