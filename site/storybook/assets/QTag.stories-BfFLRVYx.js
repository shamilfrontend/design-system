import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { hr as i, mr as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    i(),
    (o = { title: `Components/QTag`, component: a }),
    (s = e =>
      n({
        components: { QTag: a },
        setup() {
          let n = t([`Tag 1`, `Tag 2`, `Tag 3`, `Tag 4`, `Tag 5`]);
          return {
            args: e,
            tags: n,
            handleCloseClick: e => {
              (console.log(`Close tag clicked`),
                (n.value = n.value.filter(t => t !== e)));
            }
          };
        },
        template: `
      <q-tag
        v-for="tag in tags"
        :key="tag"
        :closable="args.closable"
        @close="handleCloseClick(tag)"
      >
        {{ tag }}
      </q-tag>
    `
      })),
    (c = s.bind({})),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QTag
  },
  setup() {
    const tags = ref<string[]>(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5']);
    const handleCloseClick = (clickedTag: string): void => {
      console.log('Close tag clicked');
      tags.value = tags.value.filter(tag => tag !== clickedTag);
    };
    return {
      args,
      tags,
      handleCloseClick
    };
  },
  template: \`
      <q-tag
        v-for="tag in tags"
        :key="tag"
        :closable="args.closable"
        @close="handleCloseClick(tag)"
      >
        {{ tag }}
      </q-tag>
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
