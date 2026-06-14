import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { er as r, tr as i } from './iframe-CABL6dQv.js';
var a, o, s, c;
e(() => {
  (n(),
    i(),
    (a = {
      title: `Components/QContextMenu`,
      component: r,
      argTypes: {
        position: {
          options: [`left`, `right`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (o = e =>
      t({
        setup() {
          return {
            args: e,
            handleAction: e => {
              console.log(e);
            }
          };
        },
        template: `
      <div style="width: 304px; height:140px">
        <q-context-menu
          :menu-items="args.menuItems"
          :position="args.position"
          :teleport-to="args.teleportTo"
          @action="handleAction"
        />
      </div>
    `
      })),
    (s = o.bind({})),
    (s.args = {
      menuItems: [
        { action: `action1`, name: `Menu item 1`, icon: `q-icon-account` },
        { action: `action2`, name: `Menu item 2`, icon: `q-icon-bell` },
        { action: `action3`, name: `Menu item 3`, icon: `q-icon-pic` }
      ]
    }),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const handleAction = (action: string): void => {
      console.log(action);
    };
    return {
      args,
      handleAction
    };
  },
  template: \`
      <div style="width: 304px; height:140px">
        <q-context-menu
          :menu-items="args.menuItems"
          :position="args.position"
          :teleport-to="args.teleportTo"
          @action="handleAction"
        />
      </div>
    \`
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Default`]));
})();
export { s as Default, c as __namedExportsOrder, a as default };
