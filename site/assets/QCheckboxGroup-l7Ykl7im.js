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
    `{"path":"/components/QCheckboxGroup.html","title":"QCheckboxGroup ✔️✔️✔️","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QCheckboxGroup.md"}`
  ),
  u = { name: `QCheckboxGroup.md` };
function d(o, l, u, d, f, p) {
  let m = n(`CodeGroupItem`),
    h = n(`CodeGroup`);
  return (
    i(),
    r(`div`, null, [
      (l[4] ||= s(
        `<h1 id="qcheckboxgroup-✔️✔️✔️" tabindex="-1"><a class="header-anchor" href="#qcheckboxgroup-✔️✔️✔️"><span>QCheckboxGroup ✔️✔️✔️</span></a></h1><p>Is being used to wrap multiple <a href="design-system/components/QCheckbox">QCheckbox</a></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2>`,
        3
      )),
      t(h, null, {
        default: c(() => [
          t(
            m,
            { title: `JS` },
            {
              default: c(() => [
                ...(l[0] ||= [
                  a(
                    `pre`,
                    null,
                    [
                      a(`code`, { class: `language-vue` }, [
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`template`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
  `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`q-checkbox-group`)
                          ]),
                          e(),
                          a(`span`, { class: `token attr-name` }, `v-model`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`checkedCities`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
    `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`q-checkbox`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `v-for`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city in cities`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `:key`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `:label`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
    `),
                          a(`span`, { class: `token punctuation` }, `/>`)
                        ]),
                        e(`
  `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`q-checkbox-group`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
`),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`template`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`

`),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`script`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        a(`span`, { class: `token script` }, [
                          a(`span`, { class: `token language-javascript` }, [
                            e(`
`),
                            a(`span`, { class: `token keyword` }, `import`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` defineComponent`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` ref `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            e(),
                            a(`span`, { class: `token keyword` }, `from`),
                            e(),
                            a(`span`, { class: `token string` }, `'vue'`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
`),
                            a(`span`, { class: `token keyword` }, `import`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` QCheckboxGroup`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` QCheckbox `),
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
                            a(
                              `span`,
                              { class: `token function` },
                              `defineComponent`
                            ),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(`
  `),
                            a(
                              `span`,
                              { class: `token literal-property property` },
                              `components`
                            ),
                            a(`span`, { class: `token operator` }, `:`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` QCheckboxGroup`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` QCheckbox `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `,`),
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
                            e(` checkedCities `),
                            a(`span`, { class: `token operator` }, `=`),
                            e(),
                            a(`span`, { class: `token function` }, `ref`),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token string` }, `'Shanghai'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(),
                            a(`span`, { class: `token string` }, `'Beijing'`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
    `),
                            a(`span`, { class: `token keyword` }, `const`),
                            e(` cities `),
                            a(`span`, { class: `token operator` }, `=`),
                            e(),
                            a(`span`, { class: `token function` }, `ref`),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token string` }, `'Shanghai'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(),
                            a(`span`, { class: `token string` }, `'Beijing'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(),
                            a(`span`, { class: `token string` }, `'Guangzhou'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(),
                            a(`span`, { class: `token string` }, `'Shenzhen'`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`

    `),
                            a(`span`, { class: `token keyword` }, `return`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` checkedCities`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` cities `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
  `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            e(`
`),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
`)
                          ])
                        ]),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`script`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
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
                      a(`code`, { class: `language-vue` }, [
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`template`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
  `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`q-checkbox-group`)
                          ]),
                          e(),
                          a(`span`, { class: `token attr-name` }, `v-model`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`checkedCities`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
    `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`q-checkbox`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `v-for`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city in cities`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `:key`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
      `),
                          a(`span`, { class: `token attr-name` }, `:label`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`city`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          e(`
    `),
                          a(`span`, { class: `token punctuation` }, `/>`)
                        ]),
                        e(`
  `),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`q-checkbox-group`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`
`),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`template`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        e(`

`),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `<`),
                            e(`script`)
                          ]),
                          e(),
                          a(`span`, { class: `token attr-name` }, `lang`),
                          a(`span`, { class: `token attr-value` }, [
                            a(
                              `span`,
                              { class: `token punctuation attr-equals` },
                              `=`
                            ),
                            a(`span`, { class: `token punctuation` }, `"`),
                            e(`ts`),
                            a(`span`, { class: `token punctuation` }, `"`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
                        a(`span`, { class: `token script` }, [
                          a(`span`, { class: `token language-javascript` }, [
                            e(`
`),
                            a(`span`, { class: `token keyword` }, `import`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` defineComponent`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` ref `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            e(),
                            a(`span`, { class: `token keyword` }, `from`),
                            e(),
                            a(`span`, { class: `token string` }, `'vue'`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
`),
                            a(`span`, { class: `token keyword` }, `import`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` QCheckboxGroup`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` QCheckbox `),
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
                            a(
                              `span`,
                              { class: `token function` },
                              `defineComponent`
                            ),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(`
  `),
                            a(
                              `span`,
                              { class: `token literal-property property` },
                              `components`
                            ),
                            a(`span`, { class: `token operator` }, `:`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` QCheckboxGroup`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` QCheckbox `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `,`),
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
                            e(` checkedCities `),
                            a(`span`, { class: `token operator` }, `=`),
                            e(` ref`),
                            a(`span`, { class: `token operator` }, `<`),
                            e(`string`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token operator` }, `>`),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token string` }, `'Shanghai'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(),
                            a(`span`, { class: `token string` }, `'Beijing'`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
    `),
                            a(`span`, { class: `token keyword` }, `const`),
                            e(` cities `),
                            a(`span`, { class: `token operator` }, `=`),
                            e(` ref`),
                            a(`span`, { class: `token operator` }, `<`),
                            e(`string`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token operator` }, `>`),
                            a(`span`, { class: `token punctuation` }, `(`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            e(`
      `),
                            a(`span`, { class: `token string` }, `'Shanghai'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(`
      `),
                            a(`span`, { class: `token string` }, `'Beijing'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(`
      `),
                            a(`span`, { class: `token string` }, `'Guangzhou'`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(`
      `),
                            a(`span`, { class: `token string` }, `'Shenzhen'`),
                            e(`
    `),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`

    `),
                            a(`span`, { class: `token keyword` }, `return`),
                            e(),
                            a(`span`, { class: `token punctuation` }, `{`),
                            e(` checkedCities`),
                            a(`span`, { class: `token punctuation` }, `,`),
                            e(` cities `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
  `),
                            a(`span`, { class: `token punctuation` }, `}`),
                            e(`
`),
                            a(`span`, { class: `token punctuation` }, `}`),
                            a(`span`, { class: `token punctuation` }, `)`),
                            a(`span`, { class: `token punctuation` }, `;`),
                            e(`
`)
                          ])
                        ]),
                        a(`span`, { class: `token tag` }, [
                          a(`span`, { class: `token tag` }, [
                            a(`span`, { class: `token punctuation` }, `</`),
                            e(`script`)
                          ]),
                          a(`span`, { class: `token punctuation` }, `>`)
                        ]),
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
      (l[5] ||= a(`p`, null, `Result:`, -1)),
      (l[6] ||= a(
        `iframe`,
        {
          height: `200`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckboxGroup/QCheckboxGroup.html`
        },
        null,
        -1
      )),
      (l[7] ||= s(
        `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>tag</span></a></h3><ul><li>Type: <code>string</code></li><li>Default: <code>div</code></li></ul><p>Defines the root tag.</p><h3 id="min" tabindex="-1"><a class="header-anchor" href="#min"><span>min</span></a></h3><ul><li>Type: <code>number</code></li><li>default <code>0</code></li></ul><p>Sets the minimum number of checkboxes, that can be selected</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedCities<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city in cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox-group</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        8
      )),
      (l[8] ||= a(
        `iframe`,
        {
          height: `200`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckboxGroup/min.html`
        },
        null,
        -1
      )),
      (l[9] ||= s(
        `<h3 id="max" tabindex="-1"><a class="header-anchor" href="#max"><span>max</span></a></h3><ul><li>Type: <code>number</code></li><li>default <code>Infinity</code></li></ul><p>Sets the maximum number of checkboxes, that can be selected</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedCities<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:max</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city in cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox-group</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[10] ||= a(
        `iframe`,
        {
          height: `200`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckboxGroup/max.html`
        },
        null,
        -1
      )),
      (l[11] ||= s(
        `<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li></ul><p>Allows to disable all inner QCheckboxes</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedCities<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city in cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox-group</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[12] ||= a(
        `iframe`,
        {
          height: `200`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckboxGroup/disabled.html`
        },
        null,
        -1
      )),
      (l[13] ||= s(
        `<h3 id="direction" tabindex="-1"><a class="header-anchor" href="#direction"><span>direction</span></a></h3><ul><li>Type: <code>&#39;vertical&#39; | &#39;horizontal&#39;</code></li><li>Default: <code>vertical</code></li></ul><p>Defines the direction of list: <code>vertical</code> or <code>horizontal</code></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedCities<span class="token punctuation">&quot;</span></span> <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>vertical<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city in cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox-group</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[14] ||= a(
        `iframe`,
        {
          height: `300`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckboxGroup/direction.html`
        },
        null,
        -1
      )),
      (l[15] ||= s(
        `<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for <a href="#update-modelvalue">update:modelValue</a></p><p>In template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkedCities<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeHandler<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city in cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>city<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>In setup:</p>`,
        8
      )),
      t(h, null, {
        default: c(() => [
          t(
            m,
            { title: `JS` },
            {
              default: c(() => [
                ...(l[2] ||= [
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
                        e(` checkedCities `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token function` }, `ref`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `[`),
                        a(`span`, { class: `token string` }, `'Shanghai'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(),
                        a(`span`, { class: `token string` }, `'Beijing'`),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`
  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` cities `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token function` }, `ref`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Shanghai'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Beijing'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Guangzhou'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Shenzhen'`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(),
                        a(
                          `span`,
                          { class: `token function-variable function` },
                          `changeHandler`
                        ),
                        e(),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token parameter` }, `value`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token operator` }, `=>`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token comment` },
                          `// do something with new value`
                        ),
                        e(`
  `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` checkedCities`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` cities`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` changeHandler `),
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
          ),
          t(
            m,
            { title: `TS` },
            {
              default: c(() => [
                ...(l[3] ||= [
                  a(
                    `pre`,
                    null,
                    [
                      a(`code`, { class: `language-ts` }, [
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` checkedCities `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token generic-function` }, [
                          a(`span`, { class: `token function` }, `ref`),
                          a(`span`, { class: `token generic class-name` }, [
                            a(`span`, { class: `token operator` }, `<`),
                            a(`span`, { class: `token builtin` }, `string`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token operator` }, `>`)
                          ])
                        ]),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `[`),
                        a(`span`, { class: `token string` }, `'Shanghai'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(),
                        a(`span`, { class: `token string` }, `'Beijing'`),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`
  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` cities `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token generic-function` }, [
                          a(`span`, { class: `token function` }, `ref`),
                          a(`span`, { class: `token generic class-name` }, [
                            a(`span`, { class: `token operator` }, `<`),
                            a(`span`, { class: `token builtin` }, `string`),
                            a(`span`, { class: `token punctuation` }, `[`),
                            a(`span`, { class: `token punctuation` }, `]`),
                            a(`span`, { class: `token operator` }, `>`)
                          ])
                        ]),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Shanghai'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Beijing'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Guangzhou'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token string` }, `'Shenzhen'`),
                        e(`
  `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` changeHandler `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `(`),
                        e(`value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token builtin` }, `string`),
                        a(`span`, { class: `token punctuation` }, `[`),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token keyword` }, `void`),
                        e(),
                        a(`span`, { class: `token operator` }, `=>`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      `),
                        a(
                          `span`,
                          { class: `token comment` },
                          `// do something with new value`
                        ),
                        e(`
  `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

  `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` checkedCities`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` cities`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` changeHandler `),
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
      })
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
