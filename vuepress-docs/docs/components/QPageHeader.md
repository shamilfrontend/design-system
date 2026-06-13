# QPageHeader

Заголовок страницы с back.

## Props

### title

- Type: `String`
- Default: `''`
- Заголовок

### subtitle

- Type: `String`
- Default: `null`
- Подзаголовок

### back

- Type: `Boolean`
- Default: `false`
- Кнопка назад

## Пример

```vue
<template>
  <q-page-header title="Dashboard" back />
</template>

<script setup lang="ts">
import { QPageHeader } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QPageHeader`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
