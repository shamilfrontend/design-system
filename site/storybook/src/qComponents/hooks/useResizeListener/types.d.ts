import { Ref } from 'vue';
import { Nullable } from '../../../../types/helpers';
export interface UseResizeListenerResult {
  observedEntry: Ref<Nullable<ResizeObserverEntry>>;
  isTracking: Ref<boolean>;
  start: () => void;
  stop: () => void;
}
