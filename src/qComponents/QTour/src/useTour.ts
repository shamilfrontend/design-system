import { ref } from 'vue';
import type { QTourStep } from './types';

export function useTour(steps: QTourStep[] = []) {
  const isOpen = ref(false);
  const current = ref(0);
  function start(): void { current.value = 0; isOpen.value = true; }
  function next(): void {
    if (current.value < steps.length - 1) current.value += 1;
    else isOpen.value = false;
  }
  function prev(): void { if (current.value > 0) current.value -= 1; }
  function finish(): void { isOpen.value = false; }
  return { isOpen, current, steps, start, next, prev, finish };
}
