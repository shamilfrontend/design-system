import type { LandingAnnouncementsSection } from './types';

export const announcements: LandingAnnouncementsSection = {
  title: 'Анонсы',
  subtitle: 'Последние обновления и планы развития.',
  items: [
    {
      title: 'Vuexy-стиль',
      description: 'Обновлённая flat-палитра и тени в духе Vuexy.',
      color: 'orange'
    },
    {
      title: 'Storybook 10',
      description: 'Песочница обновлена до Storybook 10 с Vite.',
      color: 'teal'
    },
    {
      title: 'Документация',
      description: 'Новый landing и расширение гайдов — следите за обновлениями.',
      color: 'purple'
    }
  ]
};
