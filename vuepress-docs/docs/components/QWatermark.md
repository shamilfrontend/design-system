# QWatermark

Watermark overlay.

## Props

### content

- Type: `String`
- Default: `'Watermark'`
- Текст

### gap

- Type: `Array`
- Default: `[100,100]`
- [x,y] gap

### rotate

- Type: `Number`
- Default: `-22`
- Угол °

## Пример

```vue
<template>
  <q-watermark content="Confidential"><div>Page</div></q-watermark>
</template>

<script setup lang="ts">
import { QWatermark } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QWatermark`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
