import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QTag.html","title":"QTag #️⃣","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781259814000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"components/QTag.md"}`
  ),
  o = { name: `QTag.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qtag-️⃣" tabindex="-1"><a class="header-anchor" href="#qtag-️⃣"><span>QTag #️⃣</span></a></h1><p><code>QTag</code> component is used for items that need to be labeled, categorized, or organized using keywords that describe them. Also <code>QTag</code> tag is being used in <code>QSelect</code> | <code>QCascader</code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><p>All kind of types:</p>`,
          4
        ),
        n(
          `iframe`,
          {
            height: `190`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QTag/main.html`
          },
          null,
          -1
        ),
        i(
          `<p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-tag</span>
    <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag in tags<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tag<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleCloseClick(tag)<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ tag }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-tag</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> tags <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;Tag 1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tag 2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tag 3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tag 4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tag 5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleCloseClick</span> <span class="token operator">=</span> <span class="token parameter">clickedTag</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      tags<span class="token punctuation">.</span>value <span class="token operator">=</span> tags<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">tag</span> <span class="token operator">=&gt;</span> tag <span class="token operator">!==</span> clickedTag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> tags<span class="token punctuation">,</span> handleCloseClick <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="closable" tabindex="-1"><a class="header-anchor" href="#closable"><span>closable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether is close button shown.</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="close" tabindex="-1"><a class="header-anchor" href="#close"><span>close</span></a></h3><p>Triggers when the close button is clicked.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Provide custom content into <code>QTag</code>.</p>`,
          14
        )
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
