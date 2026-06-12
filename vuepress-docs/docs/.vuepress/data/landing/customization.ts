import { landingAssets } from './assets';
import type { LandingCustomizationSection } from './types';

export const customization: LandingCustomizationSection = {
  title: 'Гибкая кастомизация',
  subtitle:
    'Токены, темы и компоненты настраиваются под бренд — от цветов до поведения и состояний.',
  image: landingAssets.buttons,
  points: [
    'CSS-переменные для цветов, теней и радиусов',
    'Светлая и тёмная тема через data-theme',
    'Варианты кнопок, размеров и состояний компонентов'
  ]
};
