# QTreeSelect

Select с деревом.

## Props

### modelValue

- Type: `Any`
- Default: `null`
- v-model

### data

- Type: `Array`
- Default: `[]`
- Дерево узлов

## Пример

```vue
<template>
  <q-tree-select v-model="val" :data="tree" />
</template>

<script setup lang="ts">
import { QTreeSelect } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTreeSelect`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
