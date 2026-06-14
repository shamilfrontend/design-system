import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, d as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { St as i, cr as a, lr as o, xt as s } from './iframe-CABL6dQv.js';
import { t as c } from './layout-C3LLPJfr.js';
var l, u, d, f;
e(() => {
  (r(),
    o(),
    i(),
    c(),
    (l = {
      title: `Components/Layout`,
      subcomponents: { QRow: s, QCol: a },
      argTypes: {
        gutter: {
          name: `gutter`,
          control: `text`,
          type: { name: `string`, required: !1 },
          description: `grid spacing (in CSS units)`,
          table: { type: { summary: `string` } }
        }
      }
    }),
    (u = e =>
      t({
        components: { QRow: s, QCol: a },
        setup() {
          return {
            demoStyles: n(() => ({
              '--layout-gutter': (e.gutter ?? ``).trim()
            }))
          };
        },
        template: `
      <div class="demo" :style="demoStyles">
        <q-row class="demo__row">
          <q-col class="demo__col" cols="8">
            <div class="demo__content">8</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="8">
            <div class="demo__content">8</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="5">
            <div class="demo__content">5</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="3">
            <div class="demo__content">3</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="5">
            <div class="demo__content">5</div>
          </q-col>

          <q-col class="demo__col" cols="7">
            <div class="demo__content">7</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="10">
            <div class="demo__content">10</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
      </div>
    `
      })),
    (d = u.bind({})),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QRow,
    QCol
  },
  setup() {
    const demoStyles = computed<Record<string, string>>(() => ({
      '--layout-gutter': (args.gutter ?? '').trim()
    }));
    return {
      demoStyles
    };
  },
  template: \`
      <div class="demo" :style="demoStyles">
        <q-row class="demo__row">
          <q-col class="demo__col" cols="8">
            <div class="demo__content">8</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="4">
            <div class="demo__content">4</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="8">
            <div class="demo__content">8</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="5">
            <div class="demo__content">5</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>

          <q-col class="demo__col" cols="3">
            <div class="demo__content">3</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="5">
            <div class="demo__content">5</div>
          </q-col>

          <q-col class="demo__col" cols="7">
            <div class="demo__content">7</div>
          </q-col>
        </q-row>

        <q-row class="demo__row">
          <q-col class="demo__col" cols="10">
            <div class="demo__content">10</div>
          </q-col>

          <q-col class="demo__col" cols="2">
            <div class="demo__content">2</div>
          </q-col>
        </q-row>
      </div>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`]));
})();
export { d as Default, f as __namedExportsOrder, l as default };
