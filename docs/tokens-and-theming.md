# Tokens and Theming

The design system is powered by CSS variables.

## Theme switch

```ts
import { setTheme } from "@shamil/design-system";

setTheme("dark");
```

## Core tokens

- Colors: `--ds-color-*`
- Spacing: `--ds-spacing-*`
- Radius: `--ds-radius-*`
- Typography: `--ds-font-*`

## Custom override

```css
:root {
  --ds-color-primary: #7c3aed;
}
```
