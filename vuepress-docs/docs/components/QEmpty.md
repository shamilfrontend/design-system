# QEmpty

Пустое состояние.

## Props

### description

- Type: `String`
- Default: `locale`
- Текст описания

### imageSize

- Type: `Number`
- Default: `120`
- Размер иллюстрации

## Пример

```vue
<template>
  <q-empty description="No items"><q-button size="small">Add</q-button></q-empty>
</template>

<script setup lang="ts">
import { QEmpty } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QEmpty`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
