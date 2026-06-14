import { createApp, type App, type Directive, type Plugin } from 'vue';

import { withInstall } from '../helpers';

import Loading from './src/QLoading.vue';
import type { QLoadingDirectiveBinding } from './src/types';

const LOADING_INSTANCE_KEY = '__qLoadingInstance__';

interface LoadingElement extends HTMLElement {
  [LOADING_INSTANCE_KEY]?: {
    overlay: HTMLElement;
    app: App;
  };
}

function createLoadingOverlay(
  el: LoadingElement,
  fullscreen: boolean
): HTMLElement {
  const overlay = document.createElement('div');
  overlay.className = fullscreen
    ? 'q-loading-overlay q-loading-overlay_fullscreen'
    : 'q-loading-overlay';

  if (!fullscreen) {
    el.classList.add('q-loading-parent');
  } else {
    document.body.appendChild(overlay);
  }

  if (!fullscreen) {
    el.appendChild(overlay);
  }

  return overlay;
}

function mountLoading(overlay: HTMLElement): App {
  const app = createApp(Loading, { size: 'medium' });
  app.mount(overlay);

  return app;
}

function showLoading(el: LoadingElement, fullscreen: boolean): void {
  if (el[LOADING_INSTANCE_KEY]) return;

  const overlay = createLoadingOverlay(el, fullscreen);
  const app = mountLoading(overlay);

  el[LOADING_INSTANCE_KEY] = { overlay, app };
}

function hideLoading(el: LoadingElement, fullscreen: boolean): void {
  const instance = el[LOADING_INSTANCE_KEY];

  if (!instance) return;

  instance.app.unmount();

  if (fullscreen) {
    instance.overlay.remove();
  } else {
    instance.overlay.remove();
    el.classList.remove('q-loading-parent');
  }

  delete el[LOADING_INSTANCE_KEY];
}

const loadingDirective: Directive<LoadingElement, boolean> = {
  mounted(el, binding) {
    if (binding.value) {
      showLoading(el, Boolean(binding.modifiers.fullscreen));
    }
  },
  updated(el, binding) {
    const fullscreen = Boolean(binding.modifiers.fullscreen);

    if (binding.value && !binding.oldValue) {
      showLoading(el, fullscreen);
    } else if (!binding.value && binding.oldValue) {
      hideLoading(el, fullscreen);
    }
  },
  unmounted(el, binding) {
    if (binding.value) {
      hideLoading(el, Boolean(binding.modifiers.fullscreen));
    }
  }
};

export const QLoading = withInstall(Loading);

const QLoadingPlugin: Plugin = {
  install(app: App): void {
    app.component(Loading.name ?? 'QLoading', Loading);
    app.directive('loading', loadingDirective);
  }
};

export { QLoadingPlugin, loadingDirective };
export type {
  QLoadingProps,
  QLoadingPropSize,
  QLoadingPropText,
  QLoadingDirectiveBinding
} from './src/types';
