# Темизация

Design System поддерживает светлую и тёмную тему через CSS custom properties в [`vars.scss`](https://github.com/shamilfrontend/design-system/blob/main/src/vars.scss).

## Переключение темы

Установите атрибут `data-theme` на элемент `<html>`:

```html
<html data-theme="dark">
```

Доступные значения:

- `light` (по умолчанию, если атрибут не задан)
- `dark`

## Composable useTheme

Пример для приложения-потребителя:

```typescript
import { ref, watch } from 'vue';

type Theme = 'light' | 'dark';

const THEME_KEY = 'ds-theme';

export function useTheme() {
  const theme = ref<Theme>(
    (localStorage.getItem(THEME_KEY) as Theme) ?? 'light'
  );

  function applyTheme(value: Theme): void {
    document.documentElement.setAttribute('data-theme', value);
    localStorage.setItem(THEME_KEY, value);
  }

  function toggleTheme(): void {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  watch(theme, applyTheme, { immediate: true });

  return { theme, toggleTheme };
}
```

## Токены, зависящие от темы

В тёмной теме переопределяются:

- Surface colors (`--color-tertiary-white`, `--color-tertiary-gray-*`)
- Text colors (`--color-text-heading`, `--color-text-regular`, `--color-text-muted`)
- Shadows (`--box-shadow-primary`, `--box-shadow-dropdown`, …)

Подробнее: [Colors](/guide/colors.html), [Shadows](/guide/shadows.html), [Tokens](/guide/tokens.html).
