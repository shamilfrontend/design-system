# QAutoComplete

Автодополнение в input.

## Props

### modelValue

- Type: `String`
- Default: `''`
- v-model

### options

- Type: `Array`
- Default: `[]`
- Строки или объекты

## Пример

```vue
<template>
  <q-auto-complete v-model="q" :options="fruits" />
</template>

<script setup lang="ts">
import { QAutoComplete } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QAutoComplete`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
