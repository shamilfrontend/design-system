import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { n as r, t as i } from './QScrollbar-H0ZFUmZK.js';
var a = e(() => {}),
  o,
  s,
  c,
  l;
e(() => {
  (n(),
    r(),
    a(),
    (o = {
      title: `Components/QScrollbar`,
      component: i,
      argTypes: {
        theme: {
          options: [`primary`, `secondary`],
          control: { type: `inline-radio` }
        }
      }
    }),
    (s = e =>
      t({
        components: { QScrollbar: i },
        setup() {
          return { args: e };
        },
        template: `
      <q-scrollbar
        :scroll-to="args.scrollTo"
        :visible="args.visible"
        :theme="args.theme"
        :view-tag="args.viewTag"
        :wrap-class="args.wrapClass"
        :view-class="args.viewClass"
        :view-style="args.viewStyle"
        :noresize="args.noresize"
      >
        <div class="french-bread">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </q-scrollbar>
    `
      })),
    (c = s.bind({})),
    (c.args = {
      theme: `primary`,
      viewTag: `div`,
      wrapClass: `scrollbar__wrap`,
      viewClass: ``
    }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QScrollbar
  },
  setup() {
    return {
      args
    };
  },
  template: \`
      <q-scrollbar
        :scroll-to="args.scrollTo"
        :visible="args.visible"
        :theme="args.theme"
        :view-tag="args.viewTag"
        :wrap-class="args.wrapClass"
        :view-class="args.viewClass"
        :view-style="args.viewStyle"
        :noresize="args.noresize"
      >
        <div class="french-bread">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </q-scrollbar>
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
