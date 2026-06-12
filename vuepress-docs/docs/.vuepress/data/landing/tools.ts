import type { LandingToolsSection } from './types';

export const tools: LandingToolsSection = {
  title: 'Инструменты',
  subtitle: 'Всё необходимое для интеграции и экспериментов с компонентами.',
  items: [
    {
      name: 'npm',
      description: 'Установка через yarn или npm в Vue 3 проект',
      link: 'https://www.npmjs.com/package/@qvant/qui-max'
    },
    {
      name: 'Storybook',
      description: 'Песочница с живыми примерами и состояниями',
      link: 'https://qui-max.netlify.app/'
    },
    {
      name: 'GitHub',
      description: 'Исходный код, issues и contributing',
      link: 'https://github.com/Qvant-lab/qui-max'
    },
    {
      name: 'Figma',
      description: 'UI-kit в Figma',
      comingSoon: true
    }
  ]
};
