import type { LandingReviewLayout } from '../../../data/landing/types';

const DEFAULT_LAYOUTS: LandingReviewLayout[] = [
  { top: '5%', left: '10%', rotate: -3 },
  { top: '15%', left: '55%', rotate: 2 },
  { top: '45%', left: '5%', rotate: 4 },
  { top: '50%', left: '48%', rotate: -2 },
  { top: '75%', left: '25%', rotate: -1 }
];

/** Позиции облака отзывов: из данных или по шаблону с циклическим смещением. */
export function resolveReviewLayout(
  index: number,
  custom?: LandingReviewLayout
): LandingReviewLayout {
  if (custom) {
    return custom;
  }

  const base = DEFAULT_LAYOUTS[index % DEFAULT_LAYOUTS.length];
  const row = Math.floor(index / DEFAULT_LAYOUTS.length);

  if (row === 0) {
    return base;
  }

  const offset = row * 4;

  return {
    top: `calc(${base.top} + ${offset}px)`,
    left: `calc(${base.left} + ${offset}px)`,
    rotate: base.rotate + row
  };
}
