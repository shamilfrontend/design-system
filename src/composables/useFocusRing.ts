import { ref } from "vue";

export function useFocusRing() {
  const isFocused = ref(false);

  function onFocus(): void {
    isFocused.value = true;
  }

  function onBlur(): void {
    isFocused.value = false;
  }

  return {
    isFocused,
    onFocus,
    onBlur,
  };
}
