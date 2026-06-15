# QButton

Кнопка для частых действий в интерфейсе. API выровнен с [Element Plus Button](https://element-plus.org/en-US/component/button): стиль через `type`, `plain`, `text`, `link`, `round`, `circle`, а также поддержка `tag` и кастомного `color`.

## Basic usage {#basic-usage}

Используйте `type`, `plain` и `circle`, чтобы задать внешний вид кнопки.

<iframe height="280" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/basic.html"></iframe>

```vue
<template>
  <div class="button-example">
    <div class="button-row">
      <q-button type="default">Default</q-button>
      <q-button type="primary">Primary</q-button>
      <q-button type="success">Success</q-button>
      <q-button type="info">Info</q-button>
      <q-button type="warning">Warning</q-button>
      <q-button type="danger">Danger</q-button>
    </div>

    <div class="button-row">
      <q-button
        type="default"
        plain
        >Plain</q-button
      >
      <q-button
        type="primary"
        plain
        >Primary</q-button
      >
      <q-button
        type="success"
        plain
        >Success</q-button
      >
      <q-button
        type="info"
        plain
        >Info</q-button
      >
      <q-button
        type="warning"
        plain
        >Warning</q-button
      >
      <q-button
        type="danger"
        plain
        >Danger</q-button
      >
    </div>

    <div class="button-row">
      <q-button
        type="default"
        icon="q-icon-search"
        circle
      />
      <q-button
        type="primary"
        icon="q-icon-cog-stroke"
        circle
      />
      <q-button
        type="success"
        icon="q-icon-check"
        circle
      />
      <q-button
        type="info"
        icon="q-icon-comment"
        circle
      />
      <q-button
        type="warning"
        icon="q-icon-bell"
        circle
      />
      <q-button
        type="danger"
        icon="q-icon-trash-bin"
        circle
      />
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}
</style>
```

## Disabled Button {#disabled-button}

Атрибут `disabled` определяет, доступна ли кнопка для взаимодействия. Принимает `Boolean`.

<iframe height="140" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/disabled.html"></iframe>

```vue
<template>
  <div class="button-example">
    <div class="button-row">
      <q-button
        type="default"
        disabled
        >Default</q-button
      >
      <q-button
        type="primary"
        disabled
        >Primary</q-button
      >
      <q-button
        type="success"
        disabled
        >Success</q-button
      >
      <q-button
        type="info"
        disabled
        >Info</q-button
      >
      <q-button
        type="warning"
        disabled
        >Warning</q-button
      >
      <q-button
        type="danger"
        disabled
        >Danger</q-button
      >
    </div>

    <div class="button-row">
      <q-button
        type="default"
        plain
        disabled
        >Plain</q-button
      >
      <q-button
        type="primary"
        plain
        disabled
        >Primary</q-button
      >
      <q-button
        type="success"
        plain
        disabled
        >Success</q-button
      >
      <q-button
        type="info"
        plain
        disabled
        >Info</q-button
      >
      <q-button
        type="warning"
        plain
        disabled
        >Warning</q-button
      >
      <q-button
        type="danger"
        plain
        disabled
        >Danger</q-button
      >
    </div>
  </div>
</template>
```

## Link Button {#link-button}

Кнопка-ссылка. Атрибут `link` комбинируется с любым `type`.

<iframe height="160" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/link.html"></iframe>

```vue
<template>
  <p>Basic link button</p>
  <div class="button-row">
    <q-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
    >
      {{ button.text }}
    </q-button>
  </div>

  <p>Disabled link button</p>
  <div class="button-row">
    <q-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      link
      disabled
    >
      {{ button.text }}
    </q-button>
  </div>
</template>

<script setup lang="ts">
import type { QButtonColorType } from '@shamilfrontend/design-system';

const buttons: Array<{ type: QButtonColorType; text: string }> = [
  { type: 'default', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' }
];
</script>
```

## Text Button {#text-button}

Текстовая кнопка без фона и обводки. Атрибут `text` комбинируется с любым `type`.

<iframe height="160" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/text.html"></iframe>

```vue
<template>
  <p>Basic text button</p>
  <div class="button-row">
    <q-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
    >
      {{ button.text }}
    </q-button>
  </div>

  <p>Disabled text button</p>
  <div class="button-row">
    <q-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
    >
      {{ button.text }}
    </q-button>
  </div>
</template>

<script setup lang="ts">
import type { QButtonColorType } from '@shamilfrontend/design-system';

const buttons: Array<{ type: QButtonColorType; text: string }> = [
  { type: 'default', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' }
];
</script>
```

## Icon Button {#icon-button}

Иконки добавляют смысл кнопке. Можно использовать только иконку или комбинировать с текстом.

Передайте класс иконки `q-icon-*` в prop `icon`. Полный список — в [репозитории](https://github.com/shamilfrontend/design-system).

<iframe height="80" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/icon.html"></iframe>

```vue
<template>
  <q-button
    type="primary"
    icon="q-icon-cog-stroke"
  />
  <q-button
    type="primary"
    icon="q-icon-chain"
  />
  <q-button
    type="primary"
    icon="q-icon-trash-bin"
  />
  <q-button
    type="primary"
    icon="q-icon-search"
    >Search</q-button
  >
  <q-button
    type="primary"
    icon="q-icon-cloud-upload"
    >Upload</q-button
  >
</template>
```

## Loading Button {#loading-button}

Установите `loading` в `true`, чтобы показать состояние загрузки.

<iframe height="80" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/loading.html"></iframe>

```vue
<template>
  <q-button
    type="primary"
    loading
    >Loading</q-button
  >
  <q-button
    type="primary"
    plain
    loading
    >Loading</q-button
  >
  <q-button
    type="primary"
    icon="q-icon-bell"
    loading
  />
</template>
```

## Sizes {#sizes}

Помимо размера по умолчанию, доступны `large` и `small`.

<iframe height="140" style="width: 100%;" scrolling="no" frameborder="no" src="/QButton/size.html"></iframe>

```vue
<template>
  <div class="button-example">
    <div class="button-row">
      <q-button
        type="primary"
        size="large"
        >Large</q-button
      >
      <q-button type="primary">Default</q-button>
      <q-button
        type="primary"
        size="small"
        >Small</q-button
      >
      <q-button
        type="primary"
        size="large"
        icon="q-icon-search"
        >Search</q-button
      >
      <q-button
        type="primary"
        icon="q-icon-search"
        >Search</q-button
      >
      <q-button
        type="primary"
        size="small"
        icon="q-icon-search"
        >Search</q-button
      >
    </div>

    <div class="button-row">
      <q-button
        type="primary"
        icon="q-icon-search"
        size="large"
        circle
      />
      <q-button
        type="primary"
        icon="q-icon-search"
        circle
      />
      <q-button
        type="primary"
        icon="q-icon-search"
        size="small"
        circle
      />
    </div>
  </div>
</template>
```

## Round Button {#round-button}

Закруглённая кнопка с `round`.

```vue
<template>
  <q-button
    type="primary"
    round
    >Round</q-button
  >
  <q-button
    type="success"
    plain
    round
    >Round Plain</q-button
  >
</template>
```

## Button Tag {#button-tag}

Атрибут `tag` позволяет рендерить кнопку как другой элемент (например, ссылку).

```vue
<template>
  <q-button
    tag="a"
    href="https://element-plus.org"
    type="primary"
  >
    Open docs
  </q-button>
</template>
```

## Custom Color {#custom-color}

Для кастомной палитры используйте `color`. Для контрастного текста можно включить `dark`. Для text-кнопок фон при hover можно включить через `bg`.

```vue
<template>
  <q-button
    color="#626aef"
    dark
    >Custom</q-button
  >
  <q-button
    color="#626aef"
    plain
    >Custom Plain</q-button
  >
  <q-button
    text
    bg
    color="#626aef"
    >Text + BG</q-button
  >
</template>
```

## Button API {#button-api}

### Button Attributes {#button-attributes}

| Name            | Description                        | Type                                                                     | Default     |
| --------------- | ---------------------------------- | ------------------------------------------------------------------------ | ----------- |
| size            | размер кнопки                      | `'large' \| 'default' \| 'small'`                                        | `'default'` |
| type            | тип (цвет) кнопки                  | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'primary'` |
| plain           | plain-кнопка                       | `boolean`                                                                | `false`     |
| text            | text-кнопка                        | `boolean`                                                                | `false`     |
| link            | link-кнопка                        | `boolean`                                                                | `false`     |
| round           | закруглённая форма                 | `boolean`                                                                | `false`     |
| circle          | круглая форма                      | `boolean`                                                                | `false`     |
| loading         | состояние загрузки                 | `boolean`                                                                | `false`     |
| disabled        | отключить кнопку                   | `boolean`                                                                | `false`     |
| icon            | класс иконки `q-icon-*`            | `string`                                                                 | —           |
| bg              | hover-фон для text-кнопки          | `boolean`                                                                | `false`     |
| tag             | root html tag                      | `string`                                                                 | `'button'`  |
| color           | кастомный цвет кнопки              | `string`                                                                 | —           |
| dark            | контрастный текст для custom color | `boolean`                                                                | `false`     |
| autoInsertSpace | совместимость с API Element Plus   | `boolean`                                                                | `false`     |
| fullWidth       | ширина 100%                        | `boolean`                                                                | `false`     |
| autofocus       | native autofocus                   | `boolean`                                                                | `false`     |
| nativeType      | native button type                 | `'button' \| 'submit' \| 'reset'`                                        | `'button'`  |
| ariaLabel       | accessible label для icon-only     | `string`                                                                 | —           |

### Button Slots {#button-slots}

| Name    | Description       |
| ------- | ----------------- |
| default | содержимое кнопки |
