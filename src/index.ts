import type { App } from "vue";
import "./styles/index.scss";

export * from "./components";
export * from "./tokens";
export * from "./composables/useControlled";
export * from "./composables/useFocusRing";
export * from "./composables/useId";

import * as components from "./components";

export const DesignSystemPlugin = {
  install(app: App): void {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
