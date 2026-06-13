# QTree

Древовидный список.

## Props

### data

- Type: `Array`
- Default: `[]`
- Узлы дерева

### defaultExpandAll

- Type: `Boolean`
- Default: `false`
- Раскрыть все узлы

## Пример

```vue
<template>
  <q-tree :data="treeData" default-expand-all />
</template>

<script setup lang="ts">
import { QTree } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTree`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
