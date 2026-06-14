import { i as e } from './preload-helper-CMdWXl7s.js';
import { Z as t, b as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { Lt as i, Rt as a } from './iframe-CABL6dQv.js';
var o, s, c, l;
e(() => {
  (r(),
    a(),
    (o = { title: `Components/QPagination`, component: i }),
    (s = e =>
      n({
        components: { QPagination: i },
        setup() {
          let n = t(e.currentPage);
          return {
            args: e,
            currentPage: n,
            handlePageChange: e => {
              (console.log(`current-change`, e), (n.value = e));
            }
          };
        },
        template: `
      <q-pagination
        :page-count="args.pageCount"
        :total="args.total"
        :page-size="args.pageSize"
        :current-page="currentPage"
        :disabled="args.disabled"
        :pager-count="args.pagerCount"
        @current-change="handlePageChange"
      />
    `
      })),
    (c = s.bind({})),
    (c.args = { pageCount: 30, currentPage: 1, total: 300, pageSize: 10 }),
    (c.parameters = {
      ...c.parameters,
      docs: {
        ...c.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  components: {
    QPagination
  },
  setup() {
    const currentPage = ref<number>(args.currentPage);
    const handlePageChange = (value: number): void => {
      console.log('current-change', value);
      currentPage.value = value;
    };
    return {
      args,
      currentPage,
      handlePageChange
    };
  },
  template: \`
      <q-pagination
        :page-count="args.pageCount"
        :total="args.total"
        :page-size="args.pageSize"
        :current-page="currentPage"
        :disabled="args.disabled"
        :pager-count="args.pagerCount"
        @current-change="handlePageChange"
      />
    \`
})`,
          ...c.parameters?.docs?.source
        }
      }
    }),
    (l = [`Default`]));
})();
export { c as Default, l as __namedExportsOrder, o as default };
