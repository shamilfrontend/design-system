# QDropdown

Выпадающее меню с триггером через слот.

## Props

### trigger

- Type: `String`
- Default: `'click'`
- Способ открытия: click / hover

### disabled

- Type: `Boolean`
- Default: `false`
- Отключить dropdown

## Пример

```vue
<template>
  <q-dropdown>
  <q-button>Actions</q-button>
  <template #dropdown>
    <q-menu><q-menu-item>Edit</q-menu-item></q-menu>
  </template>
</q-dropdown>
</template>

<script setup lang="ts">
import { QDropdown } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QDropdown`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
