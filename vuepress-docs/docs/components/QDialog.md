# QDialog

Декларативный модальный диалог QDialogModal.

## Props

### modelValue

- Type: `Boolean`
- Default: `false`
- v-model видимости

### title

- Type: `String`
- Default: `null`
- Заголовок

### width

- Type: `String | Number`
- Default: `'480px'`
- Ширина

## Пример

```vue
<template>
  <q-dialog-modal v-model="open" title="Confirm">
  Content
  <template #footer><q-button @click="open=false">OK</q-button></template>
</q-dialog-modal>
</template>

<script setup lang="ts">
import { QDialog } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QDialog`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
