import { QTourStep } from './types';
import { Ref } from 'vue';
export declare function useTour(steps?: QTourStep[]): {
  isOpen: Ref<boolean, boolean>;
  current: Ref<number, number>;
  steps: QTourStep[];
  start: () => void;
  next: () => void;
  prev: () => void;
  finish: () => void;
};
