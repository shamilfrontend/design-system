# QTimeline

Временная шкала.

## Props

### items

- Type: `Array`
- Default: `[]`
- { timestamp, title, type? }

## Пример

```vue
<template>
  <q-timeline :items="events" />
</template>

<script setup lang="ts">
import { QTimeline } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTimeline`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
