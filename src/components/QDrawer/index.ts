import { getCurrentInstance, onUnmounted } from 'vue';

import { createDrawer } from './src';
import type { QDrawer, QDrawerHookOptions } from './src/types';

const useDrawer = (options?: QDrawerHookOptions): QDrawer => {
  const parentInstance = getCurrentInstance();

  const { drawer, app } = createDrawer({
    parentInstance,
    ...options
  });

  onUnmounted(() => {
    app.value?.unmount();
  });

  return drawer;
};

export { useDrawer };
export { QDrawerModal } from './src/QDrawerModal';
export type {
  QDrawerModalProps,
  QDrawerModalPropModelValue,
  QDrawerModalPropTitle,
  QDrawerModalPropWidth,
  QDrawerModalPropPosition,
  QDrawerModalPropTeleportTo,
  QDrawerModalPropBeforeClose
} from './src/QDrawerModal';
export type { QDrawerContainerProvider } from './src/QDrawerContainer';
export { QDrawerContent } from './src/QDrawerContent';
export type {
  QDrawerContentProps,
  QDrawerContentInstance
} from './src/QDrawerContent';
export { QDrawerAction } from './src/types';
export type {
  QDrawer,
  QDrawerOptionsPosition,
  QDrawerOptionsBeforeClose,
  QDrawerOptionsTeleportTo,
  QDrawerOptions
} from './src/types';
