# Design System — UI library for Web

<p align="center">
  <img src="https://img.shields.io/badge/vue-3.x-brightgreen" alt="Vue 3">
  <img alt="npm type definitions" src="https://img.shields.io/npm/types/@shamilfrontend/design-system">
  <a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" alt="Storybook"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@shamilfrontend/design-system?color=brightgreen">
  <a href="https://www.npmjs.com/package/@shamilfrontend/design-system" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@shamilfrontend/design-system.svg" alt="NPM version" /></a>
  <a href="https://www.npmjs.com/package/@shamilfrontend/design-system" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@shamilfrontend/design-system.svg" alt="NPM downloads" /></a>
</p>

Библиотека Vue 3-компонентов на TypeScript с Composition API для быстрой сборки интерфейсов.

- 🔩 60+ компонентов
- 🔥 Composition API
- 🔑 TypeScript
- 📦 набор иконок
- 📚 Storybook и документация

📚 [Документация](https://shamilfrontend.github.io/design-system/) · 🏓 [Storybook](https://shamilfrontend.github.io/design-system/storybook/) · локально: `yarn storybook` (http://localhost:6006)

## Установка

```bash
npm install @shamilfrontend/design-system

# или
yarn add @shamilfrontend/design-system
```

**Требования:** Vue `^3.5.0`, Node.js `>=22`.

## Быстрый старт

Подключите всю библиотеку целиком:

```js
import { createApp } from 'vue';
import DesignSystem from '@shamilfrontend/design-system';
import '@shamilfrontend/design-system/styles';

import AppComponent from '@/App.vue';

const app = createApp(AppComponent);

app.use(DesignSystem);
app.mount('#app');
```

Пример использования компонента:

```vue
<template>
  <q-input v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## Выборочное подключение

Импортируйте только нужные компоненты и стили, чтобы уменьшить размер бандла:

```js
import { createApp } from 'vue';
import {
  createDesignSystem,
  QButton,
  QProgressIndicatior,
  localeRu
} from '@shamilfrontend/design-system';

import '@shamilfrontend/design-system/css/main';
import '@shamilfrontend/design-system/fonts';
import '@shamilfrontend/design-system/icons';
import '@shamilfrontend/design-system/css/q-button';
import '@shamilfrontend/design-system/css/q-progress-indicatior';

const app = createApp(App);

const designSystem = createDesignSystem({
  localization: {
    locale: 'ru',
    messages: {
      ru: {
        ...localeRu,
        QDatepicker: {
          placeholder: 'Выберите дату рождения'
        }
      }
    },
    zIndexCounter: 3000
  }
});

app.use(designSystem);
app.use(QButton);
app.use(QProgressIndicatior, {
  trickle: true,
  trickleSpeed: 200,
  stackable: true
});

app.mount('#app');
```

Дополнительные настройки:

- импортируйте стили отдельно, чтобы не тянуть лишний CSS;
- задайте `localization.messages` для своих переводов;
- измените `zIndexCounter` для оверлеев (диалоги, уведомления, выпадающие списки);
- передавайте опции при регистрации отдельных плагинов.

## Локализация

Из коробки доступны:

- русский (`ru`)
- английский (`en`)

Свои тексты можно задать через `localization.messages` в `createDesignSystem`. Примеры — в `src/components/constants/locales`.

## Nuxt 3

Создайте плагин:

```ts
// plugins/design-system.ts
import { defineNuxtPlugin } from '#imports';
import DesignSystem from '@shamilfrontend/design-system';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(DesignSystem);
});
```

Добавьте в `nuxt.config.ts`:

```ts
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  css: ['@shamilfrontend/design-system/styles'],
  build: {
    transpile: ['@shamilfrontend/design-system']
  }
});
```

## Поддержка браузеров

Библиотека рассчитана на современные evergreen-браузеры. **Internet Explorer и Legacy Edge не поддерживаются.**

### Минимальные версии

| Браузер         | Версия       |
| --------------- | ------------ |
| Chrome          | 80+          |
| Edge (Chromium) | 80+          |
| Firefox         | 78+          |
| Safari (macOS)  | 14+          |
| Safari (iOS)    | 14+          |
| Opera           | 67+          |
| Яндекс.Браузер  | Chromium 80+ |

Ограничения: Vue 3.5 (`Proxy`), сборка ES2020, `ResizeObserver` в хуках и компонентах.

### Рекомендуется для продакшена

Последние 2 версии основных браузеров: Chrome / Edge 90+, Firefox 90+, Safari / iOS Safari 15+.

### Для старых браузеров

Сборка не понижает синтаксис до ES5. Если нужна поддержка более старых окружений, транспилируйте `@shamilfrontend/design-system` на стороне приложения (Babel, `build.transpile` в Nuxt, `build.target` в Vite).

## Разработка

```bash
git clone https://github.com/shamilfrontend/design-system.git
cd design-system
yarn install
yarn storybook   # http://localhost:6006
yarn build       # сборка библиотеки
yarn test        # тесты
yarn type-check  # проверка типов
```

## Лицензия

[MIT](LICENSE) © [ShamilFrontend](https://github.com/shamilfrontend)

## Благодарности

Данная дизайн-система основана на [Qui-Max](https://github.com/altai-ui/qui-max) — открытой библиотеке Vue 3-компонентов.

Благодарим команду QuiMax (где я работал) за проделанную работу, архитектуру и вклад в развитие экосистемы Vue.
