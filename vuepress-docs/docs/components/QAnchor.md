# QAnchor

Scroll-spy оглавление.

## Props

### items

- Type: `Array`
- Default: `[]`
- { key, href, title }

### offset

- Type: `Number`
- Default: `0`
- Offset scroll

### container

- Type: `String`
- Default: `null`
- Scroll container

## Пример

```vue
<template>
  <q-anchor :items="[{key:'1',href:'#s1',title:'Section 1'}]" />
</template>

<script setup lang="ts">
import { QAnchor } from '@shamilfrontend/design-system';
</script>
```

## Storybook

Интерактивные примеры: `Components/QAnchor`.

## Связанные компоненты

См. [QButton](/components/QButton.html).
