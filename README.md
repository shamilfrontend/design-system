<p align="center">
  <img src="/.readme-assets/qui-logo.svg?raw=true" />
</p>

<p align="center" class="unchanged rich-diff-level-one">
  <img src="https://img.shields.io/badge/vue-3.x-brightgreen">
  <img alt="npm type definitions" src="https://img.shields.io/npm/types/@shamilfrontend/design-system">
  <a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@shamilfrontend/design-system?color=brightgreen">
  <span class="badge-npmversion"><a href="https://www.npmjs.com/package/@shamilfrontend/design-system" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@shamilfrontend/design-system.svg" alt="NPM version" /></a></span>
  <span class="badge-npmdownloads"><a href="https://www.npmjs.com/package/@shamilfrontend/design-system" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@shamilfrontend/design-system.svg" alt="NPM downloads" /></a></span>
</p>

<p align="center" class="unchanged rich-diff-level-one">

# Design System — Neumorphic UI library for Web

Written in TypeScript with Composition API 🔥

A component's library helping us build great products for our customers.
This library for Vue 3.x

🏓 [Storybook (live demo)](https://github.com/shamilfrontend/design-system)

📚 [Documentation (New!)](https://github.com/shamilfrontend/design-system/)

Qui for Vue 2.x is [here](https://github.com/Qvant-lab/qui)!

What is it?

- 🔩 30+ Vue 3 components
- 🔥 Fully written with Composition API
- 🔑 Typescript
- 📦 icons pack
- 🏳️‍🌈 colors & grid
- 🥷 neumorphism styles
- 📚 storybook sandbox

Some examples below:

![buttons](/.readme-assets/buttons.jpg?raw=true)
![inputs](/.readme-assets/inputs.gif?raw=true)
![icons](/.readme-assets/icons.gif?raw=true)
![tables](/.readme-assets/tables.jpg?raw=true)
![other](/.readme-assets/other.jpg?raw=true)

## Install

```bash
npm install @shamilfrontend/design-system -S
yarn add @shamilfrontend/design-system
```

You can import Qui entirely, or just import what you need. Let's start with fully import.

## Quick setup

In main.js:

```js
import { createApp } from 'vue';
import DesignSystem from '@shamilfrontend/design-system';
import '@shamilfrontend/design-system/styles';

const app = createApp(App);
// Setup all components
app.use(DesignSystem);
// that's it! All components will be imported with styles
```

in YourComponent.vue: (Example)

```vue
<template>
  <q-input v-model="value" />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    return { value };
  }
};
</script>
```

## Configure setup:

- import styles separately to avoid unused css
- set `localization.messages` to support any language for components
- change zIndex of appeared components (e.g Dialogs, Notifications, Dropdowns etc.)
- control setup of components

In main.js:

```js
import { createApp } from 'vue';
import {
  createDesignSystem,
  QButton,
  QProgressIndicatior,
  // import default messages for different locales
  localeRu
} from '@shamilfrontend/design-system';

// import required styles
import '@shamilfrontend/design-system/css/main';
import '@shamilfrontend/design-system/fonts';
import '@shamilfrontend/design-system/icons';

// import the only styles of component you gonna use
import '@shamilfrontend/design-system/css/q-button';
import '@shamilfrontend/design-system/css/q-progress-indicatior';

const designSystem = createDesignSystem({
  localization: {
    // English language by default, but we have two more locales out-of-the-box: 'ru' | 'zh'
    // set 'ru' - for Russian, set 'zh' - for Chinese
    locale: 'ru',
    messages: {
      ru: {
        // import and merge default messages for different locale
        ...localeRu,
        // rewrite default texts, see the source: src/qComponents/constants/locales or set your custom messages
        QDatepicker: {
          placeholder: 'Выберите дату рождения'
        }
      }
    },
    // zIndexCounter is being used by some components (e.g QPopover, QSelect, QDialog ...etc)
    // 2000 by default
    zIndexCounter: 3000
  }
});

app.use(DesignSystem);
app.use(QButton);
app.use(QProgressIndicatior, {
  trickle: true,
  trickleSpeed: 200,
  stackable: true
});
```

Now you have implemented Vue and Design System to your project, and it's time to write your code.
Please refer to each component's [Stories](https://github.com/shamilfrontend/design-system) to learn how to use them.

## Supported languages

- Russian ✅
- English ✅
- Also you can use any language by setting texts for components via `localization.messages` property in the Qui instance. See the example above.

## Using with Nuxt 3

Create a file in your plugins folder:

```ts
// plugins/design-system.ts
import { defineNuxtPlugin } from '#imports';
import DesignSystem from '@shamilfrontend/design-system';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(DesignSystem);
});
```

Add configuration to your `nuxt.config.ts` file:

```ts
import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  css: ['@shamilfrontend/design-system/styles'],
  build: {
    transpile: ['@shamilfrontend/design-system']
  }
});
```

## Browser Support

Modern browsers are recomended:

- safari: >11
- chrome: >=61
- firefox: >=58
- opera: >=62
- edge: >=16
- yandex: >=18

## Development

Clone repository and run storybook

```bash
yarn storybook
npm run storybook
```

## LICENSE

MIT
