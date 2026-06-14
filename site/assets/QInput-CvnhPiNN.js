import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QInput.html","title":"QInput ⌨️","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QInput.md"}`
  ),
  s = { name: `QInput.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qinput-⌨️`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qinput-⌨️` }, [
              r(`span`, null, `QInput ⌨️`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            e(`The `),
            r(`code`, null, `QInput`),
            e(` is a component that is used to get user input in a text field.`)
          ],
          -1
        ),
        r(
          `h2`,
          { id: `examples`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#examples` }, [
              r(`span`, null, `Examples`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [e(`Popular `), r(`code`, null, `input`), e(` cases:`)],
          -1
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `340px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/main.html`
          },
          null,
          -1
        ),
        a(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      value
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether input is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="showsymbollimit" tabindex="-1"><a class="header-anchor" href="#showsymbollimit"><span>showSymbolLimit</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to show symbol limit counter. NOTE: make sure to set <code>maxlength</code> attr as well.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">show-symbol-limit</span> <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          17
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/showSymbolLimit.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>type <code>boolean</code></li><li>default <code>false</code></li></ul><p>If input wrapped in <code>QFormItem</code>, prop <code>validateEvent</code> defines if input <code>change</code> event will be validated immediately.</p><h3 id="suffixicon" tabindex="-1"><a class="header-anchor" href="#suffixicon"><span>suffixIcon</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p><code>&#39;q-icon-*&#39;</code> - class string, see full list <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">here</a></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffix-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-account<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          7
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/suffixIcon.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether <code>QInput</code> is clearable.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/clearable.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="passwordswitch" tabindex="-1"><a class="header-anchor" href="#passwordswitch"><span>passwordSwitch</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to show show/hide password switcher.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">password-switch</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/passwordSwitch.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="rootclass" tabindex="-1"><a class="header-anchor" href="#rootclass"><span>rootClass</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>As native attrs bind to native input (so if you set the <code>class</code> attr to <code>QInput</code> it will be set for native <code>input</code> tag), via <code>rootСlass</code> you can set the class for q-input root (wrapper)</p><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h2><p><code>QInput</code> support native <code>input</code> attrubutes:</p><ul><li>placeholder</li><li>maxlength</li><li>type</li><li>autocomplete</li><li>readonly</li></ul><p>.. and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#attributes" target="_blank" rel="noopener noreferrer">others</a></p><p>p.s <code>input</code> has a lot of attributes, we can&#39;t claim <code>QInput</code> well supported all of them, but mostly true. Feel free to fix and contribute bugs <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for <a href="#update-modelvalue">update:modelValue</a></p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>Triggers when native input event fires.</p><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>Triggers when input gets focus.</p><h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur"><span>blur</span></a></h3><p>Triggers when input gets blur.</p><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear</span></a></h3><p>Triggers when clear button clicks.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="suffix" tabindex="-1"><a class="header-anchor" href="#suffix"><span>suffix</span></a></h3><p>Set your custom content as a suffix.</p>`,
          24
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `85px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInput/suffix.html`
          },
          null,
          -1
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
