import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/guide/theming.html","title":"Темизация","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781356598000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"guide/theming.md"}`
  ),
  a = { name: `theming.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="темизация" tabindex="-1"><a class="header-anchor" href="#темизация"><span>Темизация</span></a></h1><p>Design System поддерживает светлую и тёмную тему через CSS custom properties в <a href="https://github.com/shamilfrontend/design-system/blob/main/src/vars.scss" target="_blank" rel="noopener noreferrer"><code>vars.scss</code></a>.</p><h2 id="переключение-темы" tabindex="-1"><a class="header-anchor" href="#переключение-темы"><span>Переключение темы</span></a></h2><p>Установите атрибут <code>data-theme</code> на элемент <code>&lt;html&gt;</code>:</p><pre><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">data-theme</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><p>Доступные значения:</p><ul><li><code>light</code> (по умолчанию, если атрибут не задан)</li><li><code>dark</code></li></ul><h2 id="composable-usetheme" tabindex="-1"><a class="header-anchor" href="#composable-usetheme"><span>Composable useTheme</span></a></h2><p>Пример для приложения-потребителя:</p><pre><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">Theme</span> <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">THEME_KEY</span> <span class="token operator">=</span> <span class="token string">&#39;ds-theme&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">useTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>Theme<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token constant">THEME_KEY</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Theme<span class="token punctuation">)</span> <span class="token operator">??</span> <span class="token string">&#39;light&#39;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">applyTheme</span><span class="token punctuation">(</span>value<span class="token operator">:</span> Theme<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;data-theme&#39;</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token constant">THEME_KEY</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">function</span> <span class="token function">toggleTheme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    theme<span class="token punctuation">.</span>value <span class="token operator">=</span> theme<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;dark&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;light&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function">watch</span><span class="token punctuation">(</span>theme<span class="token punctuation">,</span> applyTheme<span class="token punctuation">,</span> <span class="token punctuation">{</span> immediate<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> theme<span class="token punctuation">,</span> toggleTheme <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><h2 id="токены-зависящие-от-темы" tabindex="-1"><a class="header-anchor" href="#токены-зависящие-от-темы"><span>Токены, зависящие от темы</span></a></h2><p>В тёмной теме переопределяются:</p><ul><li>Surface colors (<code>--color-tertiary-white</code>, <code>--color-tertiary-gray-*</code>)</li><li>Text colors (<code>--color-text-heading</code>, <code>--color-text-regular</code>, <code>--color-text-muted</code>)</li><li>Shadows (<code>--box-shadow-primary</code>, <code>--box-shadow-dropdown</code>, …)</li></ul><p>Подробнее: <a href="/guide/colors.html" target="_blank" rel="noopener noreferrer">Colors</a>, <a href="/guide/shadows.html" target="_blank" rel="noopener noreferrer">Shadows</a>, <a href="/guide/tokens.html" target="_blank" rel="noopener noreferrer">Tokens</a>.</p>`,
          14
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
