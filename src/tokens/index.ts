export interface DesignTokens {
  color: {
    primary: string;
    primaryContrast: string;
    surface: string;
    text: string;
    border: string;
  };
  spacing: Record<"1" | "2" | "3" | "4" | "5" | "6", string>;
  radius: Record<"sm" | "md" | "lg", string>;
}

export const tokens: DesignTokens = {
  color: {
    primary: "var(--ds-color-primary)",
    primaryContrast: "var(--ds-color-primary-contrast)",
    surface: "var(--ds-color-surface)",
    text: "var(--ds-color-text)",
    border: "var(--ds-color-border)",
  },
  spacing: {
    "1": "var(--ds-spacing-1)",
    "2": "var(--ds-spacing-2)",
    "3": "var(--ds-spacing-3)",
    "4": "var(--ds-spacing-4)",
    "5": "var(--ds-spacing-5)",
    "6": "var(--ds-spacing-6)",
  },
  radius: {
    sm: "var(--ds-radius-sm)",
    md: "var(--ds-radius-md)",
    lg: "var(--ds-radius-lg)",
  },
};

export type ThemeName = "light" | "dark";

export function setTheme(theme: ThemeName): void {
  document.documentElement.setAttribute("data-theme", theme);
}
