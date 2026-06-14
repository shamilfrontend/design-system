import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import {
  Ar as r,
  en as i,
  kr as a,
  nn as o,
  tn as s
} from './iframe-CABL6dQv.js';
var c, l, u;
e(() => {
  (n(),
    o(),
    r(),
    (c = { title: `Components/QList`, component: i }),
    (l = () =>
      t({
        components: { QList: i, QListItem: s, QAvatar: a },
        template: `<q-list bordered style="width:360px"><q-list-item><template #prefix><q-avatar size="small">U</q-avatar></template><template #title>User</template>Last activity 2h ago</q-list-item></q-list>`
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QList,
    QListItem,
    QAvatar
  },
  template: \`<q-list bordered style="width:360px"><q-list-item><template #prefix><q-avatar size="small">U</q-avatar></template><template #title>User</template>Last activity 2h ago</q-list-item></q-list>\`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u = [`Default`]));
})();
export { l as Default, u as __namedExportsOrder, c as default };
