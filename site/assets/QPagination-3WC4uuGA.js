import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QPagination.html","title":"QPagination 📖","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781259814000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"components/QPagination.md"}`
  ),
  s = { name: `QPagination.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qpagination-📖`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qpagination-📖` }, [
              r(`span`, null, `QPagination 📖`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            e(`The `),
            r(`code`, null, `QPagination`),
            e(` is a component that is used to navigate between pages.`)
          ],
          -1
        ),
        r(
          `h2`,
          { id: `example`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#example` }, [
              r(`span`, null, `Example`)
            ])
          ],
          -1
        ),
        r(`p`, null, `Default view:`, -1),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QPagination/main.html`
          },
          null,
          -1
        ),
        a(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentPage <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handlePageChange</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      currentPage<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> currentPage<span class="token punctuation">,</span> handlePageChange <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="pagecount" tabindex="-1"><a class="header-anchor" href="#pagecount"><span>pageCount</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Setting total page count manually. If you haven&#39;t passed a <code>pageCount</code> it will be calculated as a <code>total</code> / <code>pageSize</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize"><span>pageSize</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Items count on the page.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="total" tabindex="-1"><a class="header-anchor" href="#total"><span>total</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Total items count on the all pages.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="currentpage" tabindex="-1"><a class="header-anchor" href="#currentpage"><span>currentPage</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Current active page number.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          21
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QPagination/currentPage.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="pagercount" tabindex="-1"><a class="header-anchor" href="#pagercount"><span>pagerCount</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>7</code></li></ul><p>Visible page&#39;s buttons count. It <code>MUST</code> be <code>&gt;= 3</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:pager-count</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QPagination/pagerCount.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether <code>QPagination</code> is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-pagination</span>
  <span class="token attr-name">disabled</span>
  <span class="token attr-name">:total</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>200<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:page-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:current-page</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentPage<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@current-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handlePageChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QPagination/disabled.html`
          },
          null,
          -1
        ),
        a(
          `<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="current-change" tabindex="-1"><a class="header-anchor" href="#current-change"><span>current-change</span></a></h3><p>Triggers when the current page changes</p><h3 id="prev-click" tabindex="-1"><a class="header-anchor" href="#prev-click"><span>prev-click</span></a></h3><p>Triggers when the <code>prev</code> button is clicked</p><h3 id="next-click" tabindex="-1"><a class="header-anchor" href="#next-click"><span>next-click</span></a></h3><p>Triggers when the <code>next</code> button is clicked</p><h3 id="quick-prev-click" tabindex="-1"><a class="header-anchor" href="#quick-prev-click"><span>quick-prev-click</span></a></h3><p>Triggers when the quick <code>prev</code> button (...) is clicked</p><h3 id="quick-next-click" tabindex="-1"><a class="header-anchor" href="#quick-next-click"><span>quick-next-click</span></a></h3><p>Triggers when the quick <code>next</code> button (...) is clicked</p>`,
          11
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
