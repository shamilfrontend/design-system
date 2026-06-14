import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QColorpicker.html","title":"QColorpicker 🎨","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QColorpicker.md"}`
  ),
  o = { name: `QColorpicker.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qcolorpicker-🎨" tabindex="-1"><a class="header-anchor" href="#qcolorpicker-🎨"><span>QColorpicker 🎨</span></a></h1><p>Being used to pick color value.</p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>When you need to pick a color as value.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            height: `350`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QColorpicker/main.html`
          },
          null,
          -1
        ),
        i(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;#f25&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QDatePickerPropModelValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QDatePickerPropModelValue <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> Date <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> Date<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h3 id="popperoptions" tabindex="-1"><a class="header-anchor" href="#popperoptions"><span>popperOptions</span></a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li></ul><p>We use Popper.js to show tooltips &amp; popovers. See full options guide <a href="https://popper.js.org/docs/v2/constructors/#options" target="_blank" rel="noopener noreferrer">here</a></p><pre><code class="language-ts"><span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">QColorPickerPropPopperOptions</span> <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>Partial<span class="token operator">&lt;</span>Options<span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  placement<span class="token operator">:</span> Placement<span class="token punctuation">;</span>
  modifiers<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>Partial<span class="token operator">&lt;</span>Modifier<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;&gt;&gt;</span><span class="token punctuation">;</span>
  strategy<span class="token operator">:</span> PositioningStrategy<span class="token punctuation">;</span>
  onFirstUpdate<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>arg0<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>State<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to disable the ColorPicker.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether to show clear button.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">clearable</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="alphashown" tabindex="-1"><a class="header-anchor" href="#alphashown"><span>alphaShown</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether to display the alpha slider.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alpha-shown</span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          25
        ),
        n(
          `iframe`,
          {
            height: `350`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QColorpicker/alpha-shown.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="colorformat" tabindex="-1"><a class="header-anchor" href="#colorformat"><span>colorFormat</span></a></h3><ul><li>Type: <code>&#39;hex&#39; | &#39;rgb&#39;</code></li><li>Default: <code>&#39;hex&#39;</code></li></ul><p>Output color format.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgb<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="placement" tabindex="-1"><a class="header-anchor" href="#placement"><span>placement</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;right-start&#39;</code></li></ul><p>Sets picker placement around the button.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bottom<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-ts"><span class="token comment">// ts type</span>
<span class="token keyword">type</span> <span class="token class-name">Placement</span> <span class="token operator">=</span> AutoPlacement <span class="token operator">|</span> BasePlacement <span class="token operator">|</span> VariationPlacement<span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">AutoPlacement</span> <span class="token operator">=</span> <span class="token string">&#39;auto&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;auto-start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;auto-end&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">BasePlacement</span> <span class="token operator">=</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">VariationPlacement</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre><h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>null</code></li></ul><p>Specifies a target element where QColorpicker will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modelValue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">teleport-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when model updates.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for update:modelValue.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="trigger" tabindex="-1"><a class="header-anchor" href="#trigger"><span>trigger</span></a></h3><p>Optional. HTML element that triggers dropdown</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-color-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>trigger</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Custom trigger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-color-picker</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          22
        ),
        n(
          `iframe`,
          {
            height: `350`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QColorpicker/trigger.html`
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
