import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/guide/tokens.html","title":"Токены","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781356598000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"guide/tokens.md"}`
  ),
  a = { name: `tokens.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="токены" tabindex="-1"><a class="header-anchor" href="#токены"><span>Токены</span></a></h1><p>Базовые design tokens находятся в <a href="https://github.com/shamilfrontend/design-system/blob/main/src/vars.scss" target="_blank" rel="noopener noreferrer"><code>src/vars.scss</code></a>.</p><h2 id="радиусы" tabindex="-1"><a class="header-anchor" href="#радиусы"><span>Радиусы</span></a></h2><ul><li><code>--border-radius-base</code>: 6px</li><li><code>--border-radius-lg</code>: 8px</li></ul><h2 id="типографика" tabindex="-1"><a class="header-anchor" href="#типографика"><span>Типографика</span></a></h2><ul><li><code>--font-size-base</code>: 14px</li><li><code>--line-height-base</code>: 22px</li><li><code>--font-weight-base</code>: 400</li><li><code>--font-weight-medium</code>: 500</li><li><code>--font-weight-bold</code>: 600</li></ul><p>Шрифт: <strong>Urbanist</strong> (подключается через <code>@shamilfrontend/design-system/fonts</code>).</p><h2 id="layout" tabindex="-1"><a class="header-anchor" href="#layout"><span>Layout</span></a></h2><ul><li><code>--layout-gutter</code>: 32px</li></ul><h2 id="анимации" tabindex="-1"><a class="header-anchor" href="#анимации"><span>Анимации</span></a></h2><ul><li><code>--transition-spline-base</code>: cubic-bezier(0.645, 0.045, 0.355, 1)</li></ul><h2 id="подключение" tabindex="-1"><a class="header-anchor" href="#подключение"><span>Подключение</span></a></h2><pre><code class="language-js"><span class="token keyword">import</span> <span class="token string">&#39;@shamilfrontend/design-system/styles&#39;</span><span class="token punctuation">;</span>
</code></pre>`,
          13
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
