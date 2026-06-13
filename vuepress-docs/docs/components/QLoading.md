# QLoading

Индикатор загрузки и директива v-loading.

## Props

### visible

- Type: `Boolean`
- Default: `false`
- Показать overlay

### text

- Type: `String`
- Default: `''`
- Текст под спиннером

## Пример

```vue
<template>
  <div v-loading="isLoading">Content</div>
</template>

<script setup lang="ts">
import { QLoading } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QLoading`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
