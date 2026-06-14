import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QButton.html","title":"QButton 🆗","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QButton.md"}`
  ),
  o = { name: `QButton.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qbutton-🆗" tabindex="-1"><a class="header-anchor" href="#qbutton-🆗"><span>QButton 🆗</span></a></h1><p>Commonly used button. See props to configure <code>QButton</code>. Try a sandbox <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><p>All kind of types:</p>`,
          4
        ),
        n(
          `iframe`,
          {
            height: `340`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/main.html`
          },
          null,
          -1
        ),
        i(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme"><span>theme</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;primary&#39;</code></li></ul><p>A <code>theme</code> prop defines how button appearence, can accept values:</p><ul><li><code>&#39;primary&#39;</code> - button style, being used for primary actions</li><li><code>&#39;secondary&#39;</code> - button style, being used for secondary actions</li><li><code>&#39;link&#39;</code> - text button style</li></ul><p>Code Example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Secondary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          8
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/theme.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li>Type: <code>String</code></li></ul><p>Defines button type (not native)</p><ul><li><code>&#39;icon&#39;</code> - must be used if you want to put your custom svg / html icon inside QButton</li></ul><p>You don&#39;t need add <code>type</code> prop, if you&#39;re going to use our icons.</p><p>Code Example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xml:</span>space</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preserve<span class="token punctuation">&quot;</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0 0 94.926 94.926<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>M55.931 47.463 94.306 9.09c.826-.827.826-2.167 0-2.994L88.833.62C88.436.224 87.896 0 87.335 0c-.562 0-1.101.224-1.498.62L47.463 38.994 9.089.62c-.795-.795-2.202-.794-2.995 0L.622 6.096c-.827.827-.827 2.167 0 2.994l38.374 38.373L.622 85.836c-.827.827-.827 2.167 0 2.994l5.473 5.476c.397.396.936.62 1.498.62s1.1-.224 1.497-.62l38.374-38.374 38.374 38.374c.397.396.937.62 1.498.62s1.101-.224 1.498-.62l5.473-5.476c.826-.827.826-2.167 0-2.994L55.931 47.463z<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          8
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/type.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="icon" tabindex="-1"><a class="header-anchor" href="#icon"><span>icon</span></a></h3><ul><li><p>Type: <code>String</code></p></li><li><p><code>&#39;q-icon-*&#39;</code> - class string, see full list <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">here</a></p></li></ul><p>Code example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-bell<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-check<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-comment<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-question-mark<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Result:</p>`,
          5
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/icon.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="size" tabindex="-1"><a class="header-anchor" href="#size"><span>size</span></a></h3><ul><li>Type: <code>&#39;regular&#39;</code> | <code>&#39;small&#39;</code></li><li>Default: <code>&#39;regular&#39;</code></li></ul><p>Changes button size.</p><p>Code example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/size.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="loading" tabindex="-1"><a class="header-anchor" href="#loading"><span>loading</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Set loading animation inside button</p><p>Code example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">loading</span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/loading.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Sets disabled button state</p><p>Code Example:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/disabled.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="circle" tabindex="-1"><a class="header-anchor" href="#circle"><span>circle</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Changes button&#39;s shape to circle (use with icon)</p><p>Code sample:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>q-icon-bell<span class="token punctuation">&quot;</span></span> <span class="token attr-name">circle</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Result:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QButton/circle.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="fullwidth" tabindex="-1"><a class="header-anchor" href="#fullwidth"><span>fullWidth</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Sets button width to 100%</p><h3 id="autofocus" tabindex="-1"><a class="header-anchor" href="#autofocus"><span>autofocus</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>As native autofocus</p><h3 id="nativetype" tabindex="-1"><a class="header-anchor" href="#nativetype"><span>nativeType</span></a></h3><ul><li>Type: <code>&#39;submit&#39; | &#39;reset&#39; | &#39;button&#39;</code></li><li>Default: <code>&#39;button&#39;</code></li></ul><p>As native button type</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><p>There is only default slot exists. Just put your content between QButton tags. Inline text content recommended.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span><span class="token punctuation">&gt;</span></span>Your text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          12
        )
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
