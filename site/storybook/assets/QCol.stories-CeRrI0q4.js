import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { St as r, cr as i, lr as a, xt as o } from './iframe-CABL6dQv.js';
import { t as s } from './layout-C3LLPJfr.js';
var c, l, u, d;
e(() => {
  (n(),
    a(),
    r(),
    s(),
    (c = {
      title: `Components/Layout/QCol`,
      component: i,
      subcomponents: { QRow: o },
      argTypes: {
        cols: {
          options: [null, `auto`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          control: { type: `select` }
        },
        offset: {
          options: [null, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          control: { type: `select` }
        }
      }
    }),
    (l = e =>
      t({
        components: { QRow: o, QCol: i },
        setup() {
          return { args: e };
        },
        template: `
      <div class="demo">
        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col
            class="demo__col"
            :tag="args.tag"
            :cols="args.cols"
            :offset="args.offset"
          >
            <div class="demo__content">dyn</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
      </div>
    `
      })),
    (u = l.bind({})),
    (u.args = { tag: `div`, cols: 5, offset: 3 }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QRow,
    QCol
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <div class="demo">
        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col
            class="demo__col"
            :tag="args.tag"
            :cols="args.cols"
            :offset="args.offset"
          >
            <div class="demo__content">dyn</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
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
