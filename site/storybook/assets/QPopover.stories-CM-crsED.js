import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import {
  Fr as r,
  Ft as i,
  Ir as a,
  It as o,
  _n as s
} from './iframe-CABL6dQv.js';
import { t as c } from './iconsList-DiWPY8la.js';
var l, u, d, f;
e(() => {
  (r(),
    n(),
    o(),
    c(),
    (l = {
      title: `Components/QPopover`,
      component: i,
      argTypes: {
        trigger: {
          options: [`click`, `hover`],
          control: { type: `inline-radio` }
        },
        placement: { options: a, control: { type: `select` } },
        icon: { options: s, control: { type: `select` } }
      }
    }),
    (u = e =>
      t({
        components: { QPopover: i },
        setup() {
          return {
            args: e,
            handleShow: () => {
              console.log(`show`);
            },
            handleHide: () => {
              console.log(`hide`);
            }
          };
        },
        template: `
      <q-popover
        :teleport-to="args.teleportTo"
        :title="args.title"
        :trigger="args.trigger"
        :placement="args.placement"
        :icon="args.icon"
        :icon-color="args.iconColor"
        :transition="args.transition"
        :open-delay="args.openDelay"
        :close-delay="args.closeDelay"
        :min-width="args.minWidth"
        :max-width="args.maxWidth"
        :popper-options="args.popperOptions"
        @show="handleShow"
        @hide="handleHide"
      >
        <template #reference>
          <q-button
            circle
            type="icon"
            theme="secondary"
            size="small"
            icon="q-icon-question-mark"
          />
        </template>

        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </q-popover>
    `
      })),
    (d = u.bind({})),
    (d.args = {
      title: `What is Lorem Ipsum?`,
      icon: `q-icon-question`,
      popperOptions: {}
    }),
    (d.parameters = {
      ...d.parameters,
      docs: {
        ...d.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QPopover
  },
  setup() {
    const handleShow = (): void => {
      console.log('show');
    };
    const handleHide = (): void => {
      console.log('hide');
    };
    return {
      args,
      handleShow,
      handleHide
    };
  },
  template: \`
      <q-popover
        :teleport-to="args.teleportTo"
        :title="args.title"
        :trigger="args.trigger"
        :placement="args.placement"
        :icon="args.icon"
        :icon-color="args.iconColor"
        :transition="args.transition"
        :open-delay="args.openDelay"
        :close-delay="args.closeDelay"
        :min-width="args.minWidth"
        :max-width="args.maxWidth"
        :popper-options="args.popperOptions"
        @show="handleShow"
        @hide="handleHide"
      >
        <template #reference>
          <q-button
            circle
            type="icon"
            theme="secondary"
            size="small"
            icon="q-icon-question-mark"
          />
        </template>

        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </q-popover>
    \`
})`,
          ...d.parameters?.docs?.source
        }
      }
    }),
    (f = [`Default`]));
})();
export { d as Default, f as __namedExportsOrder, l as default };
