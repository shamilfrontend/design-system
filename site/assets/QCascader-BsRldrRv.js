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
    `{"path":"/components/QCascader.html","title":"QCascader 🪜","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QCascader.md"}`
  ),
  u = { name: `QCascader.md` };
function d(o, l, u, d, f, p) {
  let m = n(`CodeGroupItem`),
    h = n(`CodeGroup`);
  return (
    i(),
    r(`div`, null, [
      (l[2] ||= s(
        `<h1 id="qcascader-🪜" tabindex="-1"><a class="header-anchor" href="#qcascader-🪜"><span>QCascader 🪜</span></a></h1><p>Cascade selection box. <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">Try story</a></p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li><p>When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.</p></li><li><p>When selecting from a large data set, with multi-stage classification separated for easy selection.</p></li><li><p>Chooses cascade items in one float layer for better user experience.</p></li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
        6
      )),
      (l[3] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/main.html`
        },
        null,
        -1
      )),
      (l[4] ||= s(
        `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
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
                        e(`  `),
                        a(`span`, { class: `token operator` }, `...`),
                        e(`
  `),
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
    `),
                        a(
                          `span`,
                          { class: `token comment` },
                          `// options example`
                        ),
                        e(`
    `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` options `),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'guide'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Guide'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `children`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'disciplines'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Disciplines'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `children`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'consistency'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
                `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Consistency'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
              `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            `),
                        a(`span`, { class: `token punctuation` }, `]`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'alone'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Alone'`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
        `),
                        a(`span`, { class: `token punctuation` }, `]`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(
                          `span`,
                          { class: `token string` },
                          `'disabled resource'`
                        ),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(
                          `span`,
                          { class: `token string` },
                          `'Disabled resource'`
                        ),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `disabled`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token boolean` }, `true`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `children`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'some child'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Some child'`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
        `),
                        a(`span`, { class: `token punctuation` }, `]`),
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
                          `value`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'resource'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        `),
                        a(
                          `span`,
                          { class: `token literal-property property` },
                          `label`
                        ),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Resource'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` modelValue `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token function` }, `ref`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token keyword` }, `null`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      options`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      modelValue`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
    `),
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
                        e(`
  QCascaderPropOptions`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
  QCascaderPropModelValue
`),
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
                        a(`span`, { class: `token keyword` }, `export`),
                        e(),
                        a(`span`, { class: `token keyword` }, `default`),
                        e(),
                        a(
                          `span`,
                          { class: `token function` },
                          `defineComponent`
                        ),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
  `),
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
    `),
                        a(
                          `span`,
                          { class: `token comment` },
                          `// options example`
                        ),
                        e(`
    `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` options`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(` QCascaderPropOptions `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'guide'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Guide'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        children`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
            value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'disciplines'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Disciplines'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            children`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
              `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
                value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'consistency'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
                label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Consistency'`),
                        e(`
              `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
            `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
            value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'alone'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Alone'`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
        `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(
                          `span`,
                          { class: `token string` },
                          `'disabled resource'`
                        ),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(
                          `span`,
                          { class: `token string` },
                          `'Disabled resource'`
                        ),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        disabled`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token boolean` }, `true`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        children`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `[`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
            value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'some child'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
            label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Some child'`),
                        e(`
          `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
        `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
        value`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'resource'`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
        label`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(),
                        a(`span`, { class: `token string` }, `'Resource'`),
                        e(`
      `),
                        a(`span`, { class: `token punctuation` }, `}`),
                        e(`
    `),
                        a(`span`, { class: `token punctuation` }, `]`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` modelValue`),
                        a(`span`, { class: `token operator` }, `:`),
                        e(` QCascaderPropModelValue `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token function` }, `ref`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token keyword` }, `null`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        a(`span`, { class: `token punctuation` }, `;`),
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
      options`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(`
      modelValue
    `),
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
        `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><ul><li>Type: <code>Array</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QCascaderPropOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
</code></pre><p><code>options</code> MUST be an <code>Array</code> of <code>Object</code>s, each object MUST contain required fields:</p><ul><li><code>value</code> - an option&#39;s value</li><li><code>label</code> - visible label</li></ul><p>Optional fields:</p><ul><li><code>disabled</code> - disable an option</li><li><code>children</code> - child options</li></ul><pre><code class="language-ts"><span class="token comment">// option&#39;s type</span>
<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> Nullable<span class="token operator">&lt;</span>Option<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String, Number, Array</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QCascaderPropModelValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QCascaderPropModelValue <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><p>Use:</p><ul><li><code>String</code> or <code>Number</code> for single value (<code>multiple</code> prop is <code>false</code>).</li><li><code>Array</code> for several values (<code>multiple</code> prop is <code>true</code>).</li></ul><p>if you want to set <code>modelValue</code> in advance, make sure your <code>value</code> (or values) exists in <code>options</code>.</p><h3 id="alllevelsshown" tabindex="-1"><a class="header-anchor" href="#alllevelsshown"><span>allLevelsShown</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether all path to value in tags is shown.</p><p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:all-levels-shown</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        20
      )),
      (l[6] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/allLevelsShown.html`
        },
        null,
        -1
      )),
      (l[7] ||= s(
        `<h3 id="separator" tabindex="-1"><a class="header-anchor" href="#separator"><span>separator</span></a></h3><ul><li>Type <code>String</code></li><li>Default: <code>/</code></li></ul><p>The separator symbol in the selected value.</p><p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span> | <span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        5
      )),
      (l[8] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/separator.html`
        },
        null,
        -1
      )),
      (l[9] ||= s(
        `<h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether QCascader accepts multiple values. Pass array as <code>modelValue</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">multiple</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[10] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/multiple.html`
        },
        null,
        -1
      )),
      (l[11] ||= s(
        `<h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether QCascader is clearable.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether QCascader is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="checkstrictly" tabindex="-1"><a class="header-anchor" href="#checkstrictly"><span>checkStrictly</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Checks each value as independent. Use for selecting category as value instead of it&#39;s children.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">check-strictly</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        12
      )),
      (l[12] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/checkStrictly.html`
        },
        null,
        -1
      )),
      (l[13] ||= s(
        `<h3 id="collapsetags" tabindex="-1"><a class="header-anchor" href="#collapsetags"><span>collapseTags</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li><li>Required props: <ul><li><code>multiple=&quot;true&quot;</code></li></ul></li></ul><p>Hide tags in counter.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">collapse-tags</span> <span class="token attr-name">multiple</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[14] ||= a(
        `iframe`,
        {
          height: `250`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCascader/collapseTags.html`
        },
        null,
        -1
      )),
      (l[15] ||= s(
        `<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder"><span>placeholder</span></a></h3><ul><li>Type <code>String</code></li><li>Default: <code>null</code></li></ul><p>As native placeholder.</p><h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>null</code></li></ul><p>Specifies a target element where QCascader will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span> <span class="token attr-name">teleport-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when model updates.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for update:modelValue.</p><h3 id="dropdown-close" tabindex="-1"><a class="header-anchor" href="#dropdown-close"><span>dropdown-close</span></a></h3><p>Triggers when dropdown closes.</p><h3 id="dropdown-expand" tabindex="-1"><a class="header-anchor" href="#dropdown-expand"><span>dropdown-expand</span></a></h3><p>Triggers when dropdown expands.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-cascader</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>options<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueUpdate<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueUpdate<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@dropdown-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDropdownClose<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@dropdown-expand</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDropdownExpand<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-js">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleValueUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleDropdownClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleDropdownExpand</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> handleValueUpdate<span class="token punctuation">,</span> handleDropdownClose<span class="token punctuation">,</span> handleDropdownExpand <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre>`,
        18
      ))
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
