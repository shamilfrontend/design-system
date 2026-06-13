# QTour

Guided tour по шагам.

## Props

### modelValue

- Type: `Boolean`
- Default: `false`
- v-model

### steps

- Type: `Array`
- Default: `[]`
- { target, title, description? }

### current

- Type: `Number`
- Default: `0`
- v-model:current

## Пример

```vue
<template>
  <q-tour v-model="open" v-model:current="step" :steps="tourSteps" />
</template>

<script setup lang="ts">
import { QTour } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QTour`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
