const RING_RADIUS = 54;

export const PROGRESS_RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

export function getStrokeOffset(percent: number): number {
  return PROGRESS_RING_CIRCUMFERENCE - (percent / 100) * PROGRESS_RING_CIRCUMFERENCE;
}
