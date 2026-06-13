# QTransfer

Двухпанельный transfer списков.

## Props

### modelValue

- Type: `Array`
- Default: `[]`
- Выбранные keys

### data

- Type: `Array`
- Default: `[]`
- { key, label, disabled? }

### titles

- Type: `Array`
- Default: `locale`
- Заголовки панелей

## Пример

```vue
<template>
  <q-transfer v-model="keys" :data="items" />
</template>

<script setup lang="ts">
import { QTransfer } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTransfer`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
