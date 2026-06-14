import { i as e } from './preload-helper-CMdWXl7s.js';
import { b as t, d as n, t as r } from './vue.esm-bundler-BVbty6R8.js';
import { i, t as a } from './locale-tU0CN4Au.js';
import { Cr as o, wr as s } from './iframe-CABL6dQv.js';
var c, l, u, d;
e(() => {
  (r(),
    a(),
    s(),
    (c = {
      title: `Components/QBreadcrumbs`,
      component: o,
      argTypes: { linkComponent: { control: !1 } }
    }),
    (l = e =>
      t({
        setup() {
          return {
            args: e,
            route: n(() =>
              Array.isArray(e.route)
                ? e.route
                : [
                    {
                      path: `path-a`,
                      name: `ROUTE_A`,
                      meta: { breadcrumb: i(`qBreadcrumbsStories.routeA`) }
                    },
                    {
                      path: `path-b`,
                      name: `ROUTE_b`,
                      meta: { breadcrumb: i(`qBreadcrumbsStories.routeB`) }
                    },
                    {
                      path: `path-c`,
                      name: `ROUTE_c`,
                      meta: { breadcrumb: i(`qBreadcrumbsStories.routeC`) }
                    },
                    {
                      path: `path-d`,
                      name: `ROUTE_d`,
                      meta: { breadcrumb: i(`qBreadcrumbsStories.routeD`) }
                    }
                  ]
            )
          };
        },
        template: `
      <q-breadcrumbs
        :route="route"
        :link-component="args.linkComponent"
        :last="args.last"
      />
    `
      })),
    (u = l.bind({})),
    (u.parameters = {
      ...u.parameters,
      docs: {
        ...u.parameters?.docs,
        source: {
          originalSource: `args => defineComponent({
  setup() {
    const route = computed<QBreadcrumbsPropRoute>(() => {
      if (Array.isArray(args.route)) return args.route;
      return [{
        path: 'path-a',
        name: 'ROUTE_A',
        meta: {
          breadcrumb: t('qBreadcrumbsStories.routeA')
        }
      }, {
        path: 'path-b',
        name: 'ROUTE_b',
        meta: {
          breadcrumb: t('qBreadcrumbsStories.routeB')
        }
      }, {
        path: 'path-c',
        name: 'ROUTE_c',
        meta: {
          breadcrumb: t('qBreadcrumbsStories.routeC')
        }
      }, {
        path: 'path-d',
        name: 'ROUTE_d',
        meta: {
          breadcrumb: t('qBreadcrumbsStories.routeD')
        }
      }];
    });
    return {
      args,
      route
    };
  },
  template: \`
      <q-breadcrumbs
        :route="route"
        :link-component="args.linkComponent"
        :last="args.last"
      />
    \`
})`,
          ...u.parameters?.docs?.source
        }
      }
    }),
    (d = [`Default`]));
})();
export { u as Default, d as __namedExportsOrder, c as default };
