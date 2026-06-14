import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { n as i, t as a } from './QButton-Cew9k7i-.js';
import { Pn as o, Rn as s } from './iframe-CABL6dQv.js';
var c, l, u;
e(() => {
  (r(),
    i(),
    o(),
    (c = { title: `Components/QDialogModal`, component: s }),
    (l = () =>
      n({
        components: { QDialogModal: s, QButton: a },
        setup() {
          return { visible: t(!1) };
        },
        template: `
      <div>
        <q-button @click="visible = true">Open dialog</q-button>
        <q-dialog-modal v-model="visible" title="Dialog title">
          <p>Declarative dialog content.</p>
          <template #footer>
            <q-button theme="secondary" @click="visible = false">Cancel</q-button>
            <q-button @click="visible = false">Confirm</q-button>
          </template>
        </q-dialog-modal>
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
    QDialogModal,
    QButton
  },
  setup() {
    const visible = ref(false);
    return {
      visible
    };
  },
  template: \`
      <div>
        <q-button @click="visible = true">Open dialog</q-button>
        <q-dialog-modal v-model="visible" title="Dialog title">
          <p>Declarative dialog content.</p>
          <template #footer>
            <q-button theme="secondary" @click="visible = false">Cancel</q-button>
            <q-button @click="visible = false">Confirm</q-button>
          </template>
        </q-dialog-modal>
      </div>
    \`
})`,
          ...l.parameters?.docs?.source
        }
      }
    }),
    (u = [`Default`]));
})();
export { l as Default, u as __namedExportsOrder, c as default };
