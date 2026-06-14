import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/components/QText.html","title":"QText","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781356598000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"components/QText.md"}`
  ),
  a = { name: `QText.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="qtext" tabindex="-1"><a class="header-anchor" href="#qtext"><span>QText</span></a></h1><p>Typography: inline текст.</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3><ul><li>Type: <code>String</code></li><li>Default: <code>&#39;default&#39;</code></li><li>default | secondary | success | warning | danger</li></ul><h2 id="пример" tabindex="-1"><a class="header-anchor" href="#пример"><span>Пример</span></a></h2><pre><code class="language-vue"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>q-text</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>secondary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Muted text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>q-text</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> QText <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@shamilfrontend/design-system&#39;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="storybook" tabindex="-1"><a class="header-anchor" href="#storybook"><span>Storybook</span></a></h2><p>Интерактивные примеры: <code>Components/QText</code>.</p><h2 id="связанные-компоненты" tabindex="-1"><a class="header-anchor" href="#связанные-компоненты"><span>Связанные компоненты</span></a></h2><p>См. <a href="/components/QButton.html" target="_blank" rel="noopener noreferrer">QButton</a>.</p>`,
          11
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
