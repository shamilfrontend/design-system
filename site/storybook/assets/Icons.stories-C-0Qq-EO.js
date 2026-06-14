import { i as e } from './preload-helper-CMdWXl7s.js';
import { U as t, Z as n, b as r, t as i } from './vue.esm-bundler-BVbty6R8.js';
import { _n as a } from './iframe-CABL6dQv.js';
import { t as o } from './iconsList-DiWPY8la.js';
var s = e(() => {}),
  c,
  l,
  u,
  d;
e(() => {
  (i(),
    o(),
    s(),
    (c = {
      title: `Core/Icons/All`,
      argTypes: { fontSize: { control: { type: `number` } } }
    }),
    (l = e =>
      r({
        setup() {
          let r = n(null),
            i,
            o = { '--font-size': `${e.fontSize}px` };
          return (
            t(r, () => {
              r.value &&
                (i && clearTimeout(i),
                (i = setTimeout(() => {
                  r.value = null;
                }, 3e3)));
            }),
            {
              icons: a,
              visibleTooltip: r,
              fontSize: o,
              handleIconClick: async e => {
                (await navigator.clipboard.writeText(e), (r.value = e));
              }
            }
          );
        },
        template: `
      <div 
          class="q-icons"
          :style="fontSize"
      >
        <div 
          v-for="icon in icons" 
          :key="icon"
          class="q-icons__container"
        >
          <span 
            v-if="visibleTooltip === icon" 
            class="q-icons__tooltip"
          >
            Copied
          </span>
          <div
            class="q-icons__wrapper"
            @click="handleIconClick(icon)"
          >
            <span
              class="q-icons__preview"
              :class="icon"
            />
          </div>
          <div class="q-icons__name">
            {{ icon }}
          </div>
        </div>
      </div>
    `
      })),
    (u = l.bind({})),
    (u.args = { fontSize: 32 }),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const visibleTooltip = ref<Nullable<string>>(null);
    let timer: Nullable<ReturnType<typeof setTimeout>>;
    const fontSize = {
      '--font-size': \`\${args.fontSize}px\`
    };
    const handleIconClick = async (name: string): Promise<void> => {
      await navigator.clipboard.writeText(name);
      visibleTooltip.value = name;
    };
    watch(visibleTooltip, () => {
      if (!visibleTooltip.value) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        visibleTooltip.value = null;
      }, 3000);
    });
    return {
      icons,
      visibleTooltip,
      fontSize,
      handleIconClick
    };
  },
  template: \`
      <div 
          class="q-icons"
          :style="fontSize"
      >
        <div 
          v-for="icon in icons" 
          :key="icon"
          class="q-icons__container"
        >
          <span 
            v-if="visibleTooltip === icon" 
            class="q-icons__tooltip"
          >
            Copied
          </span>
          <div
            class="q-icons__wrapper"
            @click="handleIconClick(icon)"
          >
            <span
              class="q-icons__preview"
              :class="icon"
            />
          </div>
          <div class="q-icons__name">
            {{ icon }}
          </div>
        </div>
      </div>
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`All`]));
})();
export { u as All, d as __namedExportsOrder, c as default };
