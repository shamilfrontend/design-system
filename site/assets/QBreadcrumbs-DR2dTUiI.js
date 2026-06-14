import {
  d as e,
  f as t,
  g as n,
  l as r,
  m as i,
  o as a,
  r as o,
  u as s,
  v as c
} from './app-CIsYDi5X.js';
var l = JSON.parse(
    `{"path":"/components/QBreadcrumbs.html","title":"QBreadcrumbs 🍞","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QBreadcrumbs.md"}`
  ),
  u = { name: `QBreadcrumbs.md` };
function d(o, l, u, d, f, p) {
  let m = n(`CodeGroupItem`),
    h = n(`CodeGroup`);
  return (
    i(),
    r(`div`, null, [
      (l[2] ||= s(
        `<h1 id="qbreadcrumbs-🍞" tabindex="-1"><a class="header-anchor" href="#qbreadcrumbs-🍞"><span>QBreadcrumbs 🍞</span></a></h1><p>Displays the location of the current page, shows all nested levels. Try a sandbox <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>When the system has more than two layers in a hierarchy.</li><li>When you need to inform the user of where they are.</li><li>When the user may need to navigate back to a higher level.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
        6
      )),
      (l[3] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QBreadcrumbs/main.html`
        },
        null,
        -1
      )),
      (l[4] ||= s(
        `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-breadcrumbs</span> <span class="token attr-name">:route</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p>`,
        3
      )),
      t(h, null, {
        default: c(() => [
          t(
            m,
            { title: `JS`, active: `` },
            {
              default: c(() => [
                ...(l[0] ||= [
                  a(
                    `pre`,
                    null,
                    [
                      a(`code`, { class: `language-js` }, [
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` route `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `path`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-a'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `name`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_A'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `meta`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `breadcrumb`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'First route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `path`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-b'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `name`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_b'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `meta`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `breadcrumb`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Second route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `path`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-c'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `name`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_c'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `meta`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `breadcrumb`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Third route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
  `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` route `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
`),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
`)
                      ])
                    ],
                    -1
                  )
                ])
              ]),
              _: 1
            }
          ),
          t(
            m,
            { title: `TS` },
            {
              default: c(() => [
                ...(l[1] ||= [
                  a(
                    `pre`,
                    null,
                    [
                      a(`code`, { class: `language-ts` }, [
                        a(`span`, { class: `token keyword` }, `import`),
                        e(),
                        a(`span`, { class: `token keyword` }, `type`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` QBreadcrumbsPropRoute `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(),
                        a(`span`, { class: `token keyword` }, `from`),
                        e(),
                        a(
                          `span`,
                          { class: `token string` },
                          `'@shamilfrontend/design-system'`
                        ),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

`),
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` route`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(` QBreadcrumbsPropRoute `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      path`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-a'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      name`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_A'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      meta`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        breadcrumb`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'First route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      path`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-b'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      name`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_b'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      meta`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        breadcrumb`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Second route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      path`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'path-c'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      name`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'ROUTE_c'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      meta`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        breadcrumb`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Third route'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
  `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` route `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`
`),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
`)
                      ])
                    ],
                    -1
                  )
                ])
              ]),
              _: 1
            }
          )
        ]),
        _: 1
      }),
      (l[5] ||= s(
        `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="route" tabindex="-1"><a class="header-anchor" href="#route"><span>route</span></a></h3><ul><li>Type: <code>Array</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-ts"><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QBreadcrumbsPropRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
</code></pre><p><code>route</code> MUST be an <code>Array</code> of <code>Object</code>s, each object MUST contain required fields:</p><ul><li><code>path</code> - uses as route path</li><li><code>name</code> - route name</li><li><code>meta</code> - MUST contain: <ul><li><code>breadcrumb</code> - visible title</li></ul></li></ul><h3 id="linkcomponent" tabindex="-1"><a class="header-anchor" href="#linkcomponent"><span>linkComponent</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;RouterLink&#39;</code></li></ul><p>The name of the component for enabling user navigation in a router-enabled app, if you use <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">Vue Router</a>, you don&#39;t need change this prop, <code>RouterLink</code> by default. With Nuxt change on <code>NuxtLink</code></p><h3 id="last" tabindex="-1"><a class="header-anchor" href="#last"><span>last</span></a></h3><ul><li>Type: <code>String</code></li></ul><p>Changes last crumb with custom string</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-breadcrumbs</span> <span class="token attr-name">:route</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>route<span class="token punctuation">&quot;</span></span> <span class="token attr-name">last</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Custom string<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        13
      )),
      (l[6] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QBreadcrumbs/last.html`
        },
        null,
        -1
      ))
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
