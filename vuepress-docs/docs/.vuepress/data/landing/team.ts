import type { LandingTeamSection } from './types';

export const team: LandingTeamSection = {
  title: 'Команда',
  subtitle: 'Design System развивается командой ShamilFrontend.',
  items: [
    {
      name: 'Tim Bochkarev',
      role: 'Maintainer',
      quote:
        'Мы собрали компоненты, которые сами используем каждый день в продуктах.',
      initials: 'TB'
    },
    {
      name: 'Viktor Zheleztsov',
      role: 'Maintainer',
      quote:
        'Открытый исходный код — способ получить обратную связь и улучшать библиотеку вместе с сообществом.',
      initials: 'VZ'
    }
  ]
};
