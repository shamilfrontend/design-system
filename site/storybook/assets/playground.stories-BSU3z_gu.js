import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, t as n } from './vue.esm-bundler-BVbty6R8.js';
import { _n as r } from './iframe-CABL6dQv.js';
import { t as i } from './iconsList-DiWPY8la.js';
var a, o, s, c;
e(() => {
  (n(),
    i(),
    (a = {
      title: `Core/Icons/Playground`,
      argTypes: {
        icon: { options: r, control: { type: `select` } },
        color: { control: { type: `color` } },
        size: { control: { type: `number`, min: 8, max: 320, step: 2 } }
      }
    }),
    (o = e =>
      t({
        setup() {
          let { icon: t, size: n, color: r } = e;
          return { icon: t, style: { fontSize: `${n}px`, color: r } };
        },
        template: `<span :class="icon" :style="style" />`
      })),
    (s = o.bind({})),
    (s.args = { size: 32, color: `#000`, icon: `q-icon-bell` }),
    (s.parameters = {
      ...s.parameters,
      docs: {
        ...s.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const {
      icon,
      size,
      color
    } = args;
    const style = {
      fontSize: \`\${size}px\`,
      color
    };
    return {
      icon,
      style
    };
  },
  template: '<span :class="icon" :style="style" />'
})`,
          ...s.parameters?.docs?.source
        }
      }
    }),
    (c = [`Playground`]));
})();
export { s as Playground, c as __namedExportsOrder, a as default };
