# QDrawer

Декларативный drawer QDrawerModal.

## Props

### modelValue

- Type: `Boolean`
- Default: `false`
- v-model

### title

- Type: `String`
- Default: `null`
- Заголовок

### position

- Type: `String`
- Default: `'right'`
- left | right

### width

- Type: `String | Number`
- Default: `'400px'`
- Ширина

## Пример

```vue
<template>
  <q-drawer-modal v-model="open" title="Filters">Content</q-drawer-modal>
</template>

<script setup lang="ts">
import { QDrawer } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QDrawer`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
