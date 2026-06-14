import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/guide/colors.html","title":"Цвета","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781356598000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"guide/colors.md"}`
  ),
  a = { name: `colors.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="цвета" tabindex="-1"><a class="header-anchor" href="#цвета"><span>Цвета</span></a></h1><p>Палитра дизайн-системы определена в <code>src/vars.scss</code> как CSS custom properties.</p><h2 id="primary" tabindex="-1"><a class="header-anchor" href="#primary"><span>Primary</span></a></h2><table><thead><tr><th>Токен</th><th>Значение</th></tr></thead><tbody><tr><td><code>--color-primary</code></td><td>#7367f0</td></tr><tr><td><code>--color-primary-light</code></td><td>#9e95f5</td></tr><tr><td><code>--color-primary-lighter</code></td><td>rgb(115 103 240 / 12%)</td></tr><tr><td><code>--color-primary-darker</code></td><td>#5e50ee</td></tr></tbody></table><h2 id="semantic" tabindex="-1"><a class="header-anchor" href="#semantic"><span>Semantic</span></a></h2><table><thead><tr><th>Токен</th><th>Назначение</th></tr></thead><tbody><tr><td><code>--color-success</code></td><td>Успех</td></tr><tr><td><code>--color-danger</code></td><td>Ошибка</td></tr><tr><td><code>--color-warning</code></td><td>Предупреждение</td></tr><tr><td><code>--color-info</code></td><td>Информация</td></tr><tr><td><code>--color-secondary</code></td><td>Вторичный акцент</td></tr></tbody></table><h2 id="surface-text" tabindex="-1"><a class="header-anchor" href="#surface-text"><span>Surface &amp; Text</span></a></h2><ul><li>Surface: <code>--color-tertiary-white</code>, <code>--color-tertiary-gray-*</code></li><li>Text: <code>--color-text-heading</code>, <code>--color-text-regular</code>, <code>--color-text-muted</code></li><li>Border: <code>--color-border</code></li></ul><h2 id="темная-тема" tabindex="-1"><a class="header-anchor" href="#темная-тема"><span>Тёмная тема</span></a></h2><p>Установите <code>data-theme=&quot;dark&quot;</code> на <code>&lt;html&gt;</code> для переключения токенов поверхности и текста.</p>`,
          10
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
