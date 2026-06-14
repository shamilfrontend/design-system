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
    `{"path":"/components/QCheckbox.html","title":"QCheckbox ✔️","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QCheckbox.md"}`
  ),
  u = { name: `QCheckbox.md` };
function d(o, l, u, d, f, p) {
  let m = n(`CodeGroupItem`),
    h = n(`CodeGroup`);
  return (
    i(),
    r(`div`, null, [
      (l[2] ||= s(
        `<h1 id="qcheckbox-✔️" tabindex="-1"><a class="header-anchor" href="#qcheckbox-✔️"><span>QCheckbox ✔️</span></a></h1><p>Allows to choose one or more options. Try a sandbox <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><p>Types:</p>`,
        4
      )),
      (l[3] ||= a(
        `iframe`,
        {
          height: `150`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/QCheckbox.html`
        },
        null,
        -1
      )),
      (l[4] ||= s(
        `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h3><ul><li>Type <code>String</code></li><li>Default <code>null</code></li></ul><p>Defines the text of the checkbox. You could use default <a href="#slots">slot</a> instead of the <code>label</code> prop as well.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        5
      )),
      (l[5] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/label.html`
        },
        null,
        -1
      )),
      (l[6] ||= s(
        `<h3 id="labelsize" tabindex="-1"><a class="header-anchor" href="#labelsize"><span>labelSize</span></a></h3><ul><li>Type <code>String</code></li><li>Default <code>regular</code></li></ul><p>Defines the label size of the checkbox.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Label<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[7] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/labelSize.html`
        },
        null,
        -1
      )),
      (l[8] ||= s(
        `<h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>type <code>boolean</code></li><li>Default <code>null</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        3
      )),
      (l[9] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/model.html`
        },
        null,
        -1
      )),
      (l[10] ||= s(
        `<h3 id="indeterminate" tabindex="-1"><a class="header-anchor" href="#indeterminate"><span>indeterminate</span></a></h3><ul><li>type <code>boolean</code></li><li>Default <code>false</code></li></ul><p>Defines the checkbox indeterminacy</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">indeterminate</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Result:</p>`,
        5
      )),
      (l[11] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/indeterminate.html`
        },
        null,
        -1
      )),
      (l[12] ||= s(
        `<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>type <code>boolean</code></li><li>Default <code>false</code></li></ul><p>Sets disabled checkbox state</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Result:</p>`,
        5
      )),
      (l[13] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/disabled.html`
        },
        null,
        -1
      )),
      (l[14] ||= s(
        `<h3 id="roottag" tabindex="-1"><a class="header-anchor" href="#roottag"><span>rootTag</span></a></h3><ul><li>Type <code>String</code></li><li>Default <code>label</code></li></ul><p>Sets custom root tag</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">root-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>div<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>type <code>boolean</code></li><li>Default <code>false</code></li></ul><p>If checkbox wrapped in <code>QFormItem</code>, prop <code>validateEvent</code> defines if checkbox <code>change</code> event will be validated immediately</p><p>Code Example</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model.checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Required checkbox<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">validate-event</span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result</p>`,
        10
      )),
      (l[15] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/validate.html`
        },
        null,
        -1
      )),
      (l[16] ||= s(
        `<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for <a href="#update-modelvalue">update:modelValue</a></p><p>In template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>changeHandler<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
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
                        e(` model `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token function` }, `ref`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token boolean` }, `false`),
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
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` model`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` changeHandler `),
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
                        a(`span`, { class: `token function` }, `setup`),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token punctuation` }, `)`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(`
    `),
                        a(`span`, { class: `token keyword` }, `const`),
                        e(` model `),
                        a(`span`, { class: `token operator` }, `=`),
                        e(),
                        a(`span`, { class: `token generic-function` }, [
                          a(`span`, { class: `token function` }, `ref`),
                          a(`span`, { class: `token generic class-name` }, [
                            a(`span`, { class: `token operator` }, `<`),
                            a(`span`, { class: `token builtin` }, `boolean`),
                            a(`span`, { class: `token operator` }, `>`)
                          ])
                        ]),
                        a(`span`, { class: `token punctuation` }, `(`),
                        a(`span`, { class: `token boolean` }, `false`),
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
                        a(`span`, { class: `token builtin` }, `boolean`),
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
                        e(`

    `),
                        a(`span`, { class: `token keyword` }, `return`),
                        e(),
                        a(`span`, { class: `token punctuation` }, `{`),
                        e(` model`),
                        a(`span`, { class: `token punctuation` }, `,`),
                        e(` changeHandler `),
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
          )
        ]),
        _: 1
      }),
      (l[17] ||= s(
        `<h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>Default</span></a></h3><p>Defines the text of the checkbox label, like <a href="#label">label</a> prop does. Just put the label text between QCheckbox tags.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-checkbox</span><span class="token punctuation">&gt;</span></span>Label<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-checkbox</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[18] ||= a(
        `iframe`,
        {
          height: `80`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCheckbox/label.html`
        },
        null,
        -1
      )),
      (l[19] ||= a(
        `h2`,
        { id: `qcheckboxgroup`, tabindex: `-1` },
        [
          a(`a`, { class: `header-anchor`, href: `#qcheckboxgroup` }, [
            a(`span`, null, `QCheckboxGroup`)
          ])
        ],
        -1
      )),
      (l[20] ||= a(
        `p`,
        null,
        [
          e(`You also could wrap a several QCheckboxes in a group using `),
          a(
            `a`,
            { href: `design-system/components/QCheckboxGroup` },
            `QCheckboxGroup`
          ),
          e(`.`)
        ],
        -1
      ))
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
