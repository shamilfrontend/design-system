export function resolveIconClass(name: string): string {
  const trimmed = name.trim();

  if (trimmed.startsWith('q-icon-')) {
    return trimmed;
  }

  return `q-icon-${trimmed}`;
}
