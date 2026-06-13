# QCarousel

Карусель слайдов.

## Props

### autoplay

- Type: `Boolean`
- Default: `false`
- Автопрокрутка

### interval

- Type: `Number`
- Default: `3000`
- Интервал ms

### height

- Type: `String | Number`
- Default: `300`
- Высота

## Пример

```vue
<template>
  <q-carousel autoplay :height="200">
  <q-carousel-item>Slide 1</q-carousel-item>
</q-carousel>
</template>

<script setup lang="ts">
import { QCarousel } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QCarousel`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
