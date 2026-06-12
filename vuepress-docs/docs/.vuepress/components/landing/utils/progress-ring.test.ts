import { describe, expect, it } from 'vitest';
import {
  getStrokeOffset,
  PROGRESS_RING_CIRCUMFERENCE
} from './progress-ring';

describe('getStrokeOffset', () => {
  it('returns full circumference at 0%', () => {
    expect(getStrokeOffset(0)).toBe(PROGRESS_RING_CIRCUMFERENCE);
  });

  it('returns 0 at 100%', () => {
    expect(getStrokeOffset(100)).toBe(0);
  });

  it('returns half offset at 50%', () => {
    expect(getStrokeOffset(50)).toBeCloseTo(PROGRESS_RING_CIRCUMFERENCE / 2);
  });
});
