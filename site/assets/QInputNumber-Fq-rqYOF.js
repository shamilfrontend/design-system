import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QInputNumber.html","title":"QInputNumber 🔢","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781298935000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"components/QInputNumber.md"}`
  ),
  o = { name: `QInputNumber.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qinputnumber-🔢" tabindex="-1"><a class="header-anchor" href="#qinputnumber-🔢"><span>QInputNumber 🔢</span></a></h1><p>Provides an input field accepting only numbers. Try a sandbox <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">story</a></p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
          4
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInputNumber/main.html`
          },
          null,
          -1
        ),
        i(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Binding value</p><h3 id="precision" tabindex="-1"><a class="header-anchor" href="#precision"><span>precision</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Number of digits after decimal separator</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:precision</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Result:</p>`,
          13
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInputNumber/precision.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>null</code></li></ul><p>Sets disabled input state</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
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
            src: `/QInputNumber/disabled.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="min" tabindex="-1"><a class="header-anchor" href="#min"><span>min</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Minimum allowed value. Must be less than maximum value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:min</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
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
            src: `/QInputNumber/positive.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="max" tabindex="-1"><a class="header-anchor" href="#max"><span>max</span></a></h3><ul><li>Type: <code>Number</code></li><li>Default: <code>null</code></li></ul><p>Maximum allowed value. Must be higher than minimum value.</p><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix"><span>prefix</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>If input not in focus, the prefix will be displayed before main value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Distance:<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          7
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInputNumber/prefix.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="suffix" tabindex="-1"><a class="header-anchor" href="#suffix"><span>suffix</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>If input not in focus, the suffix will be displayed after main value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">suffix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hours<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          4
        ),
        n(
          `iframe`,
          {
            height: `80`,
            style: { width: `100%` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInputNumber/suffix.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>null</code></li></ul><p>If input is wrapped in <code>QFormItem</code>, prop <code>validateEvent</code> defines if bound events will be validated immediately</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form</span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input-number</span> 
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>model.value<span class="token punctuation">&quot;</span></span> 
      <span class="token attr-name">validate-event</span> 
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when model updates.</p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>Triggers when native input event fires</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Triggers when an alteration to input value is committed by the user</p><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>Triggers when input gets focus</p><h3 id="blur" tabindex="-1"><a class="header-anchor" href="#blur"><span>blur</span></a></h3><p>Triggers when input loses focus</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="postfix" tabindex="-1"><a class="header-anchor" href="#postfix"><span>postfix</span></a></h3><p>Set your custom content as a postfix.</p>`,
          18
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `85px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QInputNumber/postfix.html`
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
