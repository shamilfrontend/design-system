import { l as e, m as t, o as n, r, u as i } from './app-CIsYDi5X.js';
var a = JSON.parse(
    `{"path":"/components/QForm.html","title":"QForm ✉️","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":4}]},"filePathRelative":"components/QForm.md"}`
  ),
  o = { name: `QForm.md` };
function s(r, a, o, s, c, l) {
  return (
    t(),
    e(`div`, null, [
      ...(a[0] ||= [
        i(
          `<h1 id="qform-✉️" tabindex="-1"><a class="header-anchor" href="#qform-✉️"><span>QForm ✉️</span></a></h1><p><code>QForm</code> keeps the form model, manages validation rules and provides context to form elements.</p><h2 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to use</span></a></h2><ul><li>When you need to manage several controls (inputs, selects, pickers etc.)</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Default view:</p>`,
          6
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `340px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/main.html`
          },
          null,
          -1
        ),
        i(
          `<p>Using in template:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form-item</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Intro<span class="token punctuation">&quot;</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>intro<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel.intro<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form-item</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleSubmitClick<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Create<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleResetClick<span class="token punctuation">&quot;</span></span> <span class="token attr-name">theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Reset<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Using in component instance:</p><pre><code class="language-js"><span class="token keyword">const</span> model <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Length should be 3 to 10&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Please input introtext&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>rules<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleSubmitClick</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> valid <span class="token operator">=</span> <span class="token keyword">await</span> form<span class="token operator">?.</span>value<span class="token operator">?.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> isValid<span class="token punctuation">,</span> invalidFields <span class="token punctuation">}</span> <span class="token operator">=</span> valid<span class="token punctuation">;</span>

        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;QForm | validate&#39;</span><span class="token punctuation">,</span> isValid<span class="token punctuation">,</span> invalidFields<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// eslint-disable-next-line no-alert</span>
          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;Success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token function-variable function">handleResetClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      form<span class="token operator">?.</span>value<span class="token operator">?.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> handleRule <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      rules<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Please input name&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      form<span class="token punctuation">,</span>
      formModel<span class="token punctuation">,</span>
      rules<span class="token punctuation">,</span>
      handleSubmitClick<span class="token punctuation">,</span>
      handleResetClick<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model"><span>model</span></a></h3><p>The binding value. Pass the model as an obect with reactive state, see the code example above.</p><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-ts"><span class="token comment">// model example</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  intro<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QFormPropModel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QFormPropModel <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre><h3 id="rules" tabindex="-1"><a class="header-anchor" href="#rules"><span>rules</span></a></h3><p>The validation rules of the form. We use <code>async-validator</code>, check <a href="https://github.com/yiminghe/async-validator#rules" target="_blank" rel="noopener noreferrer">it</a> out.</p><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-js"><span class="token comment">// rules example</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> rules <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">min</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">max</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Length should be 3 to 10&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Please input introtext&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;change&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Types:</p><pre><code class="language-ts"><span class="token comment">// import type from lib</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> QFormPropRules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// TS type</span>
<span class="token class-name"><span class="token keyword">type</span></span> QFormPropRules <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> QFormItemPropRules<span class="token operator">&gt;&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">QFormItemPropRules</span> <span class="token operator">=</span> Nullable<span class="token operator">&lt;</span>
  FilteredRuleItem <span class="token operator">|</span> FilteredRuleItem<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">FilteredRuleItem</span> <span class="token keyword">extends</span> <span class="token class-name">RuleItem</span> <span class="token punctuation">{</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> Nullable<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RuleItem</span> <span class="token punctuation">{</span>
    type<span class="token operator">?</span><span class="token operator">:</span> RuleType<span class="token punctuation">;</span>
    required<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    pattern<span class="token operator">?</span><span class="token operator">:</span> RegExp <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    min<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    max<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    len<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">enum</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    whitespace<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    fields<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> Rule<span class="token operator">&gt;</span><span class="token punctuation">;</span>
    options<span class="token operator">?</span><span class="token operator">:</span> ValidateOption<span class="token punctuation">;</span>
    defaultField<span class="token operator">?</span><span class="token operator">:</span> Rule<span class="token punctuation">;</span>
    transform<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> Value<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Value<span class="token punctuation">;</span>
    message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>a<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    asyncValidator<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>rule<span class="token operator">:</span> InternalRuleItem<span class="token punctuation">,</span> value<span class="token operator">:</span> Value<span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> source<span class="token operator">:</span> Values<span class="token punctuation">,</span> options<span class="token operator">:</span> ValidateOption<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span> <span class="token operator">|</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
    validator<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>rule<span class="token operator">:</span> InternalRuleItem<span class="token punctuation">,</span> value<span class="token operator">:</span> Value<span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Error<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span> source<span class="token operator">:</span> Values<span class="token punctuation">,</span> options<span class="token operator">:</span> ValidateOption<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> SyncValidateResult <span class="token operator">|</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">...</span>
</code></pre><p>All nested types <a href="https://github.com/shamilfrontend/design-system/blob/main/src/qComponents/QFormItem/src/types.ts" target="_blank" rel="noopener noreferrer">here</a></p><h3 id="disabled" tabindex="-1"><a class="header-anchor" href="#disabled"><span>disabled</span></a></h3><p>Whether are all components in this form disabled. If set to true, it cannot be overridden by its inner components <code>disabled</code> prop.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><p><code>disabled</code> affects on all form controls.</p>`,
          21
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `340px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/disabled.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="hiderequiredasterisk" tabindex="-1"><a class="header-anchor" href="#hiderequiredasterisk"><span>hideRequiredAsterisk</span></a></h3><p>Whether required fields should have a red asterisk (star) beside their labels.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:rules</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rules<span class="token punctuation">&quot;</span></span> <span class="token attr-name">hide-required-asterisk</span><span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="showerrormessage" tabindex="-1"><a class="header-anchor" href="#showerrormessage"><span>showErrorMessage</span></a></h3><p>Whether to show the error message.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>false</code></li></ul><h3 id="validateonrulechange" tabindex="-1"><a class="header-anchor" href="#validateonrulechange"><span>validateOnRuleChange</span></a></h3><p>Whether to trigger validation when the <code>rules</code> prop is changed.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><h2 id="slot" tabindex="-1"><a class="header-anchor" href="#slot"><span>Slot</span></a></h2><p>Only default slot is existed. Put the form content inside.</p><h2 id="qformitem-🌯" tabindex="-1"><a class="header-anchor" href="#qformitem-🌯"><span>QFormItem 🌯</span></a></h2><p><code>QFormItem</code> is being used as additional component to wrap each form element (input, select, checkbox etc.) to control the validation. Also, it&#39;s included the <code>&lt;label&gt;</code> and styles rules for inner elements.</p><h2 id="qformitem-props" tabindex="-1"><a class="header-anchor" href="#qformitem-props"><span>QFormItem props</span></a></h2><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for"><span>for</span></a></h3><p>As native <code>for</code> <code>&lt;label&gt;</code> attribute.</p><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><h3 id="prop" tabindex="-1"><a class="header-anchor" href="#prop"><span>prop</span></a></h3><p>A key of QForm&#39;s model. Used to connect a field value with validation methods.</p><ul><li>Type : <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue">...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
</code></pre><pre><code class="language-js"><span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">intro</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label"><span>label</span></a></h3><p>A form item&#39;s label.</p><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue">...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
</code></pre><h3 id="labelsize" tabindex="-1"><a class="header-anchor" href="#labelsize"><span>labelSize</span></a></h3><p>Defines the size of the form item&#39;s label.</p><ul><li>Type: <code>&#39;regular&#39;</code> | <code>&#39;small&#39;</code></li><li>Default: <code>&#39;regular&#39;</code></li></ul><pre><code class="language-vue">...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Small label<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>small<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span>
  <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Regular label<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">label-size</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>regular<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
...
</code></pre>`,
          31
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `220px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/[QFormItem]labelSize.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="sublabel" tabindex="-1"><a class="header-anchor" href="#sublabel"><span>sublabel</span></a></h3><p>The sublabel is similar to <code>label</code>, but on the right side ans smaller.</p><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue">...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">sublabel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
</code></pre>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `120px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/[QFormItem]sublabel.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h3><p>Field error message, set the value and the field will validate error and show this message immediately</p><ul><li>Type: <code>String</code></li><li>Default: <code>null</code></li></ul><pre><code class="language-vue">...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:error</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
...
</code></pre>`,
          4
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `180px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/[QFormItem]error.html`
          },
          null,
          -1
        ),
        i(
          `<h3 id="rules-1" tabindex="-1"><a class="header-anchor" href="#rules-1"><span>rules</span></a></h3><p>The same as <a href="/components/QForm.html#rules" target="_blank" rel="noopener noreferrer">QForm rules</a>.</p><h3 id="showerrormessage-1" tabindex="-1"><a class="header-anchor" href="#showerrormessage-1"><span>showErrorMessage</span></a></h3><p>Whether to show the error message after validation.</p><ul><li>Type: <code>Boolean</code></li><li>Default: <code>true</code></li></ul><h2 id="qformitem-slots" tabindex="-1"><a class="header-anchor" href="#qformitem-slots"><span>QFormItem slots</span></a></h2><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default"><span>default</span></a></h3><p>Put content inside form item&#39;s body.</p><h3 id="label-1" tabindex="-1"><a class="header-anchor" href="#label-1"><span>label</span></a></h3><p>Put your custom content as a label.</p><h3 id="sublabel-1" tabindex="-1"><a class="header-anchor" href="#sublabel-1"><span>sublabel</span></a></h3><p>Put your custom content as a sublabel.</p><h3 id="error-1" tabindex="-1"><a class="header-anchor" href="#error-1"><span>error</span></a></h3><p>Put your custom content as an error.</p><p>Examples:</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-form-item</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>label</span><span class="token punctuation">&gt;</span></span>
    label slot
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>sublabel</span><span class="token punctuation">&gt;</span></span>
    sublabel slot
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>error</span><span class="token punctuation">&gt;</span></span>
    error slot
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel.name<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre>`,
          16
        ),
        n(
          `iframe`,
          {
            style: { width: `100%`, height: `140px` },
            scrolling: `no`,
            frameborder: `no`,
            src: `/QForm/[QFormItem]slots.html`
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
