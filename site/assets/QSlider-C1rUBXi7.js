import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QSlider.html","title":"QSlider 🎚️","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":2}]},"filePathRelative":"components/QSlider.md"}`
  ),
  o = { name: `QSlider.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qslider-🎚️" tabindex="-1"><a class="header-anchor" href="#qslider-🎚️"><span>QSlider 🎚️</span></a></h1><p>The Slider is used to allow users to make selections from a range of values. Try <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default case:</p>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `110px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSlider/main.html`
          },
          null,
          -1
        ),
        i(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code> | <code>Number</code> | <code>Boolean</code>,</li><li>Default: <code>null</code></li></ul><p>The binding value.</p><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-slider</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;normal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;easy&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Easy&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Normal&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hard&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Hard&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h3><ul><li>Type: <code>Array</code></li><li>Required: <code>true</code></li></ul><p>Slider <code>data</code> is an <code>Array</code> of objects having the following properties:</p><ul><li><code>value</code> - The value of the slider</li><li><code>label?</code>- The label of the slider</li><li><code>style?</code> - custom styles for caption slot (<code>StyleValue</code> type from <code>&#39;vue&#39;</code>)</li><li><code>slotData?</code> - pass custom fields into caption (see example below)</li></ul><pre><code class="language-ts"><span class="token keyword">type</span> <span class="token class-name">QSliderData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  style<span class="token operator">?</span><span class="token operator">:</span> StyleValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// sorry for that</span>
<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">QSliderPropData<span class="token operator">&lt;</span>
  <span class="token constant">T</span> <span class="token keyword">extends</span> ModelValue <span class="token operator">=</span> ModelValue<span class="token punctuation">,</span>
  <span class="token constant">S</span> <span class="token keyword">extends</span> SlotData <span class="token operator">=</span> <span class="token keyword">undefined</span>
<span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token class-name">SlotData</span>
  <span class="token operator">?</span> <span class="token constant">S</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">undefined</span></span>
    <span class="token operator">?</span> QSliderData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
    <span class="token operator">:</span> QSliderData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> slotData<span class="token operator">:</span> <span class="token constant">S</span> <span class="token punctuation">}</span>
  <span class="token operator">:</span> QSliderData<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><p>Template:</p><pre><code class="language-vue{4}">&lt;template&gt;
  &lt;q-slider
    v-model=&quot;valueSlot&quot;
    :data=&quot;dataSlot&quot;
  &gt;
    &lt;template #caption=&quot;{ label, data }&quot;&gt;
      &lt;div style=&quot;margin: 0; font-size: 14px; line-height: 18px&quot;&gt;
        {{ label }}
      &lt;/div&gt;
      &lt;div style=&quot;margin-top: 4px; font-size: 10px; line-height: 12px&quot;&gt;
        {{ data?.description }}
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/q-slider&gt;
&lt;/template&gt;
</code></pre><p>Component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> dataSlot <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;easy&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Easy&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">slotData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;easy description&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;normal&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Normal&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&quot;width: &#39;127px&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">slotData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;medium description&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token punctuation">{</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hard&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;Hard&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">&#39;135px&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">slotData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&#39;hard description&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> dataSlot<span class="token punctuation">,</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><p>Example:</p>`,
          18
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `125px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSlider/data.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="tooltipmode" tabindex="-1"><a class="header-anchor" href="#tooltipmode"><span>tooltipMode</span></a></h3><ul><li>Type: <code>&#39;hover&#39; | &#39;always&#39;</code>,</li><li>Default: <code>null</code></li></ul><p>Slider&#39;s tooltip displaying mode: &#39;hover&#39; | &#39;always&#39;. If null, the tooltip will be hidden.</p><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-slider</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">tooltip-mode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>always<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `200px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSlider/tooltipMode.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="showsteps" tabindex="-1"><a class="header-anchor" href="#showsteps"><span>showSteps</span></a></h3><ul><li>Type: <code>Boolean</code>,</li><li>Default: <code>false</code></li></ul><p>Whether Slider steps is visible.</p><p>Template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-slider</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:show-steps</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Component instance:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `110px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QSlider/showSteps.html`
          },
          null,
          -1
        ),
        n(
          `h2`,
          { id: `events`, tabindex: `-1` },
          [
            n(`a`, { class: `header-anchor`, href: `#events` }, [
              n(`span`, null, `Events`)
            ])
          ],
          -1
        ),
        n(
          `h3`,
          { id: `update-modelvalue`, tabindex: `-1` },
          [
            n(`a`, { class: `header-anchor`, href: `#update-modelvalue` }, [
              n(`span`, null, `update:modelValue`)
            ])
          ],
          -1
        ),
        n(`p`, null, `Triggers when model updates.`, -1)
      ])
    ])
  );
}
var c = r(o, [[`render`, s]]);
export { a as _pageData, c as default };
