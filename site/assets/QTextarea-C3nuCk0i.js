import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QTextarea.html","title":"QTextarea 📝","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":2}]},"filePathRelative":"components/QTextarea.md"}`
  ),
  s = { name: `QTextarea.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qtextarea-📝`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qtextarea-📝` }, [
              r(`span`, null, `QTextarea 📝`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            e(`The `),
            r(`code`, null, `QTextarea`),
            e(
              ` is a component that is used to get user input in a multi-line text field.`
            )
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
          `iframe`,
          {
            height: `360`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QTextarea/main.html`
          },
          null,
          -1
        ),
        a(
          `<p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      value
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether textarea is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-textarea</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">disabled</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="autosize" tabindex="-1"><a class="header-anchor" href="#autosize"><span>autosize</span></a></h3><ul><li>Type: <code>Boolean</code> | <code>Object</code></li><li>Default: <code>true</code></li></ul><p>Whether textarea has an adaptive height. Helps to control min and max rows count.</p><pre><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">QTextareaPropAutosize</span> <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>
  <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token punctuation">{</span> minRows<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> maxRows<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-textarea</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:autosize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ minRows: 6, maxRows: 8 }<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="resize" tabindex="-1"><a class="header-anchor" href="#resize"><span>resize</span></a></h3><ul><li>Type: <code>&#39;vertical&#39; | &#39;horizontal&#39; | &#39;both&#39; | &#39;none&#39;</code></li><li>Default: <code>&#39;vertical&#39;</code></li></ul><p>Control the resizability. As native <code>resize</code> attribute.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>The <code>resize</code> works only if <code>autosize</code> is <code>false</code>:</p></div><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-textarea</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">resize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:autosize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="showsymbollimit" tabindex="-1"><a class="header-anchor" href="#showsymbollimit"><span>showSymbolLimit</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Shows the symbol&#39;s counter.</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>The <code>maxlength</code> attribute is required:</p></div><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-textarea</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">maxlength</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">show-symbol-limit</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>type <code>boolean</code></li><li>Default <code>false</code></li></ul><p>If textarea wrapped in <code>QFormItem</code>, prop <code>validateEvent</code> defines if textarea <code>change</code> event will be validated immediately</p><h2 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes"><span>Attributes</span></a></h2><p><code>QTextarea</code> support native <code>textarea</code> attrubutes:</p><ul><li>placeholder</li><li>maxlength</li><li>autocomplete</li><li>readonly</li></ul><p>.. and <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes" target="_blank" rel="noopener noreferrer">others</a></p><p>p.s <code>textarea</code> has a lot of attributes, we can&#39;t claim <code>QTextarea</code> well supported all of them, but mostly true. Feel free to fix and contribute bugs <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">here</a></p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for <a href="#update-modelvalue">update:modelValue</a></p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>Triggers when native input event fires.</p><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>Triggers when input gets focus.</p><h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur"><span>blur</span></a></h3><p>Triggers when input gets blur.</p>`,
          46
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
