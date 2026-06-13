# QResult

Страница результата операции.

## Props

### status

- Type: `String`
- Default: `'info'`
- success | error | warning | info | 404 | 403 | 500

### title

- Type: `String`
- Default: `null`
- Заголовок

### subtitle

- Type: `String`
- Default: `null`
- Подзаголовок

## Пример

```vue
<template>
  <q-result status="success" title="Done" />
</template>

<script setup lang="ts">
import { QResult } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QResult`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
