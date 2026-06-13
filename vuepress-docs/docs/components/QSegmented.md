# QSegmented

Сегментированный переключатель.

## Props

### modelValue

- Type: `String | Number`
- Default: `null`
- v-model

### options

- Type: `Array`
- Default: `[]`
- { label, value, icon? }

## Пример

```vue
<template>
  <q-segmented v-model="view" :options="[{label:'List',value:'list'},{label:'Grid',value:'grid'}]" />
</template>

<script setup lang="ts">
import { QSegmented } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QSegmented`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
