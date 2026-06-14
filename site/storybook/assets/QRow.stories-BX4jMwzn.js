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
      title: `Components/Layout/QRow`,
      component: o,
      subcomponents: { QCol: i },
      argTypes: {
        alignV: {
          options: [null, `start`, `end`, `center`, `baseline`, `stretch`],
          control: { type: `select` }
        },
        alignH: {
          options: [null, `start`, `end`, `center`, `between`, `around`],
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
        <q-row
          class="demo__row"
          :align-v="args.alignV"
          :align-h="args.alignH"
          :tag="args.tag"
        >
          <q-col class="demo-col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content" style="height: 25px;">4</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
      </div>
    `
      })),
    (u = l.bind({})),
    (l.args = { tag: `div` }),
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
        <q-row
          class="demo__row"
          :align-v="args.alignV"
          :align-h="args.alignH"
          :tag="args.tag"
        >
          <q-col class="demo-col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content" style="height: 25px;">4</div>
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
