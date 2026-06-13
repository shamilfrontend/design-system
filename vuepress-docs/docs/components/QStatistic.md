# QStatistic

Статистическое значение.

## Props

### title

- Type: `String`
- Default: `''`
- Подпись

### value

- Type: `String | Number`
- Default: `''`
- Значение

### prefix

- Type: `String`
- Default: `''`
- Префикс

### suffix

- Type: `String`
- Default: `''`
- Суффикс

## Пример

```vue
<template>
  <q-statistic title="Users" value="1,024" />
</template>

<script setup lang="ts">
import { QStatistic } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QStatistic`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
