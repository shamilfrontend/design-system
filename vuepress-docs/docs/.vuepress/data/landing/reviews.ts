import type { LandingReviewsSection } from './types';

export const reviews: LandingReviewsSection = {
  title: 'Отзывы',
  subtitle: 'Что говорят разработчики, которые используют Qui Max в проектах.',
  items: [
    {
      name: 'Алексей',
      role: 'Frontend-разработчик',
      quote: 'Единый набор компонентов сильно упростил сборку форм и таблиц.'
    },
    {
      name: 'Мария',
      role: 'UI-разработчик',
      quote: 'TypeScript-типы и Storybook экономят часы на онбординге.'
    },
    {
      name: 'Дмитрий',
      role: 'Tech Lead',
      quote: 'Консистентный UI без дублирования стилей в каждом проекте.'
    },
    {
      name: 'Елена',
      role: 'Product Designer',
      quote: 'Компоненты предсказуемы — дизайн и код говорят на одном языке.'
    },
    {
      name: 'Игорь',
      role: 'Fullstack',
      quote: 'Быстрый старт: подключил пакет и сразу получил рабочий UI.'
    }
  ]
};
