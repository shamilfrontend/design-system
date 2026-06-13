# QCalendar

Month grid календарь.

## Props

### modelValue

- Type: `Date`
- Default: `new Date()`
- v-model месяца

### events

- Type: `Array`
- Default: `[]`
- { date, title, type? }

## Пример

```vue
<template>
  <q-calendar v-model="month" :events="events" />
</template>

<script setup lang="ts">
import { QCalendar } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QCalendar`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
