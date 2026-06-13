# QProgress

Линейный и круговой прогресс.

## Props

### percentage

- Type: `Number`
- Default: `0`
- Процент 0–100

### type

- Type: `String`
- Default: `'line'`
- line | circle

### status

- Type: `String`
- Default: `null`
- success | exception | warning

## Пример

```vue
<template>
  <q-progress :percentage="65" />
</template>

<script setup lang="ts">
import { QProgress } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QProgress`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
