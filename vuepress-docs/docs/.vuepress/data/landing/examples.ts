import { landingAssets } from './assets';
import type { LandingExamplesSection } from './types';

export const examples: LandingExamplesSection = {
  title: 'Примеры',
  subtitle: 'Компоненты Qui Max в реальных сценариях интерфейса.',
  items: [
    { title: 'Кнопки', image: landingAssets.buttons, width: 640, height: 400 },
    { title: 'Инпуты', image: landingAssets.inputs, width: 640, height: 400 },
    { title: 'Таблицы', image: landingAssets.tables, width: 640, height: 400 },
    { title: 'Иконки', image: landingAssets.icons, width: 640, height: 400 },
    { title: 'Другое', image: landingAssets.other, width: 640, height: 400 }
  ]
};
