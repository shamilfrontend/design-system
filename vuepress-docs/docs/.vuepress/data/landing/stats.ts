import type { LandingStatsSection } from './types';

export const stats: LandingStatsSection = {
  title: 'Для кого',
  subtitle: 'Design System помогает командам быстрее выпускать качественные интерфейсы.',
  items: [
    { value: '30+', label: 'готовых компонентов', percent: 75 },
    { value: '100+', label: 'иконок в наборе', percent: 85 },
    { value: 'до 40%', label: 'ускорение разработки UI', percent: 40 },
    { value: 'Vue 3', label: 'современный стек', percent: 100 }
  ]
};
