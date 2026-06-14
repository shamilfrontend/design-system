import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { n as i, t as a } from './QButton-Cew9k7i-.js';
import { $t as o, Qt as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (r(),
    i(),
    o(),
    (c = { title: `Components/QLoading`, component: s }),
    (l = () =>
      n({
        components: { QLoading: s },
        template: `
      <div style="padding: 40px">
        <q-loading text="Loading..." />
      </div>
    `
      })),
    (u = () =>
      n({
        components: { QButton: a, QLoading: s },
        setup() {
          let e = t(!1);
          function n() {
            e.value = !e.value;
          }
          return { isLoading: e, toggle: n };
        },
        template: `
      <div>
        <q-button @click="toggle">Toggle loading</q-button>
        <div
          v-loading="isLoading"
          style="margin-top: 16px; padding: 48px; border: 1px solid var(--color-border); border-radius: 8px"
        >
          Content area
        </div>
      </div>
    `
      })),
    (l.parameters = {
      ...l.parameters,
      docs: {
        ...l.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QLoading
  },
  template: \`
      <div style="padding: 40px">
        <q-loading text="Loading..." />
      </div>
    \`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `() => defineComponent({
  components: {
    QButton,
    QLoading
  },
  setup() {
    const isLoading = ref(false);
    function toggle(): void {
      isLoading.value = !isLoading.value;
    }
    return {
      isLoading,
      toggle
    };
  },
  template: \`
      <div>
        <q-button @click="toggle">Toggle loading</q-button>
        <div
          v-loading="isLoading"
          style="margin-top: 16px; padding: 48px; border: 1px solid var(--color-border); border-radius: 8px"
        >
          Content area
        </div>
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`, `Directive`]));
})();
export { l as Default, u as Directive, d as __namedExportsOrder, c as default };
