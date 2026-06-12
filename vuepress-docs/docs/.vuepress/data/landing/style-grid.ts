import type { LandingStyleGridSection } from './types';

export const styleGrid: LandingStyleGridSection = {
  title: 'Стиль и основы',
  subtitle: 'Фундамент дизайн-системы: токены, сетка, типографика и визуальные паттерны.',
  items: [
    {
      title: 'Цвета',
      description: 'Палитра primary, semantic и surface-токены',
      icon: '🎨',
      link: 'https://qui-max.netlify.app/?path=/story/core-colors--page',
      external: true
    },
    {
      title: 'Типографика',
      description: 'Шрифт Urbanist и шкала размеров',
      icon: 'Aa',
      link: '/guide/getting-started'
    },
    {
      title: 'Сетка',
      description: '12-колоночный flex-layout QRow / QCol',
      icon: '▦',
      link: '/components/Layout'
    },
    {
      title: 'Иконки',
      description: '100+ иконок в icon font',
      icon: '◈',
      link: 'https://qui-max.netlify.app/?path=/story/core-icons--page',
      external: true
    },
    {
      title: 'Тени',
      description: 'Elevation и box-shadow токены',
      icon: '◐',
      link: 'https://qui-max.netlify.app/',
      external: true
    },
    {
      title: 'Токены',
      description: 'CSS custom properties в vars.scss',
      icon: '⚙',
      link: '/guide/getting-started'
    },
    {
      title: 'Компоненты',
      description: 'Каталог UI-блоков с примерами',
      icon: '▣',
      link: '/components/QButton'
    },
    {
      title: 'Формы',
      description: 'Input, Select, Checkbox и валидация',
      icon: '☰',
      link: '/components/QForm'
    }
  ]
};
