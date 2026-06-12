import type { LandingValuesSection } from './types';

export const values: LandingValuesSection = {
  title: 'Ценности',
  subtitle:
    'Единый набор правил и компонентов, который ускоряет разработку и сохраняет консистентность интерфейсов.',
  items: [
    {
      icon: '🔩',
      title: '30+ компонентов',
      description:
        'Готовые UI-блоки: формы, таблицы, навигация, оверлеи и многое другое — с единым API и стилями.'
    },
    {
      icon: '🔥',
      title: 'Composition API',
      description:
        'Современный подход Vue 3: переиспользуемая логика, читаемый код и полная поддержка TypeScript.'
    },
    {
      icon: '🔑',
      title: 'TypeScript',
      description:
        'Типы из коробки для всех компонентов и пропсов — меньше ошибок на этапе разработки.'
    }
  ]
};
