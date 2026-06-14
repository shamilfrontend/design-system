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
    `{"path":"/components/QCollapse.html","title":"QCollapse 🪗","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781347446000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QCollapse.md"}`
  ),
  u = { name: `QCollapse.md` };
function d(o, l, u, d, f, p) {
  let m = n(`RouteLink`);
  return (
    i(),
    r(`div`, null, [
      (l[5] ||= s(
        `<h1 id="qcollapse-🪗" tabindex="-1"><a class="header-anchor" href="#qcollapse-🪗"><span>QCollapse 🪗</span></a></h1><p>Collapse groups a collection of contents in tabs.</p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>Can be used to show or hide content to keep the page clean.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
        6
      )),
      (l[6] ||= a(
        `iframe`,
        {
          height: `450`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCollapse/main.html`
        },
        null,
        -1
      )),
      (l[7] ||= s(
        `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeNames<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Consistency<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>consistency<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Consistent with real life: in line with the process and logic of real
      life, and comply with languages and habits that the users are used to;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Consistent within interface: all elements should be consistent, such as:
      design style, icons and texts, position of elements, etc.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Efficiency<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Simplify the process: keep operating process simple and intuitive;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Definite and clear: enunciate your intentions clearly so that the users
      can quickly understand and make decisions;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Easy to identify: the interface should be straightforward, which helps
      the users to identify and frees them from memorizing and recalling.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse-item</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Controllability<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Decision making: giving advices about operations is acceptable, but do
      not make decisions for the users;
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      Controlled consequences: users should be granted the freedom to operate,
      including canceling, aborting or terminating current operation.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> activeNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;consistency&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> activeNames <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code>, <code>Number</code>, <code>Array</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QCollapsePropModelValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">export</span></span> <span class="token keyword">type</span> <span class="token class-name">QCollapsePropModelValue</span> <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>
  <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h3 id="accordion" tabindex="-1"><a class="header-anchor" href="#accordion"><span>accordion</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Shrink all panels, except the last selected.</p><p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeNames<span class="token punctuation">&quot;</span></span> <span class="token attr-name">accordion</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        14
      )),
      (l[8] ||= a(
        `iframe`,
        {
          height: `450`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCollapse/accordion.html`
        },
        null,
        -1
      )),
      (l[9] ||= s(
        `<h3 id="closeicon" tabindex="-1"><a class="header-anchor" href="#closeicon"><span>closeIcon</span></a></h3><ul><li>Type: <code>String | Component</code></li><li>Default: <code>null</code></li></ul><p>Allows you to control what icon will be displayed near opened <code>QCollapseItem</code>.</p><hr><p><strong>IMPORTANT</strong></p><p>For proper use you need to provide both <code>openIcon</code> and <code>closeIcon</code></p><hr><p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">close-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>your-icon-component-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- or --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">:close-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YourIconComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        9
      )),
      (l[10] ||= a(
        `iframe`,
        {
          height: `100`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCollapse/closeIcon.html`
        },
        null,
        -1
      )),
      (l[11] ||= s(
        `<h3 id="openicon" tabindex="-1"><a class="header-anchor" href="#openicon"><span>openIcon</span></a></h3><ul><li>Type: <code>String | Component</code></li><li>Default: <code>null</code></li></ul><p>Allows you to control what icon will be displayed near closed <code>QCollapseItem</code>.</p><hr><p><strong>IMPORTANT</strong></p><p>For proper use you need to provide both <code>openIcon</code> and <code>closeIcon</code></p><hr><p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">open-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>your-icon-component-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- or --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span> <span class="token attr-name">:open-icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>YourIconComponent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
        9
      )),
      (l[12] ||= a(
        `iframe`,
        {
          height: `100`,
          style: { width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QCollapse/openIcon.html`
        },
        null,
        -1
      )),
      (l[13] ||= s(
        `<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when model updates.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for update:modelValue</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-collapse</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>activeNames<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueUpdate<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueUpdate<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-collapse</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre><code class="language-js">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleValueUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> handleValueUpdate <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3>`,
        9
      )),
      a(`p`, null, [
        (l[1] ||= e(`See `, -1)),
        t(
          m,
          { to: `/components/QCollapse/#example` },
          { default: c(() => [...(l[0] ||= [e(`example`, -1)])]), _: 1 }
        ),
        (l[2] ||= e(` above. Using `, -1)),
        (l[3] ||= a(`code`, null, `default`, -1)),
        (l[4] ||= e(` slot recommended by default.`, -1))
      ])
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
