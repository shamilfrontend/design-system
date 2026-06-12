# Аудит патча `useSidebarItems.js`

Версия: `@vuepress/theme-default@2.0.0-rc.30`

Патч применяется через `patch-package` (`patches/@vuepress+theme-default+2.0.0-rc.30.patch`).
Исходник для ревью: `docs/.vuepress/patches/useSidebarItems.js`.

## Отличия от upstream и зачем они нужны

### 1. `frontmatter.home → return []`

**Upstream:** уже есть в rc.30.

**Статус:** критично для кастомного лендинга (`home: true` в `docs/README.md`).
Без пустого sidebar на главной отображается auto-sidebar.

**При обновлении:** проверить, что upstream сохраняет это поведение.

### 2. `page.headers ?? []` (null-safety)

**Upstream:** `page.headers` без fallback в `resolveAutoSidebarItems` и `resolveArraySidebarItems`.

**Зачем:** страницы без markdown-заголовков не должны падать при построении sidebar.

**При обновлении:** если upstream добавит `?? []`, строку можно удалить из патча.

### 3. `headersToSidebarItemChildren`: `sidebarDepth > 0 && headers`

**Upstream:** `sidebarDepth > 0` без проверки `headers`.

**Зачем:** защита от `undefined` при вызове `.map()`.

**При обновлении:** удалить, если upstream добавит guard.

### 4. `resolveArraySidebarItems` — заголовки текущей страницы в sidebar

**Upstream:** та же логика для `childItem.link === path`.

**Зачем:** при конфиге navbar/sidebar как массив путей (`/components/QButton.md`)
на активной странице в sidebar появляются h2/h3 как children.

**При обновлении:** сверить с upstream; при совпадении — убрать дублирование.

### 5. Абсолютные импорты `@vuepress/theme-default/lib/...`

**Upstream:** относительные импорты (`../utils/`, `./useThemeData.js`).

**Зачем:** файл патча живёт вне пакета theme-default; относительные пути не работают
при копировании как standalone-исходник.

**При обновлении:** оставить, пока патч существует.

## Smoke-check после обновления theme

1. `yarn install` — патч применился без ошибок
2. `yarn docs:build` — сборка без ошибок
3. Главная `/` — sidebar скрыт
4. `/components/QButton.html` — sidebar содержит заголовки страницы
