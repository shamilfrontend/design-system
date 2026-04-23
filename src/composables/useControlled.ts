import { computed, ref } from "vue";

interface UseControlledOptions<T> {
  modelValue?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

export function useControlled<T>(options: UseControlledOptions<T>) {
  const inner = ref<T>(options.defaultValue);
  const isControlled = computed(() => options.modelValue !== undefined);

  const value = computed<T>({
    get() {
      return isControlled.value ? (options.modelValue as T) : inner.value;
    },
    set(nextValue: T) {
      if (!isControlled.value) {
        inner.value = nextValue;
      }
      options.onChange?.(nextValue);
    },
  });

  return { value, isControlled };
}
