import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QScrollbar.html","title":"QScrollbar 📜","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781276126000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":2}]},"filePathRelative":"components/QScrollbar.md"}`
  ),
  o = { name: `QScrollbar.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        n(
          `h1`,
          { id: `qscrollbar-📜`, tabindex: `-1` },
          [
            n(`a`, { class: `header-anchor`, href: `#qscrollbar-📜` }, [
              n(`span`, null, `QScrollbar 📜`)
            ])
          ],
          -1
        ),
        n(
          `p`,
          null,
          `QScrollbar allows you to move the window viewing area.`,
          -1
        ),
        n(
          `h2`,
          { id: `examples`, tabindex: `-1` },
          [
            n(`a`, { class: `header-anchor`, href: `#examples` }, [
              n(`span`, null, `Examples`)
            ])
          ],
          -1
        ),
        n(`p`, null, `Types:`, -1),
        n(
          `iframe`,
          {
            height: `400`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QScrollbar/default.html`
          },
          null,
          -1
        ),
        i(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3><ul><li>Type: <code>&#39;primary&#39; | &#39;secondary&#39;</code></li><li>Default: <code>&#39;primary&#39;</code></li></ul><p>A <code>theme</code> prop defines how scrollbar appearance.</p><p>Code Example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-scrollbar</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-scrollbar</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          7
        ),
        n(
          `iframe`,
          {
            height: `150`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QScrollbar/theme.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="visible" tabindex="-1"><a class="header-anchor" href="#visible"><span>visible</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Defines permanent visibility.</p><p>Code example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-scrollbar</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">visible</span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `150`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QScrollbar/visible.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="viewtag" tabindex="-1"><a class="header-anchor" href="#viewtag"><span>viewTag</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;div&#39;</code></li></ul><p>Defines custom inner content tag.</p><h3 id="wrapclass" tabindex="-1"><a class="header-anchor" href="#wrapclass"><span>wrapClass</span></a></h3><ul><li>Type: <code>Object | String | Array</code></li><li>Default: <code>null</code></li></ul><p>A custom wrapper content class.</p><h3 id="viewclass" tabindex="-1"><a class="header-anchor" href="#viewclass"><span>viewClass</span></a></h3><ul><li>Type: <code>Object | String | Array</code></li><li>Default: <code>null</code></li></ul><p>A custom inner content class.</p><h3 id="scrollto" tabindex="-1"><a class="header-anchor" href="#scrollto"><span>scrollTo</span></a></h3><ul><li>Type: <code>HtmlElement</code></li><li>Default: <code>null</code></li></ul><p>Allows to pass a DOM element to which the content will be scrolled.</p><p>Example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-scrollbar</span> <span class="token attr-name">:scroll-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Lorem ipsum dolor sit amet...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>end<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>This is the end<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          15
        ),
        n(
          `iframe`,
          {
            height: `250`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QScrollbar/scrollto.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="viewstyle" tabindex="-1"><a class="header-anchor" href="#viewstyle"><span>viewStyle</span></a></h3><ul><li>Type <code>String | Object</code></li><li>Default: <code>null</code></li></ul><p>A custom inner content styles.</p><h3 id="noresize" tabindex="-1"><a class="header-anchor" href="#noresize"><span>noresize</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default <code>false</code></li></ul><p>If there is a <code>noresize</code> prop, than resizeListener will watch for parent size.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>QScrollbar main content</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-scrollbar</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          10
        )
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
