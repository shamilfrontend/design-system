# QImage

Изображение с preview.

## Props

### src

- Type: `String`
- Default: `''`
- URL

### width

- Type: `Number`
- Default: `null`
- Ширина

### preview

- Type: `Boolean`
- Default: `false`
- Модальный preview

## Пример

```vue
<template>
  <q-image src="/photo.jpg" :width="200" preview />
</template>

<script setup lang="ts">
import { QImage } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QImage`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
