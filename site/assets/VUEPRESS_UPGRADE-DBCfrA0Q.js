import { l as e, m as t, r as n, u as r } from './app-CIsYDi5X.js';
var i = JSON.parse(
    `{"path":"/VUEPRESS_UPGRADE.html","title":"Playbook: обновление VuePress до 2 stable","lang":"ru-RU","frontmatter":{},"git":{"updatedTime":1781286081000,"contributors":[{"name":"Alisultanov Shamil","email":"Shamil.Alisultanov@transitcard.ru","commits":1}]},"filePathRelative":"VUEPRESS_UPGRADE.md"}`
  ),
  a = { name: `VUEPRESS_UPGRADE.md` };
function o(n, i, a, o, s, c) {
  return (
    t(),
    e(`div`, null, [
      ...(i[0] ||= [
        r(
          `<h1 id="playbook-обновление-vuepress-до-2-stable" tabindex="-1"><a class="header-anchor" href="#playbook-обновление-vuepress-до-2-stable"><span>Playbook: обновление VuePress до 2 stable</span></a></h1><h2 id="перед-обновлением" tabindex="-1"><a class="header-anchor" href="#перед-обновлением"><span>Перед обновлением</span></a></h2><ol><li>Зафиксировать текущие версии в <code>vuepress-docs/package.json</code> и <code>resolutions</code>.</li><li>Прочитать changelog VuePress 2 stable и <code>@vuepress/theme-default</code>.</li><li>Убедиться, что smoke-check из <code>docs/.vuepress/patches/PATCH_AUDIT.md</code> проходит на текущей версии.</li></ol><h2 id="шаги-обновления" tabindex="-1"><a class="header-anchor" href="#шаги-обновления"><span>Шаги обновления</span></a></h2><h3 id="_1-синхронныи-bump-пакетов" tabindex="-1"><a class="header-anchor" href="#_1-синхронныи-bump-пакетов"><span>1. Синхронный bump пакетов</span></a></h3><p>Обновить одной версией (пример):</p><ul><li><code>vuepress</code></li><li><code>@vuepress/bundler-vite</code></li><li><code>@vuepress/theme-default</code></li><li>все записи в <code>resolutions</code> с префиксом <code>@vuepress/</code></li></ul><pre><code class="language-bash"><span class="token builtin class-name">cd</span> vuepress-docs
<span class="token function">yarn</span> <span class="token function">install</span>
</code></pre><h3 id="_2-патч-theme-default" tabindex="-1"><a class="header-anchor" href="#_2-патч-theme-default"><span>2. Патч theme-default</span></a></h3><pre><code class="language-bash"><span class="token comment"># Если patch-package падает — патч устарел</span>
<span class="token function">yarn</span> <span class="token function">install</span>

<span class="token comment"># Сверить upstream useSidebarItems с docs/.vuepress/patches/useSidebarItems.js</span>
<span class="token comment"># При необходимости обновить исходник и пересоздать:</span>
<span class="token function">cp</span> docs/.vuepress/patches/useSidebarItems.js <span class="token punctuation">\\</span>
  node_modules/@vuepress/theme-default/lib/client/composables/useSidebarItems.js
npx patch-package @vuepress/theme-default
</code></pre><p>Если upstream включил все изменения из <code>PATCH_AUDIT.md</code> — удалить патч и <code>postinstall</code>.</p><h3 id="_3-проверка-alias-лендинга" tabindex="-1"><a class="header-anchor" href="#_3-проверка-alias-лендинга"><span>3. Проверка alias лендинга</span></a></h3><p>В <code>docs/.vuepress/config.ts</code>:</p><pre><code class="language-ts">alias<span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">&#39;@theme/Home.vue&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>configDir<span class="token punctuation">,</span> <span class="token string">&#39;components/CustomHome.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><p>Убедиться, что API темы для Home layout не изменился.</p><h3 id="_4-сборка-и-smoke-check" tabindex="-1"><a class="header-anchor" href="#_4-сборка-и-smoke-check"><span>4. Сборка и smoke-check</span></a></h3><pre><code class="language-bash"><span class="token function">yarn</span> docs:build
<span class="token function">yarn</span> docs:dev
</code></pre><table><thead><tr><th>Страница</th><th>Ожидание</th></tr></thead><tbody><tr><td><code>/</code></td><td>Кастомный лендинг, sidebar скрыт</td></tr><tr><td><code>/guide/getting-started</code></td><td>Документация, sidebar работает</td></tr><tr><td><code>/components/QButton.html</code></td><td>Sidebar с заголовками страницы</td></tr></tbody></table><h3 id="_5-bundle-analysis-опционально" tabindex="-1"><a class="header-anchor" href="#_5-bundle-analysis-опционально"><span>5. Bundle analysis (опционально)</span></a></h3><pre><code class="language-bash"><span class="token function">yarn</span> docs:analyze
</code></pre><p>Сравнить размер landing chunk с предыдущим релизом.</p><h2 id="откат" tabindex="-1"><a class="header-anchor" href="#откат"><span>Откат</span></a></h2><pre><code class="language-bash"><span class="token function">git</span> checkout -- package.json yarn.lock patches/
<span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> docs:build
</code></pre><h2 id="критерии-успеха" tabindex="-1"><a class="header-anchor" href="#критерии-успеха"><span>Критерии успеха</span></a></h2><ul><li><code>patch-package</code> применяется без ошибок (или патч удалён осознанно)</li><li><code>docs:build</code> завершается успешно</li><li>Лендинг и sidebar ведут себя как до обновления</li><li>Нет регрессий в navbar и ссылках без <code>.html</code> (cleanUrls)</li></ul>`,
          25
        )
      ])
    ])
  );
}
var s = n(a, [[`render`, o]]);
export { i as _pageData, s as default };
