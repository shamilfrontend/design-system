const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/ChevronUp-CVvxJ5aT.js',
      'assets/_plugin-vue_export-helper-DyGbzYVF.js',
      'assets/preload-helper-CMdWXl7s.js',
      'assets/vue.esm-bundler-BVbty6R8.js',
      'assets/ChevronDown-B_PMGojV.js'
    ])
) => i.map(i => d[i]);
import { i as e, n as t, t as n } from './preload-helper-CMdWXl7s.js';
import { Z as r, b as i, t as a, y as o } from './vue.esm-bundler-BVbty6R8.js';
import { ar as s, ir as c, or as l, sr as u } from './iframe-CABL6dQv.js';
var d, f, p, m;
e(() => {
  (a(),
    u(),
    s(),
    t(),
    (d = {
      title: `Components/QCollapse`,
      component: l,
      subcomponents: { QCollapseItem: c },
      argTypes: {
        customIcon: {
          control: { type: `boolean` },
          description: `Control display of the custom icon (demonstration purpose only)`
        },
        openIcon: { control: !1 },
        closeIcon: { control: !1 }
      }
    }),
    (f = e =>
      i({
        components: { QCollapse: l, QCollapseItem: c },
        setup() {
          return {
            args: e,
            activeNames: r([`1`]),
            iconUp: o(() =>
              n(
                () => import(`./ChevronUp-CVvxJ5aT.js`),
                __vite__mapDeps([0, 1, 2, 3])
              )
            ),
            iconDown: o(() =>
              n(
                () => import(`./ChevronDown-B_PMGojV.js`),
                __vite__mapDeps([4, 1, 2, 3])
              )
            )
          };
        },
        template: `
      <q-collapse
        v-model="activeNames"
        :close-icon="args.customIcon ? iconDown : null"
        :open-icon="args.customIcon ? iconUp : null"
        :accordion="args.accordion"
        style="max-width:732px"
      >
        <q-collapse-item
          title="Consistency"
          name="1"
        >
          <div>
            Consistent with real life: in line with the process and logic of real
            life, and comply with languages and habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such as:
            design style, icons and texts, position of elements, etc.
          </div>
        </q-collapse-item>
        <q-collapse-item
          title="Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or  reflect current state by updat"
        >
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects;
          </div>
          <div>
            Visual feedback: reflect current state by updating or rearranging
            elements of the page.
          </div>
        </q-collapse-item>
        <q-collapse-item title="Efficiency">
          <div>
            Simplify the process: keep operating process simple and intuitive;
          </div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users
            can quickly understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps
            the users to identify and frees them from memorizing and recalling.
          </div>
        </q-collapse-item>
        <q-collapse-item
          title="Controllability"
          name="4"
        >
          <div>
            Decision making: giving advices about operations is acceptable, but do
            not make decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate,
            including canceling, aborting or terminating current operation.
          </div>
        </q-collapse-item>
      </q-collapse>
    `
      })),
    (p = f.bind({ customIcon: !1 })),
    (p.parameters = {
      ...p.parameters,
      docs: {
        ...p.parameters?.docs,
        source: {
          originalSource: `QCollapseStory.bind({
  customIcon: false
})`,
          ...p.parameters?.docs?.source
        }
      }
    }),
    (m = [`CustomIcon`]));
})();
export { p as CustomIcon, m as __namedExportsOrder, d as default };
