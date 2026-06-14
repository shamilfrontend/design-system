import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QSelect.html","title":"QSelect 🔽","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":2}]},"filePathRelative":"components/QSelect.md"}`
  ),
  o = { name: `QSelect.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qselect-🔽" tabindex="-1"><a class="header-anchor" href="#qselect-🔽"><span>QSelect 🔽</span></a></h1><p>Select component is a component that allows users pick a single value or a several values from predefined options. Ideally, it should be used if you have more than 5 options, otherwise you might consider using a radio group instead. Try <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h2><p>A few scenarios:</p>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `400px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/main.html`
          },
          null,
          -1
        ),
        i(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code> | <code>Number</code> | <code>Array</code> | <code>Object</code>,</li><li>Default: <code>null</code></li></ul><p>The binding value. As you can see there are a lot of types supported, <code>Array</code> is being used for a <code>multiple</code> mode - to choose several values. Let&#39;s check the types:</p><pre><code class="language-ts"><span class="token comment">// TS type</span>
<span class="token keyword">type</span> <span class="token class-name">QSelectPropModelValue</span> <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>
  <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> QOptionPropValue <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> QOptionPropValue<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">QOptionPropValue</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><p><code>modelValue</code> as <code>String</code>:</p><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p><code>modelValue</code> as <code>Object</code>:</p><div class="custom-container tip"><p class="custom-container-title">NOTE</p><p>The <code>modelValue</code> as <code>Object</code> MUST be used with one of requirements:</p></div><ul><li>the <code>modelValue</code> <code>MUST</code> contain the <code>value</code> field.</li><li>set your custom <a href="#valuekey">value-key</a> to <code>&lt;q-select value-key=&quot;...&quot;&gt;</code> to bind you <code>value</code> with options.</li></ul><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> modelValue <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> modelValue<span class="token punctuation">,</span> options <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="custom-container tip"><p class="custom-container-title">OPTIONS</p><p>The <code>modelValue</code> syncs with <code>options</code> by the <code>value</code> prop. So don&#39;t forget to pass a <code>value</code> in <code>&lt;q-option&gt;</code><br><a href="#qoption">Learn more</a> about <code>&lt;q-option&gt;</code></p></div><h3 id="valuekey" tabindex="-1"><a class="header-anchor" href="#valuekey"><span>valueKey</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;value&#39;</code></li></ul><p>Custom key name for <code>value</code> when the <code>modelValue</code> is object.</p><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">value-key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.id<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">const</span> modelValue <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&#39;value2&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 2&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> modelValue<span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="multiple" tabindex="-1"><a class="header-anchor" href="#multiple"><span>multiple</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>You can think <code>multiple</code> is a mode allows you to select several values. There are several additional props to customize the mode.</p><h4 id="multiple-additional-props" tabindex="-1"><a class="header-anchor" href="#multiple-additional-props"><span>multiple additional props</span></a></h4><table><thead><tr><th>Prop</th><th style="text-align:center;">Type</th><th style="text-align:right;">Default</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td><code>multipleLimit</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:right;"><code>0</code></td><td style="text-align:center;">Maximum number of options user can select when <code>multiple</code> is true. No limit when set to <code>0</code> number.</td></tr><tr><td><code>selectAllShown</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:right;"><code>false</code></td><td style="text-align:center;">Whether <code>Select all</code> button is shown</td></tr><tr><td><code>selectAllText</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:right;"><code>null</code></td><td style="text-align:center;">Custom <code>Select all</code> button text</td></tr><tr><td><code>collapseTags</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:right;"><code>false</code></td><td style="text-align:center;">Only <code>1</code> choosen option is shown inside input, the rest is hidden by counter</td></tr></tbody></table><h4 id="multiple-mode-examples" tabindex="-1"><a class="header-anchor" href="#multiple-mode-examples"><span>multiple mode examples:</span></a></h4><br>`,
          32
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `500px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/multiple.html`
          },
          null,
          -1
        ),
        i(
          `<p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">multiple</span>
    <span class="token attr-name">collapse-tags</span>
    <span class="token attr-name">:multiple-limit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">select-all-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select all cities<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">...</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether <code>QSelect</code> is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
  <span class="token attr-name">disabled</span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre>`,
          6
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `80px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/disabled.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="filterable" tabindex="-1"><a class="header-anchor" href="#filterable"><span>filterable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Allows typing and filtering options.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">filterable</span>
    <span class="token attr-name">...</span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `300px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/filterable.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Adds the clear button to remove selected on hover.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
  <span class="token attr-name">clearable</span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `300px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/clearable.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="remote" tabindex="-1"><a class="header-anchor" href="#remote"><span>remote</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether options loads from server.</p><p>You can think <code>remote</code> is a mode, so there are a few additional props to customize the mode:</p><h4 id="remote-additional-props" tabindex="-1"><a class="header-anchor" href="#remote-additional-props"><span>remote additional props</span></a></h4><table><thead><tr><th>Prop</th><th style="text-align:center;">Type</th><th style="text-align:right;">Default</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td><code>loading</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:right;"><code>false</code></td><td style="text-align:center;">Whether <code>QSelect</code> is loading.</td></tr><tr><td><code>loadingText</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:right;"><code>null</code></td><td style="text-align:center;">Text that is shown when <code>loading</code> is true.</td></tr><tr><td><code>loadMoreText</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:right;"><code>null</code></td><td style="text-align:center;">Additional text in the end of options list is being shown when <code>canLoadMore</code> is <code>true</code>. Inform users you have more options on server and ask specify the query string. Use with <code>canLoadMore</code>:</td></tr><tr><td><code>canLoadMore</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:right;"><code>false</code></td><td style="text-align:center;">Whether <code>loadMoreText</code> is shown.</td></tr><tr><td><code>noMatchText</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:right;"><code>null</code></td><td style="text-align:center;">When no matching happend</td></tr><tr><td><code>noDataText</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:right;"><code>null</code></td><td style="text-align:center;">When no options got</td></tr></tbody></table><h4 id="remote-mode-example" tabindex="-1"><a class="header-anchor" href="#remote-mode-example"><span>remote mode example:</span></a></h4><br>`,
          8
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `400px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/remote.html`
          },
          null,
          -1
        ),
        i(
          `<p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>valueSearch<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:loading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isLoading<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:can-load-more</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>canLoadMore<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSearch<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Search by label<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">loading-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Searching options...<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">filterable</span>
    <span class="token attr-name">remote</span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> valueSearch <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> isLoading <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> optionsServer <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value0&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option Zero&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value3&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span>
          <span class="token string">&#39;Lorem Ipsum is simply dummy text of the printing and typesetting industry.&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> canLoadMore <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleSearch</span> <span class="token operator">=</span> <span class="token parameter">query</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      isLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

      <span class="token comment">// request imitation</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        options<span class="token punctuation">.</span>value <span class="token operator">=</span> optionsServer<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
          <span class="token parameter">option</span> <span class="token operator">=&gt;</span>
            option<span class="token punctuation">.</span>label<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        isLoading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        canLoadMore<span class="token punctuation">.</span>value <span class="token operator">=</span> optionsServer<span class="token punctuation">.</span>length <span class="token operator">===</span> options<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      options<span class="token punctuation">,</span>
      valueSearch<span class="token punctuation">,</span>
      handleSearch<span class="token punctuation">,</span>
      isLoading<span class="token punctuation">,</span>
      canLoadMore
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="allowcreate" tabindex="-1"><a class="header-anchor" href="#allowcreate"><span>allowCreate</span></a></h3><ul><li>Type <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether creating new items is allowed.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>To use allowCreate, <code>filterable</code> must be <code>true</code>.</p></div>`,
          8
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `350px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/allowCreate.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder"><span>placeholder</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>As native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-placeholder" target="_blank" rel="noopener noreferrer">placeholder</a>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
  <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Select the city<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="autocomplete" tabindex="-1"><a class="header-anchor" href="#autocomplete"><span>autocomplete</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;off&#39;</code></li></ul><p>As native <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete" target="_blank" rel="noopener noreferrer">autocomplete</a> input&#39;s attribute.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
  <span class="token attr-name">autocomplete</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>on<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>null</code></li></ul><p>Specifies a target element where <code>QSelect</code> will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">teleport-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name"><span class="token namespace">@update:</span>modelValue</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleModelValueUpdate<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for <a href="#update-modelvalue">update:modelValue</a></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleModelValueUpdate<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>Triggers when native input event fires.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleModelValueInput<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>Triggers when select gets focus.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectFocus<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur"><span>blur</span></a></h3><p>Triggers when select gets blur.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@blur</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectBlur<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="clear" tabindex="-1"><a class="header-anchor" href="#clear"><span>clear</span></a></h3><p>Triggers when clear button clicks.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@clear</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectClear<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="remove-tag" tabindex="-1"><a class="header-anchor" href="#remove-tag"><span>remove-tag</span></a></h3><p>Triggers when tag removes in <a href="#multiple">multiple</a> mode.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@remove-tag</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleTagRemove<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">multiple</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span>search</span></a></h3><p>Triggers when search query changes in <a href="#remote">remote</a> mode.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@search</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSelectSearch<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">remote</span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="visible-change" tabindex="-1"><a class="header-anchor" href="#visible-change"><span>visible-change</span></a></h3><p>Triggers when dropdown state changes.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">...</span>
    <span class="token attr-name">@visible-change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleDropdownToggle<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Default slot is being used to keep <code>&lt;q-options&gt;</code> list only.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Do not set any another content into default slot.</p></div><h3 id="empty" tabindex="-1"><a class="header-anchor" href="#empty"><span>empty</span></a></h3><p>Used to put your custom content istead of <code>&lt;q-options&gt;</code></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Open to see the magic<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#empty</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>block<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Magic! Your custom content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          47
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `150px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/slot.html`
          },
          null,
          -1
        ),
        i(
          `<h2 id="qoption" tabindex="-1"><a class="header-anchor" href="#qoption"><span>QOption</span></a></h2><p><code>QOption</code> is an additional component to control options. Use with <code>v-for</code> directive to render options list.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;One&#39;</span> <span class="token punctuation">}</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Two&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> options <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><p>An Option&#39;s list MUST be an <code>Array</code> of <code>Strings</code>, <code>Numbers</code> or on <code>Objects</code>:</p><pre><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Option<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Option</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> Nullable<span class="token operator">&lt;</span>QOptionPropValue<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">QOptionPropValue</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h2 id="qoption-props" tabindex="-1"><a class="header-anchor" href="#qoption-props"><span>QOption props</span></a></h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value</span></a></h3><ul><li>Type: <code>String</code> | <code>Number</code> | <code>Object</code></li><li>Required: <code>true</code></li></ul><p>An option&#39;s <code>value</code> that <code>QSelect</code> is trying to mach with the <code>modelValue</code>.</p><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">QOptionPropValue</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h3><ul><li>Type: <code>String</code> | <code>Number</code></li><li>Default: <code>null</code></li></ul><p>The <code>label</code> is being shown as an Option title.</p><h3 id="disabled-1" tabindex="-1"><a class="header-anchor" href="#disabled-1"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether option is disabled.</p>`,
          17
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `200px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSelect/[QOption]disabled.html`
          },
          null,
          -1
        ),
        i(
          `<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-select</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pick an option<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-option</span>
      <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in options<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.label<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.value<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.disabled<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option Zero&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Option 1&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token operator">...</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> options<span class="token punctuation">,</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre>`,
          2
        )
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
