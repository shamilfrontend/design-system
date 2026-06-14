# QTimePicker

Выбор времени.

## Props

### modelValue

- Type: `String`
- Default: `null`
- Значение HH:mm

### format

- Type: `String`
- Default: `'HH:mm'`
- Формат отображения

### step

- Type: `Number`
- Default: `1`
- Шаг минут

## Пример

```vue
<template>
  <q-time-picker v-model="time" />
</template>

<script setup lang="ts">
import { QTimePicker } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTimePicker`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
