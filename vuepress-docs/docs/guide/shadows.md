# Тени

Elevation-токены определены в `src/vars.scss`.

| Токен | Использование |
|-------|---------------|
| `--box-shadow-primary` | Карточки, модальные окна |
| `--box-shadow-secondary` | Лёгкие элементы |
| `--box-shadow-hover` | Hover-состояния |
| `--box-shadow-pressed` | Active-состояния |
| `--box-shadow-focus` | Focus ring |
| `--box-shadow-dropdown` | Dropdown, popover, menu |
| `--box-shadow-primary-button` | Primary-кнопки |

Пример:

```css
.my-card {
  box-shadow: var(--box-shadow-primary);
}
```
