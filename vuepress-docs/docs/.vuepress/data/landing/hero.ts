import type { LandingHeroSection } from './types';

export const hero: LandingHeroSection = {
  title: 'Design System',
  subtitle:
    'Vue 3 библиотека компонентов с TypeScript, Composition API и единым визуальным языком для веб-продуктов.',
  actions: [
    {
      text: 'Начать работу',
      link: '/guide/getting-started',
      type: 'primary'
    },
    {
      text: 'Storybook',
      link: 'https://github.com/shamilfrontend/design-system',
      type: 'secondary'
    }
  ]
};
