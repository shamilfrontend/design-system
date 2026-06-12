# Playbook: обновление VuePress до 2 stable

## Перед обновлением

1. Зафиксировать текущие версии в `vuepress-docs/package.json` и `resolutions`.
2. Прочитать changelog VuePress 2 stable и `@vuepress/theme-default`.
3. Убедиться, что smoke-check из `docs/.vuepress/patches/PATCH_AUDIT.md` проходит на текущей версии.

## Шаги обновления

### 1. Синхронный bump пакетов

Обновить одной версией (пример):

- `vuepress`
- `@vuepress/bundler-vite`
- `@vuepress/theme-default`
- все записи в `resolutions` с префиксом `@vuepress/`

```bash
cd vuepress-docs
yarn install
```

### 2. Патч theme-default

```bash
# Если patch-package падает — патч устарел
yarn install

# Сверить upstream useSidebarItems с docs/.vuepress/patches/useSidebarItems.js
# При необходимости обновить исходник и пересоздать:
cp docs/.vuepress/patches/useSidebarItems.js \
  node_modules/@vuepress/theme-default/lib/client/composables/useSidebarItems.js
npx patch-package @vuepress/theme-default
```

Если upstream включил все изменения из `PATCH_AUDIT.md` — удалить патч и `postinstall`.

### 3. Проверка alias лендинга

В `docs/.vuepress/config.ts`:

```ts
alias: {
  '@theme/Home.vue': path.resolve(configDir, 'components/CustomHome.vue')
}
```

Убедиться, что API темы для Home layout не изменился.

### 4. Сборка и smoke-check

```bash
yarn docs:build
yarn docs:dev
```

| Страница | Ожидание |
|----------|----------|
| `/` | Кастомный лендинг, sidebar скрыт |
| `/guide/getting-started` | Документация, sidebar работает |
| `/components/QButton.html` | Sidebar с заголовками страницы |

### 5. Bundle analysis (опционально)

```bash
yarn docs:analyze
```

Сравнить размер landing chunk с предыдущим релизом.

## Откат

```bash
git checkout -- package.json yarn.lock patches/
yarn install
yarn docs:build
```

## Критерии успеха

- `patch-package` применяется без ошибок (или патч удалён осознанно)
- `docs:build` завершается успешно
- Лендинг и sidebar ведут себя как до обновления
- Нет регрессий в navbar и ссылках без `.html` (cleanUrls)
