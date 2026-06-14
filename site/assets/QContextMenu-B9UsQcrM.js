import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QContextMenu.html","title":"QContextMenu 📎","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QContextMenu.md"}`
  ),
  o = { name: `QContextMenu.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qcontextmenu-📎" tabindex="-1"><a class="header-anchor" href="#qcontextmenu-📎"><span>QContextMenu 📎</span></a></h1><p>Contextual menus are displayed on demand and contain a small set of relevant actions, related to a control, a piece of content, a view in an app, or an area of the UI. When designed right, they deliver relevant tools for completing tasks without adding clutter to the interface.</p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>When you need to hide any actions to free space.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `200`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QContextMenu/main.html`
          },
          null,
          -1
        ),
        i(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-context-menu</span> <span class="token attr-name">:menu-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuItems<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAction<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> menuItems <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;action1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Menu item 1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;q-icon-account&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;action2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Menu item 2&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;q-icon-bell&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">&#39;action3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Menu item 3&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;q-icon-pic&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> menuItems<span class="token punctuation">,</span> handleAction <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="menuitems" tabindex="-1"><a class="header-anchor" href="#menuitems"><span>menuItems</span></a></h3><ul><li>Type: <code>Array</code></li><li>Default: <code>null</code></li></ul><p>Array of item&#39;s settings.</p><p><code>menuItems</code> MUST be an <code>Array</code> of <code>Object</code>s, each object MUST contain:</p><ul><li><code>action</code> - an item&#39;s value (will be passed to handler)</li><li><code>name</code> - a button label</li><li><code>icon</code> - a button prefix icon</li></ul><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QContextMenuPropMenuItems <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QContextMenuPropMenuItems <span class="token operator">=</span> MenuItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MenuItem</span> <span class="token punctuation">{</span>
  action<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  icon<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="position" tabindex="-1"><a class="header-anchor" href="#position"><span>position</span></a></h3><ul><li>Type: <code>&#39;left&#39; | &#39;right&#39;</code></li><li>Default: <code>left</code></li></ul><p>The dropdown&#39;s position around the trigger button.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-context-menu</span>
  <span class="token attr-name">:menu-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuItems<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">position</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAction<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          15
        ),
        n(
          `iframe`,
          {
            height: `200`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QContextMenu/position.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>null</code></li></ul><p>Specifies a target element where <code>QContextMenu</code> will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-context-menu</span>
  <span class="token attr-name">:menu-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuItems<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">teleport-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAction<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="action" tabindex="-1"><a class="header-anchor" href="#action"><span>action</span></a></h3><p>Handle click on menu item.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-context-menu</span> <span class="token attr-name">:menu-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuItems<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAction<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token keyword">const</span> <span class="token function-variable function">handleAction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">action</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// code</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> handleAction <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Optional. HTML element that triggers dropdown</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-context-menu</span> <span class="token attr-name">:menu-items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>menuItems<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleAction<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-slot</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Custom trigger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-context-menu</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          13
        ),
        n(
          `iframe`,
          {
            height: `200`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QContextMenu/slot.html`
          },
          null,
          -1
        )
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
