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
    `{"path":"/components/QDatepicker.html","title":"QDatepicker 📅","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QDatepicker.md"}`
  ),
  u = { name: `QDatepicker.md` };
function d(o, l, u, d, f, p) {
  let m = n(`RouteLink`);
  return (
    i(),
    r(`div`, null, [
      (l[6] ||= s(
        `<h1 id="qdatepicker-📅" tabindex="-1"><a class="header-anchor" href="#qdatepicker-📅"><span>QDatepicker 📅</span></a></h1><p>To select or input a date. We support default type <code>Date</code> and <code>ISO</code>.</p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>When you need to pick a date as a value.</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view (Desktop):</p><ul><li>viewport width &gt; 768px</li></ul>`,
        7
      )),
      (l[7] ||= a(
        `iframe`,
        {
          style: { width: `769px`, height: `750px` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/main.html`
        },
        null,
        -1
      )),
      (l[8] ||= a(`p`, null, `Default view (Mobile):`, -1)),
      (l[9] ||= a(
        `ul`,
        null,
        [
          a(`li`, null, `if width < 769px QDatepicker opens on popup`),
          a(`li`, null, `Example for iPhone SE's dimensions: (375 x 667)px`)
        ],
        -1
      )),
      (l[10] ||= a(
        `iframe`,
        {
          style: { height: `667px`, width: `375px` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/mobile.html`
        },
        null,
        -1
      )),
      (l[11] ||= s(
        `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="modelvalue" tabindex="-1"><a class="header-anchor" href="#modelvalue"><span>modelValue</span></a></h3><ul><li>Type: <code>Date | String | Array</code></li><li>Default: <code>null</code></li></ul><p>Binding value.</p><p><code>modelValue</code> depends on <code>type</code> prop.</p><ul><li>For type <code>date</code>, <code>week</code>, <code>month</code>, <code>year</code> it MUST be a single value - <code>String</code> (ISO) or <code>Date</code>.</li><li>For type <code>daterange</code>, <code>monthrange</code>, <code>yearrange</code> it MUST be an <code>Array</code> of <code>String</code>&#39;s (ISO) or <code>Date</code>&#39;s</li></ul><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QDatePickerPropModelValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QDatePickerPropModelValue <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>
  <span class="token builtin">string</span> <span class="token operator">|</span> Date <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span>Date<span class="token punctuation">,</span> Date<span class="token punctuation">]</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li>Type: <code>&#39;date&#39; | &#39;week&#39; | &#39;month&#39; | &#39;year&#39; | &#39;daterange&#39; | &#39;monthrange&#39; | &#39;yearrange&#39;</code></li><li>Default: <code>&#39;date&#39;</code></li></ul><p>Defines the picker mode.</p><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> QDatePickerPropType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QDatePickerPropType <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;date&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;week&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;month&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;year&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;daterange&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;monthrange&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;yearrange&#39;</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>date<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        16
      )),
      a(`p`, null, [
        (l[1] ||= e(`See `, -1)),
        t(
          m,
          { to: `/components/QDatepicker/#example` },
          { default: c(() => [...(l[0] ||= [e(`example`, -1)])]), _: 1 }
        ),
        (l[2] ||= e(` above.`, -1))
      ]),
      (l[12] ||= s(
        `<h3 id="format" tabindex="-1"><a class="header-anchor" href="#format"><span>format</span></a></h3><ul><li>Type <code>String</code></li><li>Default: <code>dd MMMM yyyy</code></li></ul><p>Sets custom date formatting in the input. We use <code>date-fns</code> formatting, so you should use their <a href="https://date-fns.org/v2.28.0/docs/format" target="_blank" rel="noopener noreferrer">config</a></p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>yyyy/MM/dd<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        4
      )),
      (l[13] ||= a(
        `iframe`,
        {
          style: { height: `367px`, width: `769px` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/format.html`
        },
        null,
        -1
      )),
      (l[14] ||= s(
        `<h3 id="outputformat" tabindex="-1"><a class="header-anchor" href="#outputformat"><span>outputFormat</span></a></h3><p>Defines output date format (what exactly will be as a <code>value</code>).</p><p>There is only two options available:</p><ul><li>Type <code>&#39;date&#39; | &#39;iso&#39;</code></li><li>Default: <code>&#39;date&#39;</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">output-format</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iso<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>

console.log(value) // 2022-02-15T21:00:00.000Z

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span>
  <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>

console.log(value) // Wed Feb 16 2022 18:43:46 GMT+0300 (Moscow Standard Time)
</code></pre><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder"><span>placeholder</span></a></h3><p>As native input placeholder. Use this prop for single types: <code>date</code>, <code>week</code>, <code>month</code>, <code>year</code>.</p><ul><li>Type <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Pick a date<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="startplaceholder-endplaceholder" tabindex="-1"><a class="header-anchor" href="#startplaceholder-endplaceholder"><span>startPlaceholder / endPlaceholder</span></a></h3><p>The ranged datepickers have two inputs, so <code>startPlaceholder</code> and <code>endPlaceholder</code> define their placeholders. Use this props for ranged types: <code>daterange</code>, <code>monthrange</code>, <code>yearrange</code>.</p><ul><li>Type <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">start-placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>from<span class="token punctuation">&quot;</span></span> <span class="token attr-name">end-placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>to<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><h3 id="shortcuts" tabindex="-1"><a class="header-anchor" href="#shortcuts"><span>shortcuts</span></a></h3><p>Defines date shortcuts, set any date to be able to select it faster.</p><ul><li>Type <code>Array</code></li><li>Default <code>null</code></li></ul><p>The <code>shortcuts</code> MUST be an <code>Array</code> of <code>Object</code>s, each object MUST contain:</p><ul><li><code>text</code> - shortcut&#39;s label (e.g <code>Today</code>, <code>Yestarday</code>, <code>A week ago</code>, etc.)</li><li><code>value</code> - a shortcut&#39;s value as a <code>Date</code></li></ul><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QDatePickerPropShortcuts <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QDatePickerPropShortcuts <span class="token operator">=</span> <span class="token punctuation">{</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> Date<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:shortcuts</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>shortcuts<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> shortcuts <span class="token operator">=</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Today&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Yesterday&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;A week ago&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> shortcuts <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,
        21
      )),
      a(`p`, null, [
        (l[4] ||= e(`See `, -1)),
        t(
          m,
          { to: `/components/QDatepicker/#example` },
          { default: c(() => [...(l[3] ||= [e(`example`, -1)])]), _: 1 }
        ),
        (l[5] ||= e(` above.`, -1))
      ]),
      (l[15] ||= s(
        `<h3 id="firstdayofweek" tabindex="-1"><a class="header-anchor" href="#firstdayofweek"><span>firstDayOfWeek</span></a></h3><p>Defines the first day of the week. Sunday by default.</p><ul><li>Type: <code>0 | 1 | 2 | 3 | 4 | 5 | 6</code></li><li>Default: <code>0</code></li></ul><p>Each <code>number</code> correspondes a week day:</p><ul><li><code>0</code> - <code>monday</code></li><li><code>1</code> - <code>tuesday</code></li><li><code>2</code> - <code>wednesday</code></li><li><code>3</code> - <code>thursday</code></li><li><code>4</code> - <code>friday</code></li><li><code>5</code> - <code>saturday</code></li><li><code>6</code> - <code>sunday</code></li></ul><pre><code class="language-vue">// start with monday
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:first-day-of-week</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre>`,
        6
      )),
      (l[16] ||= a(
        `iframe`,
        {
          style: { height: `367px`, width: `769px` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/firstDayOfWeek.html`
        },
        null,
        -1
      )),
      (l[17] ||= a(
        `h3`,
        { id: `disabled`, tabindex: `-1` },
        [
          a(`a`, { class: `header-anchor`, href: `#disabled` }, [
            a(`span`, null, `disabled`)
          ])
        ],
        -1
      )),
      (l[18] ||= a(`p`, null, `Whether QDatePicker is disabled.`, -1)),
      (l[19] ||= a(
        `ul`,
        null,
        [
          a(`li`, null, [e(`Type: `), a(`code`, null, `Boolean`)]),
          a(`li`, null, [e(`Default: `), a(`code`, null, `false`)])
        ],
        -1
      )),
      (l[20] ||= a(
        `iframe`,
        {
          style: { height: `150px`, width: `100%` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/disabled.html`
        },
        null,
        -1
      )),
      (l[21] ||= s(
        `<h3 id="clearable" tabindex="-1"><a class="header-anchor" href="#clearable"><span>clearable</span></a></h3><p>Shows an icon button, that resets a value.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><h3 id="editable" tabindex="-1"><a class="header-anchor" href="#editable"><span>editable</span></a></h3><p>Whether DatePicker is editable, for type is <code>date</code> only.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><h3 id="rangeseparator" tabindex="-1"><a class="header-anchor" href="#rangeseparator"><span>rangeSeparator</span></a></h3><p>Separator symbol in the middle of the ranged types.</p><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;-&#39;</code></li></ul><h3 id="disabledvalues" tabindex="-1"><a class="header-anchor" href="#disabledvalues"><span>disabledValues</span></a></h3><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li></ul><p>The values that should be disabled for choosing. There are three fields:</p><ul><li><code>to</code> - disable all before this date</li><li><code>from</code> - disable all after this date</li><li><code>ranges</code> - array of dateranges, each daterange is object and MUST has <code>start</code> and <code>end</code> field.</li></ul><p>Any field is optional.</p><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QDatePickerPropDisabledValues <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QDatePickerPropDisabledValues <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span><span class="token punctuation">{</span>
  to<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  from<span class="token operator">?</span><span class="token operator">:</span> Date<span class="token punctuation">;</span>
  ranges<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    start<span class="token operator">:</span> Date<span class="token punctuation">;</span>
    end<span class="token operator">:</span> Date<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-date-picker</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:disabled-values</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>disabledValues<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><pre><code class="language-js"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> valueRanges <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// disable values due today</span>
    <span class="token keyword">const</span> disabledValues <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// disable range - tree days in two days from today</span>
    <span class="token keyword">const</span> disabledValuesRanges <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">ranges</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">48</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">120</span> <span class="token operator">*</span> <span class="token number">3600</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> value<span class="token punctuation">,</span> valueRanges<span class="token punctuation">,</span> disabledValues<span class="token punctuation">,</span> disabledValuesRanges <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>`,
        17
      )),
      (l[22] ||= a(
        `iframe`,
        {
          style: { height: `367px`, width: `769px` },
          scrolling: `no`,
          frameborder: `no`,
          src: `/QDatepicker/disabledValues.html`
        },
        null,
        -1
      )),
      (l[23] ||= s(
        `<h3 id="validateevent" tabindex="-1"><a class="header-anchor" href="#validateevent"><span>validateEvent</span></a></h3><ul><li>type <code>Boolean</code></li><li>default <code>false</code></li></ul><p>If <code>QDatePicker</code> wrapped in <code>QFormItem</code>, this prop defines if datepicker&#39;s input <code>change</code> event will be validated immediately</p><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h3><p>As native name for input</p><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;&#39;</code></li></ul><h3 id="teleportto" tabindex="-1"><a class="header-anchor" href="#teleportto"><span>teleportTo</span></a></h3><ul><li>Type <code>String, HTMLElement</code></li><li>Default: <code>null</code></li></ul><p>Specifies a target element where QDatePicker will be moved from original layout place. (has to be a valid query selector, or an HTMLElement).</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events"><span>Events</span></a></h2><h3 id="update-modelvalue" tabindex="-1"><a class="header-anchor" href="#update-modelvalue"><span>update:modelValue</span></a></h3><p>Triggers when model updates.</p><h3 id="change" tabindex="-1"><a class="header-anchor" href="#change"><span>change</span></a></h3><p>Alias for update:modelValue.</p><h3 id="focus" tabindex="-1"><a class="header-anchor" href="#focus"><span>focus</span></a></h3><p>Triggers when the QDatePicker gets focus</p><h3 id="input" tabindex="-1"><a class="header-anchor" href="#input"><span>input</span></a></h3><p>Triggers when native input event fires</p><h3 id="intermediatechange" tabindex="-1"><a class="header-anchor" href="#intermediatechange"><span>intermediateChange</span></a></h3><p>Triggers when start date in range picks</p><ul><li>For <code>daterange</code>, <code>monthrange</code>, <code>yearrange</code> types only</li></ul><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots"><span>Slots</span></a></h2><h3 id="range-separator" tabindex="-1"><a class="header-anchor" href="#range-separator"><span>range-separator</span></a></h3><p>Set any content as <code>rangeSeparator</code> by slot.</p>`,
        24
      ))
    ])
  );
}
var f = o(u, [[`render`, d]]);
export { l as _pageData, f as default };
