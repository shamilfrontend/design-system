# Design System Docs (VuePress)

Документация и кастомный лендинг Design System.

## Разработка

```bash
cd vuepress-docs
yarn install   # postinstall применяет patch-package
yarn docs:dev    # перед запуском копирует dist в public/design-system для iframe-демо
yarn docs:build
```

Перед `docs:dev` / `docs:build` автоматически выполняется `scripts/prepare-docs-demos.mjs`:
собирает библиотеку (если нет `dist/`) и копирует её в `docs/.vuepress/public/design-system/`.
Iframe-примеры компонентов подключают стили и UMD-бандл оттуда.

Node.js: см. `.nvmrc` в корне репозитория.

## Патчи theme-default

Sidebar и главная страница зависят от патча `@vuepress/theme-default`.
Подробный аудит отличий: [`docs/.vuepress/patches/PATCH_AUDIT.md`](docs/.vuepress/patches/PATCH_AUDIT.md).

### Обновление `@vuepress/theme-default`

1. Обновить версию в `package.json` и `resolutions` (синхронно с `vuepress`, `@vuepress/bundler-vite`).
2. `yarn install`
3. Если `patch-package` падает — сверить upstream `useSidebarItems.js` с
   `docs/.vuepress/patches/useSidebarItems.js` и `PATCH_AUDIT.md`.
4. Скопировать актуальный патч в `node_modules/.../useSidebarItems.js` и пересоздать diff:

```bash
npx patch-package @vuepress/theme-default
```

5. Прогнать smoke-check из `PATCH_AUDIT.md`.

Исходник патча (для ревью): `docs/.vuepress/patches/useSidebarItems.js`.

## Лендинг

- Точка входа: alias `@theme/Home.vue` → `CustomHome.vue`
- Данные: `docs/.vuepress/data/landing/`
- Стили: `docs/.vuepress/styles/landing/`

## Анализ бандла

```bash
yarn docs:analyze
```

Отчёт: `docs/.vuepress/dist/stats.html` (после сборки с `rollup-plugin-visualizer`).

## Обновление до VuePress 2 stable

См. [`docs/VUEPRESS_UPGRADE.md`](docs/VUEPRESS_UPGRADE.md).
