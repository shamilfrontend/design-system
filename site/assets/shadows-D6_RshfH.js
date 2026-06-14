import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/guide/shadows.html","title":"Тени","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781356598000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"guide/shadows.md"}`
  ),
  a = { name: `shadows.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="тени" tabindex="-1"><a class="header-anchor" href="#тени"><span>Тени</span></a></h1><p>Elevation-токены определены в <code>src/vars.scss</code>.</p><table><thead><tr><th>Токен</th><th>Использование</th></tr></thead><tbody><tr><td><code>--box-shadow-primary</code></td><td>Карточки, модальные окна</td></tr><tr><td><code>--box-shadow-secondary</code></td><td>Лёгкие элементы</td></tr><tr><td><code>--box-shadow-hover</code></td><td>Hover-состояния</td></tr><tr><td><code>--box-shadow-pressed</code></td><td>Active-состояния</td></tr><tr><td><code>--box-shadow-focus</code></td><td>Focus ring</td></tr><tr><td><code>--box-shadow-dropdown</code></td><td>Dropdown, popover, menu</td></tr><tr><td><code>--box-shadow-primary-button</code></td><td>Primary-кнопки</td></tr></tbody></table><p>Пример:</p><pre><code class="language-css"><span class="token selector">.my-card</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--box-shadow-primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>`,
          5
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
