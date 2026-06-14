import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { r, s as i, t as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (n(),
    a(),
    (o = { title: `Plugins/QMessageBox`, component: i }),
    (s = e =>
      t({
        setup() {
          let t = r(),
            n = async e => {
              if (e !== `confirm`) return !0;
              let t = () =>
                new Promise(e => {
                  setTimeout(() => e(`готово!`), 1e3);
                });
              try {
                return (await t(), !0);
              } catch {
                return !1;
              }
            };
          return {
            handleClick: async () => {
              try {
                let r = await t(
                  {
                    title: e.title,
                    message: e.message,
                    submessage: e.submessage,
                    confirmButtonText: e.confirmButtonText,
                    cancelButtonText: e.cancelButtonText,
                    beforeClose: n
                  },
                  {
                    onMounted: (e, t) => {
                      console.log(`onMounted`, e, t);
                    },
                    onUnmounted: e => {
                      console.log(`onUnmounted`, e);
                    }
                  }
                );
                console.log(`resolve`, r);
              } catch (e) {
                console.log(`reject`, e);
              }
            }
          };
        },
        template: `<q-button @click="handleClick">Click to open message box</q-button>`
      })),
    (c = s.bind({})),
    (c.args = {
      title: `Morbi massa libero, vehicula nec consequat sed, porta a sem.`,
      message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula volutpat nulla et egestas. Mauris mollis, lorem vel aliquam gravida.`,
      submessage: `Sed sit amet nibh consequat, pellentesque arcu ut, congue lorem.`,
      confirmButtonText: `Fusce blandit`,
      cancelButtonText: `Integer non`
    }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const messageBox = useMessageBox();
    const beforeClose: QMessageBoxContentPropBeforeClose = async action => {
      if (action !== 'confirm') return true;
      const promise = (): Promise<string> => new Promise(resolve => {
        setTimeout(() => resolve('готово!'), 1000);
      });
      try {
        await promise();
        return true;
      } catch {
        return false;
      }
    };
    const handleClick = async (): Promise<void> => {
      try {
        const result = await messageBox({
          title: args.title,
          message: args.message,
          submessage: args.submessage,
          confirmButtonText: args.confirmButtonText,
          cancelButtonText: args.cancelButtonText,
          beforeClose
        }, {
          onMounted: (app, container) => {
            console.log('onMounted', app, container);
          },
          onUnmounted: app => {
            console.log('onUnmounted', app);
          }
        });
        console.log('resolve', result);
      } catch (result) {
        console.log('reject', result);
      }
    };
    return {
      handleClick
    };
  },
  template: '<q-button @click="handleClick">Click to open message box</q-button>'
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
