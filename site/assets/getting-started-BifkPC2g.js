import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/guide/getting-started.html","title":"Getting Started","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781346462000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":3}]},"filePathRelative":"guide/getting-started.md"}`
  ),
  a = { name: `getting-started.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started"><span>Getting Started</span></a></h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>Install</span></a></h2><pre><code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @shamilfrontend/design-system <span class="token parameter variable">-S</span>
<span class="token function">yarn</span> <span class="token function">add</span> @shamilfrontend/design-system
</code></pre><p>You can import Design System entirely, or just import what you need. Let&#39;s start with fully import.</p><h2 id="quick-setup" tabindex="-1"><a class="header-anchor" href="#quick-setup"><span>Quick setup</span></a></h2><p>In main.js:</p><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DesignSystem <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/styles&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Setup all components</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DesignSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// that&#39;s it! All components will be imported with styles</span>
</code></pre><p>in YourComponent.vue: (Example)</p><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>value<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="configure-setup" tabindex="-1"><a class="header-anchor" href="#configure-setup"><span>Configure setup</span></a></h3><ul><li>import styles separately to avoid unused css</li><li>set <code>localization.messages</code> to support any language for components</li><li>change zIndex of appeared components (e.g Dialogs, Notifications, Dropdowns etc.)</li><li>control setup of components</li></ul><p>In main.js:</p><pre><code class="language-js"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  createDesignSystem<span class="token punctuation">,</span>
  QButton<span class="token punctuation">,</span>
  QProgressIndicatior
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// import required styles</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/css/main&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/fonts&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/icons&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// import the only styles of component you gonna use</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/css/q-button&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/css/q-progress-indicatior&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> designSystem <span class="token operator">=</span> <span class="token function">createDesignSystem</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">localization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// Russian language by default, you can set \`en\` for English</span>
    <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">messages</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">// rewrite default texts, see the source: src/qComponents/constants/locales</span>
      <span class="token literal-property property">en</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">QDatepicker</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Pick your birthday!&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// zIndexCounter is being used by some components (e.g QPopover, QSelect, QDialog ...etc)</span>
    <span class="token comment">// 2000 by default</span>
    <span class="token literal-property property">zIndexCounter</span><span class="token operator">:</span> <span class="token number">3000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>designSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>QButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>QProgressIndicatior<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">trickle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">trickleSpeed</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
  <span class="token literal-property property">stackable</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Now you have implemented Vue and Design System to your project, and it&#39;s time to write your code. Please refer to each component&#39;s <a href="https://github.com/shamilfrontend/design-system" target="_blank" rel="noopener noreferrer">Stories</a> to learn how to use them.</p><h2 id="supported-languages" tabindex="-1"><a class="header-anchor" href="#supported-languages"><span>Supported languages</span></a></h2><ul><li>Russian ✅</li><li>English ✅</li><li>Also you can use any language by setting texts for components via <code>localization.messages</code> property in the Design System instance. See the example above.</li></ul><h2 id="using-with-nuxt-3" tabindex="-1"><a class="header-anchor" href="#using-with-nuxt-3"><span>Using with Nuxt 3</span></a></h2><p>Create a file in your plugins folder:</p><pre><code class="language-ts"><span class="token comment">// plugins/design-system.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;#imports&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DesignSystem <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtPlugin</span><span class="token punctuation">(</span>nuxtApp <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  nuxtApp<span class="token punctuation">.</span>vueApp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DesignSystem<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>Add configuration to your <code>nuxt.config.ts</code> file:</p><pre><code class="language-ts"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;nuxt3&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  css<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@shamilfrontend/design-system/styles&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    transpile<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="browser-support" tabindex="-1"><a class="header-anchor" href="#browser-support"><span>Browser Support</span></a></h2><p>Modern browsers are recomended</p><ul><li>safari: &gt;11</li><li>chrome: &gt;=61</li><li>firefox: &gt;=58</li><li>opera: &gt;=62</li><li>edge: &gt;=16</li><li>yandex: &gt;=18</li></ul><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development"><span>Development</span></a></h2><p>Clone repository and run storybook</p><pre><code class="language-bash"><span class="token function">yarn</span> storybook
<span class="token function">npm</span> run storybook
</code></pre><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>LICENSE</span></a></h2><p>MIT</p>`,
          29
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
