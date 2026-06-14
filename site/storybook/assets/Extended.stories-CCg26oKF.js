const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      'assets/DrawerFormTest-Budbvckh.js',
      'assets/_plugin-vue_export-helper-DyGbzYVF.js',
      'assets/preload-helper-CMdWXl7s.js',
      'assets/iframe-CABL6dQv.js',
      'assets/vue.esm-bundler-BVbty6R8.js',
      'assets/lodash-CfTzKX-M.js',
      'assets/QButton-Cew9k7i-.js',
      'assets/helpers-D3Z0HUyh.js',
      'assets/QScrollbar-H0ZFUmZK.js',
      'assets/isServer-DOelQ9zM.js',
      'assets/hooks-Bp_2Pnfv.js',
      'assets/locale-tU0CN4Au.js',
      'assets/config-D7-7gfK6.js',
      'assets/iframe-BcnbhKPP.css',
      'assets/DrawerFormTest-DeR0TQr7.css'
    ])
) => i.map(i => d[i]);
import { i as e, n as t, t as n } from './preload-helper-CMdWXl7s.js';
import { b as r, t as i, y as a } from './vue.esm-bundler-BVbty6R8.js';
import { _ as o, f as s, t as c, v as l } from './iframe-CABL6dQv.js';
var u, d, f, p;
e(() => {
  (i(),
    c(),
    o(),
    t(),
    (u = {
      title: `Plugins/QDrawer/Extended`,
      component: l,
      argTypes: {
        content: { control: !1 },
        teleportTo: { control: !1 },
        position: {
          options: [`left`, `right`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (d = e =>
      r({
        setup() {
          let t = s();
          return {
            handleClick: async () => {
              try {
                let r = await t(
                  {
                    component: a(() =>
                      n(
                        () => import(`./DrawerFormTest-Budbvckh.js`),
                        __vite__mapDeps([
                          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
                        ])
                      )
                    ),
                    props: { someExternalProp: `Some external prop here` },
                    listeners: {
                      nameInput: e => {
                        console.log(`listeners - nameInput: ${e}`);
                      }
                    }
                  },
                  e
                );
                console.log(`resolve`, r);
              } catch (e) {
                console.log(`reject`, e);
              }
            }
          };
        },
        template: `<q-button @click="handleClick">Click to open drawer</q-button>`
      })),
    (f = d.bind({})),
    (f.parameters = {
      ...f.parameters,
      docs: {
        ...f.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const drawer = useDrawer();
    const handleClick = async (): Promise<void> => {
      try {
        const result = await drawer({
          component: defineAsyncComponent(() => import('./DrawerFormTest.vue')),
          props: {
            someExternalProp: 'Some external prop here'
          },
          listeners: {
            nameInput: (value: string) => {
              console.log(\`listeners - nameInput: \${value}\`);
            }
          }
        }, args);
        console.log('resolve', result);
      } catch (result) {
        console.log('reject', result);
      }
    };
    return {
      handleClick
    };
  },
  template: '<q-button @click="handleClick">Click to open drawer</q-button>'
})`,
          ...f.parameters?.docs?.source
        }
      }
    }),
    (p = [`Extended`]));
})();
export { f as Extended, p as __namedExportsOrder, u as default };
