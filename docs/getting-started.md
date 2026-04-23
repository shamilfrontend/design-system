# Getting Started

## Install

```bash
yarn add @shamil/design-system
```

## Register plugin

```ts
import { createApp } from "vue";
import App from "./App.vue";
import { DesignSystemPlugin } from "@shamil/design-system";
import "@shamil/design-system/styles.css";

createApp(App).use(DesignSystemPlugin).mount("#app");
```

## Use components

```vue
<script setup lang="ts">
import { ref } from "vue";

const value = ref("");
</script>

<template>
  <DsInput v-model="value" />
  <DsButton label="Save" />
</template>
```
