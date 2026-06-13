# QMentions

Textarea с @ mentions.

## Props

### modelValue

- Type: `String`
- Default: `''`
- v-model

### options

- Type: `Array`
- Default: `[]`
- { value, label }

### prefix

- Type: `String`
- Default: `'@'`
- Trigger символ

## Пример

```vue
<template>
  <q-mentions v-model="text" :options="users" />
</template>

<script setup lang="ts">
import { QMentions } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QMentions`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
