let counter = 0;

export function useId(prefix = "ds"): string {
  counter += 1;
  return `${prefix}-${counter}`;
}
