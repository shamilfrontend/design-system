# QSteps

Пошаговый процесс.

## Props

### active

- Type: `Number`
- Default: `0`
- v-model:active текущий шаг

### steps

- Type: `Array`
- Default: `[]`
- Массив { title, description? }

## Пример

```vue
<template>
  <q-steps v-model:active="step" :steps="steps" />
</template>

<script setup lang="ts">
import { QSteps } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QSteps`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
