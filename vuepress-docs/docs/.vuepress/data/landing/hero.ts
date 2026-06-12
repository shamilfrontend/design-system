import type { LandingHeroSection } from './types';

export const hero: LandingHeroSection = {
  title: 'Дизайн-система Qui Max',
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
      link: 'https://qui-max.netlify.app/',
      type: 'secondary'
    }
  ]
};
