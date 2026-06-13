# QDescriptions

Таблица описаний key-value.

## Props

### title

- Type: `String`
- Default: `null`
- Заголовок

### bordered

- Type: `Boolean`
- Default: `false`
- Рамка

### column

- Type: `Number`
- Default: `3`
- Колонки

## Пример

```vue
<template>
  <q-descriptions title="User" bordered><q-descriptions-item label="Name">Alex</q-descriptions-item></q-descriptions>
</template>

<script setup lang="ts">
import { QDescriptions } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QDescriptions`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
