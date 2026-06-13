# QRate

Рейтинг звёздами.

## Props

### modelValue

- Type: `Number`
- Default: `0`
- v-model

### count

- Type: `Number`
- Default: `5`
- Количество

### showText

- Type: `Boolean`
- Default: `false`
- Текст оценки

## Пример

```vue
<template>
  <q-rate v-model="score" show-text />
</template>

<script setup lang="ts">
import { QRate } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QRate`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
