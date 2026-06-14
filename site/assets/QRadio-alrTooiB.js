import {
  d as e,
  l as t,
  m as n,
  o as r,
  r as i,
  u as a
} from './app-CIsYDi5X.js';
var o = JSON.parse(
    `{"path":"/components/QRadio.html","title":"QRadio 📻","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781276126000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":2}]},"filePathRelative":"components/QRadio.md"}`
  ),
  s = { name: `QRadio.md` };
function c(i, o, s, c, l, u) {
  return (
    n(),
    t(`div`, null, [
      ...(o[0] ||= [
        r(
          `h1`,
          { id: `qradio-📻`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qradio-📻` }, [
              r(`span`, null, `QRadio 📻`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            r(`code`, null, `QRadio`),
            e(
              `s are used when only one choice may be selected in a series of options.`
            )
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
            style: { width: `100%`, height: `100px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QRadio/main.html`
          },
          null,
          -1
        ),
        a(
          `<h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="value" tabindex="-1"><a class="header-anchor" href="#value"><span>value</span></a></h3><ul><li>Type: <code>String | Number | Boolean</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><p>The Radio&#39;s label.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="labelsize" tabindex="-1"><a class="header-anchor" href="#labelsize"><span>labelSize</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>regular</code></li></ul><p>The Radio&#39;s label size.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
          13
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `64px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QRadio/labelSize.html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="checked" tabindex="-1"><a class="header-anchor" href="#checked"><span>checked</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether Radio is checked.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether Radio is disabled.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Triggers when value updates.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span>
  <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueChange<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Set custom content as <code>label</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:checked</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>label from slot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-radio</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          16
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `100px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QRadio/slot.html`
          },
          null,
          -1
        ),
        r(
          `h2`,
          { id: `qradiogroup-📻📻📻`, tabindex: `-1` },
          [
            r(`a`, { class: `header-anchor`, href: `#qradiogroup-📻📻📻` }, [
              r(`span`, null, `QRadioGroup 📻📻📻`)
            ])
          ],
          -1
        ),
        r(
          `p`,
          null,
          [
            e(`As you're not to be able to use `),
            r(`code`, null, `QRadio`),
            e(` in isolation (if you're making great UX), we recommend using `),
            r(`code`, null, `QRadio`),
            e(`'s inside a group.`)
          ],
          -1
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `150px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QRadio/QRadioGroup.html`
          },
          null,
          -1
        ),
        a(
          `<pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio-group</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleChange<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option A<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-radio</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option B<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-radio</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio</span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Option C<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-radio</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-radio-group</span><span class="token punctuation">&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token parameter">newValue</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> handleChange <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><h2 id="qradiogroup-props" tabindex="-1"><a class="header-anchor" href="#qradiogroup-props"><span>QRadioGroup props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>String | Number | Boolean</code></li><li>Default: <code>null</code></li></ul><p>The binding value.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio-group</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="direction" tabindex="-1"><a class="header-anchor" href="#direction"><span>direction</span></a></h3><ul><li>Type: <code>&#39;vertical&#39; | &#39;horizontal&#39;</code></li><li>Default: <code>&#39;vertical&#39;</code></li></ul><p>Defines the direction. Whether radio buttons are in the row or column.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio-group</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>horizontal<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre>`,
          11
        ),
        r(
          `iframe`,
          {
            style: { width: `100%`, height: `200px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QRadio/QRadioGroup[direction].html`
          },
          null,
          -1
        ),
        a(
          `<h3 id="disabled-1" tabindex="-1"><a class="header-anchor" href="#disabled-1"><span>disabled</span></a></h3><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><p>Whether <code>QRadioGroup</code> is disabled.</p><h3 id="tag" tabindex="-1"><a class="header-anchor" href="#tag"><span>tag</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>div</code></li></ul><p>Custom wrapper tag.</p><h2 id="qradiogroup-events" tabindex="-1"><a class="header-anchor" href="#qradiogroup-events"><span>QRadioGroup Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when the model is being updated.</p><h3 id="change-1" tabindex="-1"><a class="header-anchor" href="#change-1"><span>change</span></a></h3><p>Alias for <code>update:modelValue</code>.</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-radio-group</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleValueChange<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">...</span>
<span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="qradiogroup-slots" tabindex="-1"><a class="header-anchor" href="#qradiogroup-slots"><span>QRadioGroup Slots</span></a></h2><h3 id="default-1" tabindex="-1"><a class="header-anchor" href="#default-1"><span>default</span></a></h3><p>Default slot is being used to include <code>QRadio</code> buttons inside <code>only</code>.</p>`,
          15
        )
      ])
    ])
  );
}
var l = i(s, [[`render`, c]]);
export { o as _pageData, l as default };
