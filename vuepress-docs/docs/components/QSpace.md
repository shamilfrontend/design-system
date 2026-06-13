# QSpace

Flex gap между элементами.

## Props

### direction

- Type: `String`
- Default: `'horizontal'`
- horizontal | vertical

### size

- Type: `String | Number`
- Default: `'medium'`
- small | medium | large | px

## Пример

```vue
<template>
  <q-space><q-button>A</q-button><q-button>B</q-button></q-space>
</template>

<script setup lang="ts">
import { QSpace } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QSpace`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
