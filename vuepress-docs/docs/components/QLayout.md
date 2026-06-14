# QLayout

Layout-обёртка: QContainer, QLayout, QHeader, QSidebar, QFooter.

## Props

### hasSider

- Type: `Boolean`
- Default: `false`
- Есть боковая панель

## Пример

```vue
<template>
  <q-layout>
  <q-header>Header</q-header>
  <q-sidebar>Menu</q-sidebar>
  <main>Content</main>
  <q-footer>Footer</q-footer>
</q-layout>
</template>

<script setup lang="ts">
import { QLayout } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QLayout`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
